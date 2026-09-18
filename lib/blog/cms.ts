import type { FaqItem, MediaAsset } from "@/lib/types";
import type { BlogArticle, BlogCategorySlug } from "@/lib/blog/schema";
import { portableTextToBlocks, toIsoDate } from "@/lib/sanity/portable-text";

/**
 * Sanity CMS contract for blog posts.
 *
 * Migration (no UI changes):
 * 1. Copy `blogPostSanitySchema` into Sanity Studio (`schemaTypes`).
 * 2. Add a Sanity client using env.
 * 3. Replace `loadDocuments()` in `source.ts` with:
 *
 *      import { sanity } from "@/lib/sanity/client";
 *      import { BLOG_POSTS_GROQ } from "@/lib/blog/cms";
 *      return assertBlogDocuments(await sanity.fetch(BLOG_POSTS_GROQ));
 *
 * Portable Text can replace the local `content` blocks later; keep
 * `ArticleBody` as the single renderer so the rest of the UI stays put.
 */

const imageProjection = `{
  "src": asset->url,
  "alt": coalesce(alt, ^.title, ""),
  "width": coalesce(asset->metadata.dimensions.width, 1920),
  "height": coalesce(asset->metadata.dimensions.height, 1080),
  "credit": credit
}`;

export const BLOG_POST_PROJECTION = `{
  _type,
  "id": coalesce(id, _id),
  "slug": slug.current,
  title,
  excerpt,
  "content": coalesce(body, content),
  "featuredImage": featuredImage ${imageProjection},
  author,
  publishedAt,
  updatedAt,
  category,
  tags,
  seoTitle,
  seoDescription,
  "relatedPackageSlugs": coalesce(relatedPackages[]->slug.current, relatedPackageSlugs),
  "relatedDestinationSlugs": coalesce(relatedDestinations[]->slug.current, relatedDestinationSlugs),
  faqs[] { question, answer },
  featured,
  published
}`;

export const BLOG_POSTS_GROQ = `*[_type == "blogPost"] | order(publishedAt desc) ${BLOG_POST_PROJECTION}`;

export const BLOG_POST_BY_SLUG_GROQ = `*[_type == "blogPost" && slug.current == $slug][0] ${BLOG_POST_PROJECTION}`;

export const blogPostSanitySchema = {
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    { name: "id", title: "Public id", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "title", title: "Title", type: "string" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    {
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      fields: [
        { name: "alt", type: "string", title: "Alt text" },
        { name: "credit", type: "string", title: "Credit" },
      ],
    },
    { name: "author", title: "Author", type: "string" },
    { name: "publishedAt", title: "Published at", type: "date" },
    { name: "updatedAt", title: "Updated at", type: "date" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "kashmir-travel-guide",
          "kashmir-destinations",
          "travel-tips",
          "honeymoon",
          "family-travel",
        ],
      },
    },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "seoTitle", title: "SEO title", type: "string" },
    { name: "seoDescription", title: "SEO description", type: "text" },
    {
      name: "relatedPackageSlugs",
      title: "Related package slugs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "relatedDestinationSlugs",
      title: "Related destination slugs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "published", title: "Published", type: "boolean", initialValue: false },
  ],
} as const;

export type SanitySlug = string | { current?: string | null } | null;

export type SanityBlogPost = Partial<BlogArticle> & {
  _id?: string;
  slug?: SanitySlug;
  featuredImage?: MediaAsset | null;
  content?: unknown;
  body?: unknown;
  faqs?: FaqItem[] | null;
  category?: BlogCategorySlug | null;
};

function slugValue(slug: SanitySlug | undefined): string {
  if (typeof slug === "string") {
    return slug;
  }

  return slug?.current?.trim() ?? "";
}

/**
 * Maps a Sanity document (raw or GROQ-projected) onto `BlogArticle`.
 * Portable Text can replace `content` later without changing page props.
 */
export function mapSanityBlogPost(doc: SanityBlogPost): BlogArticle {
  const title = doc.title?.trim() ?? "";
  const slug = slugValue(doc.slug);
  const featuredImage = doc.featuredImage;

  if (!featuredImage) {
    throw new Error(`Blog post "${slug || title}" is missing a featured image.`);
  }

  return {
    _type: "blogPost",
    id: doc.id?.trim() || doc._id || slug,
    slug,
    title,
    excerpt: doc.excerpt?.trim() ?? "",
    content: portableTextToBlocks(doc.content, slug),
    featuredImage,
    author: doc.author?.trim() || "Aleeza Travels",
    publishedAt: toIsoDate(doc.publishedAt),
    updatedAt: toIsoDate(doc.updatedAt) || toIsoDate(doc.publishedAt),
    category: doc.category ?? "kashmir-travel-guide",
    tags: doc.tags ?? [],
    seoTitle: doc.seoTitle?.trim() || title,
    seoDescription: doc.seoDescription?.trim() || doc.excerpt?.trim() || "",
    relatedPackageSlugs: doc.relatedPackageSlugs ?? [],
    relatedDestinationSlugs: doc.relatedDestinationSlugs ?? [],
    faqs: doc.faqs ?? [],
    featured: Boolean(doc.featured),
    published: Boolean(doc.published),
  };
}

export function mapSanityBlogPosts(docs: SanityBlogPost[]): BlogArticle[] {
  return docs.map(mapSanityBlogPost);
}
