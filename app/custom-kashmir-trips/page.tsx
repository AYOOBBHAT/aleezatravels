import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { RelatedPackages } from "@/components/packages/related-packages";
import { breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { destinations } from "@/lib/data/destinations";
import { getPackagesByType } from "@/lib/packages/source";
import { packageListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Kashmir Trips",
  description:
    "Build a customized Kashmir trip around your dates, pace, and the destinations you want to see — from Srinagar houseboats to quieter meadow days.",
  path: paths.customTrips,
});

export default async function CustomTripsPage() {
  const image = destinations.find((item) => item.slug === "doodhpathri")?.image;
  const customPackages = await getPackagesByType("custom");

  return (
    <main id="main-content">
      <JsonLd data={packageListJsonLd(customPackages)} />
      <PlaceholderPage
        eyebrow="Made to measure"
        title="Custom Kashmir trips"
        description="Dates, hotels, driving days, and sightseeing can all be shaped around you. Use the custom itinerary below as a starting point, then tell us what to change."
        image={image}
        breadcrumbs={breadcrumbsFor({
          label: "Custom Kashmir Trips",
          href: paths.customTrips,
        })}
        secondaryCta={{ href: paths.packages, label: "All Kashmir packages" }}
      />
      <RelatedPackages
        title="Custom itineraries"
        description="A flexible Kashmir route when a fixed circuit is not the right fit."
        packages={customPackages}
      />
    </main>
  );
}
