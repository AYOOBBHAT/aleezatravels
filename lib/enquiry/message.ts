import { businessConfig } from "@/lib/site-config";
import {
  budgetRangeOptions,
  durationOptions,
  hotelPreferenceOptions,
  optionLabel,
  tripTypeOptions,
} from "@/lib/enquiry/options";
import type { EnquiryValues } from "@/lib/enquiry/schema";

export type EnquiryMessageInput = Partial<{
  fullName: string;
  travelDate: string;
  adults: number;
  children: number;
  tripType: string;
  duration: string;
  destinations: string[];
  destinationNames: string[];
  destinationName: string;
  packageName: string;
  hotelPreference: string;
  budgetRange: string;
  message: string;
}>;

function travelersLine(adults?: number, children?: number): string {
  if (adults == null && children == null) {
    return "";
  }

  const adultCount = adults ?? 0;
  const childCount = children ?? 0;
  const adultLabel = `${adultCount} adult${adultCount === 1 ? "" : "s"}`;

  if (childCount <= 0) {
    return adultLabel;
  }

  return `${adultLabel}, ${childCount} child${childCount === 1 ? "" : "ren"}`;
}

function destinationsLine(input: EnquiryMessageInput): string {
  if (input.destinationNames && input.destinationNames.length > 0) {
    return input.destinationNames.join(", ");
  }

  if (input.destinationName) {
    return input.destinationName;
  }

  if (input.destinations && input.destinations.length > 0) {
    return input.destinations.join(", ");
  }

  return "";
}

function introLine(input: EnquiryMessageInput): string {
  if (input.packageName) {
    return `I would like to enquire about ${input.packageName}.`;
  }

  if (input.destinationName) {
    return `I would like to plan a trip to ${input.destinationName}.`;
  }

  return "I would like to enquire about a Kashmir trip.";
}

/**
 * Short prefilled WhatsApp CTAs. Use the detailed builder for form submissions.
 */
export function generalEnquiryMessage(): string {
  return `Hello ${businessConfig.businessName},\n\nI would like to enquire about a Kashmir trip.`;
}

export function packageEnquiryMessage(title: string): string {
  return `Hello ${businessConfig.businessName},\n\nI would like to enquire about ${title}.`;
}

export function destinationEnquiryMessage(name: string): string {
  return `Hello ${businessConfig.businessName},\n\nI would like to plan a trip to ${name}.`;
}

/**
 * Builds a prefilled WhatsApp enquiry from submitted form fields.
 */
export function buildEnquiryWhatsAppMessage(input: EnquiryMessageInput): string {
  const extra: string[] = [];

  if (input.packageName) {
    extra.push(`Package: ${input.packageName}`);
  }

  const hotel = optionLabel(input.hotelPreference, hotelPreferenceOptions);
  if (hotel) {
    extra.push(`Hotel preference: ${hotel}`);
  }

  const budget = optionLabel(input.budgetRange, budgetRangeOptions);
  if (budget) {
    extra.push(`Budget range: ${budget}`);
  }

  return [
    "Hello " + businessConfig.businessName + ",",
    "",
    introLine(input),
    "",
    `Name: ${input.fullName ?? ""}`,
    `Travel Date: ${input.travelDate ?? ""}`,
    `Travelers: ${travelersLine(input.adults, input.children)}`,
    `Trip Type: ${optionLabel(input.tripType, tripTypeOptions) ?? ""}`,
    `Duration: ${optionLabel(input.duration, durationOptions) ?? ""}`,
    `Destinations: ${destinationsLine(input)}`,
    ...extra,
    `Message: ${input.message ?? ""}`,
  ].join("\n");
}

export function enquiryValuesToMessage(
  values: EnquiryValues,
  destinationNames: string[],
): string {
  return buildEnquiryWhatsAppMessage({
    fullName: values.fullName,
    travelDate: values.travelDate,
    adults: values.adults,
    children: values.children,
    tripType: values.tripType,
    duration: values.duration,
    destinationNames,
    destinationName: values.destinationName,
    packageName: values.packageName,
    hotelPreference: values.hotelPreference,
    budgetRange: values.budgetRange,
    message: values.message,
  });
}
