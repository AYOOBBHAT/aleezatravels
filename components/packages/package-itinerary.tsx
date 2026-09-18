import Link from "next/link";
import type { TravelDestination } from "@/lib/destinations/schema";
import type { PackageItineraryDay } from "@/lib/packages/schema";
import { paths } from "@/lib/seo/paths";

type PackageItineraryProps = {
  days: PackageItineraryDay[];
  destinations: TravelDestination[];
};

export function PackageItinerary({ days, destinations }: PackageItineraryProps) {
  if (days.length === 0) {
    return null;
  }

  return (
    <section id="itinerary" aria-labelledby="itinerary-heading" className="scroll-mt-28">
      <h2 id="itinerary-heading" className="text-2xl sm:text-3xl">
        Day-by-day itinerary
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
        This is a planning outline. Driving order and time in each place can
        change with weather, road status, and the pace you ask for.
      </p>
      <ol className="mt-6 space-y-4">
        {days.map((day) => {
          const destination = day.destinationSlug
            ? destinations.find((item) => item.slug === day.destinationSlug)
            : undefined;

          return (
            <li
              key={`${day.day}-${day.title}`}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
            >
              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Day {day.day}
              </p>
              <h3 className="mt-1 font-heading text-xl leading-snug">{day.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {day.summary}
              </p>
              {destination ? (
                <p className="mt-3 text-sm">
                  <Link
                    href={paths.destination(destination.slug)}
                    className="text-primary hover:underline"
                  >
                    {destination.name} destination guide
                  </Link>
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
