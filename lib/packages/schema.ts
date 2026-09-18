import type { FaqItem, MediaAsset } from "@/lib/types";

/**
 * Travel package document shape.
 * Field names match the intended Sanity schema (`travelPackage`) so this
 * file can be replaced by GROQ results without renaming UI props.
 */
export const PACKAGE_TYPES = [
  "honeymoon",
  "family",
  "group",
  "sightseeing",
  "custom",
] as const;

export type PackageType = (typeof PACKAGE_TYPES)[number];

export const PRICE_CURRENCIES = ["INR"] as const;
export type PriceCurrency = (typeof PRICE_CURRENCIES)[number];

export type PackageItineraryDay = {
  day: number;
  title: string;
  summary: string;
  destinationSlug?: string;
};

export type PackageHotel = {
  destinationSlug: string;
  nights: number;
  /**
   * Real hotel or houseboat name. Leave null until a property is confirmed.
   */
  name: string | null;
  roomCategory: string;
  note: string;
};

export type PackageTransport = {
  overview: string;
  details: string[];
};

export type PackageMeals = {
  overview: string;
  plan: string;
};

export type TravelPackage = {
  _type: "travelPackage";
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  destination: string;
  destinationsCovered: string[];
  packageType: PackageType;
  startingPrice: number | null;
  priceCurrency: PriceCurrency;
  /**
   * Optional note shown under the price. Leave unset to use the default
   * “contact us for current pricing” copy. Do not put a fake rupee figure here.
   */
  priceNote?: string | null;
  heroImage: MediaAsset;
  gallery: MediaAsset[];
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageItineraryDay[];
  hotels: PackageHotel[];
  transportation: PackageTransport;
  meals: PackageMeals;
  importantNotes: string[];
  faqs: FaqItem[];
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const PACKAGE_TYPE_LABELS: Record<PackageType, string> = {
  honeymoon: "Honeymoon",
  family: "Family",
  group: "Group",
  sightseeing: "Kashmir circuit",
  custom: "Custom",
};

/** ISO 8601 duration derived from the published duration string, e.g. "6 nights / 7 days". */
export function packageDurationIso(duration: string): string | undefined {
  const dayMatch = duration.match(/(\d+)\s*days?/i);
  if (dayMatch) {
    return `P${dayMatch[1]}D`;
  }

  const nightMatch = duration.match(/(\d+)\s*nights?/i);
  if (nightMatch) {
    return `P${Number(nightMatch[1]) + 1}D`;
  }

  return undefined;
}
