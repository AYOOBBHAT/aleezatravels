import { Clock, MapPin, Mountain, Sun } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DestinationEnquiryCard } from "@/components/destinations/destination-enquiry-card";
import { RelatedDestinations } from "@/components/destinations/related-destinations";
import { FaqList } from "@/components/faq/faq-list";
import { RelatedPackages } from "@/components/packages/related-packages";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { TravelDestination } from "@/lib/destinations/schema";
import type { TravelPackage } from "@/lib/packages/schema";
import { destinationJsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { paths } from "@/lib/seo/paths";

type DestinationDetailProps = {
  destination: TravelDestination;
  nearbyDestinations: TravelDestination[];
  relatedPackages: TravelPackage[];
};

const jumpLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#why-visit", label: "Why visit" },
  { href: "#attractions", label: "Attractions" },
  { href: "#things-to-do", label: "Things to do" },
  { href: "#duration", label: "Duration" },
  { href: "#travel", label: "Travel" },
  { href: "#packages", label: "Packages" },
  { href: "#faqs", label: "FAQs" },
  { href: "#enquire", label: "Enquire" },
] as const;

export function DestinationDetail({
  destination,
  nearbyDestinations,
  relatedPackages,
}: DestinationDetailProps) {
  const breadcrumbs = breadcrumbsFor(
    { label: "Destinations", href: paths.destinations },
    { label: destination.name, href: paths.destination(destination.slug) },
  );

  return (
    <article>
      <JsonLd data={destinationJsonLd(destination)} />
      {destination.faqs.length > 0 ? (
        <JsonLd data={faqPageJsonLd(destination.faqs)} />
      ) : null}

      <Section className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </Section>

      <div className="px-4 sm:px-6 lg:px-8">
        <CoverImage
          image={destination.heroImage}
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
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {destination.region}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {destination.suggestedDuration.typicalStay}
                </span>
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">{destination.headline}</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                {destination.shortDescription}
              </p>

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

              <section
                id="introduction"
                aria-labelledby="introduction-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="introduction-heading" className="text-2xl sm:text-3xl">
                  Introduction
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {destination.introduction}
                </p>
              </section>

              <section
                id="why-visit"
                aria-labelledby="why-visit-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="why-visit-heading" className="text-2xl sm:text-3xl">
                  Why visit {destination.name}
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {destination.whyVisit.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
                    >
                      <h3 className="font-heading text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                id="attractions"
                aria-labelledby="attractions-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2
                  id="attractions-heading"
                  className="flex items-center gap-2 text-2xl sm:text-3xl"
                >
                  <Mountain className="size-6" aria-hidden="true" />
                  Top attractions in {destination.name}
                </h2>
                <ol className="mt-6 space-y-4">
                  {destination.topAttractions.map((item, index) => (
                    <li
                      key={item.title}
                      className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
                    >
                      <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                        {index + 1}
                      </p>
                      <h3 className="mt-1 font-heading text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.summary}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              <section
                id="things-to-do"
                aria-labelledby="things-to-do-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="things-to-do-heading" className="text-2xl sm:text-3xl">
                  Things to do in {destination.name}
                </h2>
                <ul className="mt-6 space-y-4">
                  {destination.thingsToDo.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
                    >
                      <h3 className="font-heading text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <section
                  id="duration"
                  aria-labelledby="duration-heading"
                  className="scroll-mt-28"
                >
                  <h2 id="duration-heading" className="text-2xl sm:text-3xl">
                    Suggested duration
                  </h2>
                  <p className="mt-3 text-sm font-medium">
                    {destination.suggestedDuration.typicalStay}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {destination.suggestedDuration.overview}
                  </p>
                </section>
                <section
                  id="best-time"
                  aria-labelledby="best-time-heading"
                  className="scroll-mt-28"
                >
                  <h2
                    id="best-time-heading"
                    className="flex items-center gap-2 text-2xl sm:text-3xl"
                  >
                    <Sun className="size-6" aria-hidden="true" />
                    Best time to visit
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {destination.bestTimeToVisit.overview}
                  </p>
                </section>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {destination.bestTimeToVisit.seasons.map((season) => (
                  <li
                    key={season.name}
                    className="rounded-2xl bg-muted/70 p-5 ring-1 ring-foreground/8"
                  >
                    <h3 className="font-heading text-lg">{season.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {season.summary}
                    </p>
                  </li>
                ))}
              </ul>

              <section
                id="travel"
                aria-labelledby="travel-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2 id="travel-heading" className="text-2xl sm:text-3xl">
                  Travel information
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {destination.travelInformation.overview}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  {destination.travelInformation.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <ButtonLink href={paths.packages} variant="outline" size="sm">
                    See Kashmir tour packages
                  </ButtonLink>
                </p>
              </section>
            </div>

            <div className="hidden lg:block">
              <DestinationEnquiryCard destination={destination} sticky />
            </div>
          </div>
        </Container>
      </Section>

      <RelatedDestinations
        title={`Nearby destinations from ${destination.name}`}
        description="Other Kashmir stops that pair well with this one on the same trip. Each guide links back to packages that include that place."
        destinations={nearbyDestinations}
      />
      <div id="packages">
        <RelatedPackages
          title={`${destination.name} tour packages`}
          description={`Kashmir tour packages that currently include ${destination.name}. Each itinerary can still be shaped around your dates, hotels, and pace.`}
          packages={relatedPackages}
        />
      </div>
      {destination.faqs.length > 0 ? (
        <Section>
          <Container>
            <section
              id="faqs"
              aria-labelledby="destination-faq-heading"
              className="scroll-mt-28"
            >
              <h2 id="destination-faq-heading" className="text-2xl sm:text-3xl">
                FAQs about {destination.name}
              </h2>
              <FaqList
                items={destination.faqs}
                className="mt-5 divide-y divide-border rounded-2xl bg-card ring-1 ring-foreground/8"
              />
            </section>
            <div id="enquire" className="mt-12 scroll-mt-28 lg:hidden">
              <DestinationEnquiryCard destination={destination} />
            </div>
          </Container>
        </Section>
      ) : (
        <Section className="lg:hidden">
          <Container>
            <div id="enquire" className="scroll-mt-28">
              <DestinationEnquiryCard destination={destination} />
            </div>
          </Container>
        </Section>
      )}
    </article>
  );
}
