import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetail } from "@/components/packages/package-detail";
import {
  destinationsCoveredBy,
  getPackageBySlug,
  getPackageSlugs,
  getRelatedPackages,
} from "@/lib/packages/source";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";

export async function generateStaticParams() {
  const slugs = await getPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PackagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const tourPackage = await getPackageBySlug(slug);

  if (!tourPackage) {
    return createPageMetadata({
      title: "Package not found",
      description: "This Kashmir package could not be found.",
      path: paths.package(slug),
      index: false,
    });
  }

  return createPageMetadata({
    title: tourPackage.seoTitle,
    description: tourPackage.seoDescription,
    path: paths.package(tourPackage.slug),
    image: tourPackage.heroImage,
  });
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const tourPackage = await getPackageBySlug(slug);

  if (!tourPackage) {
    notFound();
  }

  const destinations = await destinationsCoveredBy(tourPackage);
  const relatedPackages = await getRelatedPackages(tourPackage);

  return (
    <main id="main-content">
      <PackageDetail
        tourPackage={tourPackage}
        destinations={destinations}
        relatedPackages={relatedPackages}
      />
    </main>
  );
}
