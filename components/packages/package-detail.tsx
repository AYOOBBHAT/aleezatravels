import Link from "next/link";
import { Car, Check, Clock, MapPin, UtensilsCrossed, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FaqList } from "@/components/faq/faq-list";
import { PackageEnquiryCard } from "@/components/packages/package-enquiry-card";
import { PackageGallery } from "@/components/packages/package-gallery";
import { PackageHotels } from "@/components/packages/package-hotels";
import { PackageItinerary } from "@/components/packages/package-itinerary";
import { PackagePrice } from "@/components/packages/package-price";
import { RelatedPackages } from "@/components/packages/related-packages";
import { RelatedDestinations } from "@/components/destinations/related-destinations";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PACKAGE_TYPE_LABELS } from "@/lib/packages/schema";
import { packageTypeHref } from "@/lib/packages/links";
import type { TravelPackage } from "@/lib/packages/schema";
import { faqPageJsonLd, touristTripJsonLd } from "@/lib/seo/json-ld";
import { paths } from "@/lib/seo/paths";
import type { TravelDestination } from "@/lib/destinations/schema";

type PackageDetailProps = {
  tourPackage: TravelPackage;
  destinations: TravelDestination[];
  relatedPackages: TravelPackage[];
};

const jumpLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#itinerary", label: "Itinerary" },
  { href: "#hotels", label: "Hotels" },
  { href: "#transportation", label: "Transport" },
  { href: "#meals", label: "Meals" },
  { href: "#inclusions", label: "Inclusions" },
  { href: "#notes", label: "Notes" },
  { href: "#faqs", label: "FAQs" },
  { href: "#enquire", label: "Enquire" },
] as const;

export function PackageDetail({
  tourPackage,
  destinations,
  relatedPackages,
}: PackageDetailProps) {
  const breadcrumbs = breadcrumbsFor(
    { label: "Kashmir Packages", href: paths.packages },
    { label: tourPackage.title, href: paths.package(tourPackage.slug) },
  );

  return (
    <article>
      <JsonLd data={touristTripJsonLd(tourPackage, destinations)} />
      {tourPackage.faqs.length > 0 ? (
        <JsonLd data={faqPageJsonLd(tourPackage.faqs)} />
      ) : null}

      <Section className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </Section>

      <div className="px-4 sm:px-6 lg:px-8">
        <CoverImage
          image={tourPackage.heroImage}
          className="mx-auto min-h-[18rem] max-w-6xl rounded-2xl lg:min-h-[28rem]"
          sizes="(min-width: 1152px) 72rem, 100vw"
          priority
        />
      </div>

      <Section className="pt-10 sm:pt-12 lg:pt-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,20rem)] lg:items-start">
            <div>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
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
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">{tourPackage.title}</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                {tourPackage.shortDescription}
              </p>

              <div className="mt-6">
                <h2 className="font-heading text-xl">Destinations covered</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {destinations.map((destination) => (
                    <li key={destination.slug}>
                      <ButtonLink
                        href={paths.destination(destination.slug)}
                        variant="secondary"
                        size="sm"
                      >
                        <MapPin data-icon="inline-start" />
                        {destination.name}
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 lg:hidden">
                <PackagePrice tourPackage={tourPackage} />
              </div>

              <nav aria-label="On this page" className="mt-8">
                <ul className="flex flex-wrap gap-2">
                  {jumpLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="inline-flex rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <PackageGallery
                images={tourPackage.gallery}
                title={tourPackage.title}
              />

              <section
                id="overview"
                aria-labelledby="overview-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="overview-heading" className="text-2xl sm:text-3xl">
                  Overview
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {tourPackage.description}
                </p>
              </section>

              <div className="mt-12">
                <PackageItinerary days={tourPackage.itinerary} destinations={destinations} />
              </div>

              <div className="mt-12">
                <PackageHotels hotels={tourPackage.hotels} destinations={destinations} />
              </div>

              <section
                id="transportation"
                aria-labelledby="transport-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2
                  id="transport-heading"
                  className="flex items-center gap-2 text-2xl sm:text-3xl"
                >
                  <Car className="size-6" aria-hidden="true" />
                  Transportation
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {tourPackage.transportation.overview}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  {tourPackage.transportation.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </section>

              <section
                id="meals"
                aria-labelledby="meals-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2
                  id="meals-heading"
                  className="flex items-center gap-2 text-2xl sm:text-3xl"
                >
                  <UtensilsCrossed className="size-6" aria-hidden="true" />
                  Meals
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {tourPackage.meals.overview}
                </p>
                <p className="mt-3 text-sm">
                  <span className="text-muted-foreground">Meal plan: </span>
                  {tourPackage.meals.plan}
                </p>
              </section>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <section
                  id="inclusions"
                  aria-labelledby="inclusions-heading"
                  className="scroll-mt-28"
                >
                  <h2 id="inclusions-heading" className="text-2xl sm:text-3xl">
                    Inclusions
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {tourPackage.inclusions.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section
                  id="exclusions"
                  aria-labelledby="exclusions-heading"
                  className="scroll-mt-28"
                >
                  <h2 id="exclusions-heading" className="text-2xl sm:text-3xl">
                    Exclusions
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {tourPackage.exclusions.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6">
                        <X
                          className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section
                id="notes"
                aria-labelledby="notes-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="notes-heading" className="text-2xl sm:text-3xl">
                  Important information
                </h2>
                <ul className="mt-4 space-y-3 rounded-2xl bg-muted/70 p-5 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/8">
                  {tourPackage.importantNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>

              {tourPackage.faqs.length > 0 ? (
                <section
                  id="faqs"
                  aria-labelledby="package-faq-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <h2 id="package-faq-heading" className="text-2xl sm:text-3xl">
                    FAQs
                  </h2>
                  <FaqList items={tourPackage.faqs} className="mt-5 divide-y divide-border rounded-2xl bg-card ring-1 ring-foreground/8" />
                </section>
              ) : null}

              <div id="enquire" className="mt-12 scroll-mt-28">
                <PackageEnquiryCard tourPackage={tourPackage} />
              </div>
            </div>

            <div className="hidden lg:block">
              <PackageEnquiryCard tourPackage={tourPackage} sticky />
            </div>
          </div>
        </Container>
      </Section>

      <RelatedPackages
        title="Related Kashmir packages"
        description="Other itineraries that share this trip type or destinations. Each can still be adjusted around your dates."
        packages={relatedPackages}
      />
      <RelatedDestinations
        title="Related destinations"
        description="Places this itinerary visits. Each guide also lists Kashmir packages that include that stop."
        destinations={destinations}
      />
    </article>
  );
}
