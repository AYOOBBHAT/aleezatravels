import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { BlogArticle } from "@/lib/blog/schema";

export function RelatedPosts({
  posts,
  title = "Related articles",
  description = "More Kashmir planning notes that sit alongside this one.",
}: {
  posts: BlogArticle[];
  title?: string;
  description?: string;
}) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
