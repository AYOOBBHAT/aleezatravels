import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { DestinationCard } from "@/components/destinations/destination-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { destinationListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = createPageMetadata({
  title: "Kashmir Destinations",
  description:
    "Explore Kashmir destinations with Aleeza Travels, including Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, and Yusmarg.",
  path: paths.destinations,
});

export default async function DestinationsPage() {
  const destinations = await getPublishedDestinations();
  const breadcrumbs = breadcrumbsFor({
    label: "Destinations",
    href: paths.destinations,
  });

  return (
    <main id="main-content">
      <JsonLd data={destinationListJsonLd(destinations)} />
      <Section>
        <Container>
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <SectionHeading
            as="h1"
            eyebrow="The valley"
            title="Kashmir destinations"
            description="Lakes, gardens, and high meadows. Use these guides to choose where to spend your nights, then browse Kashmir tour packages that include them."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                headingAs="h2"
              />
            ))}
          </div>
          <p className="mt-10">
            <ButtonLink href={paths.packages} variant="outline">
              Browse Kashmir tour packages
            </ButtonLink>
          </p>
        </Container>
      </Section>
    </main>
  );
}
