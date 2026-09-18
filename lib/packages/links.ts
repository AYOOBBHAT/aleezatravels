import type { PackageType } from "@/lib/packages/schema";
import { paths } from "@/lib/seo/paths";

export function packageTypeHref(type: PackageType): string {
  switch (type) {
    case "honeymoon":
      return paths.honeymoon;
    case "family":
      return paths.familyTours;
    case "group":
      return paths.groupTours;
    case "custom":
      return paths.customTrips;
    default:
      return paths.packages;
  }
}

export function packageContactHref(slug: string): string {
  return `${paths.contact}?package=${encodeURIComponent(slug)}#enquiry`;
}
