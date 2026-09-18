import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { destinationContactHref } from "@/lib/destinations/links";
import type { TravelDestination } from "@/lib/destinations/schema";
import { paths } from "@/lib/seo/paths";
import {
  configuredWhatsAppHref,
  destinationEnquiryMessage,
} from "@/lib/seo/urls";

type DestinationEnquiryCardProps = {
  destination: TravelDestination;
  sticky?: boolean;
};

export async function DestinationEnquiryCard({
  destination,
  sticky = false,
}: DestinationEnquiryCardProps) {
  const whatsappHref = await configuredWhatsAppHref(
    destinationEnquiryMessage(destination.name),
  );
  return (
    <aside
      className={
        sticky
          ? "rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 lg:sticky lg:top-28"
          : "rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 sm:p-6"
      }
    >
      <h2 className="font-heading text-2xl">Include {destination.name} in your trip</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        An enquiry is not a booking. Tell us your dates and we will propose how
        this stop fits a Kashmir itinerary.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        {destination.suggestedDuration.typicalStay} · {destination.region}
      </p>
      <div className="mt-5 grid gap-2">
        <ButtonLink
          href={destinationContactHref(destination.slug)}
          size="lg"
          className="w-full"
        >
          Enquire Now
        </ButtonLink>
        {whatsappHref ? (
          <ButtonLink href={whatsappHref} variant="whatsapp" size="lg" className="w-full">
            <MessageCircle data-icon="inline-start" />
            WhatsApp Us
          </ButtonLink>
        ) : null}
      </div>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Or browse{" "}
        <Link href={paths.packages} className="underline">
          Kashmir tour packages
        </Link>{" "}
        and{" "}
        <Link href={paths.destinations} className="underline">
          all destinations
        </Link>
        .
      </p>
    </aside>
  );
}
