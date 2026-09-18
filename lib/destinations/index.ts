export type {
  DestinationBestTime,
  DestinationItem,
  DestinationSeason,
  DestinationStay,
  DestinationTravelInfo,
  TravelDestination,
} from "@/lib/destinations/schema";
export {
  DESTINATIONS_GROQ,
  DESTINATION_BY_SLUG_GROQ,
  destinationSanitySchema,
  mapSanityDestination,
} from "@/lib/destinations/cms";
export { destinationContactHref } from "@/lib/destinations/links";
export {
  getDestination,
  getDestinationBySlug,
  getDestinationSlugs,
  getFeaturedDestinations,
  getNearbyDestinations,
  getPublishedDestinations,
  getPublishedDestinationsSync,
} from "@/lib/destinations/source";
