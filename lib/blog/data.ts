/**
 * Local CMS dataset for blog posts.
 * Documents already use the Sanity `blogPost` field names.
 * Swap this file for GROQ results via `loadDocuments()` in `source.ts`.
 */
import { bestTimeToVisitKashmir } from "@/lib/blog/content/best-time-to-visit-kashmir";
import { bestPlacesCompanyTeamTrip } from "@/lib/blog/content/best-places-company-team-trip";
import { bestTimeCorporateTeamTrip } from "@/lib/blog/content/best-time-corporate-team-trip";
import { corporateOffsiteChecklist } from "@/lib/blog/content/corporate-offsite-checklist";
import { corporateTripKashmirCost } from "@/lib/blog/content/corporate-trip-kashmir-cost";
import { fiveDayCorporateItinerary } from "@/lib/blog/content/five-day-corporate-itinerary";
import { howManyDaysKashmir } from "@/lib/blog/content/how-many-days-kashmir";
import { kashmirCorporateRetreatGuide } from "@/lib/blog/content/kashmir-corporate-retreat-guide";
import { kashmirHoneymoonPlanning } from "@/lib/blog/content/kashmir-honeymoon-planning";
import { kashmirTeamOutingIdeasIt } from "@/lib/blog/content/kashmir-team-outing-ideas-it";
import { kashmirFirstTimeGuide } from "@/lib/blog/content/kashmir-travel-guide-first-time";
import { kashmirTripBudget } from "@/lib/blog/content/kashmir-trip-budget";
import { kashmirVsOtherDestinations } from "@/lib/blog/content/kashmir-vs-other-destinations";
import { planKashmirTripTeamSize } from "@/lib/blog/content/plan-kashmir-trip-team-size";
import { srinagarToGulmarg } from "@/lib/blog/content/srinagar-to-gulmarg";
import { srinagarToPahalgam } from "@/lib/blog/content/srinagar-to-pahalgam";
import { thingsToDoGulmarg } from "@/lib/blog/content/things-to-do-gulmarg";
import { thingsToDoPahalgam } from "@/lib/blog/content/things-to-do-pahalgam";
import { whatToPackKashmir } from "@/lib/blog/content/what-to-pack-kashmir";
import { whyKashmirCorporateTeamTrip } from "@/lib/blog/content/why-kashmir-corporate-team-trip";
import type { BlogArticle } from "@/lib/blog/schema";

export const articleDocuments: BlogArticle[] = [
  bestTimeToVisitKashmir,
  kashmirFirstTimeGuide,
  howManyDaysKashmir,
  srinagarToGulmarg,
  srinagarToPahalgam,
  thingsToDoGulmarg,
  thingsToDoPahalgam,
  kashmirHoneymoonPlanning,
  whatToPackKashmir,
  kashmirTripBudget,
  whyKashmirCorporateTeamTrip,
  kashmirCorporateRetreatGuide,
  kashmirTeamOutingIdeasIt,
  corporateTripKashmirCost,
  bestPlacesCompanyTeamTrip,
  fiveDayCorporateItinerary,
  planKashmirTripTeamSize,
  kashmirVsOtherDestinations,
  corporateOffsiteChecklist,
  bestTimeCorporateTeamTrip,
];
