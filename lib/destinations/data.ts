import { doodhpathri } from "@/lib/destinations/content/doodhpathri";
import { gulmarg } from "@/lib/destinations/content/gulmarg";
import { pahalgam } from "@/lib/destinations/content/pahalgam";
import { sonamarg } from "@/lib/destinations/content/sonamarg";
import { srinagar } from "@/lib/destinations/content/srinagar";
import { yusmarg } from "@/lib/destinations/content/yusmarg";
import type { TravelDestination } from "@/lib/destinations/schema";

/**
 * Local CMS dataset for destinations.
 * Add a new file under `content/` and include it here — pages do not change.
 */
export const destinationDocuments: TravelDestination[] = [
  srinagar,
  gulmarg,
  pahalgam,
  sonamarg,
  doodhpathri,
  yusmarg,
];
