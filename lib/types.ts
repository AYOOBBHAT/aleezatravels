export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type SiteRoute = {
  path: string;
  label: string;
  description: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
};

/** Card-sized destination fields. Full CMS documents live in `lib/destinations/schema.ts`. */
export type Destination = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  highlights: string[];
  image: MediaAsset;
};

export type TrustItem = {
  title: string;
  summary: string;
  icon: "map" | "landmark" | "hotel" | "car" | "headset";
};

export type WhyChooseItem = {
  title: string;
  summary: string;
  icon:
    | "itinerary"
    | "hotel"
    | "plane"
    | "car"
    | "binoculars"
    | "heart"
    | "users"
    | "headset";
};

export type HowItWorksStep = {
  step: number;
  title: string;
  summary: string;
};

export type HoneymoonFeature = {
  title: string;
  summary: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  customerName: string;
  quote: string;
  date?: string;
  trip?: string;
  packageSlug?: string;
  photo?: MediaAsset;
  permissionGranted: boolean;
  verified: boolean;
};

export type EnquiryOption = {
  value: string;
  label: string;
};

export type SocialLink = {
  name: string;
  href?: string;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

/**
 * Legacy card-sized journal fields.
 * Full CMS documents live in `lib/blog/schema.ts` as `BlogArticle`.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  image?: MediaAsset;
  relatedPackageSlugs?: string[];
  relatedDestinationSlugs?: string[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  icon: "mountain" | "heart" | "users" | "bus" | "hotel" | "map";
};
