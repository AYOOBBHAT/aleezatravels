import Link from "next/link";
import { Clock, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { PackagePrice } from "@/components/packages/package-price";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { PACKAGE_TYPE_LABELS } from "@/lib/packages/schema";
import { packageContactHref, packageTypeHref } from "@/lib/packages/links";
import type { TravelPackage } from "@/lib/packages/schema";
import { configuredWhatsAppHref, packageEnquiryMessage } from "@/lib/seo/urls";
import { paths } from "@/lib/seo/paths";

export async function PackageCard({
  tourPackage,
  headingAs: Heading = "h3",
}: {
  tourPackage: TravelPackage;
  headingAs?: "h2" | "h3";
}) {
  const [destinations, whatsappHref] = await Promise.all([
    getPublishedDestinations(),
    configuredWhatsAppHref(packageEnquiryMessage(tourPackage.title)),
  ]);
  const stops = tourPackage.destinationsCovered
    .map((slug) => destinations.find((destination) => destination.slug === slug))
    .filter((destination) => destination !== undefined);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/8">
      <CoverImage image={tourPackage.heroImage} className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-3.5" aria-hidden="true" />
            {tourPackage.duration}
          </span>
          <Link
            href={packageTypeHref(tourPackage.packageType)}
            className="text-accent hover:underline"
          >
            {PACKAGE_TYPE_LABELS[tourPackage.packageType]}
          </Link>
        </div>
        <Heading className="mt-2 font-heading text-2xl leading-snug">
          <Link href={paths.package(tourPackage.slug)} className="hover:underline">
            {tourPackage.title}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
          {tourPackage.shortDescription}
        </p>
        {stops.length > 0 ? (
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            {stops.map((destination, index) => (
              <span key={destination.slug}>
                {index > 0 ? " · " : null}
                <Link
                  href={paths.destination(destination.slug)}
                  className="hover:text-foreground hover:underline"
                >
                  {destination.name}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
        <div className="mt-4">
          <PackagePrice tourPackage={tourPackage} />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ButtonLink
            href={paths.package(tourPackage.slug)}
            size="lg"
            className="w-full"
          >
            View Package
          </ButtonLink>
          <ButtonLink
            href={packageContactHref(tourPackage.slug)}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Get Quote
          </ButtonLink>
          {whatsappHref ? (
            <ButtonLink
              href={whatsappHref}
              variant="whatsapp"
              size="lg"
              className="w-full sm:col-span-2"
            >
              <MessageCircle data-icon="inline-start" />
              WhatsApp Us
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
