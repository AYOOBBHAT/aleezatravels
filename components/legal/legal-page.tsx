import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import type { BreadcrumbItem } from "@/lib/types";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  updated: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
};

export function LegalPage({
  eyebrow = "Legal",
  title,
  updated,
  intro,
  breadcrumbs,
  children,
}: LegalPageProps) {
  return (
    <Section className="pt-8 sm:pt-12">
      <Container className="max-w-2xl">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated {updated}. This page is a working website notice. Have it
          reviewed by a lawyer before relying on it for bookings or advertising.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{intro}</p>
        <div className="prose-legal mt-10 space-y-8 text-base leading-7 text-muted-foreground [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </Section>
  );
}
