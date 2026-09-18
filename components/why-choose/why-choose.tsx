import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { WhyChooseIcon } from "@/components/icons/service-icons";
import { whyChooseItems } from "@/lib/data/why-choose";
import { businessConfig } from "@/lib/site-config";

export function WhyChoose() {
  return (
    <Section id="why-choose" ariaLabelledBy="why-choose-heading" className="bg-muted/60">
      <Container>
        <SectionHeading
          id="why-choose-heading"
          eyebrow="Working with us"
          title={`Why choose ${businessConfig.businessName}`}
          description="We handle the practical pieces of a Kashmir holiday so the days on the ground stay clear and unhurried."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <WhyChooseIcon name={item.icon} />
              </span>
              <h3 className="mt-4 font-heading text-xl leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
