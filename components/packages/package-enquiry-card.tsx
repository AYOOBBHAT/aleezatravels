import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PackagePrice } from "@/components/packages/package-price";
import { PACKAGE_TYPE_LABELS } from "@/lib/packages/schema";
import { packageContactHref, packageTypeHref } from "@/lib/packages/links";
import type { TravelPackage } from "@/lib/packages/schema";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref, packageEnquiryMessage } from "@/lib/seo/urls";

type PackageEnquiryCardProps = {
  tourPackage: TravelPackage;
  sticky?: boolean;
};

export async function PackageEnquiryCard({
  tourPackage,
  sticky = false,
}: PackageEnquiryCardProps) {
  const whatsappHref = await configuredWhatsAppHref(
    packageEnquiryMessage(tourPackage.title),
  );
  return (
    <aside
      className={
        sticky
          ? "rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 lg:sticky lg:top-28"
          : "rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 sm:p-6"
      }
    >
      <h2 className="font-heading text-2xl">Plan this trip</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        An enquiry is not a booking. We reply with a proposed itinerary and a
        quote for your dates.
      </p>
      <div className="mt-4">
        <PackagePrice tourPackage={tourPackage} size="detail" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {tourPackage.duration} · {PACKAGE_TYPE_LABELS[tourPackage.packageType]}
      </p>
      <div className="mt-5 grid gap-2">
        <ButtonLink
          href={packageContactHref(tourPackage.slug)}
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
        Prefer to browse first? See{" "}
        <Link href={packageTypeHref(tourPackage.packageType)} className="underline">
          {PACKAGE_TYPE_LABELS[tourPackage.packageType].toLowerCase()} packages
        </Link>{" "}
        or{" "}
        <Link href={paths.packages} className="underline">
          all Kashmir tour packages
        </Link>
        .
      </p>
    </aside>
  );
}
