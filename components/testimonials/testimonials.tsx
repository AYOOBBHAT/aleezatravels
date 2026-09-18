import { Container } from "@/components/layout/container";
import { CoverImage } from "@/components/media/cover-image";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { formatDisplayDate } from "@/lib/format";
import { businessConfig } from "@/lib/site-config";
import { isPublicTestimonial } from "@/lib/testimonials/schema";
import { getPublishedTestimonials } from "@/lib/testimonials/source";

export async function Testimonials() {
  const testimonials = await getPublishedTestimonials();
  const verified = testimonials.filter(isPublicTestimonial);

  if (verified.length === 0) {
    return null;
  }

  return (
    <Section id="testimonials" ariaLabelledBy="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Guest notes"
          title="What travelers say"
          description={`Notes from guests who planned a Kashmir trip with ${businessConfig.businessName} and agreed to be quoted.`}
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {verified.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-foreground/8"
            >
              {item.photo ? (
                <CoverImage
                  image={item.photo}
                  className="mb-4 aspect-square w-16 rounded-full"
                  sizes="64px"
                />
              ) : null}
              <blockquote className="flex-1 text-base leading-7 text-foreground/90">
                <p>{item.quote}</p>
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4 text-sm">
                <cite className="font-medium not-italic">{item.customerName}</cite>
                {item.trip ? (
                  <p className="text-muted-foreground">{item.trip}</p>
                ) : null}
                {item.date ? (
                  <p className="text-muted-foreground">
                    <time dateTime={item.date}>{formatDisplayDate(item.date)}</time>
                  </p>
                ) : null}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
