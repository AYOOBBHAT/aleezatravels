import { getPublishedDestinationsSync } from "@/lib/destinations/source";
import {
  PACKAGE_TYPES,
  PRICE_CURRENCIES,
  type TravelPackage,
} from "@/lib/packages/schema";
import type { TravelDestination } from "@/lib/destinations/schema";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(id: string, message: string): never {
  throw new Error(`Travel package "${id}": ${message}`);
}

function destinationLookup(known?: TravelDestination[]) {
  if (known) {
    const slugs = new Set(known.map((item) => item.slug));
    return (slug: string) => slugs.has(slug);
  }

  const local = getPublishedDestinationsSync();
  return (slug: string) => local.some((item) => item.slug === slug);
}

/**
 * Guards local (and later CMS) documents against invented prices,
 * unnamed hotels presented as real properties, and broken internal links.
 */
export function assertTravelPackage(
  doc: TravelPackage,
  knownDestinations?: TravelDestination[],
): TravelPackage {
  if (doc._type !== "travelPackage") {
    fail(doc.id ?? "unknown", '_type must be "travelPackage".');
  }

  if (!doc.id) {
    fail("unknown", "id is required.");
  }

  if (!SLUG_PATTERN.test(doc.slug)) {
    fail(doc.id, `slug "${doc.slug}" must be lowercase kebab-case.`);
  }

  if (!doc.title || !doc.shortDescription || !doc.description) {
    fail(doc.id, "title, shortDescription, and description are required.");
  }

  if (!(PACKAGE_TYPES as readonly string[]).includes(doc.packageType)) {
    fail(doc.id, `unknown packageType "${doc.packageType}".`);
  }

  if (!doc.duration) {
    fail(doc.id, "duration is required.");
  }

  const hasDestination = destinationLookup(knownDestinations);

  if (!hasDestination(doc.destination)) {
    fail(doc.id, `unknown primary destination "${doc.destination}".`);
  }

  if (!doc.destinationsCovered.includes(doc.destination)) {
    fail(doc.id, "destinationsCovered must include the primary destination.");
  }

  for (const slug of doc.destinationsCovered) {
    if (!hasDestination(slug)) {
      fail(doc.id, `unknown destination "${slug}" in destinationsCovered.`);
    }
  }

  if (
    doc.startingPrice != null &&
    (!Number.isFinite(doc.startingPrice) || doc.startingPrice <= 0)
  ) {
    fail(
      doc.id,
      "startingPrice must be null until a real tariff exists, or a positive number.",
    );
  }

  if (!(PRICE_CURRENCIES as readonly string[]).includes(doc.priceCurrency)) {
    fail(doc.id, `unsupported priceCurrency "${doc.priceCurrency}".`);
  }

  if (!doc.heroImage?.src || !doc.heroImage.alt) {
    fail(doc.id, "heroImage src and alt are required.");
  }

  for (const hotel of doc.hotels) {
    if (!hasDestination(hotel.destinationSlug)) {
      fail(doc.id, `hotel references unknown destination "${hotel.destinationSlug}".`);
    }

    if (hotel.name === "") {
      fail(doc.id, "hotel.name must be null until a property is confirmed.");
    }

    if (hotel.nights < 0) {
      fail(doc.id, "hotel nights cannot be negative.");
    }
  }

  const days = doc.itinerary.map((item) => item.day);
  if (new Set(days).size !== days.length) {
    fail(doc.id, "itinerary days must be unique.");
  }

  for (const day of doc.itinerary) {
    if (day.destinationSlug && !hasDestination(day.destinationSlug)) {
      fail(doc.id, `itinerary day ${day.day} references unknown destination.`);
    }
  }

  if (!doc.seoTitle || !doc.seoDescription) {
    fail(doc.id, "seoTitle and seoDescription are required.");
  }

  return doc;
}

export function assertPackageDocuments(
  documents: TravelPackage[],
  knownDestinations?: TravelDestination[],
): TravelPackage[] {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const document of documents) {
    assertTravelPackage(document, knownDestinations);

    if (ids.has(document.id)) {
      fail(document.id, "duplicate id.");
    }

    if (slugs.has(document.slug)) {
      fail(document.id, `duplicate slug "${document.slug}".`);
    }

    ids.add(document.id);
    slugs.add(document.slug);
  }

  return documents;
}
