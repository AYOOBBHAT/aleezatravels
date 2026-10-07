import type { EnquiryOption } from "@/lib/types";

export const corporateHotelOptions: EnquiryOption[] = [
  { value: "to-be-confirmed", label: "To be confirmed in the quote" },
  { value: "standard", label: "Standard / comfortable" },
  { value: "deluxe", label: "Deluxe" },
  { value: "premium", label: "Premium" },
  { value: "houseboat-mix", label: "Include a Srinagar houseboat night if dates allow" },
];

export const corporateTransportOptions: EnquiryOption[] = [
  { value: "to-be-confirmed", label: "To be confirmed in the quote" },
  { value: "private-cabs", label: "Private cabs" },
  { value: "tempo-traveller", label: "Tempo traveller / larger vehicle if available" },
  { value: "mix", label: "Mix, depending on group size" },
  { value: "airport-and-sightseeing", label: "Airport transfers and sightseeing cabs" },
];

export const corporateNightOptions: EnquiryOption[] = [
  { value: "3", label: "3 nights" },
  { value: "4", label: "4 nights" },
  { value: "5", label: "5 nights" },
  { value: "6", label: "6 nights" },
  { value: "7+", label: "7 nights or more" },
  { value: "flexible", label: "Not sure yet" },
];

export const corporateBudgetOptions: EnquiryOption[] = [
  { value: "discuss", label: "Share a customized quotation" },
  { value: "comfortable", label: "Comfortable / mid-range" },
  { value: "premium", label: "Premium" },
  { value: "flexible", label: "Flexible" },
];
