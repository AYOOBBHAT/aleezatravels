import type { FaqItem, MediaAsset } from "@/lib/types";

/**
 * Blog post document shape.
 * Field names match the intended Sanity schema (`blogPost`) so this
 * file can be replaced by GROQ / Portable Text without renaming UI props.
 */
export const BLOG_CATEGORIES = [
  { slug: "kashmir-travel-guide", label: "Kashmir Travel Guide" },
  { slug: "kashmir-destinations", label: "Kashmir Destinations" },
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
  "travel-tips": "Travel Tips",
  honeymoon: "Honeymoon",
  "family-travel": "Family Travel",
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
