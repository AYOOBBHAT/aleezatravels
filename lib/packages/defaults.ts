import { destinations } from "@/lib/data/destinations";
import type { MediaAsset } from "@/lib/types";
import type { PackageHotel, TravelPackage } from "@/lib/packages/schema";
import { assertTravelPackage } from "@/lib/packages/validate";

export const PRICE_NOTE =
  "Contact us for current pricing. Rates depend on season, room category, and travel dates — this is not a live tariff.";

export const DEFAULT_TRANSPORT = {
  overview:
    "Airport transfers and sightseeing cabs are planned with the itinerary and confirmed in your quote.",
  details: [
    "Srinagar Airport pickup and drop can be included.",
    "Inter-town transfers (for example Srinagar–Gulmarg or Srinagar–Pahalgam) are by private cab unless a group coach is agreed.",
    "Road times vary with weather and traffic; the day-by-day plan is written with that in mind.",
  ],
};

export const DEFAULT_MEALS = {
  overview:
    "The meal plan is not assumed. Breakfast, lunch, and dinner are confirmed in the written quote for your dates and hotels.",
  plan: "To be confirmed in your quote",
};

export const BASE_INCLUSIONS = [
  "Accommodation for the nights listed, in a category agreed in your quote",
  "Sightseeing and inter-town transfers as described in the itinerary",
  "Driver allowances, tolls, and parking for the planned cab days",
  "A proposed day-by-day plan before you confirm",
];

export const BASE_EXCLUSIONS = [
  "Airfares and train tickets",
  "Lunches and dinners unless named in your quote",
  "Optional activities such as the Gulmarg Gondola, pony rides, or shikara tickets, unless added to the quote",
  "Entrance fees that are paid on the day",
  "Personal expenses, tips, and anything not listed in the confirmed itinerary",
];

export const BASE_NOTES = [
  "This itinerary is a planning outline. Driving order and nights in each place can change with weather, road status, and your preferred pace.",
  "Hotels and houseboats are confirmed only after you accept a written quote. Names are not shown here until they are booked.",
  "Some meadow roads and the Gulmarg Gondola can close or queue in peak season or poor weather.",
];

export function stay(
  destinationSlug: string,
  nights: number,
  extraNote?: string,
): PackageHotel {
  const place =
    destinations.find((destination) => destination.slug === destinationSlug)?.name ??
    destinationSlug;

  return {
    destinationSlug,
    nights,
    name: null,
    roomCategory: "To be confirmed",
    note:
      extraNote ??
      (nights <= 0
        ? `Stay in ${place} is selected after we know your dates, room type, and budget range.`
        : `${nights} night${nights === 1 ? "" : "s"} in ${place}. The hotel or houseboat is selected after we know your dates, room type, and budget range.`),
  };
}

export function galleryFor(slugs: string[], hero: MediaAsset): MediaAsset[] {
  const fromDestinations = slugs
    .map((slug) => destinations.find((destination) => destination.slug === slug)?.image)
    .filter((image): image is MediaAsset => Boolean(image))
    .filter((image) => image.src !== hero.src);

  return fromDestinations;
}

export function definePackage(doc: TravelPackage): TravelPackage {
  return assertTravelPackage(doc);
}
