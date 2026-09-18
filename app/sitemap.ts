import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog/source";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { getPublishedPackages } from "@/lib/packages/source";
import { siteRoutes } from "@/lib/data/site";
import { paths } from "@/lib/seo/paths";
import { absoluteUrl } from "@/lib/seo/urls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [packages, posts, destinations] = await Promise.all([
    getPublishedPackages(),
    getPublishedPosts(),
    getPublishedDestinations(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = siteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((destination) => ({
    url: absoluteUrl(paths.destination(destination.slug)),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((tourPackage) => ({
    url: absoluteUrl(paths.package(tourPackage.slug)),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPostRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(paths.blogPost(post.slug)),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...blogPostRoutes];
}
