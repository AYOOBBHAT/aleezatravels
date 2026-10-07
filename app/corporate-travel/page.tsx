import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CorporateCta } from "@/components/cta/corporate-cta";
import { CorporateEnquiryForm } from "@/components/forms/corporate-enquiry-form";
import { FaqList } from "@/components/faq/faq-list";
import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Breadcrumbs, breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogImages } from "@/lib/blog/images";
import {
  corporateAudiences,
  corporateBookingSteps,
  corporateFaqs,
  corporateServices,
} from "@/lib/corporate/content";
import { corporateEnquiryMessage } from "@/lib/corporate/message";
import { getPostsByCategory } from "@/lib/blog/source";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { corporateTravelPageJsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref } from "@/lib/seo/urls";
import { businessConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title:
    "Corporate & Team Travel to Kashmir | Company Trips, Retreats & Offsites | Aleeza Travels",
  description:
    "Plan corporate travel to Kashmir: company trips, team outings, corporate retreats, offsites and employee getaways with customized itineraries, stays and transport.",
  path: paths.corporateTravel,
  absoluteTitle: true,
  image: blogImages.classic,
});

export default async function CorporateTravelPage() {
  const [destinations, posts, whatsappHref] = await Promise.all([
    getPublishedDestinations(),
    getPostsByCategory("corporate-travel"),
    configuredWhatsAppHref(corporateEnquiryMessage()),
  ]);
  const faqs = [...corporateFaqs];

  return (
    <main id="main-content">
      <JsonLd data={corporateTravelPageJsonLd()} />
      <JsonLd data={faqPageJsonLd(faqs)} />

      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="mb-8">
            <Breadcrumbs
              items={breadcrumbsFor({
                label: "Corporate Travel",
                href: paths.corporateTravel,
              })}
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
                For companies and teams
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">
                Corporate & Team Travel to Kashmir
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Plan a corporate trip, company outing, team retreat or employee
                getaway in Kashmir. Itineraries, stays and transport are written
                after we know dates and group size.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`${paths.corporateTravel}#enquiry`}>
                  Plan a Corporate Trip
                </ButtonLink>
                <ButtonLink href={`${paths.corporateTravel}#enquiry`} variant="outline">
                  Request a Quote
                </ButtonLink>
                {whatsappHref ? (
                  <ButtonLink href={whatsappHref} variant="whatsapp">
                    <MessageCircle data-icon="inline-start" />
                    WhatsApp Us
                  </ButtonLink>
                ) : null}
              </div>
            </div>
            <CoverImage
              image={blogImages.classic}
              className="min-h-[18rem] rounded-2xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </Container>
      </Section>

      <Section id="who-we-help" ariaLabelledBy="who-we-help-heading" className="bg-muted/60">
        <Container>
          <SectionHeading
            id="who-we-help-heading"
            eyebrow="Who we help"
            title="Companies planning a Kashmir trip"
            description="HR teams, team leads, and event planners use this page to start a group enquiry — a company trip, retreat, offsite, or employee getaway. We do not list client names here."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corporateAudiences.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
              >
                <h3 className="font-heading text-xl leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="services" ariaLabelledBy="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="What we plan"
            title="Corporate travel services"
            description="The work is itinerary planning, stays, and movement on the ground. Optional add-ons are confirmed only in a quote."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {corporateServices.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
              >
                <h3 className="font-heading text-xl leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="why-kashmir" ariaLabelledBy="why-kashmir-heading" className="bg-muted/40">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              id="why-kashmir-heading"
              eyebrow="The valley"
              title="Why Kashmir for a corporate trip?"
            />
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Kashmir is a change of scene from an ordinary office week: lake
              light in Srinagar, meadow days in Gulmarg or Pahalgam, and driving
              days that can be kept honest if the group is not trying to see
              everything. Teams use that mix for bonding, a quieter offsite, or
              a shared outing — not because one landscape is “best” on a
              ranking.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Group size changes the plan. A ten-person team and a
              fifty-person annual outing do not need the same rooming or
              vehicles. We write those details after the enquiry. Read destination
              notes for{" "}
              <Link href={paths.destination("srinagar")} className="text-primary hover:underline">
                Srinagar
              </Link>
              ,{" "}
              <Link href={paths.destination("gulmarg")} className="text-primary hover:underline">
                Gulmarg
              </Link>
              , and{" "}
              <Link href={paths.destination("pahalgam")} className="text-primary hover:underline">
                Pahalgam
              </Link>
              , or start from{" "}
              <Link href={paths.packages} className="text-primary hover:underline">
                Kashmir tour packages
              </Link>{" "}
              and adapt them for a company group.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              IT and technology companies looking for outing ideas can use{" "}
              <Link
                href={paths.blogPost("kashmir-team-outing-ideas-it-technology-companies")}
                className="text-primary hover:underline"
              >
                Kashmir team outing ideas for IT and technology companies
              </Link>
              . The trip itself is still planned like any other company group.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              "Scenic days that are not another conference hotel corridor.",
              "Room to slow down: later starts, fewer hotel changes, or a houseboat night on request.",
              "Flexible sightseeing — gardens, shikara time, meadow walks — scheduled with real driving days.",
              "Accommodation in a category you ask for, confirmed for the actual dates.",
              "Plans that can be written for small leadership groups or larger employee trips, subject to what can be booked.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-card px-5 py-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/8"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="how-booking-works" ariaLabelledBy="booking-heading">
        <Container>
          <SectionHeading
            id="booking-heading"
            eyebrow="The process"
            title="How corporate booking works"
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateBookingSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
              >
                <span className="font-heading text-3xl text-accent">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-xl leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="enquiry-section" ariaLabelledBy="enquiry" className="bg-muted/60">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <CorporateEnquiryForm
            destinations={destinations.map((item) => ({
              slug: item.slug,
              name: item.name,
            }))}
            whatsappHref={whatsappHref}
          />
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl">
              What happens after you send this
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {businessConfig.businessName} replies with a proposed itinerary.
              Hotels, houseboats, and vehicles are named only when they can be
              checked for your dates. Nothing on this form is a contract or a
              live tariff.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Prefer a shorter note first? Use WhatsApp if it is shown, or the
              general{" "}
              <Link href={paths.contact} className="text-primary hover:underline">
                contact form
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section id="corporate-faqs" ariaLabelledBy="corporate-faq-heading">
        <Container className="max-w-3xl">
          <h2 id="corporate-faq-heading" className="text-2xl sm:text-3xl">
            Corporate travel FAQs
          </h2>
          <FaqList
            items={faqs}
            className="mt-8 divide-y divide-border rounded-2xl bg-card ring-1 ring-foreground/8"
          />
        </Container>
      </Section>

      {posts.length > 0 ? (
        <RelatedPosts
          title="Corporate travel notes"
          description="Guides for a Kashmir company trip, team outing, corporate retreat, offsite, or employee getaway."
          posts={posts.slice(0, 6)}
        />
      ) : null}

      <CorporateCta
        title="Planning a Team Trip to Kashmir?"
        description={`Talk to ${businessConfig.businessName} about dates, headcount, and the kind of days you want in the valley.`}
      />
    </main>
  );
}
