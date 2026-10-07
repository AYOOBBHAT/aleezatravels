"use server";

import { flattenError } from "zod";
import { getDestination } from "@/lib/destinations/source";
import { deliverEnquiryEmail } from "@/lib/enquiry/deliver";
import { enquiryIsRateLimited } from "@/lib/enquiry/rate-limit";
import { buildWhatsAppHref } from "@/lib/enquiry/whatsapp";
import { isDirectWhatsAppHref } from "@/lib/format";
import {
  buildCorporateWhatsAppMessage,
} from "@/lib/corporate/message";
import {
  corporateEnquirySchema,
  type CorporateEnquiryState,
} from "@/lib/corporate/schema";
import { businessConfig } from "@/lib/site-config";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitCorporateEnquiry(
  _previous: CorporateEnquiryState,
  formData: FormData,
): Promise<CorporateEnquiryState> {
  if (readString(formData, "website")) {
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

  const parsed = corporateEnquirySchema.safeParse({
    companyName: readString(formData, "companyName"),
    contactPerson: readString(formData, "contactPerson"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    employeeCount: readString(formData, "employeeCount") || "2",
    travelDate: readString(formData, "travelDate"),
    nights: readString(formData, "nights"),
    destinations: formData
      .getAll("destinations")
      .filter((value): value is string => typeof value === "string" && value.length > 0),
    hotelCategory: readString(formData, "hotelCategory"),
    transportation: readString(formData, "transportation"),
    budgetRange: readString(formData, "budgetRange"),
    message: readString(formData, "message"),
    source: readString(formData, "source") || "corporate-travel",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: flattenError(parsed.error).fieldErrors,
    };
  }

  const values = parsed.data;
  const selectedDestinations = (
    await Promise.all(values.destinations.map((slug) => getDestination(slug)))
  ).filter((destination) => destination !== undefined);

  const text = buildCorporateWhatsAppMessage(
    values,
    selectedDestinations.map((destination) => destination.name),
  );
  const whatsappHref = await buildWhatsAppHref(text);
  const hasWhatsApp = isDirectWhatsAppHref(whatsappHref);

  const emailDelivered = await deliverEnquiryEmail({
    subject: `Corporate Kashmir enquiry: ${values.companyName}`,
    text,
    replyTo: values.email,
  });

  return {
    status: "success",
    message: corporateSuccessMessage({
      emailDelivered,
      hasWhatsApp,
      businessName: businessConfig.businessName,
    }),
    fieldErrors: {},
    whatsappHref,
    emailDelivered,
  };
}

function corporateSuccessMessage({
  emailDelivered,
  hasWhatsApp,
  businessName,
}: {
  emailDelivered: boolean;
  hasWhatsApp: boolean;
  businessName: string;
}): string {
  if (emailDelivered && hasWhatsApp) {
    return "We have received your corporate enquiry and will reply with a proposed itinerary. You can also send the same details on WhatsApp.";
  }

  if (emailDelivered) {
    return "We have received your corporate enquiry and will reply with a proposed itinerary.";
  }

  if (hasWhatsApp) {
    return `Your enquiry is ready. Continue on WhatsApp so these details reach ${businessName} now.`;
  }

  return "Thank you. This form cannot deliver the enquiry until a phone, WhatsApp number, or email is published.";
}
