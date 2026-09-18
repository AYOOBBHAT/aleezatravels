"use server";

import { flattenError } from "zod";
import { getDestination } from "@/lib/destinations/source";
import { deliverEnquiryEmail } from "@/lib/enquiry/deliver";
import { enquiryIsRateLimited } from "@/lib/enquiry/rate-limit";
import { isDirectWhatsAppHref } from "@/lib/format";
import { buildWhatsAppHref } from "@/lib/enquiry/whatsapp";
import { enquiryValuesToMessage } from "@/lib/enquiry/message";
import { businessConfig } from "@/lib/site-config";
import {
  enquirySchema,
  type EnquiryActionState,
} from "@/lib/enquiry/schema";
import { getPackageBySlug } from "@/lib/packages/source";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitEnquiry(
  _previous: EnquiryActionState,
  formData: FormData,
): Promise<EnquiryActionState> {
  if (readString(formData, "company")) {
    return {
      status: "success",
      message: "Your enquiry is ready.",
      fieldErrors: {},
    };
  }

  if (await enquiryIsRateLimited()) {
    return {
      status: "error",
      message:
        "Too many enquiries were sent from this connection. Please wait a few minutes and try again.",
      fieldErrors: { form: ["Rate limited"] },
    };
  }

  const parsed = enquirySchema.safeParse({
    fullName: readString(formData, "fullName"),
    phone: readString(formData, "phone"),
    whatsapp: readString(formData, "whatsapp"),
    email: readString(formData, "email"),
    travelDate: readString(formData, "travelDate"),
    adults: readString(formData, "adults") || "1",
    children: readString(formData, "children") || "0",
    tripType: readString(formData, "tripType"),
    duration: readString(formData, "duration"),
    destinations: formData
      .getAll("destinations")
      .filter((value): value is string => typeof value === "string" && value.length > 0),
    hotelPreference: readString(formData, "hotelPreference"),
    budgetRange: readString(formData, "budgetRange"),
    message: readString(formData, "message"),
    packageSlug: readString(formData, "packageSlug"),
    packageName: readString(formData, "packageName"),
    destinationSlug: readString(formData, "destinationSlug"),
    destinationName: readString(formData, "destinationName"),
    source: readString(formData, "source"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: flattenError(parsed.error).fieldErrors,
    };
  }

  const values = parsed.data;
  const tourPackage = values.packageSlug
    ? await getPackageBySlug(values.packageSlug)
    : undefined;
  const contextDestination = values.destinationSlug
    ? await getDestination(values.destinationSlug)
    : undefined;

  const selectedDestinations = (
    await Promise.all(
      [
        ...new Set([
          ...values.destinations,
          contextDestination?.slug ?? "",
        ]),
      ]
        .filter(Boolean)
        .map((slug) => getDestination(slug)),
    )
  ).filter((destination) => destination !== undefined);

  const resolved = {
    ...values,
    whatsapp: values.whatsapp || values.phone,
    packageName: tourPackage?.title ?? "",
    packageSlug: tourPackage?.slug ?? "",
    destinationName: contextDestination?.name ?? "",
    destinationSlug: contextDestination?.slug ?? "",
  };

  const text = enquiryValuesToMessage(
    resolved,
    selectedDestinations.map((destination) => destination.name),
  );
  const whatsappHref = await buildWhatsAppHref(text);
  const hasWhatsApp = isDirectWhatsAppHref(whatsappHref);

  const emailDelivered = await deliverEnquiryEmail({
    subject: tourPackage
      ? `Kashmir enquiry: ${tourPackage.title}`
      : contextDestination
        ? `Kashmir enquiry: ${contextDestination.name}`
        : `Kashmir enquiry from ${resolved.fullName}`,
    text,
    replyTo: resolved.email || undefined,
  });

  return {
    status: "success",
    message: enquirySuccessMessage({
      emailDelivered,
      hasWhatsApp,
      businessName: businessConfig.businessName,
    }),
    fieldErrors: {},
    whatsappHref,
    emailDelivered,
  };
}

function enquirySuccessMessage({
  emailDelivered,
  hasWhatsApp,
  businessName,
}: {
  emailDelivered: boolean;
  hasWhatsApp: boolean;
  businessName: string;
}): string {
  if (emailDelivered && hasWhatsApp) {
    return "We have received your enquiry and will reply. You can also send the same details on WhatsApp.";
  }

  if (emailDelivered) {
    return "We have received your enquiry and will reply.";
  }

  if (hasWhatsApp) {
    return `Your enquiry is ready. Continue on WhatsApp so these details reach ${businessName} now.`;
  }

  return "Thank you. This form cannot deliver the enquiry until a phone, WhatsApp number, or email is published.";
}

