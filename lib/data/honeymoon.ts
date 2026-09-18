import type { HoneymoonFeature, MediaAsset } from "@/lib/types";

export const honeymoonImage: MediaAsset = {
  src: "/images/honeymoon/houseboat.jpg",
  alt: "Traditional houseboats on Dal Lake in Srinagar, often chosen for Kashmir honeymoon stays",
  width: 1920,
  height: 1088,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const honeymoonFeatures: HoneymoonFeature[] = [
  {
    title: "Romantic Kashmir stays",
    summary: "Rooms and locations chosen for quiet, views, and a slower evening pace.",
  },
  {
    title: "Houseboat experiences",
    summary: "A Dal Lake houseboat night can be included when it suits the season and your dates.",
  },
  {
    title: "Private sightseeing",
    summary: "Shikara time, gardens, and meadow days scheduled as a couple’s itinerary, not a group circuit.",
  },
  {
    title: "Honeymoon room decoration",
    summary: "Simple floral or candle setups can be arranged at selected stays on request.",
  },
  {
    title: "Customized experiences",
    summary: "Extra nights, private dinners, or fewer driving days can be built into the plan.",
  },
];
