import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/srinagar.jpg",
  alt: "Shikaras and houseboats on Dal Lake in Srinagar, Kashmir",
  width: 1920,
  height: 1280,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const srinagar = defineDestination({
  _type: "destination",
  id: "srinagar",
  slug: "srinagar",
  name: "Srinagar",
  region: "Dal Lake & old city",
  headline: "Srinagar, Kashmir: Dal Lake, gardens, and where most trips begin",
  shortDescription:
    "Houseboats, Mughal gardens, and the slow rhythm of Dal Lake — the natural starting point for most Kashmir itineraries.",
  introduction:
    "Srinagar is where a Kashmir trip usually finds its feet. You land here, sleep near the water or in the city, and use the first morning to reset after the flight. Dal Lake is the postcard — wooden houseboats, willow-lined banks, and shikaras that move at walking pace — but the city is also gardens, a dense old quarter, and the road-head for every meadow town in the valley.",
  whyVisit: [
    {
      title: "The practical hub",
      summary:
        "Srinagar Airport is the usual arrival. Almost every Aleeza Travels itinerary starts or ends here, which keeps driving days honest instead of stacking meadow transfers back to back.",
    },
    {
      title: "Water and gardens in the same day",
      summary:
        "You can spend a morning on the lake and an afternoon in the Mughal gardens without leaving town. That mix is hard to repeat once you climb toward Gulmarg or Pahalgam.",
    },
    {
      title: "A slower first night",
      summary:
        "Couples often ask for a houseboat evening; families tend to prefer a hotel with easier luggage. Either way, Srinagar gives you a buffer before the longer valley drives.",
    },
    {
      title: "Crafts without a detour",
      summary:
        "Papier-mâché, carpets, and dry fruit are part of the old city and boulevard trade. We treat shopping as optional time, not a checklist you have to finish.",
    },
  ],
  topAttractions: [
    {
      title: "Dal Lake",
      summary:
        "The lake is the centre of gravity. A shikara hour is the usual introduction; a houseboat night is possible when dates and season allow, and is confirmed only in your quote.",
    },
    {
      title: "Mughal gardens",
      summary:
        "Nishat, Shalimar, and Chashme Shahi sit on the same hillside pattern of terraces and water channels. Spring and early autumn are kinder than a midday summer visit.",
    },
    {
      title: "Old Srinagar",
      summary:
        "The old city is for walking, not rushing: wooden houses, river ghats, and Friday crowds around the Jama Masjid. Go with a local driver who knows which lanes to skip when they are blocked.",
    },
    {
      title: "Boulevard and the lake edge",
      summary:
        "The boulevard is where Srinagar shows off at dusk. It is also where traffic bunches, so we keep hotel and houseboat transfers off the peak evening crawl when we can.",
    },
  ],
  thingsToDo: [
    {
      title: "Take a shikara in daylight",
      summary:
        "Late morning or late afternoon is gentler than noon glare. Tickets and boat time are paid on the lake unless we have already written them into your plan.",
    },
    {
      title: "Walk a garden before it fills",
      summary:
        "Nishat in the first hour after opening is a different place from Nishat at lunch. We put garden time early when the itinerary has a Srinagar full day.",
    },
    {
      title: "Keep one unhurried city evening",
      summary:
        "Srinagar travel works better when the first night is not a sightseeing marathon. Rest, a short boulevard stroll, or a houseboat dinner is enough.",
    },
    {
      title: "Use Srinagar as a base for meadow days",
      summary:
        "Doodhpathri and Yusmarg are realistic day trips. Gulmarg can be a long day or an overnight. We decide which once we know your dates and energy.",
    },
  ],
  suggestedDuration: {
    typicalStay: "2–3 nights",
    overview:
      "Two nights covers arrival, one lake-and-garden day, and a departure or onward drive. A third night helps if you land late, want a houseboat, or are using Srinagar as a base for a meadow day trip.",
  },
  bestTimeToVisit: {
    overview:
      "Srinagar is open year-round in a way the high meadows are not. The feel of the city still changes sharply with the season, so we plan gardens, houseboats, and day trips around weather rather than a fixed calendar.",
    seasons: [
      {
        name: "April to June",
        summary:
          "Gardens are at their best and the lake is busy. Tulip season is short and crowded; we only build it in when your dates actually overlap.",
      },
      {
        name: "July and August",
        summary:
          "Warm afternoons, fuller hotels, and occasional rain. Early starts matter more. Some travelers prefer this window for school holidays.",
      },
      {
        name: "September and October",
        summary:
          "Clearer air and chinar colour. A strong time for couples who want Srinagar without peak garden queues.",
      },
      {
        name: "November to March",
        summary:
          "Cold, with snow possible in the city. Houseboats and winter light are the draw; meadow day trips depend on the road that morning.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Most guests fly into Srinagar Airport (SXR). From there, every other destination on this site is a road transfer. We do not publish a live timetable — road time depends on traffic, weather, and which side of the city you stay on.",
    details: [
      "Airport pickup is a standard part of a Srinagar arrival day and is confirmed in your quote.",
      "Dal Lake houseboats involve a short shikara transfer for luggage. Tell us if anyone in the group cannot board a boat easily.",
      "Gulmarg, Pahalgam, and Sonamarg are typically half-day drives; Doodhpathri and Yusmarg are shorter. We never stack all of them on consecutive long days unless you ask to.",
      "Local sightseeing cabs and inter-town cars are arranged with the itinerary. Self-drive is not something we currently operate.",
    ],
  },
  nearbyDestinationSlugs: [
    "gulmarg",
    "doodhpathri",
    "yusmarg",
    "pahalgam",
    "sonamarg",
  ],
  faqs: [
    {
      question: "Is Srinagar the right place to start a Kashmir trip?",
      answer:
        "For most first visits, yes. You arrive here, recover, and then choose meadow nights based on season and how much driving you want. A trip that tries to land and go straight to Gulmarg the same afternoon is possible, but it is harder on children and anyone arriving on a late flight.",
    },
    {
      question: "Should we stay on a houseboat or in a hotel?",
      answer:
        "A houseboat is a Srinagar-specific stay, not a default. It suits couples and travelers who want the lake at the door. Families, elders, and winter visits often do better in a hotel. We only name a property after you accept a written quote.",
    },
    {
      question: "How many days do we need in Srinagar itself?",
      answer:
        "One full day plus arrival is the minimum that feels fair. Two full days if you want the old city and a meadow day trip without rushing. Nights in Gulmarg or Pahalgam are extra, not a substitute for this buffer.",
    },
    {
      question: "Can Aleeza Travels include Srinagar in a custom itinerary?",
      answer:
        "Yes. Srinagar is in almost every circuit we write. Tell us your dates and whether you want a houseboat night, and we will fold it into a Kashmir tour package rather than treating the city as an add-on.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Srinagar, Kashmir Travel Guide",
  seoDescription:
    "Plan Srinagar travel with Aleeza Travels: Dal Lake, Mughal gardens, houseboats on request, and Kashmir tour packages that start in the city.",
});
