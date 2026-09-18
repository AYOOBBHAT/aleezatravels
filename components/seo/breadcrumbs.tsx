import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { paths } from "@/lib/seo/paths";
import type { BreadcrumbItem } from "@/lib/types";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function breadcrumbsFor(
  ...trail: { label: string; href: string }[]
): BreadcrumbItem[] {
  return [{ label: "Home", href: paths.home }, ...trail];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.href}-${item.label}`} className="flex items-center gap-1">
                {index > 0 ? (
                  <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
                ) : null}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
