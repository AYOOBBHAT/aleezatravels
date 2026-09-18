import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategoryHref } from "@/lib/blog/links";
import {
  BLOG_CATEGORIES,
  isBlogCategorySlug,
  type BlogCategorySlug,
} from "@/lib/blog/schema";
import { getPublishedPosts } from "@/lib/blog/source";
import { blogListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = createPageMetadata({
  title: "Kashmir Travel Journal",
  description:
    "Practical Kashmir travel notes from Aleeza Travels: seasons, first visits, transfers, packing, and how we plan a trip without invented statistics.",
  path: paths.blog,
});

type BlogPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const requested = firstParam(params.category);
  const category: BlogCategorySlug | undefined = isBlogCategorySlug(requested)
    ? requested
    : undefined;
  const posts = await getPublishedPosts();
  const visible = category ? posts.filter((post) => post.category === category) : posts;
  const breadcrumbs = breadcrumbsFor({ label: "Blog", href: paths.blog });

  return (
    <main id="main-content">
      <JsonLd data={blogListJsonLd(visible)} />
      <Section>
        <Container>
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <SectionHeading
            as="h1"
            eyebrow="Journal"
            title="Kashmir travel notes"
            description="Guides we actually use when writing an itinerary: seasons, first visits, transfers, and what a quote still has to confirm. No invented visitor numbers or rupee averages."
          />
          <nav aria-label="Article categories" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link
                  href={paths.blog}
                  className={
                    category
                      ? "inline-flex rounded-full bg-muted px-3 py-1.5 text-sm hover:bg-secondary"
                      : "inline-flex rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground"
                  }
                  aria-current={category ? undefined : "page"}
                >
                  All
                </Link>
              </li>
              {BLOG_CATEGORIES.map((item) => {
                const active = category === item.slug;

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
          {visible.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((post) => (
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
            <ButtonLink href={paths.packages} variant="outline">
              Browse Kashmir tour packages
            </ButtonLink>
          </p>
        </Container>
      </Section>
    </main>
  );
}
