import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetail } from "@/components/destinations/destination-detail";
import {
  getDestinationBySlug,
  getDestinationSlugs,
  getNearbyDestinations,
} from "@/lib/destinations/source";
import { getPackagesByDestination } from "@/lib/packages/source";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export async function generateStaticParams() {
  const slugs = await getDestinationSlugs();
  return slugs.map((slug) => ({ slug }));
}

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    return createPageMetadata({
      title: "Destination not found",
      description: "This Kashmir destination could not be found.",
      path: paths.destination(slug),
      index: false,
    });
  }

  return createPageMetadata({
    title: destination.seoTitle,
    description: destination.seoDescription,
    path: paths.destination(destination.slug),
    image: destination.heroImage,
  });
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = await getPackagesByDestination(destination.slug);
  const nearbyDestinations = await getNearbyDestinations(destination);

  return (
    <main id="main-content">
      <DestinationDetail
        destination={destination}
        nearbyDestinations={nearbyDestinations}
        relatedPackages={relatedPackages}
      />
    </main>
  );
}
