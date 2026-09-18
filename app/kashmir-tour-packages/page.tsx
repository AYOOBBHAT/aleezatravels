import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { PackageCard } from "@/components/packages/package-card";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { packageTypeHref } from "@/lib/packages/links";
import { PACKAGE_TYPE_LABELS, PACKAGE_TYPES } from "@/lib/packages/schema";
import { getPublishedPackages } from "@/lib/packages/source";
import { packageListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = createPageMetadata({
  title: "Kashmir Tour Packages",
  description:
    "Browse Kashmir tour packages from Aleeza Travels, including honeymoon packages, family tours, group trips, and customized Kashmir itineraries.",
  path: paths.packages,
});

export default async function PackagesPage() {
  const [packages, destinations] = await Promise.all([
    getPublishedPackages(),
    getPublishedDestinations(),
  ]);
  const breadcrumbs = breadcrumbsFor({
    label: "Kashmir Packages",
    href: paths.packages,
  });

  return (
    <main id="main-content">
      <JsonLd data={packageListJsonLd(packages)} />
      <Section>
        <Container>
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <SectionHeading
            as="h1"
            eyebrow="Itineraries"
            title="Kashmir tour packages"
            description="Starting points for a first visit, a honeymoon, a family holiday, or a group trip. Every Kashmir holiday package can be adjusted for dates, hotels, and pace before it is confirmed."
          />
          <nav aria-label="Package types" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {PACKAGE_TYPES.map((type) => (
                <li key={type}>
                  <Link
                    href={packageTypeHref(type)}
                    className="inline-flex rounded-full bg-muted px-3 py-1.5 text-sm hover:bg-secondary"
                  >
                    {PACKAGE_TYPE_LABELS[type]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {packages.map((tourPackage) => (
              <PackageCard key={tourPackage.slug} tourPackage={tourPackage} headingAs="h2" />
            ))}
          </div>
          <section className="mt-14" aria-labelledby="package-destinations-heading">
            <h2 id="package-destinations-heading" className="text-2xl sm:text-3xl">
              Destinations these packages cover
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Most itineraries start in Srinagar and add meadow towns as overnight
              stays or day trips.
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {destinations.map((destination) => (
                <li key={destination.slug}>
                  <Link
                    href={paths.destination(destination.slug)}
                    className="text-sm text-primary hover:underline"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Section>
    </main>
  );
}
