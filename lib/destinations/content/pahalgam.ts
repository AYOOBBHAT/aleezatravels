import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/pahalgam.jpg",
  alt: "The Lidder Valley near Pahalgam with pine-covered Himalayan slopes",
  width: 1920,
  height: 1071,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const pahalgam = defineDestination({
  _type: "destination",
  id: "pahalgam",
  slug: "pahalgam",
  name: "Pahalgam",
  region: "Lidder Valley",
  headline: "Pahalgam, Kashmir: river days in the Lidder Valley",
  shortDescription:
    "Riverfront village pace, pine slopes, and day trips into Aru and Betaab Valley. Especially well suited to families and couples.",
  introduction:
    "Pahalgam sits where the Lidder runs loud and the hills step back into pine. It is less of a single viewpoint than Gulmarg and more of a valley you live in for a couple of nights: morning tea with the river, a short drive to Aru or Betaab, and evenings that do not need a programme. Families like the space. Couples like the slower clock. A Pahalgam stay is how we stop a Kashmir circuit from becoming only lakes and one high meadow.",
  whyVisit: [
    {
      title: "A river, not just a view",
      summary:
        "The Lidder gives Pahalgam a soundtrack and a walking line. You do not have to board a gondola to feel you have arrived.",
    },
    {
      title: "Side valleys within a short drive",
      summary:
        "Aru and Betaab Valley are the usual half-days. They are beautiful and they are also busy in peak season — we time them early.",
    },
    {
      title: "Easier pacing for mixed-age groups",
      summary:
        "Driving days into Pahalgam are longer than Gulmarg, but once you are here the village is flatter and kinder for elders and children than a high bowl.",
    },
    {
      title: "A natural second meadow after Srinagar",
      summary:
        "Many of our family and honeymoon outlines use Srinagar then Pahalgam, with Gulmarg either between them or as a day from the city.",
    },
  ],
  topAttractions: [
    {
      title: "Lidder River",
      summary:
        "The riverfront is the reason to stay in town rather than only passing through. Walks are the outing; rafting, if you want it, is a separate seasonal activity we will not assume.",
    },
    {
      title: "Aru Valley",
      summary:
        "A high village and meadow road beyond Pahalgam. Good for a morning. Ponies and further treks exist; we only add them when you ask.",
    },
    {
      title: "Betaab Valley",
      summary:
        "A named meadow park up the same corridor. It photographs well and fills by late morning in summer, so we treat it as an early start, not a lingering picnic by default.",
    },
    {
      title: "Chandanwari road",
      summary:
        "The corridor toward the Amarnath route. In season it is a scenic drive; out of season or in bad weather it is simply closed. We never sell it as a guaranteed stop.",
    },
  ],
  thingsToDo: [
    {
      title: "Walk the river instead of collecting viewpoints",
      summary:
        "Things to do in Pahalgam work best when the first evening is a walk, not another transfer. Save Aru or Betaab for the next morning.",
    },
    {
      title: "Pick one side valley, not both at speed",
      summary:
        "Aru and Betaab can be combined, but the day gets long. Families usually enjoy one well-timed valley more than two rushed gates.",
    },
    {
      title: "Leave room for a quiet second night",
      summary:
        "If your Pahalgam tour package has two nights, the second afternoon can stay in town. That is not wasted time; it is why people remember the Lidder.",
    },
    {
      title: "Skip stacking a Sonamarg day on the same stay",
      summary:
        "Sonamarg is a different road from Srinagar. We plan it as its own day or night, not as a Pahalgam add-on.",
    },
  ],
  suggestedDuration: {
    typicalStay: "2 nights",
    overview:
      "Two nights is the stay that feels complete: arrival after the Srinagar drive, one valley morning, and a buffer evening. One night is a taste. Three nights suit honeymoons and anyone who wants almost no driving once they arrive.",
  },
  bestTimeToVisit: {
    overview:
      "Pahalgam is a three-season town for most visitors. Winter is possible and beautiful, with more ice on the road and fewer open side valleys. We match outings to the month rather than copying a summer plan into January.",
    seasons: [
      {
        name: "April to June",
        summary:
          "River full, meadows opening, and the most popular window for families. Start valley trips early.",
      },
      {
        name: "July and August",
        summary:
          "Peak holiday traffic. Still a good stay if we keep the programme light and accept that Betaab will not be private.",
      },
      {
        name: "September and October",
        summary:
          "Clearer views and a slower village. A favourite stretch for couples.",
      },
      {
        name: "November to March",
        summary:
          "Cold, with snow on the higher road. Town walks still work; Aru and Betaab depend on conditions that week.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Pahalgam is a road destination from Srinagar, typically around two to two and a half hours in clear weather via Anantnag. Weekend traffic and winter ice add time. We treat that as a half-day transfer, not a quick hop.",
    details: [
      "Arrival days should not also include Aru or Betaab unless you reach town before lunch and the group still has energy.",
      "Local valley roads are narrower than the Srinagar highway. We use them as morning outings with a known turnaround time.",
      "Pony rides and park tickets are local, optional, and paid on the day unless named in your quote.",
      "Pahalgam combines well with Srinagar and Gulmarg in a single circuit. It does not combine well with a same-day Sonamarg attempt.",
    ],
  },
  nearbyDestinationSlugs: ["srinagar", "sonamarg", "gulmarg"],
  faqs: [
    {
      question: "How many nights should we spend in Pahalgam?",
      answer:
        "Two is the default we write. One night means you mostly see the transfer. Three nights are for travelers who want the valley to be the holiday, not a stop.",
    },
    {
      question: "Is Pahalgam good for families?",
      answer:
        "Yes. The riverfront and the village scale are easier than a high meadow town. We keep driving days shorter once you arrive and treat pony rides as optional, not a requirement.",
    },
    {
      question: "Do we need both Aru and Betaab Valley?",
      answer:
        "No. One well-timed valley morning is enough for most first visits. We add the second only if you have a spare afternoon and want it.",
    },
    {
      question: "Can Pahalgam be part of a honeymoon itinerary?",
      answer:
        "Often. A Kashmir honeymoon package from Aleeza Travels typically uses Pahalgam for quieter rooms and river time after Srinagar, with Gulmarg as the high-meadow contrast.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Pahalgam Kashmir Travel Guide",
  seoDescription:
    "Plan Pahalgam travel with Aleeza Travels: Lidder River stays, Aru and Betaab Valley mornings, and Kashmir tour packages paced for families and couples.",
});
