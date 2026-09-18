import "server-only";

import { cache } from "react";
import { siteConfig } from "@/lib/data/site";
import { resolvedBusinessConfig } from "@/lib/site-config";
import { overlaySiteSettings, SITE_SETTINGS_GROQ, type SanitySiteSettings } from "@/lib/site/cms";
import { fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";
import type { SiteSettings } from "@/lib/site/schema";

function localSettings(): SiteSettings {
  const business = resolvedBusinessConfig();

  return {
    _type: "siteSettings",
    name: business.businessName,
    legalName: business.legalBusinessName,
    tagline: siteConfig.tagline,
    title: siteConfig.title,
    description: business.description,
    locale: siteConfig.locale,
    location: {
      city: business.city ?? undefined,
      district: business.district ?? undefined,
      region: business.state ?? undefined,
      country: business.country ?? undefined,
      postalCode: business.postalCode ?? undefined,
      address: business.address ?? undefined,
      latitude: business.latitude ?? undefined,
      longitude: business.longitude ?? undefined,
    },
    shareImage: siteConfig.shareImage,
    contact: {
      email: business.email ?? undefined,
      phone: business.phone ?? undefined,
      whatsapp: business.whatsapp ?? undefined,
    },
    mapsEmbedUrl: business.googleMapsEmbedUrl ?? undefined,
    mapsPlaceUrl: business.googleMapsUrl ?? undefined,
    hoursNote: business.businessHours ?? undefined,
    social: [...siteConfig.social],
  };
}

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const base = localSettings();
  const remote = await fetchSanity<SanitySiteSettings | null>(
    SITE_SETTINGS_GROQ,
    {},
    { tags: [CACHE_TAGS.settings, CACHE_TAGS.cms] },
  );

  try {
    return overlaySiteSettings(remote, base);
  } catch (error) {
    console.error("[sanity] Site settings mapping failed; using local defaults.", error);
    return base;
  }
});
