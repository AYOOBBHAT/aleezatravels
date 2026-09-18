import type { FaqItem, MediaAsset } from "@/lib/types";

/**
 * Destination document shape.
 * Field names match the intended Sanity schema (`destination`) so this
 * file can be replaced by GROQ results without renaming UI props.
 */
export type DestinationItem = {
  title: string;
  summary: string;
};

export type DestinationSeason = {
  name: string;
  summary: string;
};

export type DestinationStay = {
  typicalStay: string;
  overview: string;
};

export type DestinationTravelInfo = {
  overview: string;
  details: string[];
};

export type DestinationBestTime = {
  overview: string;
  seasons: DestinationSeason[];
};

export type TravelDestination = {
  _type: "destination";
  id: string;
  slug: string;
  name: string;
  region: string;
  headline: string;
  shortDescription: string;
  /** Card/listing copy; kept in sync with shortDescription. */
  summary: string;
  introduction: string;
  whyVisit: DestinationItem[];
  topAttractions: DestinationItem[];
  thingsToDo: DestinationItem[];
  suggestedDuration: DestinationStay;
  bestTimeToVisit: DestinationBestTime;
  travelInformation: DestinationTravelInfo;
  nearbyDestinationSlugs: string[];
  /** Short labels for cards; derived from attractions unless overridden. */
  highlights: string[];
  faqs: FaqItem[];
  heroImage: MediaAsset;
  /** Alias of heroImage for existing cards and Open Graph. */
  image: MediaAsset;
  gallery: MediaAsset[];
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
};
