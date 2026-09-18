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
  title: "Kashmir Group Tours",
  description:
    "Group travel across Kashmir for friends, clubs, and larger parties, with shared transport and coordinated stays.",
  path: paths.groupTours,
});

export default async function GroupToursPage() {
  const image = destinations.find((item) => item.slug === "sonamarg")?.image;
  const groupPackages = await getPackagesByType("group");

  return (
    <main id="main-content">
      <JsonLd data={packageListJsonLd(groupPackages)} />
      <PlaceholderPage
        eyebrow="Groups"
        title="Kashmir group tours"
        description="Coordinated itineraries for friends, clubs, and larger parties. Start with the group tour below, or send an enquiry if you need a private departure for your numbers."
        image={image}
        breadcrumbs={breadcrumbsFor({
          label: "Group Tours",
          href: paths.groupTours,
        })}
        secondaryCta={{ href: paths.packages, label: "All Kashmir packages" }}
      />
      <RelatedPackages
        title="Group tour packages"
        description="Shared transport and stays chosen for larger parties travelling through the valley together."
        packages={groupPackages}
      />
    </main>
  );
}
