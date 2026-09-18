import type { BlogArticle } from "@/lib/blog/schema";
import { categoryLabel } from "@/lib/blog/schema";
import type { TravelDestination } from "@/lib/destinations/schema";
import { PACKAGE_TYPE_LABELS, packageDurationIso } from "@/lib/packages/schema";
import type { TravelPackage } from "@/lib/packages/schema";
import { canonicalSiteUrl } from "@/lib/site-config";
import { toIsoDateTime } from "@/lib/format";
import { paths } from "@/lib/seo/paths";
import { absoluteUrl } from "@/lib/seo/urls";
import {
  hasEnoughLocalBusinessData,
  hasVerifiedGeo,
  hasVerifiedStreetAddress,
  isAllowedGoogleMapsPlace,
  napFromSettings,
} from "@/lib/site/nap";
import type { SiteSettings } from "@/lib/site/schema";
import type { BreadcrumbItem, FaqItem } from "@/lib/types";

function compact<T>(value: T): T {
  return JSON.parse(
    JSON.stringify(value, (_key, nested) => {
      if (nested === undefined || nested === null || nested === "") {
        return undefined;
      }

      if (Array.isArray(nested) && nested.length === 0) {
        return undefined;
      }

      return nested;
    }),
  ) as T;
}

export function organizationId() {
  return `${canonicalSiteUrl()}/#organization`;
}

export function websiteId() {
  return `${canonicalSiteUrl()}/#website`;
}

export function travelAgencyId() {
  return `${canonicalSiteUrl()}/#travelagency`;
}

function verifiedPostalAddress(settings: SiteSettings) {
  const nap = napFromSettings(settings);

  if (!hasVerifiedStreetAddress(nap)) {
    return undefined;
  }

  return {
    "@type": "PostalAddress",
    streetAddress: nap.address,
    addressLocality: nap.locality,
    addressRegion: nap.region,
    postalCode: nap.postalCode,
    addressCountry: nap.country,
  };
}

function verifiedOpeningHours(hoursNote?: string) {
  if (!hoursNote) {
    return undefined;
  }

  const normalized = hoursNote.replace(/[\s*x×]/gi, "").toLowerCase();

  if (normalized !== "24/7") {
    return undefined;
  }

  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  };
}

function verifiedGeo(settings: SiteSettings) {
  const nap = napFromSettings(settings);

  if (!hasVerifiedGeo(nap)) {
    return undefined;
  }

  return {
    "@type": "GeoCoordinates",
    latitude: nap.latitude,
    longitude: nap.longitude,
  };
}

export function shouldEmitLocalBusiness(settings: SiteSettings): boolean {
  return hasEnoughLocalBusinessData(napFromSettings(settings));
}

function verifiedSameAs(settings: SiteSettings) {
  const nap = napFromSettings(settings);
  const profiles = settings.social
    .map((item) => item.href)
    .filter((href): href is string => Boolean(href));

  if (nap.mapsPlaceUrl && isAllowedGoogleMapsPlace(nap.mapsPlaceUrl)) {
    profiles.push(nap.mapsPlaceUrl);
  }

  return [...new Set(profiles)];
}

export function organizationJsonLd(settings: SiteSettings) {
  const nap = napFromSettings(settings);

  return compact({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: settings.name,
    legalName: settings.legalName,
    url: canonicalSiteUrl(),
    description: settings.description,
    image: absoluteUrl(settings.logo?.src ?? settings.shareImage.src),
    email: nap.email,
    telephone: nap.phone,
    sameAs: verifiedSameAs(settings),
  });
}

export function travelAgencyJsonLd(settings: SiteSettings) {
  if (!shouldEmitLocalBusiness(settings)) {
    return null;
  }

  const nap = napFromSettings(settings);

  return compact({
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": travelAgencyId(),
    name: nap.name,
    description: settings.description,
    url: canonicalSiteUrl(),
    image: absoluteUrl(settings.logo?.src ?? settings.shareImage.src),
    parentOrganization: {
      "@id": organizationId(),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir, India",
    },
    address: verifiedPostalAddress(settings),
    geo: verifiedGeo(settings),
    email: nap.email,
    telephone: nap.phone,
    openingHoursSpecification: verifiedOpeningHours(nap.hoursNote),
    hasMap:
      nap.mapsPlaceUrl && isAllowedGoogleMapsPlace(nap.mapsPlaceUrl)
        ? nap.mapsPlaceUrl
        : undefined,
    sameAs: verifiedSameAs(settings),
  });
}

export function contactPageJsonLd(settings: SiteSettings) {
  const entityId = shouldEmitLocalBusiness(settings)
    ? travelAgencyId()
    : organizationId();

  return compact({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(paths.contact)}#webpage`,
    url: absoluteUrl(paths.contact),
    name: `Contact ${settings.name}`,
    description: `Contact ${settings.name} to plan a Kashmir trip.`,
    isPartOf: {
      "@id": websiteId(),
    },
    about: {
      "@id": entityId,
    },
    mainEntity: {
      "@id": entityId,
    },
  });
}

