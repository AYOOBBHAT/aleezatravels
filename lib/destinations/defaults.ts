import type { TravelDestination } from "@/lib/destinations/schema";
import { assertTravelDestination } from "@/lib/destinations/validate";

type DestinationDraft = Omit<
  TravelDestination,
  "summary" | "image" | "highlights"
> &
  Partial<Pick<TravelDestination, "summary" | "image" | "highlights">>;

export function defineDestination(doc: DestinationDraft): TravelDestination {
  return assertTravelDestination({
    ...doc,
    summary: doc.summary ?? doc.shortDescription,
    image: doc.image ?? doc.heroImage,
    highlights:
      doc.highlights ??
      doc.topAttractions.slice(0, 3).map((item) => item.title),
  });
}
