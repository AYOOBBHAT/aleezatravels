import "server-only";

import { cache } from "react";
import { getPublishedDestinations } from "@/lib/destinations/source";
import type { TravelDestination } from "@/lib/destinations/schema";
import { packageDocuments } from "@/lib/packages/data";
import { mapSanityPackage, TRAVEL_PACKAGES_GROQ, type SanityTravelPackage } from "@/lib/packages/cms";
import type { PackageType, TravelPackage } from "@/lib/packages/schema";
import { assertPackageDocuments } from "@/lib/packages/validate";
import { fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";

const localPackages = assertPackageDocuments(packageDocuments);

async function loadDocuments(): Promise<TravelPackage[]> {
  const remote = await fetchSanity<SanityTravelPackage[]>(
    TRAVEL_PACKAGES_GROQ,
    {},
    { tags: [CACHE_TAGS.packages, CACHE_TAGS.cms] },
  );

  if (!remote) {
    return localPackages;
  }

  try {
    const destinations = await getPublishedDestinations();
    const mapped = remote.map(mapSanityPackage).filter((doc) => doc.published);

    if (mapped.length === 0) {
      return localPackages;
    }

    return assertPackageDocuments(mapped, destinations);
  } catch (error) {
    console.error("[sanity] Package mapping failed; using local outlines.", error);
    return localPackages;
  }
}

export const getPublishedPackages = cache(async (): Promise<TravelPackage[]> => {
  return (await loadDocuments()).filter((doc) => doc.published);
});

export async function getFeaturedPackages(): Promise<TravelPackage[]> {
  return (await getPublishedPackages()).filter((doc) => doc.featured);
}

export async function getPackageBySlug(
  slug: string,
): Promise<TravelPackage | undefined> {
  return (await getPublishedPackages()).find((doc) => doc.slug === slug);
}

export async function getPackagesByType(
  packageType: PackageType,
): Promise<TravelPackage[]> {
  return (await getPublishedPackages()).filter((doc) => doc.packageType === packageType);
}

export async function getPackagesByDestination(
  destinationSlug: string,
): Promise<TravelPackage[]> {
  return (await getPublishedPackages()).filter(
    (doc) =>
      doc.destination === destinationSlug ||
      doc.destinationsCovered.includes(destinationSlug),
  );
}

export async function getPackageSlugs(): Promise<string[]> {
  return (await getPublishedPackages()).map((doc) => doc.slug);
}

export async function getRelatedPackages(
  pkg: TravelPackage,
  limit = 3,
): Promise<TravelPackage[]> {
  const others = (await getPublishedPackages()).filter((item) => item.id !== pkg.id);

  const scored = others
    .map((item) => {
      const sharedDestinations = item.destinationsCovered.filter((slug) =>
        pkg.destinationsCovered.includes(slug),
      ).length;
      const typeScore = item.packageType === pkg.packageType ? 10 : 0;
      const featuredScore = item.featured ? 1 : 0;

      return {
        item,
        score: typeScore + sharedDestinations + featuredScore,
      };
    })
    .sort(
      (a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title),
    );

  return scored.slice(0, limit).map((entry) => entry.item);
}

export async function destinationsCoveredBy(
  pkg: TravelPackage,
): Promise<TravelDestination[]> {
  const destinations = await getPublishedDestinations();

  return pkg.destinationsCovered
    .map((slug) => destinations.find((destination) => destination.slug === slug))
    .filter((destination): destination is TravelDestination => Boolean(destination));
}

export async function primaryDestination(
  pkg: TravelPackage,
): Promise<TravelDestination | undefined> {
  return (await getPublishedDestinations()).find((item) => item.slug === pkg.destination);
}
