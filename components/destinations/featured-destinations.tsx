import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { DestinationCard } from "@/components/destinations/destination-card";
import { getFeaturedDestinations } from "@/lib/destinations/source";
import { paths } from "@/lib/seo/paths";

export async function FeaturedDestinations() {
  const destinations = await getFeaturedDestinations();

  if (destinations.length === 0) {
    return null;
  }

  return (
    <Section id="destinations" ariaLabelledBy="destinations-heading">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="destinations-heading"
            eyebrow="The valley"
            title="Kashmir destinations"
            description="From Dal Lake to the high meadows, these are the places most Aleeza Travels itineraries are built around."
          />
          <ButtonLink href={paths.destinations} variant="outline" className="shrink-0">
            All destinations
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
