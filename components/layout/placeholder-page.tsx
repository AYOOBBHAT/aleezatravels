import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { paths } from "@/lib/seo/paths";
import type { BreadcrumbItem, MediaAsset } from "@/lib/types";

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: MediaAsset;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
  secondaryCta = { href: paths.packages, label: "View packages" },
}: PlaceholderPageProps) {
  return (
    <Section className="pt-8 sm:pt-12">
      <Container>
        {breadcrumbs ? (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            {eyebrow ? (
              <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
            {children}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={paths.contact}>Plan Your Trip</ButtonLink>
              <ButtonLink href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          {image ? (
            <CoverImage
              image={image}
              className="min-h-[18rem] rounded-2xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
