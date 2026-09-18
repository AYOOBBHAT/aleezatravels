import type { MediaAsset, SocialLink } from "@/lib/types";

export type SiteSettings = {
  _type: "siteSettings";
  name: string;
  legalName: string;
  tagline: string;
  title: string;
  description: string;
  locale: string;
  location: {
    city?: string;
    district?: string;
    region?: string;
    country?: string;
    postalCode?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
  };
  shareImage: MediaAsset;
  logo?: MediaAsset;
  contact: {
    email?: string;
    phone?: string;
    whatsapp?: string;
  };
  mapsEmbedUrl?: string;
  mapsPlaceUrl?: string;
  hoursNote?: string;
  social: SocialLink[];
};
