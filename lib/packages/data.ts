/**
 * Local CMS dataset for travel packages.
 * Documents already use the Sanity `travelPackage` field names.
 * Swap this file for GROQ results via `loadDocuments()` in `source.ts`.
 *
 * TODO (do not invent replacements):
 * - startingPrice is null until a real tariff is approved.
 * - hotels[].name is null until a property is confirmed.
 * - Photography is placeholder imagery — replace with licensed/owned files.
 * - Meal plans and optional add-ons stay “confirmed in your quote”.
 * - No availability calendars, guest counts, or review scores.
 *
 * See `lib/packages/content-todos.ts`.
 */
import {
  BASE_EXCLUSIONS,
  BASE_INCLUSIONS,
  BASE_NOTES,
  DEFAULT_MEALS,
  DEFAULT_TRANSPORT,
  PRICE_NOTE,
  definePackage,
  galleryFor,
  stay,
} from "@/lib/packages/defaults";
import type { TravelPackage } from "@/lib/packages/schema";

const honeymoonHero = {
  src: "/images/packages/honeymoon.jpg",
  alt: "Houseboats on Dal Lake, a typical setting for a Kashmir honeymoon stay",
  width: 1920,
  height: 1088,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

const familyHero = {
  src: "/images/packages/family.jpg",
  alt: "The Lidder Valley near Pahalgam, a common stop on Kashmir family tours",
  width: 1920,
  height: 1071,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

const classic5Hero = {
  src: "/images/packages/classic-5n6d.jpg",
  alt: "Dal Lake in Srinagar, the usual starting point for a 5-night Kashmir circuit",
  width: 1920,
  height: 1280,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

const classic6Hero = {
  src: "/images/packages/classic-6n7d.jpg",
  alt: "Gulmarg’s pine forests and mountains on a longer Kashmir circuit",
  width: 1920,
  height: 1440,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

const groupHero = {
  src: "/images/packages/group.jpg",
  alt: "Open meadows at Sonamarg, often included on Kashmir group tours",
  width: 1920,
  height: 1440,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

const customHero = {
  src: "/images/packages/custom.jpg",
  alt: "Quiet meadows at Doodhpathri for travelers who want a custom Kashmir route",
  width: 1920,
  height: 1280,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const packageDocuments: TravelPackage[] = [
  definePackage({
    _type: "travelPackage",
    id: "kashmir-honeymoon-package",
    slug: "kashmir-honeymoon-package",
    title: "Kashmir Honeymoon Package",
    shortDescription:
      "A slower Kashmir stay for couples: lake time in Srinagar, private transfers, and quieter rooms in Gulmarg or Pahalgam.",
    description:
      "This honeymoon outline keeps driving days honest and leaves room for rest. Srinagar is for Dal Lake and gardens, Gulmarg for meadow time, and Pahalgam for the Lidder Valley. Room decoration, a houseboat night, and private sightseeing can be arranged on request and are confirmed in your quote — they are not assumed.",
    duration: "6 nights / 7 days",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "gulmarg", "pahalgam"],
    packageType: "honeymoon",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: honeymoonHero,
    gallery: galleryFor(["srinagar", "gulmarg", "pahalgam"], honeymoonHero),
    inclusions: [
      ...BASE_INCLUSIONS,
      "Private cab for the couple on sightseeing and transfer days",
      "Honeymoon room decoration at one stay, if requested before arrival",
    ],
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        summary:
          "Meet at Srinagar Airport and transfer to your stay. If you arrive in daylight, a short shikara hour on Dal Lake can be added; otherwise the evening is for rest.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Srinagar at an easy pace",
        summary:
          "Mughal gardens and old-city time without a packed checklist. A houseboat night can replace a hotel night when the season and your dates allow.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        summary:
          "Drive up to the meadows. The afternoon is for a walk or simply the view — the gondola is optional and ticketed separately unless you ask us to include it.",
        destinationSlug: "gulmarg",
      },
      {
        day: 4,
        title: "Gulmarg",
        summary:
          "A quieter day in the pine and meadow landscape. Good for couples who want fewer transfers and more unhurried time.",
        destinationSlug: "gulmarg",
      },
      {
        day: 5,
        title: "Gulmarg to Pahalgam",
        summary:
          "Return toward the Lidder Valley. Evening by the river, with a slower check-in after the drive.",
        destinationSlug: "pahalgam",
      },
      {
        day: 6,
        title: "Pahalgam",
        summary:
          "Aru or Betaab Valley as a half-day, or stay in town if you prefer not to add another outing. The choice is made when we write your plan.",
        destinationSlug: "pahalgam",
      },
      {
        day: 7,
        title: "Depart",
        summary:
          "Drive to Srinagar Airport according to your flight time. Extra nights can be added before this day if you want a longer stay.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [
      stay("srinagar", 2, "Two nights in Srinagar. A houseboat night can replace one hotel night when available."),
      stay("gulmarg", 2),
      stay("pahalgam", 2),
    ],
    transportation: DEFAULT_TRANSPORT,
    meals: DEFAULT_MEALS,
    importantNotes: [
      ...BASE_NOTES,
      PRICE_NOTE,
      "Gondola tickets, shikara rides, and room decoration are arranged only when you ask for them in the enquiry.",
    ],
    faqs: [
      {
        question: "Can you arrange honeymoon room decoration?",
        answer:
          "Yes, at selected stays, if you tell us before arrival. It is confirmed with the hotel in your quote, not assumed.",
      },
      {
        question: "Is a houseboat included?",
        answer:
          "A Dal Lake houseboat night can be included when it suits the season and your dates. It is not automatic; we add it when you want it.",
      },
      {
        question: "Is this itinerary private?",
        answer:
          "Yes. This outline is planned as a private cab for two, not a group coach, unless you ask to travel with others.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Kashmir Honeymoon Package",
    seoDescription:
      "A 6-night Kashmir honeymoon outline covering Srinagar, Gulmarg, and Pahalgam, with private pacing and optional houseboat or room decoration on request.",
  }),

  definePackage({
    _type: "travelPackage",
    id: "kashmir-family-package",
    slug: "kashmir-family-package",
    title: "Kashmir Family Package",
    shortDescription:
      "Shorter travel days, family rooms, and sightseeing that mixed-age groups can enjoy — gardens, meadows, and easy river walks.",
    description:
      "This family outline keeps the classic valley highlights but shortens driving days where we can. Srinagar is the base for gardens and a Doodhpathri day trip; Pahalgam is for river and meadow time that children and elders usually find easier than a packed hill station hop.",
    duration: "5 nights / 6 days",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "pahalgam", "doodhpathri"],
    packageType: "family",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: familyHero,
    gallery: galleryFor(["srinagar", "pahalgam", "doodhpathri"], familyHero),
    inclusions: [
      ...BASE_INCLUSIONS,
      "Family rooms or connecting rooms where the hotel can provide them",
    ],
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        summary:
          "Airport pickup and a short transfer to your stay. The rest of the day is unhurried — useful after a flight with children or elders.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Srinagar gardens and lake",
        summary:
          "Mughal gardens and a Dal Lake shikara if the group wants it. We keep the day local so it does not become a long road day.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Doodhpathri day trip",
        summary:
          "A meadow day out of Srinagar and back the same evening. Picnic-style time rather than another hotel change, which most families prefer.",
        destinationSlug: "doodhpathri",
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam",
        summary:
          "Drive to the Lidder Valley. Evening in Pahalgam with time by the river rather than extra sightseeing on arrival day.",
        destinationSlug: "pahalgam",
      },
      {
        day: 5,
        title: "Pahalgam",
        summary:
          "Betaab Valley or a town walk, chosen for how far the group wants to go. Pony rides and longer treks are optional and not assumed.",
        destinationSlug: "pahalgam",
      },
      {
        day: 6,
        title: "Depart",
        summary:
          "Return to Srinagar Airport. We set the departure time from Pahalgam around your flight, not a fixed coach schedule.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [stay("srinagar", 3), stay("pahalgam", 2)],
    transportation: DEFAULT_TRANSPORT,
    meals: DEFAULT_MEALS,
    importantNotes: [
      ...BASE_NOTES,
      PRICE_NOTE,
      "Doodhpathri is planned as a day trip from Srinagar on this outline, so there is no overnight there unless you ask to add one.",
    ],
    faqs: [
      {
        question: "Is this suitable for young children or elders?",
        answer:
          "The outline avoids back-to-back long drives. Tell us ages when you enquire so we can keep the Pahalgam day and Doodhpathri day realistic.",
      },
      {
        question: "Can you arrange family rooms?",
        answer:
          "We request family or connecting rooms where the hotel has them. The exact room type is confirmed in the quote, not before.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Kashmir Family Package",
    seoDescription:
      "A 5-night Kashmir family tour outline with Srinagar, a Doodhpathri day trip, and Pahalgam, paced for mixed-age groups.",
  }),

  definePackage({
    _type: "travelPackage",
    id: "kashmir-5-nights-6-days",
    slug: "kashmir-5-nights-6-days",
    title: "Kashmir 5 Nights / 6 Days",
    shortDescription:
      "A compact introduction to the valley covering Srinagar with Gulmarg and Pahalgam, paced for first-time visitors.",
    description:
      "This is the standard first Kashmir circuit: two nights to settle in Srinagar, a night in Gulmarg for the meadows, and two nights in Pahalgam. It is a full six days on the road and in town — not a leisurely two-week stay — and it works well if you want the main places without extra hotel changes.",
    duration: "5 nights / 6 days",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "gulmarg", "pahalgam"],
    packageType: "sightseeing",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: classic5Hero,
    gallery: galleryFor(["srinagar", "gulmarg", "pahalgam"], classic5Hero),
    inclusions: BASE_INCLUSIONS,
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        summary:
          "Airport pickup and transfer to your Srinagar stay. A shikara ride can be added if you reach the lake in daylight.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Srinagar sightseeing",
        summary:
          "Dal Lake, Mughal gardens, and time in the city. This day stays local so the following transfers are not stacked on arrival.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        summary:
          "Drive to Gulmarg. Afternoon in the meadows. Gondola tickets are optional and usually bought on the day unless we add them to your quote.",
        destinationSlug: "gulmarg",
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam",
        summary:
          "Return from the meadows and continue to Pahalgam. It is a longer road day; we keep sightseeing light on arrival.",
        destinationSlug: "pahalgam",
      },
      {
        day: 5,
        title: "Pahalgam",
        summary:
          "Lidder Valley time — Betaab or Aru as the day allows. This is the main Pahalgam sightseeing day on a 5-night plan.",
        destinationSlug: "pahalgam",
      },
      {
        day: 6,
        title: "Depart",
        summary:
          "Drive to Srinagar Airport. Early flights mean an early start from Pahalgam; share your flight time when you enquire.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [stay("srinagar", 2), stay("gulmarg", 1), stay("pahalgam", 2)],
    transportation: DEFAULT_TRANSPORT,
    meals: DEFAULT_MEALS,
    importantNotes: [...BASE_NOTES, PRICE_NOTE],
    faqs: [
      {
        question: "Is 5 nights enough for Kashmir?",
        answer:
          "It is enough for a first look at Srinagar, Gulmarg, and Pahalgam. If you want Sonamarg or more rest days, the 6-night outline or a custom plan is a better fit.",
      },
      {
        question: "Does this include the Gulmarg Gondola?",
        answer:
          "Not automatically. We can add tickets to the quote if you want them; otherwise you can decide on the day.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Kashmir 5 Nights 6 Days Package",
    seoDescription:
      "A 5-night Kashmir tour package covering Srinagar, Gulmarg, and Pahalgam — a compact circuit for first-time visitors.",
  }),

  definePackage({
    _type: "travelPackage",
    id: "kashmir-6-nights-7-days",
    slug: "kashmir-6-nights-7-days",
    title: "Kashmir 6 Nights / 7 Days",
    shortDescription:
      "Extra room in the itinerary to add Sonamarg or a second night in the meadows without turning the trip into a checklist.",
    description:
      "An extra night over the 5-night circuit. On this outline the added time is used for a Sonamarg day from Srinagar, which keeps hotel changes fewer than an overnight in Sonamarg (those stays depend on season and availability, and are confirmed only in a quote).",
    duration: "6 nights / 7 days",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "gulmarg", "pahalgam", "sonamarg"],
    packageType: "sightseeing",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: classic6Hero,
    gallery: galleryFor(["srinagar", "gulmarg", "pahalgam", "sonamarg"], classic6Hero),
    inclusions: BASE_INCLUSIONS,
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        summary: "Airport pickup and transfer to your stay. Rest or a short lake visit if you arrive in daylight.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Srinagar sightseeing",
        summary: "Gardens, Dal Lake, and city time before the hill transfers begin.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Sonamarg day trip",
        summary:
          "A long day into the Sindh Valley and back to Srinagar. Overnight in Sonamarg is only added if hotels are available for your dates and you prefer not to return the same evening.",
        destinationSlug: "sonamarg",
      },
      {
        day: 4,
        title: "Srinagar to Gulmarg",
        summary: "Drive to Gulmarg for meadow time. Optional gondola is not included unless quoted.",
        destinationSlug: "gulmarg",
      },
      {
        day: 5,
        title: "Gulmarg to Pahalgam",
        summary: "Transfer to the Lidder Valley. Light evening after the drive.",
        destinationSlug: "pahalgam",
      },
      {
        day: 6,
        title: "Pahalgam",
        summary: "Valley sightseeing — Aru or Betaab — at a pace you choose when we write the plan.",
        destinationSlug: "pahalgam",
      },
      {
        day: 7,
        title: "Depart",
        summary: "Drive to Srinagar Airport according to your flight.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [stay("srinagar", 3), stay("gulmarg", 1), stay("pahalgam", 2)],
    transportation: DEFAULT_TRANSPORT,
    meals: DEFAULT_MEALS,
    importantNotes: [
      ...BASE_NOTES,
      PRICE_NOTE,
      "Sonamarg is a day trip on this outline. An overnight there is possible only if we can confirm a stay for your dates.",
    ],
    faqs: [
      {
        question: "Why is Sonamarg a day trip?",
        answer:
          "Overnight stays in Sonamarg depend on the season and what is open. A day trip from Srinagar is the reliable way to include it on a 6-night plan until a stay is confirmed.",
      },
      {
        question: "Can I stay longer in Gulmarg instead?",
        answer:
          "Yes. The extra night can be moved. Tell us which place you want more time in when you enquire.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Kashmir 6 Nights 7 Days Package",
    seoDescription:
      "A 6-night Kashmir holiday package covering Srinagar, a Sonamarg day, Gulmarg, and Pahalgam, with room to shift nights when you enquire.",
  }),

  definePackage({
    _type: "travelPackage",
    id: "kashmir-group-tour",
    slug: "kashmir-group-tour",
    title: "Kashmir Group Tour",
    shortDescription:
      "A coordinated group itinerary with shared transport, clear briefings, and stays chosen for larger parties of friends or colleagues.",
    description:
      "Planned for friends, clubs, or colleagues travelling together. Sightseeing follows the Srinagar–Gulmarg–Sonamarg circuit so the group stays on one route. Vehicle type (one large vehicle or more than one cab) depends on headcount and is set in the quote — it is not fixed on this page.",
    duration: "5 nights / 6 days",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "gulmarg", "sonamarg"],
    packageType: "group",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: groupHero,
    gallery: galleryFor(["srinagar", "gulmarg", "sonamarg"], groupHero),
    inclusions: [
      ...BASE_INCLUSIONS,
      "One point of contact for the group’s timings and rooming list",
    ],
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        summary:
          "Group pickup at Srinagar Airport and transfer to the stay. Briefing for the next day’s start time.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Srinagar sightseeing",
        summary:
          "Dal Lake and gardens as a group. We keep the day on one circuit so no one is split across optional add-ons unless the whole group agrees.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Gulmarg",
        summary:
          "Day in the meadows, returning to Srinagar in the evening unless an overnight in Gulmarg is confirmed for the whole group.",
        destinationSlug: "gulmarg",
      },
      {
        day: 4,
        title: "Sonamarg",
        summary:
          "Sindh Valley day with a clear departure time. Long day; we do not stack another heavy outing on the same evening.",
        destinationSlug: "sonamarg",
      },
      {
        day: 5,
        title: "Srinagar at leisure or local time",
        summary:
          "A buffer day for shopping, a second garden visit, or rest before departure. Useful when flights are the following morning.",
        destinationSlug: "srinagar",
      },
      {
        day: 6,
        title: "Depart",
        summary: "Group drop at Srinagar Airport according to the first flight in the party, unless you split transfers.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [
      stay("srinagar", 5, "Five nights in Srinagar as the group base, with Gulmarg and Sonamarg as day outings unless you ask for overnights in the meadows."),
    ],
    transportation: {
      overview:
        "Shared transport for the group. Whether that is one vehicle or more than one cab is decided from your headcount in the quote.",
      details: [
        "Airport pickup and drop can be included for the whole party.",
        "Day trips to Gulmarg and Sonamarg run to an agreed start time.",
        "Splitting the group across different hotels or vehicles is possible but must be planned before confirmation.",
      ],
    },
    meals: DEFAULT_MEALS,
    importantNotes: [
      ...BASE_NOTES,
      PRICE_NOTE,
      "On this outline Gulmarg and Sonamarg are day trips so the group is not split across three hotel towns. Overnights in the meadows can be added if every room can be confirmed.",
    ],
    faqs: [
      {
        question: "How many people is this for?",
        answer:
          "There is no fixed group size on this page. Share a headcount when you enquire so we can plan vehicles and rooming.",
      },
      {
        question: "Can the group stay in Gulmarg overnight?",
        answer:
          "Yes, if rooms for everyone can be confirmed. Otherwise the day-trip version keeps the group in one Srinagar hotel.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Kashmir Group Tour Package",
    seoDescription:
      "A 5-night Kashmir group tour outline based in Srinagar, with Gulmarg and Sonamarg day trips and transport planned around your headcount.",
  }),

  definePackage({
    _type: "travelPackage",
    id: "customized-kashmir-tour",
    slug: "customized-kashmir-tour",
    title: "Customized Kashmir Tour",
    shortDescription:
      "Built around your dates, pace, and interests — from houseboat nights to meadow day trips — rather than a fixed circuit.",
    description:
      "Use this page as a starting point, not a locked programme. Nights, destinations, hotel category, and sightseeing are written after we know your dates and how you like to travel. The sample days below show one possible pacing across Srinagar, Gulmarg, Pahalgam, Doodhpathri, and Yusmarg.",
    duration: "Flexible duration",
    destination: "srinagar",
    destinationsCovered: ["srinagar", "gulmarg", "pahalgam", "doodhpathri", "yusmarg"],
    packageType: "custom",
    startingPrice: null,
    priceCurrency: "INR",
    heroImage: customHero,
    gallery: galleryFor(
      ["srinagar", "gulmarg", "pahalgam", "doodhpathri", "yusmarg"],
      customHero,
    ),
    inclusions: [
      "A proposed itinerary written for your dates",
      "Hotel or houseboat options in the category you ask for",
      "Transfers and sightseeing listed in the agreed plan",
      "Changes to pace and destinations before you confirm",
    ],
    exclusions: BASE_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Sample: Arrive Srinagar",
        summary: "A typical start. Arrival day can be shorter or include a lake visit depending on your flight.",
        destinationSlug: "srinagar",
      },
      {
        day: 2,
        title: "Sample: Srinagar",
        summary: "Gardens and Dal Lake. Extra nights here are the easiest way to slow the trip.",
        destinationSlug: "srinagar",
      },
      {
        day: 3,
        title: "Sample: Meadow day trip",
        summary:
          "Doodhpathri or Yusmarg as a day out of Srinagar when you want landscape without changing hotels.",
        destinationSlug: "doodhpathri",
      },
      {
        day: 4,
        title: "Sample: Gulmarg",
        summary: "Overnight or day trip, depending on how many hotel changes you want.",
        destinationSlug: "gulmarg",
      },
      {
        day: 5,
        title: "Sample: Pahalgam",
        summary: "Lidder Valley time. Families and couples often want two nights here rather than one.",
        destinationSlug: "pahalgam",
      },
      {
        day: 6,
        title: "Sample: Depart or continue",
        summary:
          "Airport drop, or continue with Sonamarg or more Srinagar nights. The real length is whatever you ask us to plan.",
        destinationSlug: "srinagar",
      },
    ],
    hotels: [
      stay(
        "srinagar",
        0,
        "Nights and towns are not fixed on a custom trip. We list stays only after you tell us dates and which places you want.",
      ),
    ],
    transportation: DEFAULT_TRANSPORT,
    meals: DEFAULT_MEALS,
    importantNotes: [
      PRICE_NOTE,
      "The day list on this page is a sample only. It is not a confirmed programme.",
      "Hotel names, night counts, and meal plans appear in your quote, not on this page.",
    ],
    faqs: [
      {
        question: "How do I start a custom trip?",
        answer:
          "Send dates, number of travelers, and the places you care about. We reply with a proposed itinerary and a quote — nothing is booked until you agree.",
      },
      {
        question: "Can I mix honeymoon pacing with family members?",
        answer:
          "Yes. Tell us who is travelling. We will not assume a private couple’s plan if elders or children are in the group.",
      },
    ],
    featured: true,
    published: true,
    seoTitle: "Customized Kashmir Tour",
    seoDescription:
      "Plan a customized Kashmir trip with Aleeza Travels — dates, destinations, and stays written around you rather than a fixed circuit.",
  }),
];
