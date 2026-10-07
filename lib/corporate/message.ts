import { businessConfig } from "@/lib/site-config";
import { optionLabel } from "@/lib/enquiry/options";
import {
  corporateBudgetOptions,
  corporateHotelOptions,
  corporateNightOptions,
  corporateTransportOptions,
} from "@/lib/corporate/options";
import type { CorporateEnquiryValues } from "@/lib/corporate/schema";

export function corporateEnquiryMessage(): string {
  return [
    `Hello ${businessConfig.businessName},`,
    "",
    "We are planning a corporate/team trip to Kashmir.",
    "",
    "Company:",
    "Number of employees:",
    "Preferred dates:",
    "Number of nights:",
    "Preferred destinations:",
    "Requirements:",
    "",
    "Please share a customized proposal.",
  ].join("\n");
}

export function buildCorporateWhatsAppMessage(
  values: CorporateEnquiryValues,
  destinationNames: string[],
): string {
  return [
    `Hello ${businessConfig.businessName},`,
    "",
    "We are planning a corporate/team trip to Kashmir.",
    "",
    `Company: ${values.companyName}`,
    `Contact person: ${values.contactPerson}`,
    `Number of employees: ${values.employeeCount}`,
    `Preferred dates: ${values.travelDate || ""}`,
    `Number of nights: ${optionLabel(values.nights, corporateNightOptions) ?? values.nights}`,
    `Preferred destinations: ${destinationNames.join(", ")}`,
    `Hotel category: ${optionLabel(values.hotelCategory, corporateHotelOptions) ?? ""}`,
    `Transportation: ${optionLabel(values.transportation, corporateTransportOptions) ?? ""}`,
    `Estimated budget: ${optionLabel(values.budgetRange, corporateBudgetOptions) ?? ""}`,
    `Requirements: ${values.message}`,
    "",
    "Please share a customized proposal.",
  ].join("\n");
}
