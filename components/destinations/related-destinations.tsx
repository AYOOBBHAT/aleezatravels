import { DestinationCard } from "@/components/destinations/destination-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { TravelDestination } from "@/lib/destinations/schema";

type RelatedDestinationsProps = {
  title?: string;
  description?: string;
  destinations: TravelDestination[];
};

export function RelatedDestinations({
  title = "Places on this trip",
  description,
  destinations: related,
}: RelatedDestinationsProps) {
  if (related.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
