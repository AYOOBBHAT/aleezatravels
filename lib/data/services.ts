import { paths } from "@/lib/seo/paths";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "tour-packages",
    title: "Kashmir tour packages",
    summary: "Ready itineraries covering Srinagar, Gulmarg, Pahalgam, and Sonamarg, with room to adjust pace.",
    href: paths.packages,
    icon: "map",
  },
  {
    slug: "honeymoon",
    title: "Honeymoon packages",
    summary: "Quiet stays, private transfers, and romantic pacing for couples travelling through the valley.",
    href: paths.honeymoon,
    icon: "heart",
  },
  {
    slug: "family-tours",
    title: "Family tours",
    summary: "Comfortable rooms, shorter driving days, and sightseeing chosen for mixed-age groups.",
    href: paths.familyTours,
    icon: "users",
  },
  {
    slug: "group-tours",
    title: "Group tours",
    summary: "Coordinated travel for friends, clubs, and larger parties with shared logistics.",
    href: paths.groupTours,
    icon: "mountain",
  },
  {
    slug: "hotels",
    title: "Hotel bookings",
    summary: "Houseboats, hotels, and huts selected for location, season, and the kind of stay you want.",
    href: paths.customTrips,
    icon: "hotel",
  },
  {
    slug: "transport",
    title: "Transportation",
    summary: "Airport pickups, local sightseeing cabs, and inter-town transfers arranged with the itinerary.",
    href: paths.customTrips,
    icon: "bus",
  },
];
