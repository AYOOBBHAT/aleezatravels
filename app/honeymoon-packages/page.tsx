import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { RelatedPackages } from "@/components/packages/related-packages";
import { breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { honeymoonImage } from "@/lib/data/honeymoon";
import { getPackagesByType } from "@/lib/packages/source";
import { packageListJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export const metadata: Metadata = createPageMetadata({
  title: "Kashmir Honeymoon Packages",
  description:
    "Plan a Kashmir honeymoon with Aleeza Travels — houseboat stays, private sightseeing, and room decoration on request.",
  path: paths.honeymoon,
  image: honeymoonImage,
});

export default async function HoneymoonPage() {
  const honeymoonPackages = await getPackagesByType("honeymoon");

  return (
    <main id="main-content">
      <JsonLd data={packageListJsonLd(honeymoonPackages)} />
      <PlaceholderPage
        eyebrow="For couples"
        title="Kashmir honeymoon packages"
        description="Romantic stays, houseboat nights, private sightseeing, and optional room decoration. Browse the honeymoon itinerary below, or send an enquiry and we will plan around your dates."
        image={honeymoonImage}
        breadcrumbs={breadcrumbsFor({
          label: "Honeymoon Packages",
          href: paths.honeymoon,
        })}
        secondaryCta={{ href: paths.packages, label: "All Kashmir packages" }}
      />
      <RelatedPackages
        title="Honeymoon itineraries"
        description="A slower Kashmir stay for couples, with lake time in Srinagar and quieter rooms in the meadows."
        packages={honeymoonPackages}
      />
    </main>
  );
}
