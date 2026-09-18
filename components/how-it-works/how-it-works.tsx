import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { howItWorksSteps } from "@/lib/data/how-it-works";

export function HowItWorks() {
  return (
    <Section id="how-it-works" ariaLabelledBy="how-it-works-heading" className="bg-muted/60">
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="The process"
          title="How it works"
          description="Four clear steps from the first enquiry to arrival in Kashmir."
        />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <li key={item.step} className="relative rounded-2xl bg-card p-5 ring-1 ring-foreground/8">
              <span className="font-heading text-3xl text-accent">{String(item.step).padStart(2, "0")}</span>
              <h3 className="mt-3 font-heading text-xl leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
