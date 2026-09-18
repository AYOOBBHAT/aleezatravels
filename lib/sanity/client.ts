import "server-only";

import { createClient, type SanityClient } from "next-sanity";
import { isSanityConfigured, sanityEnv } from "@/lib/sanity/env";

let cachedClient: SanityClient | null | undefined;

/**
 * Server-only Sanity client for published content.
 * Uses a read token only when SANITY_API_READ_TOKEN is set (private datasets).
 * The token is never inlined into the browser bundle.
 */
export function getSanityClient(): SanityClient | null {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  if (!isSanityConfigured() || !sanityEnv.projectId) {
    cachedClient = null;
    return cachedClient;
  }

  const token = sanityEnv.readToken;

  cachedClient = createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    useCdn: !token,
    token,
    perspective: "published",
    stega: false,
  });

  return cachedClient;
}
