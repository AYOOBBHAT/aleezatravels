import Link from "next/link";
import type { TravelDestination } from "@/lib/destinations/schema";
import type { PackageHotel } from "@/lib/packages/schema";
import { paths } from "@/lib/seo/paths";

type PackageHotelsProps = {
  hotels: PackageHotel[];
  destinations: TravelDestination[];
};

function nightsLabel(nights: number) {
  if (nights <= 0) {
    return "Nights to be confirmed";
  }

  return `${nights} night${nights === 1 ? "" : "s"}`;
}

export function PackageHotels({ hotels, destinations }: PackageHotelsProps) {
  if (hotels.length === 0) {
    return null;
  }

  return (
    <section id="hotels" aria-labelledby="hotels-heading" className="scroll-mt-28">
      <h2 id="hotels-heading" className="text-2xl sm:text-3xl">
        Hotel information
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
        Hotel and houseboat names are shown only after they are confirmed in a
        written quote. Nothing below is a booking.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {hotels.map((hotel, index) => {
          const destination = destinations.find((item) => item.slug === hotel.destinationSlug);

          return (
            <li
              key={`${hotel.destinationSlug}-${index}`}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
            >
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {nightsLabel(hotel.nights)}
              </p>
              <h3 className="mt-1 font-heading text-xl">
                {hotel.name ?? "Hotel or houseboat to be confirmed"}
              </h3>
              {destination ? (
                <p className="mt-1 text-sm">
                  Stay in{" "}
                  <Link
                    href={paths.destination(destination.slug)}
                    className="text-primary hover:underline"
                  >
                    {destination.name}
                  </Link>
                </p>
              ) : null}
              <p className="mt-2 text-sm text-muted-foreground">
                Room category: {hotel.roomCategory}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {hotel.note}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
