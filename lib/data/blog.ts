import { getPublishedPostsSync } from "@/lib/blog/source";

/**
 * Published journal entries. Full CMS documents live in `lib/blog`.
 */
export const blogPosts = getPublishedPostsSync();
