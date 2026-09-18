import "server-only";

import { cache } from "react";
import { destinationDocuments } from "@/lib/destinations/data";
import { mapSanityDestination, DESTINATIONS_GROQ, type SanityDestination } from "@/lib/destinations/cms";
import type { TravelDestination } from "@/lib/destinations/schema";
import { assertDestinationDocuments } from "@/lib/destinations/validate";
import { fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";

const localDestinations = assertDestinationDocuments(destinationDocuments);

async function loadDocuments(): Promise<TravelDestination[]> {
  const remote = await fetchSanity<SanityDestination[]>(
    DESTINATIONS_GROQ,
    {},
    { tags: [CACHE_TAGS.destinations, CACHE_TAGS.cms] },
  );

  if (!remote) {
    return localDestinations;
  }

  try {
    const mapped = remote
      .map(mapSanityDestination)
      .filter((doc) => doc.published);

    if (mapped.length === 0) {
      return localDestinations;
    }

    const slugs = new Set(mapped.map((doc) => doc.slug));
    const normalized = mapped.map((doc) => ({
      ...doc,
      nearbyDestinationSlugs: doc.nearbyDestinationSlugs.filter(
        (slug) => slugs.has(slug) && slug !== doc.slug,
      ),
    }));

    return assertDestinationDocuments(normalized);
  } catch (error) {
    console.error("[sanity] Destination mapping failed; using local guides.", error);
    return localDestinations;
  }
}

export const getPublishedDestinations = cache(async (): Promise<TravelDestination[]> => {
  return (await loadDocuments()).filter((doc) => doc.published);
});

export async function getFeaturedDestinations(): Promise<TravelDestination[]> {
  return (await getPublishedDestinations()).filter((doc) => doc.featured);
}

export async function getDestination(slug: string): Promise<TravelDestination | undefined> {
  return (await getPublishedDestinations()).find((doc) => doc.slug === slug);
}

export async function getDestinationBySlug(
  slug: string,
): Promise<TravelDestination | undefined> {
  return getDestination(slug);
}

export async function getDestinationSlugs(): Promise<string[]> {
  return (await getPublishedDestinations()).map((doc) => doc.slug);
}

export async function getNearbyDestinations(
  destination: TravelDestination,
): Promise<TravelDestination[]> {
  const published = await getPublishedDestinations();

  return destination.nearbyDestinationSlugs
    .map((slug) => published.find((item) => item.slug === slug))
    .filter((item): item is TravelDestination => Boolean(item));
}

/** Local catalogue only. Used by package helpers that run at module init. */
export function getPublishedDestinationsSync(): TravelDestination[] {
  return localDestinations.filter((doc) => doc.published);
}
