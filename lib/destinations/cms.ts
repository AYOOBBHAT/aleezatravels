import type { FaqItem, MediaAsset } from "@/lib/types";
import type {
  DestinationBestTime,
  DestinationItem,
  DestinationStay,
  DestinationTravelInfo,
  TravelDestination,
} from "@/lib/destinations/schema";

/**
 * Sanity CMS contract for destinations.
 *
 * Migration (no UI changes):
 * 1. Copy `destinationSanitySchema` into Sanity Studio (`schemaTypes`).
 * 2. Add a Sanity client using env.
 * 3. Replace `loadDocuments()` in `source.ts` with:
 *
 *      import { sanity } from "@/lib/sanity/client";
 *      import { DESTINATIONS_GROQ } from "@/lib/destinations/cms";
 *      return sanity.fetch(DESTINATIONS_GROQ);
 */

const imageProjection = `{
  "src": asset->url,
  "alt": coalesce(alt, ^.name, ""),
  "width": coalesce(asset->metadata.dimensions.width, 1920),
  "height": coalesce(asset->metadata.dimensions.height, 1080),
  "credit": credit
}`;

export const DESTINATION_PROJECTION = `{
  _type,
  "id": coalesce(id, _id),
  "slug": slug.current,
  "name": coalesce(title, name),
  region,
  headline,
  "shortDescription": coalesce(description, shortDescription),
  "summary": coalesce(summary, description, shortDescription),
  introduction,
  whyVisit[] { title, summary },
  "topAttractions": coalesce(attractions, topAttractions)[] { title, summary },
  thingsToDo[] { title, summary },
  suggestedDuration,
  "bestTimeToVisit": coalesce(bestTime, bestTimeToVisit) {
    overview,
    seasons[] { name, summary }
  },
  travelInformation,
  "nearbyDestinationSlugs": coalesce(nearbyDestinations[]->slug.current, nearbyDestinationSlugs),
  highlights,
  faqs[] { question, answer },
  "heroImage": heroImage ${imageProjection},
  "image": heroImage ${imageProjection},
  "gallery": coalesce(images, gallery)[] ${imageProjection},
  featured,
  published,
  seoTitle,
  seoDescription
}`;

export const DESTINATIONS_GROQ = `*[_type == "destination"] | order(name asc) ${DESTINATION_PROJECTION}`;

export const DESTINATION_BY_SLUG_GROQ = `*[_type == "destination" && slug.current == $slug][0] ${DESTINATION_PROJECTION}`;

export const destinationSanitySchema = {
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    { name: "id", title: "Public id", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "name", title: "Name", type: "string" },
    { name: "region", title: "Region label", type: "string" },
    { name: "headline", title: "Page H1", type: "string" },
    { name: "shortDescription", title: "Short description", type: "text" },
    { name: "introduction", title: "Introduction", type: "text" },
    {
      name: "whyVisit",
      title: "Why visit",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "summary", type: "text", title: "Summary" },
          ],
        },
      ],
    },
    {
      name: "topAttractions",
      title: "Top attractions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "summary", type: "text", title: "Summary" },
          ],
        },
      ],
    },
    {
      name: "thingsToDo",
      title: "Things to do",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "summary", type: "text", title: "Summary" },
          ],
        },
      ],
    },
    {
      name: "suggestedDuration",
      title: "Suggested duration",
      type: "object",
      fields: [
        { name: "typicalStay", type: "string", title: "Typical stay" },
        { name: "overview", type: "text", title: "Overview" },
      ],
    },
    {
      name: "bestTimeToVisit",
      title: "Best time to visit",
      type: "object",
      fields: [
        { name: "overview", type: "text", title: "Overview" },
        {
          name: "seasons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string", title: "Season" },
                { name: "summary", type: "text", title: "Summary" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "travelInformation",
      title: "Travel information",
      type: "object",
      fields: [
        { name: "overview", type: "text", title: "Overview" },
        { name: "details", type: "array", of: [{ type: "string" }], title: "Details" },
      ],
    },
    {
      name: "nearbyDestinationSlugs",
      title: "Nearby destination slugs",
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
    { name: "featured", title: "Featured", type: "boolean", initialValue: true },
    { name: "published", title: "Published", type: "boolean", initialValue: false },
    { name: "seoTitle", title: "SEO title", type: "string" },
    { name: "seoDescription", title: "SEO description", type: "text" },
  ],
} as const;

export type SanitySlug = string | { current?: string | null } | null;

export type SanityDestination = Partial<TravelDestination> & {
  _id?: string;
  slug?: SanitySlug;
  heroImage?: MediaAsset | null;
  faqs?: FaqItem[] | null;
  whyVisit?: DestinationItem[] | null;
  topAttractions?: DestinationItem[] | null;
  thingsToDo?: DestinationItem[] | null;
  suggestedDuration?: DestinationStay | null;
  bestTimeToVisit?: DestinationBestTime | null;
  travelInformation?: DestinationTravelInfo | null;
};

function slugValue(slug: SanitySlug | undefined): string {
  if (typeof slug === "string") {
    return slug;
  }

  return slug?.current?.trim() ?? "";
}

export function mapSanityDestination(doc: SanityDestination): TravelDestination {
  const name = doc.name?.trim() ?? "";
  const slug = slugValue(doc.slug);
  const heroImage = doc.heroImage ?? doc.image;
  const shortDescription = doc.shortDescription?.trim() ?? doc.summary?.trim() ?? "";

  if (!heroImage) {
    throw new Error(`Destination "${slug || name}" is missing a hero image.`);
  }

  return {
    _type: "destination",
    id: doc.id?.trim() || doc._id || slug,
    slug,
    name,
    region: doc.region?.trim() ?? "",
    headline: doc.headline?.trim() || `${name}, Kashmir`,
    shortDescription,
    summary: doc.summary?.trim() || shortDescription,
    introduction: doc.introduction?.trim() ?? "",
    whyVisit: doc.whyVisit && doc.whyVisit.length > 0
      ? doc.whyVisit
      : (doc.topAttractions ?? []).slice(0, 3),
    topAttractions: doc.topAttractions ?? [],
    thingsToDo: doc.thingsToDo ?? [],
    suggestedDuration: {
      typicalStay: doc.suggestedDuration?.typicalStay ?? "To be planned with your itinerary",
      overview: doc.suggestedDuration?.overview ?? "",
    },
    bestTimeToVisit: {
      overview: doc.bestTimeToVisit?.overview ?? "",
      seasons: doc.bestTimeToVisit?.seasons ?? [],
    },
    travelInformation: {
      overview: doc.travelInformation?.overview ?? "",
      details: doc.travelInformation?.details ?? [],
    },
    nearbyDestinationSlugs: doc.nearbyDestinationSlugs ?? [],
    highlights:
      doc.highlights ??
      (doc.topAttractions ?? []).slice(0, 3).map((item) => item.title),
    faqs: doc.faqs ?? [],
    heroImage,
    image: doc.image ?? heroImage,
    gallery: doc.gallery ?? [],
    featured: Boolean(doc.featured),
    published: Boolean(doc.published),
    seoTitle: doc.seoTitle?.trim() || `${name}, Kashmir`,
    seoDescription: doc.seoDescription?.trim() || shortDescription,
  };
}
