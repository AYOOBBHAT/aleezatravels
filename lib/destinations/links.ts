import { paths } from "@/lib/seo/paths";

export function destinationContactHref(slug: string): string {
  return `${paths.contact}?destination=${encodeURIComponent(slug)}#enquiry`;
}
