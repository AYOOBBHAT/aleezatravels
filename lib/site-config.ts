import { env } from "@/lib/env";

function text(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function number(value: string | number | null | undefined): number | null {
  if (value == null || value === "") {
    return null;
  }

  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Verified business information for Aleeza Travels.
 *
 * Fill a field only when the value is confirmed. Leave the rest `null`.
 * Environment variables overlay these values so production secrets are not
 * committed. Never invent a street, phone, pin, hours, or social URL.
 */
export const businessConfig = {
  businessName: "Aleeza Travels",
  legalBusinessName: "Aleeza Travels",
  description:
    "Aleeza Travels is a Kashmir travel agency based in Srinagar. We plan Kashmir tour packages, honeymoon packages, family tours, and customized Kashmir trips across Jammu & Kashmir.",
  phone: "+919541268502",
  whatsapp: "+919541268502",
  email: "connect.aleezatravels@gmail.com",
  address: "Sarmarg, Handwara, Kupwara",
  city: "Srinagar",
  district: "Kupwara",
  state: "Jammu & Kashmir",
  country: "India",
  postalCode: "190001",
  latitude: null as number | null,
  longitude: null as number | null,
  businessHours: "24/7",
  googleMapsUrl: null as string | null,
  googleMapsEmbedUrl: null as string | null,
  instagramUrl: "https://www.instagram.com/aleezatravels",
  facebookUrl: null as string | null,
  websiteUrl: "https://aleezatravels.com",
} as const;

export type BusinessConfig = {
  businessName: string;
  legalBusinessName: string;
  description: string;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  district: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
  latitude: number | null;
  longitude: number | null;
  businessHours: string | null;
  googleMapsUrl: string | null;
  googleMapsEmbedUrl: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  websiteUrl: string | null;
};

/**
 * File defaults overlaid with env. CMS site settings overlay this result later.
 */
export function resolvedBusinessConfig(): BusinessConfig {
  return {
    businessName: text(businessConfig.businessName) ?? "Aleeza Travels",
    legalBusinessName:
      text(businessConfig.legalBusinessName) ??
      text(businessConfig.businessName) ??
      "Aleeza Travels",
    description: text(businessConfig.description) ?? "",
    phone: text(env.contactPhone) ?? text(businessConfig.phone),
    whatsapp: text(env.whatsapp) ?? text(businessConfig.whatsapp),
    email: text(env.contactEmail) ?? text(businessConfig.email),
    address: text(env.businessAddress) ?? text(businessConfig.address),
    city: text(env.businessCity) ?? text(businessConfig.city),
    district: text(env.businessDistrict) ?? text(businessConfig.district),
    state: text(env.businessState) ?? text(businessConfig.state),
    country: text(env.businessCountry) ?? text(businessConfig.country),
    postalCode: text(env.businessPostalCode) ?? text(businessConfig.postalCode),
    latitude: number(env.businessLatitude) ?? number(businessConfig.latitude),
    longitude: number(env.businessLongitude) ?? number(businessConfig.longitude),
    businessHours: text(env.businessHours) ?? text(businessConfig.businessHours),
    googleMapsUrl: text(env.mapsPlaceUrl) ?? text(businessConfig.googleMapsUrl),
    googleMapsEmbedUrl:
      text(env.mapsEmbedUrl) ?? text(businessConfig.googleMapsEmbedUrl),
    instagramUrl: text(env.instagram) ?? text(businessConfig.instagramUrl),
    facebookUrl: text(env.facebook) ?? text(businessConfig.facebookUrl),
    websiteUrl:
      text(env.explicitSiteUrl) ??
      text(businessConfig.websiteUrl) ??
      env.siteUrl,
  };
}

/** Canonical public origin. Used for metadata, sitemap, robots, and JSON-LD. */
export function canonicalSiteUrl(): string {
  return resolvedBusinessConfig().websiteUrl ?? env.siteUrl;
}
