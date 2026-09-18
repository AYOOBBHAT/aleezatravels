import type { EnquiryOption } from "@/lib/types";

export const TRIP_TYPE_VALUES = [
  "honeymoon",
  "family",
  "couple",
  "group",
  "friends",
  "custom",
  "other",
] as const;

export type TripTypeValue = (typeof TRIP_TYPE_VALUES)[number];

export const tripTypeOptions: EnquiryOption[] = [
  { value: "honeymoon", label: "Honeymoon" },
  { value: "family", label: "Family" },
  { value: "couple", label: "Couple" },
  { value: "group", label: "Group" },
  { value: "friends", label: "Friends" },
  { value: "custom", label: "Customized Trip" },
  { value: "other", label: "Other" },
];

export const durationOptions: EnquiryOption[] = [
  { value: "3-4", label: "3–4 days" },
  { value: "4-5", label: "4–5 days" },
  { value: "5-6", label: "5 nights / 6 days" },
  { value: "6-7", label: "6 nights / 7 days" },
  { value: "8+", label: "8 days or more" },
  { value: "flexible", label: "Not sure yet" },
];

export const hotelPreferenceOptions: EnquiryOption[] = [
  { value: "to-be-confirmed", label: "To be confirmed in the quote" },
  { value: "hotel", label: "Hotel stay" },
  { value: "houseboat", label: "Houseboat in Srinagar if dates allow" },
  { value: "mix", label: "Mix of hotel and houseboat" },
  { value: "unsure", label: "Not sure yet" },
];

export const budgetRangeOptions: EnquiryOption[] = [
  { value: "discuss", label: "To be discussed" },
  { value: "comfortable", label: "Comfortable / mid-range" },
  { value: "premium", label: "Premium" },
  { value: "flexible", label: "Flexible" },
];

export function optionLabel(
  value: string | undefined,
  options: EnquiryOption[],
): string | undefined {
  if (!value) {
    return undefined;
  }

  return options.find((option) => option.value === value)?.label ?? value;
}
