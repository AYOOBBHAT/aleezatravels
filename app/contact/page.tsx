import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactDetails } from "@/components/contact/contact-details";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getDestination, getPublishedDestinations } from "@/lib/destinations/source";
import { TRIP_TYPE_VALUES, type TripTypeValue } from "@/lib/enquiry/options";
import { durationOptions } from "@/lib/enquiry/options";
import { telUrl } from "@/lib/format";
import { getPackageBySlug } from "@/lib/packages/source";
import { contactPageJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import {
  buildWhatsAppHref,
  destinationEnquiryMessage,
  generalEnquiryMessage,
  packageEnquiryMessage,
} from "@/lib/seo/urls";
import { napFromSettings } from "@/lib/site/nap";
import { getSiteSettings } from "@/lib/site/source";

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return createPageMetadata({
    title: `Contact ${settings.name}`,
    description: `Contact ${settings.name} to plan a Kashmir trip. Send dates, group size, and destinations through the enquiry form.`,
    path: paths.contact,
  });
}

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function asTripType(value: string | undefined): TripTypeValue | undefined {
  if (!value) {
    return undefined;
  }

  if ((TRIP_TYPE_VALUES as readonly string[]).includes(value)) {
    return value as TripTypeValue;
  }

  if (value === "sightseeing") {
    return "other";
  }

  return undefined;
}

function asDuration(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  return durationOptions.some((option) => option.value === value)
    ? value
    : undefined;
}

function asAdults(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }

  if (value === "6+") {
    return 6;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : undefined;
}

type ContactSearch = {
  travelDate?: string | string[];
  travelers?: string | string[];
  adults?: string | string[];
  children?: string | string[];
  tripType?: string | string[];
  duration?: string | string[];
  package?: string | string[];
  destination?: string | string[];
  channel?: string | string[];
  message?: string | string[];
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<ContactSearch>;
}) {
  const params = await searchParams;
  const packageSlug = firstParam(params.package);
  const destinationSlug = firstParam(params.destination);
  const [tourPackage, destination, destinations, settings] = await Promise.all([
    packageSlug ? getPackageBySlug(packageSlug) : Promise.resolve(undefined),
    destinationSlug ? getDestination(destinationSlug) : Promise.resolve(undefined),
    getPublishedDestinations(),
    getSiteSettings(),
  ]);
  const nap = napFromSettings(settings);

  const whatsappMessage = tourPackage
    ? packageEnquiryMessage(tourPackage.title)
    : destination
      ? destinationEnquiryMessage(destination.name)
      : firstParam(params.message) || generalEnquiryMessage();
  const whatsappHref = await buildWhatsAppHref(whatsappMessage);

  return (
    <main id="main-content">
      <JsonLd data={contactPageJsonLd(settings)} />
      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={breadcrumbsFor({ label: "Contact", href: paths.contact })}
            />
          </div>
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            Contact {nap.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Share a few trip details and we will reply with a proposed itinerary.
            Submitting this form is an enquiry, not a booking.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <ContactDetails nap={nap} whatsappHref={whatsappHref} />

            <div>
              <h2 id="enquiry" className="font-heading text-2xl">
                Enquiry form
              </h2>
              <p className="mt-2 mb-6 text-sm leading-6 text-muted-foreground">
                Tell us when you want to travel, who is coming, and which parts of
                Kashmir you have in mind.
              </p>
              <EnquiryForm
                id="enquiry-form"
                variant="full"
                destinations={destinations.map((item) => ({
                  slug: item.slug,
                  name: item.name,
                }))}
                whatsappHref={whatsappHref}
                defaults={{
                  travelDate: firstParam(params.travelDate),
                  adults: asAdults(
                    firstParam(params.adults) ?? firstParam(params.travelers),
                  ),
                  children: Number.isFinite(Number(firstParam(params.children)))
                    ? Number(firstParam(params.children))
                    : undefined,
                  tripType: asTripType(firstParam(params.tripType)),
                  duration: asDuration(firstParam(params.duration)),
                  packageSlug: tourPackage?.slug,
                  packageName: tourPackage?.title,
                  destinationSlug: destination?.slug,
                  destinationName: destination?.name,
                  destinations: destination?.slug
                    ? [destination.slug]
                    : tourPackage?.destinationsCovered,
                  source: "contact",
                  message: firstParam(params.message),
                }}
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {nap.email ? (
                  <ButtonLink href={`mailto:${nap.email}`}>Email us</ButtonLink>
                ) : null}
                {nap.phone ? (
                  <ButtonLink href={telUrl(nap.phone)} variant="outline">
                    Call us
                  </ButtonLink>
                ) : null}
                {nap.whatsapp ? (
                  <ButtonLink href={whatsappHref} variant="whatsapp">
                    <MessageCircle data-icon="inline-start" />
                    WhatsApp Us
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
