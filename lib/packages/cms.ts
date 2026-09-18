import type { FaqItem, MediaAsset } from "@/lib/types";
import type {
  PackageHotel,
  PackageItineraryDay,
  PackageMeals,
  PackageTransport,
  PackageType,
  TravelPackage,
} from "@/lib/packages/schema";

/**
 * Sanity CMS contract for travel packages.
 *
 * Migration (no UI changes):
 * 1. Copy `travelPackageSanitySchema` into Sanity Studio (`schemaTypes`).
 *    Wrap each field with `defineField` / the document with `defineType`.
 * 2. Add a Sanity client using env (`NEXT_PUBLIC_SANITY_PROJECT_ID`, dataset).
 * 3. Replace `loadDocuments()` in `source.ts` with:
 *
 *      import { sanity } from "@/lib/sanity/client";
 *      import { TRAVEL_PACKAGES_GROQ } from "@/lib/packages/cms";
 *      return sanity.fetch<TravelPackage[]>(TRAVEL_PACKAGES_GROQ);
 *
 * GROQ below projects to the same `TravelPackage` shape the UI already uses.
 * Keep published filtering in `source.ts` so drafts never reach public pages.
 */

const imageProjection = `{
  "src": asset->url,
  "alt": coalesce(alt, ^.title, ""),
  "width": coalesce(asset->metadata.dimensions.width, 1920),
  "height": coalesce(asset->metadata.dimensions.height, 1080),
  "credit": credit
}`;

export const TRAVEL_PACKAGE_PROJECTION = `{
  _type,
  "id": coalesce(id, _id),
  "slug": slug.current,
  title,
  shortDescription,
  description,
  duration,
  "destination": coalesce(primaryDestination->slug.current, destination),
  "destinationsCovered": coalesce(destinations[]->slug.current, destinationsCovered),
  packageType,
  startingPrice,
  priceCurrency,
  priceNote,
  "heroImage": heroImage ${imageProjection},
  "gallery": gallery[] ${imageProjection},
  inclusions,
  exclusions,
  itinerary[] {
    day,
    title,
    summary,
    "destinationSlug": coalesce(destination->slug.current, destinationSlug)
  },
  hotels[] {
    "destinationSlug": coalesce(destination->slug.current, destinationSlug),
    nights,
    name,
    roomCategory,
    note
  },
  transportation,
  meals,
  importantNotes,
  faqs[] { question, answer },
  featured,
  published,
  seoTitle,
  seoDescription
}`;

export const TRAVEL_PACKAGES_GROQ = `*[_type == "travelPackage"] | order(featured desc, title asc) ${TRAVEL_PACKAGE_PROJECTION}`;

export const TRAVEL_PACKAGE_BY_SLUG_GROQ = `*[_type == "travelPackage" && slug.current == $slug][0] ${TRAVEL_PACKAGE_PROJECTION}`;

export const travelPackageSanitySchema = {
  name: "travelPackage",
  title: "Travel package",
  type: "document",
  fields: [
    { name: "id", title: "Public id", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    { name: "title", title: "Title", type: "string" },
    { name: "shortDescription", title: "Short description", type: "text" },
    { name: "description", title: "Overview", type: "text" },
    { name: "duration", title: "Duration", type: "string" },
    { name: "destination", title: "Primary destination slug", type: "string" },
    {
      name: "destinationsCovered",
      title: "Destinations covered",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "packageType",
      title: "Package type",
      type: "string",
      options: {
        list: ["honeymoon", "family", "group", "sightseeing", "custom"],
      },
    },
    {
      name: "startingPrice",
      title: "Starting price",
      type: "number",
      description: "Leave empty until a real tariff is confirmed. Never invent a figure.",
    },
    {
      name: "priceNote",
      title: "Price note",
      type: "text",
      description: "Leave empty to use “Contact us for current pricing”.",
    },
    {
      name: "priceCurrency",
      title: "Price currency",
      type: "string",
      initialValue: "INR",
    },
    {
      name: "heroImage",
      title: "Hero image",
      type: "image",
      fields: [
        { name: "alt", type: "string", title: "Alt text" },
        { name: "credit", type: "string", title: "Credit" },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "credit", type: "string", title: "Credit" },
          ],
        },
      ],
    },
    { name: "inclusions", title: "Inclusions", type: "array", of: [{ type: "string" }] },
    { name: "exclusions", title: "Exclusions", type: "array", of: [{ type: "string" }] },
    {
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number", title: "Day" },
            { name: "title", type: "string", title: "Title" },
            { name: "summary", type: "text", title: "Summary" },
            { name: "destinationSlug", type: "string", title: "Destination slug" },
          ],
        },
      ],
    },
    {
      name: "hotels",
      title: "Hotels",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "destinationSlug", type: "string", title: "Destination slug" },
            { name: "nights", type: "number", title: "Nights" },
            {
              name: "name",
              type: "string",
              title: "Hotel name",
              description: "Leave empty until the property is confirmed in a quote.",
            },
            { name: "roomCategory", type: "string", title: "Room category" },
            { name: "note", type: "text", title: "Note" },
          ],
        },
      ],
    },
    {
      name: "transportation",
      title: "Transportation",
      type: "object",
      fields: [
        { name: "overview", type: "text", title: "Overview" },
        { name: "details", type: "array", of: [{ type: "string" }], title: "Details" },
      ],
    },
    {
      name: "meals",
      title: "Meals",
      type: "object",
      fields: [
        { name: "overview", type: "text", title: "Overview" },
        { name: "plan", type: "string", title: "Meal plan" },
      ],
    },
    {
      name: "importantNotes",
      title: "Important notes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "published", title: "Published", type: "boolean", initialValue: false },
    { name: "seoTitle", title: "SEO title", type: "string" },
    { name: "seoDescription", title: "SEO description", type: "text" },
  ],
} as const;

