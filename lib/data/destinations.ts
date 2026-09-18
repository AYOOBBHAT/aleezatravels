import { getPublishedDestinationsSync } from "@/lib/destinations/source";

export const destinations = getPublishedDestinationsSync();

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
