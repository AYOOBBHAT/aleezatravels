export const CACHE_TAGS = {
  cms: "cms",
  packages: "packages",
  destinations: "destinations",
  blog: "blog",
  faqs: "faqs",
  testimonials: "testimonials",
  settings: "settings",
} as const;

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];

export function cacheTagsForSanityType(type: string | undefined): CacheTag[] {
  switch (type) {
    case "travelPackage":
      return [CACHE_TAGS.packages, CACHE_TAGS.cms];
    case "destination":
      return [CACHE_TAGS.destinations, CACHE_TAGS.packages, CACHE_TAGS.cms];
    case "blogPost":
      return [CACHE_TAGS.blog, CACHE_TAGS.cms];
    case "faq":
      return [CACHE_TAGS.faqs, CACHE_TAGS.cms];
    case "testimonial":
      return [CACHE_TAGS.testimonials, CACHE_TAGS.cms];
    case "siteSettings":
      return [CACHE_TAGS.settings, CACHE_TAGS.cms];
    default:
      return [CACHE_TAGS.cms];
  }
}
