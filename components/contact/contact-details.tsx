import { MessageCircle } from "lucide-react";
import { MapsEmbed } from "@/components/contact/maps-embed";
import { NapBlock } from "@/components/seo/nap";
import { type BusinessNap } from "@/lib/site/nap";

export function ContactDetails({
  nap,
  whatsappHref,
}: {
  nap: BusinessNap;
  whatsappHref?: string;
}) {
  const hasAddress = Boolean(nap.address);
  const hasPhone = Boolean(nap.phone);
  const hasEmail = Boolean(nap.email);
  const hasWhatsapp = Boolean(nap.whatsapp);
  const hasHours = Boolean(nap.hoursNote);
  const hasMap = Boolean(nap.mapsEmbedUrl || nap.mapsPlaceUrl);
  const hasDetails = hasAddress || hasPhone || hasEmail || hasWhatsapp || hasHours;

  return (
    <div className="space-y-8">
      <div>
        <h2 id="business-details" className="font-heading text-2xl">
          Business details
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {hasDetails
            ? "Use these details or the enquiry form. They should match the Google Business Profile once that listing is claimed."
            : "Send an enquiry with your dates and group size. Phone, WhatsApp, email, and office details appear here once they are published."}
        </p>
        <div className="mt-6 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
          <NapBlock nap={nap} />
        </div>
      </div>

      {hasEmail || hasWhatsapp || hasHours ? (
        <dl className="space-y-5">
          {hasEmail ? (
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Email
              </dt>
              <dd className="mt-1 text-sm">
                <a href={`mailto:${nap.email}`} className="text-primary hover:underline">
                  {nap.email}
                </a>
              </dd>
            </div>
          ) : null}
          {hasWhatsapp && whatsappHref ? (
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                WhatsApp
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href={whatsappHref}
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  {nap.whatsapp}
                </a>
              </dd>
            </div>
          ) : null}
          {hasHours ? (
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Business hours
              </dt>
              <dd className="mt-1 text-sm leading-6 text-foreground">{nap.hoursNote}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {hasMap ? (
        <div>
          <h2 id="location-map" className="font-heading text-2xl">
            Location
          </h2>
          {hasAddress ? (
            <p className="mt-2 mb-4 text-sm leading-6 text-muted-foreground">
              Find {nap.name} on the map below.
            </p>
          ) : (
            <p className="mt-2 mb-4 text-sm leading-6 text-muted-foreground">
              Open the verified Google Maps listing for {nap.name}.
            </p>
          )}
          <MapsEmbed nap={nap} />
        </div>
      ) : null}
    </div>
  );
}
