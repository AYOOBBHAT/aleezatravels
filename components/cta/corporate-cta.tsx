import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { corporateEnquiryMessage } from "@/lib/corporate/message";
import { paths } from "@/lib/seo/paths";
import { configuredWhatsAppHref } from "@/lib/seo/urls";
import { businessConfig } from "@/lib/site-config";

export async function CorporateCta({
  title = "Planning a Corporate Trip to Kashmir?",
  description = "Tell us your team size, dates and requirements. We'll help you build a customized itinerary.",
  invert = true,
}: {
  title?: string;
  description?: string;
  invert?: boolean;
}) {
  const whatsappHref = await configuredWhatsAppHref(corporateEnquiryMessage());

  if (invert) {
    return (
      <Section
        id="corporate-plan"
        ariaLabelledBy="corporate-cta-heading"
        className="bg-primary py-16 text-primary-foreground sm:py-20"
      >
        <Container className="max-w-3xl">
          <h2
            id="corporate-cta-heading"
            className="text-3xl text-primary-foreground sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={`${paths.corporateTravel}#enquiry`}
              className="min-w-44 bg-card text-foreground hover:bg-card/90"
            >
              Request Corporate Quote
            </ButtonLink>
            <ButtonLink
              href={paths.corporateTravel}
              variant="outline"
              className="min-w-44 border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Talk to {businessConfig.businessName}
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

  return (
    <aside className="rounded-2xl bg-card p-6 ring-1 ring-foreground/8">
      <h2 className="font-heading text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <ButtonLink href={`${paths.corporateTravel}#enquiry`}>
          Request Corporate Quote
        </ButtonLink>
        {whatsappHref ? (
          <ButtonLink href={whatsappHref} variant="whatsapp">
            <MessageCircle data-icon="inline-start" />
            WhatsApp Us
          </ButtonLink>
        ) : null}
      </div>
    </aside>
  );
}
