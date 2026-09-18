import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { CoverImage } from "@/components/media/cover-image";
import { Section } from "@/components/layout/section";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { NapBlock } from "@/components/seo/nap";
import { heroImage } from "@/lib/data/hero";
import { aboutPageJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import { napFromSettings } from "@/lib/site/nap";
import { getSiteSettings } from "@/lib/site/source";

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return createPageMetadata({
    title: `About ${settings.name}`,
    description: `${settings.name} is a Kashmir travel agency planning tour packages, honeymoon stays, family holidays, and customized Kashmir trips.`,
    path: paths.about,
  });
}

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const nap = napFromSettings(settings);

  return (
    <main id="main-content">
      <JsonLd data={aboutPageJsonLd(settings)} />
      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={breadcrumbsFor({ label: "About", href: paths.about })}
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
                Our story
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">About {nap.name}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {nap.name} is a travel agency
                {nap.locality ? ` based in ${nap.locality}` : ""} planning
                holidays across Kashmir. Itineraries follow the season, the
                roads, and how you actually want to travel — not a fixed script
                copied from a brochure.
              </p>
            </div>
            <CoverImage
              image={heroImage}
              className="min-h-[18rem] rounded-2xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl">How we plan</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              An enquiry starts with dates, group size, trip type, and the
              places you want to see. We reply with a proposed itinerary. Hotels,
              houseboats, and prices are confirmed only when they are available
              for those dates — this website does not show invented tariffs or
              unnamed properties as if they were booked.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Packages on the site are starting points: Srinagar, Gulmarg,
              Pahalgam, Sonamarg, Doodhpathri, and Yusmarg can be combined or
              slowed down. Honeymoon, family, group, and custom trips use the
              same planning process.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl">Where we work</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We plan travel in Jammu and Kashmir. Srinagar is the usual
              starting city for itineraries. Office address, phone, hours, and a
              map are published on the contact page only when they are confirmed.
            </p>
            <div className="mt-6 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
              <NapBlock nap={nap} />
              <p className="mt-4 text-sm">
                <Link href={paths.contact} className="text-primary hover:underline">
                  Full contact details and enquiry form
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl">Start a trip</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Browse Kashmir tour packages, read destination notes, or send the
            dates you have. We will come back with a plan that matches the
            season and the group.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={paths.contact}>Plan Your Trip</ButtonLink>
            <ButtonLink href={paths.packages} variant="outline">
              View packages
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
