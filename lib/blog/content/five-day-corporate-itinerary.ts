import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import {
  corporateRelatedDestinations,
  hrefs,
} from "@/lib/blog/content/corporate-shared";

const { h2, p, ul, note } = articleBlocks("five-day-corporate-itinerary");

export const fiveDayCorporateItinerary = defineArticle({
  _type: "blogPost",
  id: "5-day-kashmir-corporate-team-trip-itinerary",
  slug: "5-day-kashmir-corporate-team-trip-itinerary",
  title: "5-Day Kashmir Corporate Team Trip Itinerary",
  excerpt:
    "A clearly labelled sample 5-day Kashmir team itinerary: Srinagar and a houseboat night on request, Gulmarg, Pahalgam, Sonamarg, and departure. Not a locked package.",
  featuredImage: {
    ...blogImages.classic,
    alt: "Dal Lake in Srinagar at the start of a sample 5-day Kashmir corporate itinerary",
  },
  author: "Aleeza Travels",
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-07",
  category: "corporate-travel",
  tags: [
    "Kashmir team trip",
    "corporate tour",
    "sample itinerary",
  ],
  seoTitle: "5-Day Kashmir Corporate Team Trip Itinerary (Sample)",
  seoDescription:
    "Sample 5-day Kashmir corporate itinerary: Srinagar, Gulmarg, Pahalgam, and Sonamarg. This outline is an example, not an automatic inclusion in every company package.",
  relatedPackageSlugs: [
    "kashmir-5-nights-6-days",
    "kashmir-group-tour",
    "customized-kashmir-tour",
  ],
  relatedDestinationSlugs: [...corporateRelatedDestinations],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Is this the same as the published 5 nights / 6 days package?",
      answer:
        "No. That published circuit uses different overnight pacing. This article is a 5-day sample written for a company conversation. Either can be rewritten after an enquiry.",
    },
    {
      question: "Is the houseboat night included?",
      answer:
        "Only if we can confirm a boat for your dates and you accept it in the quote. The sample lists it as a Srinagar option, not a guarantee.",
    },
  ],
  content: [
    p(
      "Sample itinerary. This is one possible 5-day shape for a company group. It is not automatically included in every corporate package, and it is not a live availability calendar. Driving order can change with weather, rooms, and how early the first flight lands.",
    ),
    p(
      "Our published ",
      link("5 nights / 6 days Kashmir circuit", hrefs.fiveNight),
      " is a different overnight pattern (Srinagar, Gulmarg, Pahalgam). If you want this 5-day sample turned into a quote, use the ",
      link("corporate enquiry form", hrefs.corporateQuote),
      ".",
    ),
    h2("day-1", "Day 1 — Srinagar and a houseboat night (on request)"),
    p(
      "Arrive ",
      link("Srinagar", hrefs.srinagar),
      " Airport. Transfer to the stay. If you arrive in daylight, a short lake hour can be added; a late landing is for rest. A houseboat night can replace a hotel night when the season and your dates allow. It is requested, not assumed.",
    ),
    h2("day-2", "Day 2 — Gulmarg, returning to Srinagar"),
    p(
      "A meadow day to ",
      link("Gulmarg", hrefs.gulmarg),
      " and back to Srinagar in the evening. The gondola is optional and usually decided on the day unless tickets are added to the quote. This sample keeps the group in one Srinagar hotel rather than an overnight in the meadows — useful when rooming a larger team together matters more than a pine-evening.",
    ),
    h2("day-3", "Day 3 — Pahalgam"),
    p(
      "Transfer to ",
      link("Pahalgam", hrefs.pahalgam),
      ". It is a longer road day. Keep sightseeing light on arrival. Lidder Valley time, with Aru or Betaab only if the day and the group still have energy. This can be an overnight or a long day return; the quote should say which, because they are not the same product.",
    ),
    h2("day-4", "Day 4 — Sonamarg and Srinagar"),
    p(
      "A long day into the Sindh Valley toward ",
      link("Sonamarg", hrefs.sonamarg),
      " and back to Srinagar. Overnight in Sonamarg is only added if hotels are available and you prefer not to return the same evening. Glacier outings stay optional.",
    ),
    h2("day-5", "Day 5 — Airport departure"),
    p(
      "Drive to Srinagar Airport according to the first flight in the party, unless you split transfers. Early departures mean an early start. Share flight times when you enquire.",
    ),
    ul([
      "This sample stacks Gulmarg and Sonamarg as day trips so the group can stay based in Srinagar for most nights.",
      "Pahalgam as a full day (or overnight) is the main valley contrast.",
      "If that is too much driving, drop Sonamarg or turn Gulmarg into the only meadow day.",
    ]),
    note(
      "Sample itinerary only. Houseboats, gondola, side valleys, and the exact overnight pattern are confirmed in a written quote. Compare also the published 5-night / 6-day package if you want fewer same-day returns.",
    ),
    p(
      "For how group size changes this shape, read ",
      link("planning for 10, 20, or 50 employees", hrefs.groupSize),
      ". To brief us, ",
      link("plan a corporate trip", hrefs.corporate),
      ".",
    ),
  ],
});
