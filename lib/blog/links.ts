import type { BlogCategorySlug } from "@/lib/blog/schema";
import { paths } from "@/lib/seo/paths";

export function blogCategoryHref(category?: BlogCategorySlug): string {
  if (!category) {
    return paths.blog;
  }

  return `${paths.blog}?category=${category}`;
}
