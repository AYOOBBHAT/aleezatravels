import "server-only";

function readOptional(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

/**
 * Sanity credentials.
 *
 * Public: project id, dataset, API version (needed by Studio in the browser).
 * Private: SANITY_API_READ_TOKEN and SANITY_REVALIDATE_SECRET stay server-only.
 * Never prefix the token or webhook secret with NEXT_PUBLIC_.
 */
export const sanityEnv = {
  projectId: readOptional("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: readOptional("NEXT_PUBLIC_SANITY_DATASET") ?? "production",
  apiVersion: readOptional("NEXT_PUBLIC_SANITY_API_VERSION") ?? "2026-01-01",
  readToken: readOptional("SANITY_API_READ_TOKEN"),
  revalidateSecret: readOptional("SANITY_REVALIDATE_SECRET"),
  /** Seconds. Used as the fetch cache lifetime until a webhook expires the tag. */
  revalidateSeconds: 60,
};

export function isSanityConfigured(): boolean {
  const id = sanityEnv.projectId;
  return Boolean(id && id !== "placeholder" && id !== "unset");
}
