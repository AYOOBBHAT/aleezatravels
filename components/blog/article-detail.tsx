import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleToc } from "@/components/blog/article-toc";
import { RelatedPosts } from "@/components/blog/related-posts";
import { RelatedDestinations } from "@/components/destinations/related-destinations";
import { FaqList } from "@/components/faq/faq-list";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RelatedPackages } from "@/components/packages/related-packages";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategoryHref } from "@/lib/blog/links";
import { categoryLabel, tableOfContents, type BlogArticle } from "@/lib/blog/schema";
import type { TravelDestination } from "@/lib/destinations/schema";
import { formatDisplayDate } from "@/lib/format";
import type { TravelPackage } from "@/lib/packages/schema";
import { articleJsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref, generalEnquiryMessage } from "@/lib/seo/urls";
import { businessConfig } from "@/lib/site-config";

type ArticleDetailProps = {
  post: BlogArticle;
  relatedPosts: BlogArticle[];
  relatedPackages: TravelPackage[];
  relatedDestinations: TravelDestination[];
};

export async function ArticleDetail({
  post,
  relatedPosts,
  relatedPackages,
  relatedDestinations,
}: ArticleDetailProps) {
  const breadcrumbs = breadcrumbsFor(
    { label: "Blog", href: paths.blog },
    { label: post.title, href: paths.blogPost(post.slug) },
  );
  const toc = tableOfContents(post.content);
  const showUpdated = post.updatedAt !== post.publishedAt;
  const whatsappHref = await configuredWhatsAppHref(generalEnquiryMessage());

  return (
    <article>
      <JsonLd data={articleJsonLd(post)} />
      {post.faqs.length > 0 ? <JsonLd data={faqPageJsonLd(post.faqs)} /> : null}

      <Section className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Link href={blogCategoryHref(post.category)} className="text-accent hover:underline">
              {categoryLabel(post.category)}
            </Link>
            <span>{post.author}</span>
            <time dateTime={post.publishedAt}>{formatDisplayDate(post.publishedAt)}</time>
            {showUpdated ? (
              <time dateTime={post.updatedAt}>Updated {formatDisplayDate(post.updatedAt)}</time>
            ) : null}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">{post.excerpt}</p>
        </Container>
      </Section>

      <div className="px-4 sm:px-6 lg:px-8">
        <CoverImage
          image={post.featuredImage}
          className="mx-auto min-h-[16rem] max-w-3xl rounded-2xl lg:min-h-[22rem]"
          sizes="(min-width: 768px) 48rem, 100vw"
          priority
        />
      </div>

      <Section className="pt-10 sm:pt-12 lg:pt-14">
        <Container className="max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,18rem)] lg:items-start">
            <div>
              <div className="lg:hidden">
                <ArticleToc items={toc} />
              </div>
              <div className="mt-8 lg:mt-0">
                <ArticleBody content={post.content} />
              </div>
            </div>
            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <ArticleToc items={toc} />
            </aside>
          </div>
        </Container>
      </Section>

      {post.faqs.length > 0 ? (
        <Section id="faqs" ariaLabelledBy="article-faq-heading" className="bg-muted/60">
          <Container className="max-w-3xl">
            <h2 id="article-faq-heading" className="text-2xl sm:text-3xl">
              Frequently asked questions
            </h2>
            <FaqList items={post.faqs} className="mt-8 divide-y divide-border rounded-2xl bg-card ring-1 ring-foreground/8" />
          </Container>
        </Section>
      ) : null}

      <RelatedDestinations
        title="Places this article covers"
        description="Destination guides with stay length, pacing, and what we do not assume on the ground."
        destinations={relatedDestinations}
      />
      <RelatedPackages
        title="Related Kashmir packages"
        description="Starting outlines you can adjust for dates, hotels, and pace. Prices are quoted after we know your travel window."
        packages={relatedPackages}
      />
      <RelatedPosts posts={relatedPosts} />

      <Section className="bg-primary text-primary-foreground">
        <Container className="max-w-3xl">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">Plan this trip with us</h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/80">
            Send dates, who is travelling, and which of these places you care about.
            {businessConfig.businessName} will reply with a proposed itinerary — nothing is booked
            until you agree.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={paths.contact}
              className="min-w-44 bg-card text-foreground hover:bg-card/90"
            >
              Enquire now
            </ButtonLink>
            {whatsappHref ? (
              <ButtonLink href={whatsappHref} variant="whatsapp" className="min-w-44">
                <MessageCircle data-icon="inline-start" />
                WhatsApp Us
              </ButtonLink>
            ) : null}
          </div>
        </Container>
      </Section>
    </article>
  );
}
