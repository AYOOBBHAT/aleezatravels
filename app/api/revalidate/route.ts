import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { sanityEnv } from "@/lib/sanity/env";
import { CACHE_TAGS, cacheTagsForSanityType } from "@/lib/sanity/tags";

export const runtime = "nodejs";

type SanityWebhookBody = {
  _type?: string;
  slug?: string | { current?: string | null } | null;
};

function slugValue(slug: SanityWebhookBody["slug"]): string | undefined {
  if (typeof slug === "string" && slug) {
    return slug;
  }

  if (slug && typeof slug === "object" && slug.current) {
    return slug.current;
  }

  return undefined;
}

function isAuthorized(request: Request): boolean {
  const secret = sanityEnv.revalidateSecret;

  if (!secret) {
    return false;
  }

  const header = request.headers.get("authorization");
  if (header === `Bearer ${secret}`) {
    return true;
  }

  const url = new URL(request.url);
  return url.searchParams.get("secret") === secret;
}

function pathsForType(type: string | undefined, slug?: string): string[] {
  switch (type) {
    case "travelPackage":
      return ["/", "/kashmir-tour-packages", slug ? `/packages/${slug}` : ""].filter(Boolean);
    case "destination":
      return ["/", "/destinations", slug ? `/destinations/${slug}` : ""].filter(Boolean);
    case "blogPost":
      return ["/blog", slug ? `/blog/${slug}` : ""].filter(Boolean);
    case "faq":
    case "testimonial":
    case "siteSettings":
      return ["/"];
    default:
      return ["/"];
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: SanityWebhookBody = {};

  try {
    body = (await request.json()) as SanityWebhookBody;
  } catch {
    body = {};
  }

  const tags = cacheTagsForSanityType(body._type);
  if (!tags.includes(CACHE_TAGS.cms)) {
    tags.push(CACHE_TAGS.cms);
  }

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  const slug = slugValue(body.slug);
  for (const path of pathsForType(body._type, slug)) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    tags,
    now: Date.now(),
  });
}
