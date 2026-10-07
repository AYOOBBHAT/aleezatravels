import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";
import { CorporateCta } from "@/components/cta/corporate-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategoryHref } from "@/lib/blog/links";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_DESCRIPTIONS,
  categoryLabel,
  isBlogCategorySlug,
} from "@/lib/blog/schema";
import { getPostsByCategory } from "@/lib/blog/source";
import { blogListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    return createPageMetadata({
      title: "Category not found",
      description: "This journal category could not be found.",
      path: paths.blogCategory(slug),
      index: false,
    });
  }

  return createPageMetadata({
    title: `${categoryLabel(slug)} | Kashmir Travel Journal`,
    description: BLOG_CATEGORY_DESCRIPTIONS[slug],
    path: paths.blogCategory(slug),
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    notFound();
  }

  const posts = await getPostsByCategory(slug);
  const featured = posts.filter((post) => post.featured);
  const rest = posts.filter((post) => !post.featured);
  const ordered = [...featured, ...rest];
  const isCorporate = slug === "corporate-travel";

  return (
    <main id="main-content">
      <JsonLd data={blogListJsonLd(ordered)} />
      <Section>
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={breadcrumbsFor(
                { label: "Blog", href: paths.blog },
                { label: categoryLabel(slug), href: paths.blogCategory(slug) },
              )}
            />
          </div>
          <SectionHeading
            as="h1"
            eyebrow="Journal"
            title={categoryLabel(slug)}
            description={BLOG_CATEGORY_DESCRIPTIONS[slug]}
          />
          <nav aria-label="Article categories" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link
                  href={paths.blog}
                  className="inline-flex rounded-full bg-muted px-3 py-1.5 text-sm hover:bg-secondary"
                >
                  All
                </Link>
              </li>
              {BLOG_CATEGORIES.map((item) => {
                const active = item.slug === slug;

                return (
                  <li key={item.slug}>
                    <Link
                      href={blogCategoryHref(item.slug)}
                      className={
                        active
                          ? "inline-flex rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground"
                          : "inline-flex rounded-full bg-muted px-3 py-1.5 text-sm hover:bg-secondary"
                      }
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {ordered.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {ordered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm leading-6 text-muted-foreground">
              No articles in this category yet.{" "}
              <Link href={paths.blog} className="text-primary hover:underline">
                Browse all notes
              </Link>
              .
            </p>
          )}
          <p className="mt-10">
            <ButtonLink
              href={isCorporate ? paths.corporateTravel : paths.packages}
              variant="outline"
            >
              {isCorporate ? "Plan a corporate trip" : "Browse Kashmir tour packages"}
            </ButtonLink>
          </p>
        </Container>
      </Section>
      {isCorporate ? <CorporateCta /> : null}
    </main>
  );
}
