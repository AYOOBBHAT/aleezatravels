import { LegalPage } from "@/components/legal/legal-page";
import { breadcrumbsFor } from "@/components/seo/breadcrumbs";
import { createPageMetadata } from "@/lib/seo/metadata";
import { paths } from "@/lib/seo/paths";
import { getSiteSettings } from "@/lib/site/source";

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return createPageMetadata({
    title: "Privacy Policy",
    description: `How ${settings.name} handles personal information submitted through this website.`,
    path: paths.privacy,
  });
}

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  const email = settings.contact.email;

  return (
    <main id="main-content">
      <LegalPage
        title="Privacy Policy"
        updated="18 September 2026"
        intro={`${settings.name} uses this website to answer Kashmir trip enquiries. This notice explains what we collect for that purpose. It is not a substitute for a signed privacy policy if you later take card payments or run advertising pixels.`}
        breadcrumbs={breadcrumbsFor({
          label: "Privacy Policy",
          href: paths.privacy,
        })}
      >
        <section>
          <h2>Who we are</h2>
          <p className="mt-3">
            The website is operated by {settings.name}, a travel agency planning
            trips in Jammu and Kashmir, India. Contact details used on this site
            come from a single business record (environment variables or Sanity
            Site settings). Street address, phone, and email appear only when
            they have been published.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p className="mt-3">When you send an enquiry, we may receive:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Travel dates, duration, trip type, and group size</li>
            <li>Destinations or package names you selected</li>
            <li>Any message you write</li>
          </ul>
          <p className="mt-3">
            If you continue the enquiry on WhatsApp, that conversation happens
            on WhatsApp’s service under their terms.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <p className="mt-3">We use enquiry details to:</p>
          <ul>
            <li>Reply with a proposed itinerary or questions</li>
            <li>Prepare a quote once hotels and transport can be checked</li>
            <li>Keep a record of the request so we can follow up</li>
          </ul>
          <p className="mt-3">
            We do not sell personal information. Submitting the form is not a
            booking.
          </p>
        </section>

        <section>
          <h2>Analytics and tags</h2>
          <p className="mt-3">
            Google Analytics or Google Tag Manager scripts load only when a
            measurement ID or container ID is configured on the server. If those
            IDs are empty, this website does not load Google Analytics or Tag
            Manager. When they are configured, Google may process usage data
            according to Google’s policies. Prefer Tag Manager alone if you need
            both Analytics and other tags, so visits are not counted twice.
          </p>
        </section>

        <section>
          <h2>Search Console</h2>
          <p className="mt-3">
            A Google Search Console verification code may be published as a meta
            tag so Google can confirm ownership of the site. That tag does not
            collect enquiry form fields.
          </p>
        </section>

        <section>
          <h2>Retention and sharing</h2>
          <p className="mt-3">
            Enquiry messages are kept long enough to plan the trip and for a
            reasonable follow-up period. They may be processed by email or
            hosting providers that deliver this website. We do not share enquiry
            details with unrelated third parties for their marketing.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p className="mt-3">
            You can ask what information we hold about an enquiry, ask us to
            correct it, or ask us to delete it, by using the contact details on
            the{" "}
            <a href={paths.contact} className="text-primary hover:underline">
              contact page
            </a>
            {email ? (
              <>
                {" "}
                or by emailing{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
                .
              </>
            ) : (
              ". Email will appear there once it is published."
            )}
          </p>
        </section>
      </LegalPage>
    </main>
  );
}