export type SanitySlug = string | { current?: string | null } | null;

export type SanityImageSource = MediaAsset | {
  src?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  credit?: string | null;
  asset?: { url?: string | null };
};

export type SanityTravelPackage = {
  _id?: string;
  _type?: string;
  id?: string | null;
  slug?: SanitySlug;
  title?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  duration?: string | null;
  destination?: string | null;
  destinationsCovered?: string[] | null;
  packageType?: PackageType | null;
  startingPrice?: number | null;
  priceCurrency?: TravelPackage["priceCurrency"] | null;
  priceNote?: string | null;
  heroImage?: SanityImageSource | null;
  gallery?: SanityImageSource[] | null;
  inclusions?: string[] | null;
  exclusions?: string[] | null;
  itinerary?: PackageItineraryDay[] | null;
  hotels?: Array<Partial<PackageHotel> & { name?: string | null }> | null;
  transportation?: Partial<PackageTransport> | null;
  meals?: Partial<PackageMeals> | null;
  importantNotes?: string[] | null;
  faqs?: FaqItem[] | null;
  featured?: boolean | null;
  published?: boolean | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

function slugValue(slug: SanitySlug): string {
  if (typeof slug === "string") {
    return slug;
  }

  return slug?.current?.trim() ?? "";
}

function mapImage(
  image: SanityImageSource | null | undefined,
  fallbackAlt: string,
): MediaAsset {
  const src =
    image && "src" in image && image.src
      ? image.src
      : image && "asset" in image
        ? (image.asset?.url ?? "")
        : "";

  return {
    src,
    alt: (image && "alt" in image && image.alt) || fallbackAlt,
    width: (image && "width" in image && image.width) || 1920,
    height: (image && "height" in image && image.height) || 1080,
    credit: image && "credit" in image ? (image.credit ?? undefined) : undefined,
  };
}

function mapHotel(hotel: Partial<PackageHotel> & { name?: string | null }): PackageHotel {
  const name = hotel.name?.trim();

  return {
    destinationSlug: hotel.destinationSlug ?? "",
    nights: hotel.nights ?? 0,
    name: name ? name : null,
    roomCategory: hotel.roomCategory?.trim() || "To be confirmed",
    note:
      hotel.note?.trim() ||
      "The hotel or houseboat is selected after dates, room type, and budget are confirmed.",
  };
}

/**
 * Maps a Sanity document (raw or GROQ-projected) onto `TravelPackage`.
 * Empty hotel names become null. Missing prices stay null.
 */
export function mapSanityPackage(doc: SanityTravelPackage): TravelPackage {
  const title = doc.title?.trim() ?? "";
  const slug = slugValue(doc.slug ?? null);

  return {
    _type: "travelPackage",
    id: doc.id?.trim() || doc._id || slug,
    slug,
    title,
    shortDescription: doc.shortDescription?.trim() ?? "",
    description: doc.description?.trim() ?? "",
    duration: doc.duration?.trim() ?? "",
    destination: doc.destination?.trim() ?? "",
    destinationsCovered: doc.destinationsCovered ?? [],
    packageType: doc.packageType ?? "sightseeing",
    startingPrice:
      doc.startingPrice != null && doc.startingPrice > 0 ? doc.startingPrice : null,
    priceCurrency: doc.priceCurrency ?? "INR",
    priceNote: doc.priceNote?.trim() || null,
    heroImage: mapImage(doc.heroImage, title),
    gallery: (doc.gallery ?? []).map((image) => mapImage(image, title)),
    inclusions: doc.inclusions ?? [],
    exclusions: doc.exclusions ?? [],
    itinerary: doc.itinerary ?? [],
    hotels: (doc.hotels ?? []).map(mapHotel),
    transportation: {
      overview: doc.transportation?.overview ?? "",
      details: doc.transportation?.details ?? [],
    },
    meals: {
      overview: doc.meals?.overview ?? "",
      plan: doc.meals?.plan ?? "To be confirmed in your quote",
    },
    importantNotes: doc.importantNotes ?? [],
    faqs: doc.faqs ?? [],
    featured: Boolean(doc.featured),
    published: Boolean(doc.published),
    seoTitle: doc.seoTitle?.trim() || title,
    seoDescription: doc.seoDescription?.trim() || doc.shortDescription?.trim() || "",
  };
}

export function mapSanityPackages(docs: SanityTravelPackage[]): TravelPackage[] {
  return docs.map(mapSanityPackage);
}
