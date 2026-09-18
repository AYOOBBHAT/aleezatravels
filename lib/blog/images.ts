import type { MediaAsset } from "@/lib/types";

export const blogImages = {
  srinagar: {
    src: "/images/destinations/srinagar.jpg",
    alt: "Shikaras and houseboats on Dal Lake in Srinagar, Kashmir",
    width: 1920,
    height: 1280,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  gulmarg: {
    src: "/images/destinations/gulmarg.jpg",
    alt: "Snow-covered pine forest and mountains seen from the Gulmarg Gondola",
    width: 1920,
    height: 1440,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  pahalgam: {
    src: "/images/destinations/pahalgam.jpg",
    alt: "The Lidder Valley near Pahalgam with pine-covered Himalayan slopes",
    width: 1920,
    height: 1071,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  sonamarg: {
    src: "/images/destinations/sonamarg.jpg",
    alt: "Open meadows and mountains at Sonamarg in Kashmir",
    width: 1920,
    height: 1440,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  honeymoon: {
    src: "/images/packages/honeymoon.jpg",
    alt: "Houseboats on Dal Lake, a typical setting for a Kashmir honeymoon stay",
    width: 1920,
    height: 1088,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  family: {
    src: "/images/packages/family.jpg",
    alt: "The Lidder Valley near Pahalgam, a common stop on Kashmir family tours",
    width: 1920,
    height: 1071,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  classic: {
    src: "/images/packages/classic-5n6d.jpg",
    alt: "Dal Lake in Srinagar, the usual starting point for a Kashmir circuit",
    width: 1920,
    height: 1280,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
  hero: {
    src: "/images/hero/dal-lake.jpg",
    alt: "Evening light over Dal Lake in Srinagar, Kashmir",
    width: 1920,
    height: 1280,
    credit: "Wikimedia Commons placeholder — replace with licensed photography",
  },
} as const satisfies Record<string, MediaAsset>;
