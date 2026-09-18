function readOptional(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function firstOptional(...names: string[]): string | undefined {
  for (const name of names) {
    const value = readOptional(name);
    if (value) {
      return value;
    }
  }

  return undefined;
}

function readOptionalSiteUrl(): string | undefined {
  const value = firstOptional("NEXT_PUBLIC_SITE_URL");
  return value ? value.replace(/\/$/, "") : undefined;
}

/**
 * Runtime configuration.
 *
 * Public contact values may be set as BUSINESS_EMAIL / BUSINESS_PHONE /
 * WHATSAPP_NUMBER (read on the server) or as NEXT_PUBLIC_* equivalents when
 * they must be inlined. Mail credentials must never use NEXT_PUBLIC_.
 * Sanity site settings overlay these values when the CMS is available.
 */
export const env = {
  /**
   * Set only to override the canonical website in `lib/site-config.ts`
   * (for example a preview deployment). Leave unset in production.
   */
  explicitSiteUrl: readOptionalSiteUrl(),
  siteUrl: readOptionalSiteUrl() ?? "http://localhost:3000",
  contactEmail: firstOptional(
    "BUSINESS_EMAIL",
    "NEXT_PUBLIC_BUSINESS_EMAIL",
    "NEXT_PUBLIC_CONTACT_EMAIL",
  ),
  contactPhone: firstOptional(
    "BUSINESS_PHONE",
    "NEXT_PUBLIC_BUSINESS_PHONE",
    "NEXT_PUBLIC_CONTACT_PHONE",
  ),
  whatsapp: firstOptional(
    "WHATSAPP_NUMBER",
    "NEXT_PUBLIC_WHATSAPP_NUMBER",
    "NEXT_PUBLIC_WHATSAPP",
  ),
  instagram: readOptional("NEXT_PUBLIC_INSTAGRAM_URL"),
  facebook: readOptional("NEXT_PUBLIC_FACEBOOK_URL"),
  youtube: readOptional("NEXT_PUBLIC_YOUTUBE_URL"),
  businessAddress: readOptional("BUSINESS_ADDRESS"),
  mapsEmbedUrl: firstOptional(
    "GOOGLE_MAPS_EMBED_URL",
    "NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL",
  ),
  mapsPlaceUrl: firstOptional(
    "GOOGLE_MAPS_PLACE_URL",
    "NEXT_PUBLIC_GOOGLE_MAPS_PLACE_URL",
  ),
  businessHours: readOptional("BUSINESS_HOURS"),
  businessCity: readOptional("BUSINESS_CITY"),
  businessDistrict: readOptional("BUSINESS_DISTRICT"),
  businessState: firstOptional("BUSINESS_STATE", "BUSINESS_REGION"),
  businessCountry: readOptional("BUSINESS_COUNTRY"),
  businessPostalCode: readOptional("BUSINESS_POSTAL_CODE"),
  businessLatitude: readOptional("BUSINESS_LATITUDE"),
  businessLongitude: readOptional("BUSINESS_LONGITUDE"),
  googleSiteVerification: readOptional("GOOGLE_SITE_VERIFICATION"),
  gaMeasurementId: firstOptional(
    "NEXT_PUBLIC_GA_MEASUREMENT_ID",
    "GA_MEASUREMENT_ID",
  ),
  gtmId: firstOptional("NEXT_PUBLIC_GTM_ID", "GTM_ID"),
} as const;
