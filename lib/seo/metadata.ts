import type { Metadata } from "next";
import { keywords, siteConfig } from "@/lib/data/site";
import { env } from "@/lib/env";
import { toIsoDateTime } from "@/lib/format";
import { absoluteUrl } from "@/lib/seo/urls";
import { canonicalSiteUrl } from "@/lib/site-config";
import type { SiteSettings } from "@/lib/site/schema";
import type { MediaAsset } from "@/lib/types";

export const defaultShareImage: MediaAsset = siteConfig.shareImage;

type ArticleMetadata = {
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
  tags?: string[];
  section?: string;
};

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absoluteTitle?: boolean;
  image?: MediaAsset;
  article?: ArticleMetadata;
};

function socialImage(image: MediaAsset) {
  return {
    url: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt,
  };
}

export function createRootMetadata(settings?: SiteSettings): Metadata {
  const title = settings?.title ?? siteConfig.title;
  const description = settings?.description ?? siteConfig.description;
  const name = settings?.name ?? siteConfig.name;
  const image = socialImage(settings?.shareImage ?? defaultShareImage);

  return {
    metadataBase: new URL(canonicalSiteUrl()),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    applicationName: name,
    authors: [{ name }],
    creator: name,
    publisher: name,
    category: "travel",
    openGraph: {
      type: "website",
      locale: settings?.locale ?? siteConfig.locale,
      siteName: name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    ...(env.googleSiteVerification
      ? { verification: { google: env.googleSiteVerification } }
      : {}),
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  absoluteTitle = false,
  image = defaultShareImage,
  article,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const brandedTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const social = socialImage(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(article
      ? { authors: article.authors.map((name) => ({ name })) }
      : {}),
    alternates: {
      canonical: url,
    },
    openGraph: article
      ? {
          title: brandedTitle,
          description,
          url,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "article",
          publishedTime: toIsoDateTime(article.publishedTime),
          modifiedTime: toIsoDateTime(article.modifiedTime),
          authors: article.authors,
          tags: article.tags,
          section: article.section,
          images: [social],
        }
      : {
          title: brandedTitle,
          description,
          url,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "website",
          images: [social],
        },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [social],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false, noimageindex: true },
        },
  };
}

export function notFoundMetadata(): Metadata {
  return {
    title: "Page not found",
    description: "This page does not exist on the Aleeza Travels website.",
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
  };
}
