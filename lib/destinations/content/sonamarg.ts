import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/sonamarg.jpg",
  alt: "Open meadows and mountains at Sonamarg in Kashmir",
  width: 1920,
  height: 1440,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const sonamarg = defineDestination({
  _type: "destination",
  id: "sonamarg",
  slug: "sonamarg",
  name: "Sonamarg",
  region: "Sindh Valley",
  headline: "Sonamarg, Kashmir: the meadow of gold on the Sindh",
  shortDescription:
    "The meadow of gold: glacier country, river valleys, and a quieter base for travelers who want landscape over nightlife.",
  introduction:
    "Sonamarg is the Sindh Valley opening into a high meadow, with Thajiwas glacier hanging in the background when the cloud lifts. It feels further from Srinagar than Gulmarg in mood even when the drive is similar: fewer shops, more road, and a landscape that is about ice, river, and light. Sonamarg travel suits people who are happy with a simple overnight or a long, well-timed day. It is not the place we send you for restaurants or a packed activity list.",
  whyVisit: [
    {
      title: "Glacier country without a trek permit maze",
      summary:
        "Thajiwas is the usual outing: a meadow walk, and a glacier view if the season and your legs agree. Ponies exist; walking is still the cleaner way to see it.",
    },
    {
      title: "A different valley from Pahalgam",
      summary:
        "The Sindh and the Lidder are not interchangeable. If you already have Pahalgam nights, Sonamarg is a contrast, not a copy.",
    },
    {
      title: "Quieter evenings",
      summary:
        "Once day-trip cars leave, Sonamarg is a small mountain stop. That is the point for travelers who found Gulmarg busy.",
    },
    {
      title: "A logical add-on to a longer circuit",
      summary:
        "Group tours and custom Kashmir trips often use Sonamarg as a single night or a dedicated day, not as the whole holiday.",
    },
  ],
  topAttractions: [
    {
      title: "Thajiwas Glacier",
      summary:
        "The main reason people come. Access is a walk or pony from the meadow, and snow bridges change through the year. We describe it as a viewpoint outing, not a technical climb.",
    },
    {
      title: "Sindh River",
      summary:
        "The drive itself is part of the visit: the river running with the road. We keep photo stops short so the day does not dissolve into the verge.",
    },
    {
      title: "The meadow at town",
      summary:
        "Even if you never go up to the glacier, the open ground at Sonamarg is worth the night — especially at first and last light.",
    },
    {
      title: "Zoji La road beyond",
      summary:
        "The pass toward Ladakh is not a sightseeing stop we sell. When it is open it is a highway with weather. We mention it only if your onward plan actually uses it.",
    },
  ],
  thingsToDo: [
    {
      title: "Walk toward Thajiwas at your own pace",
      summary:
        "Things to do in Sonamarg should start with the glacier meadow, not a shopping lane. Turn around when the group is tired; the view does not require the last hundred metres.",
    },
    {
      title: "Keep the rest of the day empty",
      summary:
        "A Sonamarg day that also tries to include Gulmarg or Pahalgam is how people remember the car, not the meadow. We refuse to write that stack unless you insist.",
    },
    {
      title: "Stay overnight if the drive is the same day as arrival",
      summary:
        "Landing in Srinagar and reaching Sonamarg by afternoon is a long first day. An overnight here, or saving Sonamarg for later, is the kinder design.",
    },
    {
      title: "Use it in a group or custom circuit",
      summary:
        "A Sonamarg tour package from Aleeza Travels is usually a chapter in a wider Kashmir route — Srinagar, a meadow town, then this valley — rather than a standalone city break.",
    },
  ],
  suggestedDuration: {
    typicalStay: "1 night or a long day trip",
    overview:
      "A long day from Srinagar works in summer if you start early. One night is better if you want evening meadow light or a slower glacier morning. Two nights are for travelers who specifically asked for a quiet mountain stop.",
  },
  bestTimeToVisit: {
    overview:
      "Sonamarg is more seasonal than Srinagar. Winter access can be limited, and the glacier outing changes with snow. We confirm the shape of the day only against your dates.",
    seasons: [
      {
        name: "May to June",
        summary:
          "The meadow opens and the glacier walk is usually the most straightforward. A strong first-visit window.",
      },
      {
        name: "July and August",
        summary:
          "Day-trip traffic rises. Start early, and treat Thajiwas as a morning, not a midday picnic in a queue of ponies.",
      },
      {
        name: "September and October",
        summary:
          "Clearer and cooler. Good for photography and for travelers who want fewer cars.",
      },
      {
        name: "November to April",
        summary:
          "Snow and road status decide everything. We will not put Sonamarg on a winter itinerary unless we can stand behind the transfer that week.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Sonamarg is a road destination from Srinagar along the Sindh, typically around two to two and a half hours in clear weather. The road is a highway corridor, which means trucks as well as tourist cars. Plan it as a half day of driving, not a nearby suburb.",
    details: [
      "A same-day Srinagar–Sonamarg–Srinagar outing needs an early start and a known turnaround time.",
      "Pony hires to Thajiwas are local and optional. Walking is fine for most reasonably fit visitors; we do not pretend the path is a city pavement.",
      "There is no gondola here. If someone in your group needs a mechanical lift for mountain views, Gulmarg is the better overnight.",
      "We do not combine Sonamarg and Pahalgam on the same calendar day.",
    ],
  },
  nearbyDestinationSlugs: ["srinagar", "pahalgam", "gulmarg"],
  faqs: [
    {
      question: "Is Sonamarg worth an overnight?",
      answer:
        "If glacier light and a quiet evening matter, yes. If you only want a photograph and are short on nights, a well-run day trip from Srinagar can be enough in summer.",
    },
    {
      question: "Can we visit Sonamarg and Gulmarg in one day?",
      answer:
        "We advise against it. Both are half-day roads from Srinagar in different directions. You would spend the day in the car.",
    },
    {
      question: "Is the Thajiwas Glacier walk difficult?",
      answer:
        "It is a mountain meadow path, not a city trail. Fit walkers manage it. Elders and small children may prefer a shorter turnaround or a pony. Conditions change with snowmelt.",
    },
    {
      question: "Does Aleeza Travels include Sonamarg in group tours?",
      answer:
        "When the season supports it, yes. Our group and custom Kashmir itineraries use Sonamarg as landscape time, with the glacier outing optional and never sold as a guaranteed close-up.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Sonamarg Kashmir Travel Guide",
  seoDescription:
    "Sonamarg travel with Aleeza Travels: Thajiwas Glacier mornings, Sindh Valley drives, and Kashmir tour packages that keep this meadow as its own day.",
});
