import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/blog/article-detail";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/blog/source";
import { categoryLabel } from "@/lib/blog/schema";
import { getDestination } from "@/lib/destinations/source";
import { getPackageBySlug } from "@/lib/packages/source";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Article not found",
      description: "This journal article could not be found.",
      path: paths.blogPost(slug),
      index: false,
    });
  }

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: paths.blogPost(post.slug),
    image: post.featuredImage,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      section: categoryLabel(post.category),
    },
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [relatedPosts, relatedPackages] = await Promise.all([
    getRelatedPosts(post),
    Promise.all(post.relatedPackageSlugs.map((packageSlug) => getPackageBySlug(packageSlug))),
  ]);

  const relatedDestinations = (
    await Promise.all(
      post.relatedDestinationSlugs.map((destinationSlug) => getDestination(destinationSlug)),
    )
  ).filter((destination) => destination !== undefined);

  return (
    <main id="main-content">
      <ArticleDetail
        post={post}
        relatedPosts={relatedPosts}
        relatedPackages={relatedPackages.filter((item) => item !== undefined)}
        relatedDestinations={relatedDestinations}
      />
    </main>
  );
}
