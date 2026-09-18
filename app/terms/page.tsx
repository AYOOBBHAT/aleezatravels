import { LegalPage } from "@/components/legal/legal-page";
import { breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import { getSiteSettings } from "@/lib/site/source";

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return createPageMetadata({
    title: "Terms & Conditions",
    description: `Website terms for planning a Kashmir trip with ${settings.name}.`,
    path: paths.terms,
  });
}

export default async function TermsPage() {
  const settings = await getSiteSettings();

  return (
    <main id="main-content">
      <LegalPage
        title="Terms & Conditions"
        updated="18 September 2026"
        intro={`These terms cover use of the ${settings.name} website and trip enquiries. They are a working notice until full booking terms are supplied and reviewed.`}
        breadcrumbs={breadcrumbsFor({
          label: "Terms & Conditions",
          href: paths.terms,
        })}
      >
        <section>
          <h2>Using this website</h2>
          <p className="mt-3">
            The site describes Kashmir tour packages, destinations, and travel
            notes so you can plan a trip with {settings.name}. Content is
            provided in good faith and may change when seasons, roads, or
            accommodation availability change.
          </p>
        </section>

        <section>
          <h2>Enquiries are not bookings</h2>
          <p className="mt-3">
            Sending the enquiry form, an email, or a WhatsApp message does not
            reserve hotels, transport, or a price. A trip is confirmed only after
            a written itinerary and quote are agreed. Package prices marked as
            “on request” are not live tariffs.
          </p>
        </section>

        <section>
          <h2>Information on the site</h2>
          <p className="mt-3">
            We do not invent hotel names, guest reviews, ratings, awards, or
            visitor statistics. Business name, address, and phone are published
            only when they are confirmed, and they should match the Google
            Business Profile once that listing is claimed. Photographs are
            placeholders until replaced with licensed or owned images.
          </p>
        </section>

        <section>
          <h2>Your responsibilities</h2>
          <p className="mt-3">
            Provide accurate dates, group size, and contact details. Check
            passport, visa, and permit requirements for your nationality. Travel
            in Kashmir can be affected by weather and local conditions; the
            itinerary we propose may need to change.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p className="mt-3">
            Until a booking contract is issued, {settings.name} is not
            responsible for third-party websites linked from this site, or for
            decisions you make based on unpublished prices. Replace this section
            with the company’s insurance and liability wording before taking
            payments.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p className="mt-3">
            We may update these terms as the website and booking process
            develop. The date at the top of this page is the last update. For
            questions, use the{" "}
            <a href={paths.contact} className="text-primary hover:underline">
              contact page
            </a>
            .
          </p>
        </section>
      </LegalPage>
    </main>
  );
}
