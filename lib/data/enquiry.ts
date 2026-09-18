export {
  durationOptions,
  optionLabel,
  tripTypeOptions,
} from "@/lib/enquiry/options";
export type { EnquiryOption } from "@/lib/types";

/** @deprecated Prefer adults + children fields on the enquiry form. */
export const travelerOptions = [
  { value: "1", label: "1 traveler" },
  { value: "2", label: "2 travelers" },
  { value: "3", label: "3 travelers" },
  { value: "4", label: "4 travelers" },
  { value: "5", label: "5 travelers" },
  { value: "6+", label: "6 or more" },
];
