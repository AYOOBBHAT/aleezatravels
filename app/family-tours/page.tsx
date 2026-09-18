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
  title: "Kashmir Family Tour Packages",
  description:
    "Family-friendly Kashmir holiday packages with comfortable pacing, hotel coordination, and sightseeing suited to mixed-age groups.",
  path: paths.familyTours,
});

export default async function FamilyToursPage() {
  const image = destinations.find((item) => item.slug === "pahalgam")?.image;
  const familyPackages = await getPackagesByType("family");

  return (
    <main id="main-content">
      <JsonLd data={packageListJsonLd(familyPackages)} />
      <PlaceholderPage
        eyebrow="Families"
        title="Kashmir family tours"
        description="Shorter driving days, family rooms, and sightseeing that children and elders can enjoy. Start with the family package below, or ask us to shape a Kashmir family tour around your group."
        image={image}
        breadcrumbs={breadcrumbsFor({
          label: "Family Tours",
          href: paths.familyTours,
        })}
        secondaryCta={{ href: paths.packages, label: "All Kashmir packages" }}
      />
      <RelatedPackages
        title="Family tour packages"
        description="These itineraries are paced for mixed-age groups, with gardens, meadows, and easier river walks."
        packages={familyPackages}
      />
    </main>
  );
}
