export const paths = {
  home: "/",
  packages: "/kashmir-tour-packages",
  package: (slug: string) => `/packages/${slug}`,
  destinations: "/destinations",
  destination: (slug: string) => `/destinations/${slug}`,
  honeymoon: "/honeymoon-packages",
  familyTours: "/family-tours",
  groupTours: "/group-tours",
  customTrips: "/custom-kashmir-trips",
  about: "/about",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  blogCategory: (slug: string) => `/blog/category/${slug}`,
  corporateTravel: "/corporate-travel",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const legacyRedirects = [
  { source: "/packages", destination: paths.packages },
  { source: "/honeymoon", destination: paths.honeymoon },
  { source: "/custom-trips", destination: paths.customTrips },
] as const;
