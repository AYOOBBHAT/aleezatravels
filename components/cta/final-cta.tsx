import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref, generalEnquiryMessage } from "@/lib/seo/urls";

export async function FinalCta() {
  const whatsappHref = await configuredWhatsAppHref(generalEnquiryMessage());
  return (
    <Section
      id="plan"
      ariaLabelledBy="final-cta-heading"
      className="bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24"
    >
      <Container className="max-w-3xl text-center">
        <h2 id="final-cta-heading" className="text-3xl text-primary-foreground sm:text-4xl">
          Ready to Explore Kashmir?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
          Tell us when you want to travel and how you like to spend the days. We
          will come back with a proposed Kashmir itinerary.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={paths.contact}
            className="min-w-44 bg-card text-foreground hover:bg-card/90"
          >
            Get Quote
          </ButtonLink>
          <ButtonLink
            href={paths.contact}
            variant="outline"
            className="min-w-44 border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Plan Your Trip
          </ButtonLink>
          {whatsappHref ? (
            <ButtonLink href={whatsappHref} variant="whatsapp" className="min-w-44">
              <MessageCircle data-icon="inline-start" />
              WhatsApp Us
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
