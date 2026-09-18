import {
  BLOG_CATEGORY_LABELS,
  type BlogArticle,
} from "@/lib/blog/schema";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function fail(id: string, message: string): never {
  throw new Error(`Blog post "${id}": ${message}`);
}

export function assertBlogArticle(doc: BlogArticle): BlogArticle {
  if (doc._type !== "blogPost") {
    fail(doc.id ?? "unknown", '_type must be "blogPost".');
  }

  if (!doc.id || !SLUG_PATTERN.test(doc.slug)) {
    fail(doc.id ?? "unknown", "id and a kebab-case slug are required.");
  }

  if (!doc.title || !doc.excerpt || doc.content.length === 0) {
    fail(doc.id, "title, excerpt, and content are required.");
  }

  if (!doc.featuredImage?.src || !doc.featuredImage.alt) {
    fail(doc.id, "featuredImage src and alt are required.");
  }

  if (!doc.author) {
    fail(doc.id, "author is required.");
  }

  if (!DATE_PATTERN.test(doc.publishedAt) || !DATE_PATTERN.test(doc.updatedAt)) {
    fail(doc.id, "publishedAt and updatedAt must be YYYY-MM-DD.");
  }

  if (doc.updatedAt < doc.publishedAt) {
    fail(doc.id, "updatedAt cannot be before publishedAt.");
  }

  if (!(doc.category in BLOG_CATEGORY_LABELS)) {
    fail(doc.id, `unknown category "${doc.category}".`);
  }

  if (!doc.seoTitle || !doc.seoDescription) {
    fail(doc.id, "seoTitle and seoDescription are required.");
  }

  const headingIds = new Set<string>();
  for (const block of doc.content) {
    if (block._type === "heading") {
      if (headingIds.has(block.id)) {
        fail(doc.id, `duplicate heading id "${block.id}".`);
      }
      headingIds.add(block.id);
    }
  }

  return doc;
}

export function assertBlogDocuments(documents: BlogArticle[]): BlogArticle[] {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const document of documents) {
    assertBlogArticle(document);

    if (ids.has(document.id) || slugs.has(document.slug)) {
      fail(document.id, "duplicate id or slug.");
    }

    ids.add(document.id);
    slugs.add(document.slug);
  }

  return documents;
}
