import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SiteLogo } from "@/components/layout/site-logo";
import { NapBlock } from "@/components/seo/nap";
import { getPublishedDestinations } from "@/lib/destinations/source";
import { getPublishedPackages } from "@/lib/packages/source";
import { footerNav } from "@/lib/data/site";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref, generalEnquiryMessage } from "@/lib/seo/urls";
import { napFromSettings } from "@/lib/site/nap";
import { getSiteSettings } from "@/lib/site/source";

export async function Footer() {
  const year = new Date().getFullYear();
  const [packages, destinations, settings, whatsappHref] = await Promise.all([
    getPublishedPackages(),
    getPublishedDestinations(),
    getSiteSettings(),
    configuredWhatsAppHref(generalEnquiryMessage()),
  ]);
  const nap = napFromSettings(settings);

  return (
    <footer className="border-t border-primary/20 bg-primary text-primary-foreground">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="[&_a]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/60 [&_span.bg-primary]:bg-primary-foreground [&_span.bg-primary]:text-primary">
            <SiteLogo name={settings.name} logo={settings.logo} />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/75">
            {settings.name} plans Kashmir holidays
            {nap.locality ? ` from ${nap.locality}` : ""} — packages, honeymoon
            stays, family tours, group travel, and custom itineraries.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg text-primary-foreground">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm text-sm text-primary-foreground/75 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg text-primary-foreground">Destinations</h2>
          <ul className="mt-4 space-y-2.5">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Link
                  href={paths.destination(destination.slug)}
                  className="text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-heading text-lg text-primary-foreground">Packages</h2>
          <ul className="mt-4 space-y-2.5">
            {packages.slice(0, 4).map((tourPackage) => (
              <li key={tourPackage.slug}>
                <Link
                  href={paths.package(tourPackage.slug)}
                  className="text-sm text-primary-foreground/75 hover:text-primary-foreground"
                >
                  {tourPackage.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="font-heading text-lg text-primary-foreground">Contact</h2>
          <NapBlock nap={nap} tone="invert" />
          {nap.email ? (
            <p className="text-sm text-primary-foreground/80">
              <span className="block text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
                Email
              </span>
              <a
                href={`mailto:${nap.email}`}
                className="mt-1 inline-block hover:text-primary-foreground"
              >
                {nap.email}
              </a>
            </p>
          ) : null}
          {nap.whatsapp && whatsappHref ? (
            <p className="text-sm text-primary-foreground/80">
              <span className="block text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
                WhatsApp
              </span>
              <a
                href={whatsappHref}
                className="mt-1 inline-flex items-center gap-1.5 hover:text-primary-foreground"
              >
                <MessageCircle className="size-3.5" aria-hidden="true" />
                {nap.whatsapp}
              </a>
            </p>
          ) : null}
          {settings.social.some((item) => item.href) ? (
          <div>
            <p className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
              Social
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {settings.social
                .filter((item) => item.href)
                .map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          ) : null}
        </div>
      </Container>
      <div className="border-t border-primary-foreground/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href={paths.privacy} className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href={paths.terms} className="hover:text-primary-foreground">
              Terms & Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
