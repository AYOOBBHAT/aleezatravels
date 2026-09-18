import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TrustIcon } from "@/components/icons/service-icons";
import { trustItems } from "@/lib/data/trust";
import { businessConfig } from "@/lib/site-config";

export function TrustBar() {
  return (
    <Section ariaLabelledBy="trust-heading" className="py-12 sm:py-14 lg:py-16">
      <Container>
        <h2 id="trust-heading" className="sr-only">
          How {businessConfig.businessName} works with you
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <li key={item.title} className="flex gap-3 lg:block">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <TrustIcon name={item.icon} />
              </span>
              <div className="lg:mt-4">
                <h3 className="font-heading text-lg leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
