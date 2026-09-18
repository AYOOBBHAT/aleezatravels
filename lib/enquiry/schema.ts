import { z } from "zod";
import {
  TRIP_TYPE_VALUES,
  budgetRangeOptions,
  durationOptions,
  hotelPreferenceOptions,
} from "@/lib/enquiry/options";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

const phoneSchema = z
  .string()
  .trim()
  .min(1, "Enter a phone number.")
  .transform(digitsOnly)
  .refine((value) => value.length >= 10 && value.length <= 15, {
    message: "Enter a phone number with 10 to 15 digits, including country code.",
  });

const optionalPhoneSchema = z
  .string()
  .trim()
  .transform((value) => (value ? digitsOnly(value) : ""))
  .refine((value) => value === "" || (value.length >= 10 && value.length <= 15), {
    message: "Enter a WhatsApp number with 10 to 15 digits, including country code.",
  });

const optionalEmailSchema = z
  .string()
  .trim()
  .refine((value) => value === "" || z.email().safeParse(value).success, {
    message: "Enter a valid email address.",
  });

const optionalSelect = (options: { value: string }[]) => {
  const allowed = new Set(options.map((option) => option.value));

  return z
    .string()
    .trim()
    .refine((value) => value === "" || allowed.has(value), {
      message: "Choose an option from the list.",
    });
};

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Name is too long."),
  phone: phoneSchema,
  whatsapp: optionalPhoneSchema,
  email: optionalEmailSchema,
  travelDate: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value), {
      message: "Enter a valid travel date.",
    }),
  adults: z.coerce
    .number()
    .int("Enter a whole number of adults.")
    .min(1, "At least one adult is required.")
    .max(40, "For larger groups, tell us in the message."),
  children: z.coerce
    .number()
    .int("Enter a whole number of children.")
    .min(0, "Children cannot be negative.")
    .max(20, "For larger groups, tell us in the message."),
  tripType: z.enum(TRIP_TYPE_VALUES, {
    error: "Select a trip type.",
  }),
  duration: z
    .string()
    .trim()
    .min(1, "Select a preferred duration.")
    .refine(
      (value) => durationOptions.some((option) => option.value === value),
      "Select a preferred duration.",
    ),
  destinations: z.array(z.string().trim().min(1)).default([]),
  hotelPreference: optionalSelect(hotelPreferenceOptions),
  budgetRange: optionalSelect(budgetRangeOptions),
  message: z.string().trim().max(2000, "Message is too long."),
  packageSlug: z.string().trim().max(120),
  packageName: z.string().trim().max(160),
  destinationSlug: z.string().trim().max(120),
  destinationName: z.string().trim().max(120),
  source: z.string().trim().max(80),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryValues = z.output<typeof enquirySchema>;

export type EnquiryActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<keyof EnquiryValues | "form", string[]>>;
  whatsappHref?: string;
  emailDelivered?: boolean;
};

export const initialEnquiryState: EnquiryActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export type EnquiryFormDefaults = Partial<{
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  travelDate: string;
  adults: number;
  children: number;
  tripType: EnquiryValues["tripType"];
  duration: string;
  destinations: string[];
  hotelPreference: string;
  budgetRange: string;
  message: string;
  packageSlug: string;
  packageName: string;
  destinationSlug: string;
  destinationName: string;
  source: string;
}>;

export type EnquiryDestinationOption = {
  slug: string;
  name: string;
};
