import Link from "next/link";
import { CoverImage } from "@/components/media/cover-image";
import { paths } from "@/lib/seo/paths";
import type { TravelDestination } from "@/lib/destinations/schema";

export function DestinationCard({
  destination,
  headingAs: Heading = "h3",
}: {
  destination: TravelDestination;
  headingAs?: "h2" | "h3";
}) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/8">
      <Link href={paths.destination(destination.slug)} className="block">
        <div className="relative">
          <CoverImage image={destination.heroImage} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
            <Heading className="font-heading text-2xl">{destination.name}</Heading>
            <p className="mt-1 text-sm text-primary-foreground/80">{destination.region}</p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm leading-6 text-muted-foreground">{destination.shortDescription}</p>
          <p className="mt-3 text-sm font-medium text-primary">
            Explore {destination.name}
          </p>
        </div>
      </Link>
    </article>
  );
}
