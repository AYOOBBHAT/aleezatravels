import { ButtonLink } from "@/components/ui/button-link";
import { CoverImage } from "@/components/media/cover-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { honeymoonFeatures, honeymoonImage } from "@/lib/data/honeymoon";
import { paths } from "@/lib/seo/paths";

export function HoneymoonSection() {
  return (
    <Section id="honeymoon" ariaLabelledBy="honeymoon-heading">
      <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <CoverImage
          image={honeymoonImage}
          className="min-h-[22rem] rounded-2xl lg:min-h-full"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
            For couples
          </p>
          <h2 id="honeymoon-heading" className="mt-3 text-3xl sm:text-4xl">
            A quieter Kashmir honeymoon
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Houseboat nights, private sightseeing, and stays chosen for rest as
            much as for views. The itinerary is built around the two of you, not
            a packed group circuit.
          </p>
          <ul className="mt-8 space-y-4">
            {honeymoonFeatures.map((feature) => (
              <li key={feature.title}>
                <h3 className="font-heading text-xl">{feature.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {feature.summary}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={paths.honeymoon}>Plan Your Honeymoon</ButtonLink>
            <ButtonLink href={`${paths.contact}?tripType=honeymoon#enquiry`} variant="outline">
              Get Quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
