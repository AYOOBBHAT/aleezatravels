import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/doodhpathri.jpg",
  alt: "Green meadows and snow-capped Pir Panjal peaks at Doodhpathri",
  width: 1920,
  height: 1280,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const doodhpathri = defineDestination({
  _type: "destination",
  id: "doodhpathri",
  slug: "doodhpathri",
  name: "Doodhpathri",
  region: "Budgam meadows",
  headline: "Doodhpathri, Kashmir: milk-white streams and a quieter meadow day",
  shortDescription:
    "Open pastureland and clear streams, still less crowded than the classic circuit. A strong day trip from Srinagar.",
  introduction:
    "Doodhpathri is a meadow table in Budgam, named for the look of its streams when the light hits them. It is closer to Srinagar than Pahalgam and less built-up than Gulmarg: pasture, water, and a picnic landscape rather than a town. Doodhpathri travel is usually a day trip. That is not a limitation. It is how you add a high meadow to a Srinagar stay without committing another hotel night, and how a custom Kashmir trip can feel wider than the three-name circuit of lake, gondola, and Lidder.",
  whyVisit: [
    {
      title: "Meadow time without a second hotel",
      summary:
        "If your nights are already set in Srinagar, Doodhpathri is the cleanest way to spend a day in open grass and still sleep in the city.",
    },
    {
      title: "Fewer commercial layers than Gulmarg",
      summary:
        "You will still meet other visitors in season. You will not meet a gondola queue. The day is walking and sitting by water.",
    },
    {
      title: "A good fit for families and first-timers",
      summary:
        "The landscape is wide rather than steep. Children can move. Elders can stay near the car. We keep the programme that simple on purpose.",
    },
    {
      title: "Pairs with Yusmarg on a custom route",
      summary:
        "They are both meadow days from Srinagar. We pick one for most itineraries, or split them across two days if you specifically want both.",
    },
  ],
  topAttractions: [
    {
      title: "The main meadow",
      summary:
        "This is the visit. Rolling pasture, horses in season, and a horizon of Pir Panjal snow when the air is clear. You do not need a second named site to justify the drive.",
    },
    {
      title: "Shaliganga and the streams",
      summary:
        "The water is the local landmark. Sit, walk the bank, and keep plastic out of it. We do not organise stream sports here.",
    },
    {
      title: "Picnic ground, used lightly",
      summary:
        "People come with packed lunches. We prefer a simple sit-down over a long catering production so the meadow stays the point.",
    },
  ],
  thingsToDo: [
    {
      title: "Walk until the noise of the car park fades",
      summary:
        "Things to do in Doodhpathri are almost all versions of this. Give it two or three unhurried hours, not a twenty-minute photo stop.",
    },
    {
      title: "Keep it as a Srinagar day trip",
      summary:
        "Overnight infrastructure is limited compared with Gulmarg or Pahalgam. We usually return to Srinagar the same evening.",
    },
    {
      title: "Do not stack it with Gulmarg the same day",
      summary:
        "Both are west of the city and both deserve daylight. A Doodhpathri tour package chapter is a full meadow day, not a box to tick on the way to the gondola.",
    },
    {
      title: "Bring a layer even in summer",
      summary:
        "The tableland is open and can turn windy. This is practical packing, not a weather guarantee.",
    },
  ],
  suggestedDuration: {
    typicalStay: "Day trip from Srinagar",
    overview:
      "A full day is the right unit: drive out after breakfast, meadow time through the middle of the day, back to Srinagar before a late dinner. An overnight is only planned when you specifically want a quieter meadow base and we can confirm a stay.",
  },
  bestTimeToVisit: {
    overview:
      "Doodhpathri is a warm-season meadow for most visitors. Winter snow can close or empty the road, and we will not guess that from a brochure.",
    seasons: [
      {
        name: "May to June",
        summary:
          "Green-up and comfortable walking. One of the best windows for a first visit.",
      },
      {
        name: "July and August",
        summary:
          "Popular picnic season. Go earlier in the day. Rain can shorten the outing; the drive is still worth it if the cloud lifts.",
      },
      {
        name: "September",
        summary:
          "Clearer and less crowded than midsummer. A strong add-on to a Srinagar stay.",
      },
      {
        name: "October to April",
        summary:
          "Increasingly uncertain. We only write Doodhpathri into a winter plan if the road and the meadow are actually usable that week.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Doodhpathri is a road outing from Srinagar through Budgam, typically around one and a half to two hours each way in clear weather. It is a day-trip distance, not a highway hop you squeeze between two other towns.",
    details: [
      "We start from Srinagar after breakfast and keep a known return time so the city evening stays usable.",
      "The last stretch is a mountain road. It is usually gentler than the Gulmarg climb, but it is still not a city street.",
      "Facilities on the meadow are basic. Eat a proper breakfast in Srinagar and carry water.",
      "Doodhpathri combines with a Srinagar stay, not with a same-day Pahalgam transfer.",
    ],
  },
  nearbyDestinationSlugs: ["srinagar", "yusmarg", "gulmarg"],
  faqs: [
    {
      question: "Is Doodhpathri better as a day trip or an overnight?",
      answer:
        "A day trip from Srinagar is what we write for most guests. Overnight stays are the exception, used when you want a meadow base and we can confirm a property in the quote.",
    },
    {
      question: "How does Doodhpathri compare with Gulmarg?",
      answer:
        "Gulmarg is a high bowl with a gondola town. Doodhpathri is pasture and streams with less built-up edge. If you can only have one meadow overnight, Gulmarg usually wins; if you already have Gulmarg, Doodhpathri is the quieter extra day.",
    },
    {
      question: "Is Doodhpathri suitable for children?",
      answer:
        "Yes, with sun protection, water, and a willingness to let the day be a picnic and a walk. There is no ride that you must buy to make the visit count.",
    },
    {
      question: "Can you add Doodhpathri to a Kashmir tour package?",
      answer:
        "Yes. It sits naturally on a Srinagar day when the rest of the circuit is lake, Gulmarg, and Pahalgam. Custom trips use it when someone wants meadow time without another hotel change.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Doodhpathri Kashmir Travel Guide",
  seoDescription:
    "Plan a Doodhpathri day trip from Srinagar with Aleeza Travels: open meadows, stream-side walks, and Kashmir itineraries that keep this pastureland unhurried.",
});
