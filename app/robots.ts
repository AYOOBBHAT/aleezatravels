import type { MetadataRoute } from "next";
import { canonicalSiteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const origin = canonicalSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/dashboard",
          "/dashboard/",
          "/private",
          "/private/",
          "/api",
          "/api/",
          "/studio",
          "/studio/",
        ],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
