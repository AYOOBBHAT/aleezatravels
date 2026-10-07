import Link from "next/link";
import { CoverImage } from "@/components/media/cover-image";
import { blogCategoryHref } from "@/lib/blog/links";
import { categoryLabel, readingTimeMinutes, type BlogArticle } from "@/lib/blog/schema";
import { formatDisplayDate } from "@/lib/format";
import { paths } from "@/lib/seo/paths";

export function BlogCard({ post }: { post: BlogArticle }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/8">
      <Link href={paths.blogPost(post.slug)} className="block">
        <CoverImage image={post.featuredImage} className="aspect-[16/10]" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <Link href={blogCategoryHref(post.category)} className="text-accent hover:underline">
            {categoryLabel(post.category)}
          </Link>
          <time dateTime={post.publishedAt}>{formatDisplayDate(post.publishedAt)}</time>
          <span>{readingTimeMinutes(post.content)} min read</span>
        </div>
        <h2 className="mt-2 font-heading text-2xl leading-snug">
          <Link href={paths.blogPost(post.slug)} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
        <p className="mt-4 text-sm font-medium text-primary">
          <Link href={paths.blogPost(post.slug)} className="hover:underline">
            Read article
          </Link>
        </p>
      </div>
    </article>
  );
}