export function aboutPageJsonLd(settings: SiteSettings) {
  const entityId = shouldEmitLocalBusiness(settings)
    ? travelAgencyId()
    : organizationId();

  return compact({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(paths.about)}#webpage`,
    url: absoluteUrl(paths.about),
    name: `About ${settings.name}`,
    description: settings.description,
    isPartOf: {
      "@id": websiteId(),
    },
    about: {
      "@id": entityId,
    },
    mainEntity: {
      "@id": entityId,
    },
  });
}

export function websiteJsonLd(settings: SiteSettings) {
  return compact({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: settings.name,
    url: canonicalSiteUrl(),
    description: settings.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": organizationId(),
    },
  });
}

export function faqPageJsonLd(items: FaqItem[]) {
  return compact({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}

export function faqJsonLd(items: FaqItem[]) {
  return faqPageJsonLd(items);
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return compact({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  });
}

export function destinationJsonLd(destination: TravelDestination) {
  return compact({
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${destination.name}, Kashmir`,
    alternateName: destination.name,
    description: destination.shortDescription,
    url: absoluteUrl(paths.destination(destination.slug)),
    image: absoluteUrl(destination.heroImage.src),
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir, India",
    },
    includesAttraction: destination.topAttractions.map((item) => ({
      "@type": "TouristAttraction",
      name: item.title,
      description: item.summary,
    })),
  });
}

export function destinationListJsonLd(items: TravelDestination[]) {
  return compact({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kashmir destinations",
    itemListElement: items.map((destination, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: destination.name,
      url: absoluteUrl(paths.destination(destination.slug)),
    })),
  });
}

export function touristTripJsonLd(
  tourPackage: TravelPackage,
  destinations: TravelDestination[] = [],
) {
  const stops = tourPackage.destinationsCovered
    .map((slug) => destinations.find((destination) => destination.slug === slug))
    .filter((destination): destination is TravelDestination => Boolean(destination));

  const itineraryDays = tourPackage.itinerary.map((day) => ({
    "@type": "ListItem",
    position: day.day,
    name: `Day ${day.day}: ${day.title}`,
    description: day.summary,
    url: day.destinationSlug
      ? absoluteUrl(paths.destination(day.destinationSlug))
      : undefined,
  }));

  const images = [
    tourPackage.heroImage,
    ...tourPackage.gallery,
  ]
    .map((image) => image.src)
    .filter((src, index, list) => list.indexOf(src) === index)
    .map((src) => absoluteUrl(src));

  return compact({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tourPackage.title,
    description: tourPackage.shortDescription,
    url: absoluteUrl(paths.package(tourPackage.slug)),
    image: images,
    duration: packageDurationIso(tourPackage.duration),
    touristType: touristTypeLabel(tourPackage.packageType),
    identifier: tourPackage.id,
    provider: {
      "@id": organizationId(),
    },
    itinerary: {
      "@type": "ItemList",
      name: `${tourPackage.title} itinerary`,
      itemListElement: itineraryDays,
    },
    mentions: stops.map((destination) => ({
      "@type": "TouristDestination",
      name: destination.name,
      url: absoluteUrl(paths.destination(destination.slug)),
    })),
    offers:
      tourPackage.startingPrice == null
        ? undefined
        : {
            "@type": "Offer",
            price: tourPackage.startingPrice,
            priceCurrency: tourPackage.priceCurrency,
            url: absoluteUrl(paths.package(tourPackage.slug)),
          },
  });
}

export function packageListJsonLd(packages: TravelPackage[]) {
  return compact({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kashmir tour packages",
    itemListElement: packages.map((tourPackage, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tourPackage.title,
      url: absoluteUrl(paths.package(tourPackage.slug)),
    })),
  });
}

export function articleJsonLd(post: BlogArticle) {
  return compact({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.featuredImage.src),
    datePublished: toIsoDateTime(post.publishedAt),
    dateModified: toIsoDateTime(post.updatedAt),
    author: {
      "@type": "Organization",
      name: post.author,
      url: canonicalSiteUrl(),
    },
    publisher: {
      "@id": organizationId(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(paths.blogPost(post.slug)),
    },
    url: absoluteUrl(paths.blogPost(post.slug)),
    articleSection: categoryLabel(post.category),
    keywords: post.tags.join(", "),
  });
}

export function blogListJsonLd(posts: BlogArticle[]) {
  return compact({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kashmir travel journal",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: absoluteUrl(paths.blogPost(post.slug)),
    })),
  });
}

function touristTypeLabel(packageType: TravelPackage["packageType"]) {
  switch (packageType) {
    case "honeymoon":
      return "Couples";
    case "family":
      return "Families";
    case "group":
      return "Groups";
    case "custom":
      return "Independent travelers";
    default:
      return PACKAGE_TYPE_LABELS[packageType];
  }
}
