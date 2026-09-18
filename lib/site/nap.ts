import type { SiteSettings } from "@/lib/site/schema";

/**
 * Google Business Profile-ready NAP from the central business config
 * (plus env and CMS overlays). Empty fields are omitted — never invent them.
 */
export type BusinessNap = {
  name: string;
  address?: string;
  locality?: string;
  district?: string;
  region?: string;
  country?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  email?: string;
  whatsapp?: string;
  mapsEmbedUrl?: string;
  mapsPlaceUrl?: string;
  hoursNote?: string;
};

export function napFromSettings(settings: SiteSettings): BusinessNap {
  return {
    name: settings.name,
    address: settings.location.address,
    locality: settings.location.city,
    district: settings.location.district,
    region: settings.location.region,
    country: settings.location.country,
    postalCode: settings.location.postalCode,
    latitude: settings.location.latitude,
    longitude: settings.location.longitude,
    phone: settings.contact.phone,
    email: settings.contact.email,
    whatsapp: settings.contact.whatsapp,
    mapsEmbedUrl: settings.mapsEmbedUrl,
    mapsPlaceUrl: settings.mapsPlaceUrl,
    hoursNote: settings.hoursNote,
  };
}

export function hasVerifiedStreetAddress(nap: BusinessNap): boolean {
  return Boolean(nap.address);
}

export function hasVerifiedGeo(nap: BusinessNap): boolean {
  return nap.latitude != null && nap.longitude != null;
}

export function hasEnoughLocalBusinessData(nap: BusinessNap): boolean {
  return Boolean(nap.phone || nap.address || hasVerifiedGeo(nap));
}

export function formattedStreetAddress(nap: BusinessNap): string | undefined {
  if (!nap.address) {
    return undefined;
  }

  const parts = [
    nap.address,
    nap.locality,
    nap.district,
    nap.region,
    nap.postalCode,
    nap.country,
  ].filter((part): part is string => Boolean(part));

  const unique: string[] = [];

  for (const part of parts) {
    const key = part.toLowerCase();
    if (unique.some((existing) => existing.toLowerCase().includes(key))) {
      continue;
    }
    unique.push(part);
  }

  return unique.join(", ");
}

export function isAllowedGoogleMapsEmbed(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host !== "google.com" && host !== "maps.google.com") {
      return false;
    }

    return parsed.pathname.startsWith("/maps");
  } catch {
    return false;
  }
}

export function isAllowedGoogleMapsPlace(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    return (
      host === "google.com" ||
      host === "maps.google.com" ||
      host === "maps.app.goo.gl" ||
      host === "goo.gl"
    );
  } catch {
    return false;
  }
}
