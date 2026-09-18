/**
 * Local CMS dataset for blog posts.
 * Documents already use the Sanity `blogPost` field names.
 * Swap this file for GROQ results via `loadDocuments()` in `source.ts`.
 */
import { bestTimeToVisitKashmir } from "@/lib/blog/content/best-time-to-visit-kashmir";
import { howManyDaysKashmir } from "@/lib/blog/content/how-many-days-kashmir";
import { kashmirHoneymoonPlanning } from "@/lib/blog/content/kashmir-honeymoon-planning";
import { kashmirFirstTimeGuide } from "@/lib/blog/content/kashmir-travel-guide-first-time";
import { kashmirTripBudget } from "@/lib/blog/content/kashmir-trip-budget";
import { srinagarToGulmarg } from "@/lib/blog/content/srinagar-to-gulmarg";
import { srinagarToPahalgam } from "@/lib/blog/content/srinagar-to-pahalgam";
import { thingsToDoGulmarg } from "@/lib/blog/content/things-to-do-gulmarg";
import { thingsToDoPahalgam } from "@/lib/blog/content/things-to-do-pahalgam";
import { whatToPackKashmir } from "@/lib/blog/content/what-to-pack-kashmir";
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
];
