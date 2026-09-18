import type { MediaAsset } from "@/lib/types";
import { SANITY_IMAGE_PROJECTION } from "@/lib/sanity/image";
import type { SiteSettings } from "@/lib/site/schema";

export const SITE_SETTINGS_GROQ = `*[_type == "siteSettings"][0] {
  _type,
  name,
  legalName,
  tagline,
  seoTitle,
  seoDescription,
  phone,
  whatsapp,
  email,
  address,
  addressLocality,
  addressRegion,
  addressCountry,
  district,
  postalCode,
  latitude,
  longitude,
  mapsEmbedUrl,
  mapsPlaceUrl,
  hoursNote,
  "logo": logo ${SANITY_IMAGE_PROJECTION},
  "shareImage": shareImage ${SANITY_IMAGE_PROJECTION},
  social[] { name, href }
}`;

export type SanitySiteSettings = {
  _type?: string;
  name?: string | null;
  legalName?: string | null;
  tagline?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  email?: string | null;
  address?: string | null;
  addressLocality?: string | null;
  addressRegion?: string | null;
  addressCountry?: string | null;
  district?: string | null;
  postalCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  mapsEmbedUrl?: string | null;
  mapsPlaceUrl?: string | null;
  hoursNote?: string | null;
  logo?: MediaAsset | null;
  shareImage?: MediaAsset | null;
  social?: Array<{ name?: string | null; href?: string | null }> | null;
};

function usableImage(image: MediaAsset | null | undefined): MediaAsset | undefined {
  if (!image?.src) {
    return undefined;
  }

  return {
    ...image,
    alt: image.alt || "Aleeza Travels",
    width: image.width || 1920,
    height: image.height || 1080,
  };
}

export function overlaySiteSettings(
  remote: SanitySiteSettings | null,
  base: SiteSettings,
): SiteSettings {
  if (!remote) {
    return base;
  }

  const shareImage = usableImage(remote.shareImage) ?? base.shareImage;
  const logo = usableImage(remote.logo);
  const social =
    remote.social && remote.social.length > 0
      ? remote.social
          .filter((item) => item.name)
          .map((item) => ({
            name: item.name!.trim(),
            href: item.href?.trim() || undefined,
          }))
      : base.social;

  return {
    ...base,
    name: remote.name?.trim() || base.name,
    legalName: remote.legalName?.trim() || remote.name?.trim() || base.legalName,
    tagline: remote.tagline?.trim() || base.tagline,
    title: remote.seoTitle?.trim() || base.title,
    description: remote.seoDescription?.trim() || base.description,
    location: {
      city: remote.addressLocality?.trim() || base.location.city,
      district: remote.district?.trim() || base.location.district,
      region: remote.addressRegion?.trim() || base.location.region,
      country: remote.addressCountry?.trim() || base.location.country,
      postalCode: remote.postalCode?.trim() || base.location.postalCode,
      address: remote.address?.trim() || base.location.address,
      latitude:
        remote.latitude != null && Number.isFinite(remote.latitude)
          ? remote.latitude
          : base.location.latitude,
      longitude:
        remote.longitude != null && Number.isFinite(remote.longitude)
          ? remote.longitude
          : base.location.longitude,
    },
    shareImage,
    logo,
    contact: {
      email: remote.email?.trim() || base.contact.email,
      phone: remote.phone?.trim() || base.contact.phone,
      whatsapp: remote.whatsapp?.trim() || base.contact.whatsapp,
    },
    mapsEmbedUrl: remote.mapsEmbedUrl?.trim() || base.mapsEmbedUrl,
    mapsPlaceUrl: remote.mapsPlaceUrl?.trim() || base.mapsPlaceUrl,
    hoursNote: remote.hoursNote?.trim() || base.hoursNote,
    social,
  };
}
