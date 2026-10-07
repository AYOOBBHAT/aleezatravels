import { paths } from "@/lib/seo/paths";

export const corporateRelatedPackages = [
  "kashmir-group-tour",
  "kashmir-5-nights-6-days",
  "customized-kashmir-tour",
] as const;

export const corporateRelatedDestinations = [
  "srinagar",
  "gulmarg",
  "pahalgam",
  "sonamarg",
] as const;

export const hrefs = {
  corporate: paths.corporateTravel,
  corporateQuote: `${paths.corporateTravel}#enquiry`,
  packages: paths.packages,
  group: paths.groupTours,
  custom: paths.customTrips,
  contact: paths.contact,
  srinagar: paths.destination("srinagar"),
  gulmarg: paths.destination("gulmarg"),
  pahalgam: paths.destination("pahalgam"),
  sonamarg: paths.destination("sonamarg"),
  doodhpathri: paths.destination("doodhpathri"),
  yusmarg: paths.destination("yusmarg"),
  fiveNight: paths.package("kashmir-5-nights-6-days"),
  sixNight: paths.package("kashmir-6-nights-7-days"),
  groupPackage: paths.package("kashmir-group-tour"),
  customPackage: paths.package("customized-kashmir-tour"),
  visitSeasons: paths.blogPost("best-time-to-visit-kashmir"),
  whyKashmir: paths.blogPost("why-kashmir-corporate-team-trip"),
  retreatGuide: paths.blogPost("kashmir-corporate-retreat-guide"),
  itOuting: paths.blogPost("kashmir-team-outing-ideas-it-technology-companies"),
  costGuide: paths.blogPost("how-much-does-a-corporate-trip-to-kashmir-cost"),
  bestPlaces: paths.blogPost("best-places-in-kashmir-for-company-team-trip"),
  fiveDay: paths.blogPost("5-day-kashmir-corporate-team-trip-itinerary"),
  groupSize: paths.blogPost("plan-kashmir-trip-for-team-of-10-20-or-50"),
  vsDestinations: paths.blogPost("kashmir-vs-other-destinations-corporate-retreat"),
  checklist: paths.blogPost("corporate-offsite-kashmir-planning-checklist"),
  bestTime: paths.blogPost("best-time-for-corporate-team-trip-kashmir"),
} as const;
