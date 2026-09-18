import type { TravelDestination } from "@/lib/destinations/schema";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(id: string, message: string): never {
  throw new Error(`Destination "${id}": ${message}`);
}

export function assertTravelDestination(
  doc: TravelDestination,
): TravelDestination {
  if (doc._type !== "destination") {
    fail(doc.id ?? "unknown", '_type must be "destination".');
  }

  if (!doc.id) {
    fail("unknown", "id is required.");
  }

  if (!SLUG_PATTERN.test(doc.slug)) {
    fail(doc.id, `slug "${doc.slug}" must be lowercase kebab-case.`);
  }

  if (!doc.name || !doc.headline || !doc.shortDescription || !doc.introduction) {
    fail(doc.id, "name, headline, shortDescription, and introduction are required.");
  }

  if (!doc.heroImage?.src || !doc.heroImage.alt) {
    fail(doc.id, "heroImage src and alt are required.");
  }

  if (doc.whyVisit.length === 0 || doc.topAttractions.length === 0) {
    fail(doc.id, "whyVisit and topAttractions cannot be empty.");
  }

  if (doc.thingsToDo.length === 0) {
    fail(doc.id, "thingsToDo cannot be empty.");
  }

  if (!doc.suggestedDuration.typicalStay || !doc.suggestedDuration.overview) {
    fail(doc.id, "suggestedDuration is required.");
  }

  if (!doc.bestTimeToVisit.overview || doc.bestTimeToVisit.seasons.length === 0) {
    fail(doc.id, "bestTimeToVisit needs an overview and at least one season.");
  }

  if (
    !doc.travelInformation.overview ||
    doc.travelInformation.details.length === 0
  ) {
    fail(doc.id, "travelInformation needs an overview and details.");
  }

  if (doc.nearbyDestinationSlugs.includes(doc.slug)) {
    fail(doc.id, "nearbyDestinationSlugs cannot include the destination itself.");
  }

  if (!doc.seoTitle || !doc.seoDescription) {
    fail(doc.id, "seoTitle and seoDescription are required.");
  }

  return doc;
}

export function assertDestinationDocuments(
  documents: TravelDestination[],
): TravelDestination[] {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const document of documents) {
    assertTravelDestination(document);

    if (ids.has(document.id)) {
      fail(document.id, "duplicate id.");
    }

    if (slugs.has(document.slug)) {
      fail(document.id, `duplicate slug "${document.slug}".`);
    }

    ids.add(document.id);
    slugs.add(document.slug);
  }

  for (const document of documents) {
    for (const nearby of document.nearbyDestinationSlugs) {
      if (!slugs.has(nearby)) {
        fail(document.id, `nearby destination "${nearby}" does not exist.`);
      }
    }
  }

  return documents;
}
