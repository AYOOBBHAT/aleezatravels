import { FaqList } from "@/components/faq/faq-list";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getPublishedFaqs } from "@/lib/faq/source";

export async function Faq() {
  const faqs = await getPublishedFaqs();

  return (
    <Section id="faq" ariaLabelledBy="faq-heading" className="bg-muted/60">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start">
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="Kashmir travel FAQs"
          description="Practical answers for planning a first trip to the valley."
        />
        <FaqList items={faqs} />
      </Container>
    </Section>
  );
}
