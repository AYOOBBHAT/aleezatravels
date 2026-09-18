import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/yusmarg.jpg",
  alt: "Rolling meadows and forested hills at Yusmarg, Kashmir",
  width: 1920,
  height: 1080,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const yusmarg = defineDestination({
  _type: "destination",
  id: "yusmarg",
  slug: "yusmarg",
  name: "Yusmarg",
  region: "Pir Panjal foothills",
  headline: "Yusmarg, Kashmir: pine forest walks a short drive from Srinagar",
  shortDescription:
    "A compact meadow destination with forest walks and a calmer alternative when you want Kashmir without the main-town bustle.",
  introduction:
    "Yusmarg is a small meadow set against pine, close enough to Srinagar for a genuine day out and quiet enough that the afternoon can still feel like countryside. Yusmarg travel is walking: forest edges, open grass, and — if the group wants the extra hour — a longer path toward lake country rather than a ticketed ride. We use it when a circuit needs air and trees without another overnight, or when someone specifically asks for Kashmir away from Dal Lake traffic and the Gulmarg queue.",
  whyVisit: [
    {
      title: "A compact, walkable meadow",
      summary:
        "You arrive, you walk, you sit. Yusmarg does not ask you to collect four viewpoints to feel you have done it properly.",
    },
    {
      title: "Pine as well as grass",
      summary:
        "The forest edge is the character of the place. On a warm Srinagar day, that shade is the reason to come.",
    },
    {
      title: "Easy to fold into a city stay",
      summary:
        "Like Doodhpathri, Yusmarg lets you keep hotel nights in Srinagar. That saves a packing day on shorter holidays.",
    },
    {
      title: "A calmer alternative to the headline towns",
      summary:
        "If Gulmarg is full or the gondola is not the point of your trip, Yusmarg still gives you a meadow day with less machinery around it.",
    },
  ],
  topAttractions: [
    {
      title: "The meadow and pine rim",
      summary:
        "This is Yusmarg. Short walks from the parking area already change the sound of the day. Stay on paths where they exist; the grass is working pasture.",
    },
    {
      title: "Forest trails",
      summary:
        "Pine walks are the outing we protect in the schedule. Length depends on the group, not on a named gate.",
    },
    {
      title: "Nilnag, if the day still has legs",
      summary:
        "A forest lake walk some visitors add. It is longer and not automatic. We only put it in the plan when you want it and the season allows a sensible turnaround.",
    },
  ],
  thingsToDo: [
    {
      title: "Walk the meadow slowly",
      summary:
        "Things to do in Yusmarg start here. Give it time. A rushed forty minutes from the car will feel like a lay-by, not a destination.",
    },
    {
      title: "Choose forest shade over extra driving",
      summary:
        "If the group is tired, skip the longer lake walk. Pine edge and a packed lunch are a complete Yusmarg day.",
    },
    {
      title: "Keep it as a Srinagar-based day",
      summary:
        "We typically return to the city. An overnight is uncommon and only written when a stay can actually be confirmed.",
    },
    {
      title: "Pair it with a custom, unhurried circuit",
      summary:
        "A Yusmarg tour package chapter sits beside Srinagar gardens and maybe Doodhpathri on a different day — not as a third meadow stacked into one afternoon.",
    },
  ],
  suggestedDuration: {
    typicalStay: "Day trip from Srinagar",
    overview:
      "Plan a full day: morning drive, several hours of walking and sitting, return to Srinagar. Trying to see Yusmarg and Doodhpathri on the same date usually means seeing neither properly.",
  },
  bestTimeToVisit: {
    overview:
      "Yusmarg is at its most useful from late spring through autumn. Winter visits depend on the road and on whether you want snow under pine or a sure meadow walk. We will say which when we have your dates.",
    seasons: [
      {
        name: "April to June",
        summary:
          "Mild, green, and a strong window for first-time walkers and families.",
      },
      {
        name: "July and August",
        summary:
          "Warmer, with picnic crowds on popular days. Start earlier. Forest shade still makes this a better hot-day outing than an exposed bowl.",
      },
      {
        name: "September and October",
        summary:
          "Clearer and quieter. A favourite add-on to a Srinagar stay for couples.",
      },
      {
        name: "November to March",
        summary:
          "Cold, with snow possible. Beautiful when the road is fine; we do not assume that it is.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Yusmarg is a road outing from Srinagar, typically around one and a half hours each way in clear weather. It is a day-trip distance that still deserves an early start if you want the meadow before it fills.",
    details: [
      "We treat Yusmarg as a dedicated day from Srinagar, not a stop on the way to Gulmarg.",
      "Paths can be uneven. Sensible shoes matter more than trekking kit.",
      "Local pony hires may be offered. They are optional and paid on the day.",
      "If anyone in the group cannot walk far, Yusmarg can still work: stay near the meadow edge and make the visit about air and trees, not distance.",
    ],
  },
  nearbyDestinationSlugs: ["srinagar", "doodhpathri", "gulmarg"],
  faqs: [
    {
      question: "Is Yusmarg a day trip from Srinagar?",
      answer:
        "Yes, that is how we usually plan it. The drive is short enough to leave real walking time, and you sleep back in the city.",
    },
    {
      question: "Should we choose Yusmarg or Doodhpathri?",
      answer:
        "Doodhpathri is wider pasture and streams. Yusmarg is a smaller meadow with more pine. If you want one extra meadow day, we pick based on season and whether you prefer open grass or forest edge. Doing both on the same day is a mistake.",
    },
    {
      question: "Is Yusmarg good if we already visit Gulmarg?",
      answer:
        "It can be. Gulmarg is higher and more developed. Yusmarg is quieter and closer. On a longer Srinagar stay it is a different kind of day, not a repeat of the gondola town.",
    },
    {
      question: "Can Aleeza Travels add Yusmarg to a custom Kashmir trip?",
      answer:
        "Yes. Custom itineraries use Yusmarg when you want meadow time without another hotel night, or when Gulmarg does not fit the dates. It is planned as its own day, with Nilnag only if you ask for the longer walk.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Yusmarg Kashmir Travel Guide",
  seoDescription:
    "Yusmarg travel with Aleeza Travels: pine forest walks, a compact meadow day from Srinagar, and custom Kashmir itineraries that keep the outing unhurried.",
});
