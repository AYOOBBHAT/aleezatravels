import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { SiteLogo } from "@/components/layout/site-logo";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { desktopNav } from "@/lib/data/site";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref, generalEnquiryMessage } from "@/lib/seo/urls";
import { getSiteSettings } from "@/lib/site/source";

export async function Navbar() {
  const [whatsappHref, settings] = await Promise.all([
    configuredWhatsAppHref(generalEnquiryMessage()),
    getSiteSettings(),
  ]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <SiteLogo name={settings.name} logo={settings.logo} />
        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {whatsappHref ? (
            <ButtonLink
              href={whatsappHref}
              variant="whatsapp"
              size="lg"
              className="hidden md:inline-flex"
            >
              <MessageCircle data-icon="inline-start" />
              WhatsApp Us
            </ButtonLink>
          ) : null}
          <ButtonLink href={paths.contact} size="lg" className="hidden sm:inline-flex">
            Plan Your Trip
          </ButtonLink>
          <MobileNav
            whatsappHref={whatsappHref}
            showWhatsApp={Boolean(whatsappHref)}
            name={settings.name}
            logo={settings.logo}
          />
        </div>
      </Container>
    </header>
  );
}
