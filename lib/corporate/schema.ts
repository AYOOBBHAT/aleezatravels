import { z } from "zod";
import {
  corporateBudgetOptions,
  corporateHotelOptions,
  corporateNightOptions,
  corporateTransportOptions,
} from "@/lib/corporate/options";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

const optionalSelect = (options: { value: string }[]) => {
  const allowed = new Set(options.map((option) => option.value));

  return z
    .string()
    .trim()
    .refine((value) => value === "" || allowed.has(value), {
      message: "Choose an option from the list.",
    });
};

export const corporateEnquirySchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, "Enter the company name.")
    .max(120, "Company name is too long."),
  contactPerson: z
    .string()
    .trim()
    .min(2, "Enter a contact name.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter a work email.")
    .refine((value) => z.email().safeParse(value).success, {
      message: "Enter a valid work email.",
    }),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number.")
    .transform(digitsOnly)
    .refine((value) => value.length >= 10 && value.length <= 15, {
      message: "Enter a phone number with 10 to 15 digits, including country code.",
    }),
  employeeCount: z.coerce
    .number()
    .int("Enter a whole number of travellers.")
    .min(2, "Enter at least two travellers.")
    .max(200, "For larger groups, tell us the headcount in the message."),
  travelDate: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Enter a valid travel date.",
    }),
  nights: optionalSelect(corporateNightOptions),
  destinations: z.array(z.string().trim().min(1)).default([]),
  hotelCategory: optionalSelect(corporateHotelOptions),
  transportation: optionalSelect(corporateTransportOptions),
  budgetRange: optionalSelect(corporateBudgetOptions),
  message: z.string().trim().max(2000, "Message is too long."),
  source: z.string().trim().max(80),
});

export type CorporateEnquiryValues = z.output<typeof corporateEnquirySchema>;

export type CorporateEnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<keyof CorporateEnquiryValues | "form", string[]>>;
  whatsappHref?: string;
  emailDelivered?: boolean;
};

export const initialCorporateEnquiryState: CorporateEnquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
