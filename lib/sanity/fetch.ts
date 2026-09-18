import "server-only";

import { getSanityClient } from "@/lib/sanity/client";
import { isSanityConfigured, sanityEnv } from "@/lib/sanity/env";
import { CACHE_TAGS, type CacheTag } from "@/lib/sanity/tags";

type FetchOptions = {
  tags?: CacheTag[];
  revalidate?: number | false;
};

/**
 * Fetch published Sanity content with Next.js cache tags.
 *
 * Returns null when Sanity is not configured, times out, or errors so
 * callers can keep serving local fallback content.
 */
export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: FetchOptions = {},
): Promise<T | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  const client = getSanityClient();

  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: options.revalidate ?? sanityEnv.revalidateSeconds,
        tags: options.tags ?? [CACHE_TAGS.cms],
      },
      signal: AbortSignal.timeout(5000),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[sanity] Fetch failed; using local content.", message);
    return null;
  }
}

/**
 * Use CMS documents when at least one published item exists.
 * Otherwise keep the local catalogue so the site stays up during setup or outages.
 */
export function cmsOrFallback<T>(
  remote: T[] | null,
  fallback: T[],
  isPublished: (item: T) => boolean = () => true,
): T[] {
  if (!remote) {
    return fallback;
  }

  const published = remote.filter(isPublished);

  if (published.length === 0) {
    return fallback;
  }

  return published;
}
