import type { FaqItem, MediaAsset } from "@/lib/types";

/**
 * Blog post document shape.
 * Field names match the intended Sanity schema (`blogPost`) so this
 * file can be replaced by GROQ / Portable Text without renaming UI props.
 */
export const BLOG_CATEGORIES = [
  { slug: "kashmir-travel-guide", label: "Kashmir Travel Guide" },
  { slug: "kashmir-destinations", label: "Kashmir Destinations" },
  { slug: "corporate-travel", label: "Corporate Travel" },
  { slug: "travel-tips", label: "Travel Tips" },
  { slug: "honeymoon", label: "Honeymoon" },
  { slug: "family-travel", label: "Family Travel" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export type BlogSpan = {
  text: string;
  href?: string;
};

export type BlogHeadingBlock = {
  _type: "heading";
  _key: string;
  id: string;
  text: string;
  level?: 2 | 3;
};

export type BlogParagraphBlock = {
  _type: "paragraph";
  _key: string;
  spans: BlogSpan[];
};

export type BlogListBlock = {
  _type: "list";
  _key: string;
  style: "bullet";
  items: string[];
};

export type BlogNoteBlock = {
  _type: "note";
  _key: string;
  text: string;
};

export type BlogBlock =
  | BlogHeadingBlock
  | BlogParagraphBlock
  | BlogListBlock
  | BlogNoteBlock;

export type BlogArticle = {
  _type: "blogPost";
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogBlock[];
  featuredImage: MediaAsset;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: BlogCategorySlug;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  relatedPackageSlugs: string[];
  relatedDestinationSlugs: string[];
  faqs: FaqItem[];
  featured: boolean;
  published: boolean;
};

export const BLOG_CATEGORY_LABELS: Record<BlogCategorySlug, string> = {
  "kashmir-travel-guide": "Kashmir Travel Guide",
  "kashmir-destinations": "Kashmir Destinations",
  "corporate-travel": "Corporate Travel",
  "travel-tips": "Travel Tips",
  honeymoon: "Honeymoon",
  "family-travel": "Family Travel",
};

export const BLOG_CATEGORY_DESCRIPTIONS: Record<BlogCategorySlug, string> = {
  "kashmir-travel-guide":
    "Practical notes on seasons, first visits, and how we write a Kashmir itinerary.",
  "kashmir-destinations":
    "Place-by-place notes for Srinagar, Gulmarg, Pahalgam, Sonamarg, and quieter meadows.",
  "corporate-travel":
    "Guides and ideas for companies planning team trips, corporate retreats, employee getaways and group travel to Kashmir.",
  "travel-tips": "Packing, budgets, and the practical pieces of a Kashmir trip.",
  honeymoon: "Pacing, houseboats on request, and slower Kashmir stays for couples.",
  "family-travel": "How we pace Kashmir trips for mixed-age groups and school dates.",
};

export function categoryLabel(slug: BlogCategorySlug): string {
  return BLOG_CATEGORY_LABELS[slug];
}

export function isBlogCategorySlug(value: unknown): value is BlogCategorySlug {
  return typeof value === "string" && value in BLOG_CATEGORY_LABELS;
}

export function tableOfContents(content: BlogBlock[]): { id: string; text: string }[] {
  return content
    .filter((block): block is BlogHeadingBlock => block._type === "heading")
    .map((block) => ({ id: block.id, text: block.text }));
}

export function readingTimeMinutes(content: BlogBlock[]): number {
  const words = content.reduce((total, block) => {
    if (block._type === "paragraph") {
      return (
        total +
        block.spans.reduce(
          (count, span) => count + span.text.trim().split(/\s+/).filter(Boolean).length,
          0,
        )
      );
    }

    if (block._type === "heading" || block._type === "note") {
      return total + block.text.trim().split(/\s+/).filter(Boolean).length;
    }

    if (block._type === "list") {
      return (
        total +
        block.items.reduce(
          (count, item) => count + item.trim().split(/\s+/).filter(Boolean).length,
          0,
        )
      );
    }

    return total;
  }, 0);

  return Math.max(1, Math.round(words / 200));
}
