import "server-only";

import { headers } from "next/headers";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 8;
const hits = new Map<string, number[]>();

function clientKey(headerList: Headers): string {
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return headerList.get("x-real-ip")?.trim() || "unknown";
}

export async function enquiryIsRateLimited(): Promise<boolean> {
  const headerList = await headers();
  const key = clientKey(headerList);
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);

  if (recent.length >= MAX_SUBMISSIONS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);
  return false;
}
