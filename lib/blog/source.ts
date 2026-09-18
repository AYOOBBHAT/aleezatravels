import "server-only";

import { cache } from "react";
import { articleDocuments } from "@/lib/blog/data";
import { mapSanityBlogPost, BLOG_POSTS_GROQ, type SanityBlogPost } from "@/lib/blog/cms";
import type { BlogArticle, BlogCategorySlug } from "@/lib/blog/schema";
import { assertBlogDocuments } from "@/lib/blog/validate";
import { fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";

const localPosts = assertBlogDocuments(articleDocuments);

function byNewest(a: BlogArticle, b: BlogArticle) {
  return b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title);
}

async function loadDocuments(): Promise<BlogArticle[]> {
  const remote = await fetchSanity<SanityBlogPost[]>(
    BLOG_POSTS_GROQ,
    {},
    { tags: [CACHE_TAGS.blog, CACHE_TAGS.cms] },
  );

  if (!remote) {
    return localPosts;
  }

  try {
    const mapped = remote.map(mapSanityBlogPost).filter((doc) => doc.published);

    if (mapped.length === 0) {
      return localPosts;
    }

    return assertBlogDocuments(mapped);
  } catch (error) {
    console.error("[sanity] Blog mapping failed; using local articles.", error);
    return localPosts;
  }
}

export const getPublishedPosts = cache(async (): Promise<BlogArticle[]> => {
  return (await loadDocuments()).filter((doc) => doc.published).sort(byNewest);
});

export async function getFeaturedPosts(): Promise<BlogArticle[]> {
  return (await getPublishedPosts()).filter((doc) => doc.featured);
}

export async function getPostBySlug(slug: string): Promise<BlogArticle | undefined> {
  return (await getPublishedPosts()).find((doc) => doc.slug === slug);
}

export async function getPost(slug: string): Promise<BlogArticle | undefined> {
  return getPostBySlug(slug);
}

export async function getPostSlugs(): Promise<string[]> {
  return (await getPublishedPosts()).map((doc) => doc.slug);
}

export async function getPostsByCategory(
  category: BlogCategorySlug,
): Promise<BlogArticle[]> {
  return (await getPublishedPosts()).filter((doc) => doc.category === category);
}

export async function getRelatedPosts(
  post: BlogArticle,
  limit = 3,
): Promise<BlogArticle[]> {
  const scored = (await getPublishedPosts())
    .filter((item) => item.id !== post.id)
    .map((item) => {
      const tagScore = item.tags.filter((tag) => post.tags.includes(tag)).length;
      const categoryScore = item.category === post.category ? 4 : 0;
      const featuredScore = item.featured ? 1 : 0;

      return {
        item,
        score: tagScore + categoryScore + featuredScore,
      };
    })
    .sort(
      (a, b) =>
        b.score - a.score || b.item.publishedAt.localeCompare(a.item.publishedAt),
    );

  return scored.slice(0, limit).map((entry) => entry.item);
}

/** Local catalogue only. */
export function getPublishedPostsSync(): BlogArticle[] {
  return localPosts.filter((doc) => doc.published).sort(byNewest);
}
