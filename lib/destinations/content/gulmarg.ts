import { defineDestination } from "@/lib/destinations/defaults";

const heroImage = {
  src: "/images/destinations/gulmarg.jpg",
  alt: "Snow-covered pine forest and mountains seen from the Gulmarg Gondola",
  width: 1920,
  height: 1440,
  credit: "Wikimedia Commons placeholder — replace with licensed photography",
};

export const gulmarg = defineDestination({
  _type: "destination",
  id: "gulmarg",
  slug: "gulmarg",
  name: "Gulmarg",
  region: "Pir Panjal meadows",
  headline: "Gulmarg, Kashmir: high meadows, pine forest, and gondola country",
  shortDescription:
    "High meadows, gondola views, and pine forest trails. A winter ski landscape and a summer walking destination.",
  introduction:
    "Gulmarg Kashmir is the meadow bowl most travelers picture once they leave Srinagar: a high, open rim of grass or snow, a ring of fir, and a gondola that climbs toward Apharwat when it is running. Gulmarg travel is not a city break. Nights are colder, walks are slower on the first day, and the road up from Tangmarg can close the afternoon down if snow or traffic piles up. Planned well, it is one of the clearest days in a Kashmir trip — meadow time, not a checklist of shops.",
  whyVisit: [
    {
      title: "Height without a trek",
      summary:
        "You reach a genuine alpine bowl by road. That matters for families and first-time visitors who want mountain air without a multi-day hike.",
    },
    {
      title: "Two seasons, two trips",
      summary:
        "Summer is walking and views. Winter is snow and, for those who ski, a proper slope town. We do not treat those as the same Gulmarg tour package.",
    },
    {
      title: "A natural pair with Srinagar",
      summary:
        "Gulmarg sits close enough for a long day trip, and is kinder as an overnight. Most of our circuits keep at least one night here when the road is in season.",
    },
    {
      title: "Pine and meadow, not nightlife",
      summary:
        "Evenings are quiet. If you want restaurants and a late boulevard, stay longer in Srinagar and keep Gulmarg for the landscape.",
    },
  ],
  topAttractions: [
    {
      title: "Gulmarg Gondola",
      summary:
        "The cable car is the headline outing, not an automatic inclusion. Queues, wind, and maintenance can stop a phase for hours. Tickets are paid on the day unless your quote says otherwise.",
    },
    {
      title: "The meadow bowl",
      summary:
        "In summer the bowl is for walking; in winter it is a snowfield. Either way, the first afternoon is better spent outside than in a car.",
    },
    {
      title: "Pine forest edges",
      summary:
        "Short walks under fir are the part of Gulmarg people remember when the gondola is socked in. We keep these as the backup plan, not a disappointment.",
    },
    {
      title: "Apharwat views",
      summary:
        "The upper ridge is for clear days and people who are comfortable with height and cold. It is not a must for every Gulmarg itinerary.",
    },
  ],
  thingsToDo: [
    {
      title: "Walk the meadow before you queue",
      summary:
        "Things to do in Gulmarg do not start at the gondola ticket window. An hour on the grass or snow, at your own pace, is the point of staying overnight.",
    },
    {
      title: "Ride the gondola if the mountain is open",
      summary:
        "We treat it as a weather-and-queue decision on the morning, not a promise printed months ahead. If Phase 1 is enough, we stop there.",
    },
    {
      title: "Keep winter days short and warm",
      summary:
        "Skiers will have their own rhythm. Everyone else should plan for cold, slow roads, and an early return to the room. We do not invent slope reports here.",
    },
    {
      title: "Use Gulmarg as a one-night meadow stop",
      summary:
        "A Gulmarg tour package from Aleeza Travels usually pairs this stay with Srinagar and either Pahalgam or a quieter meadow such as Doodhpathri, rather than making Gulmarg the whole holiday.",
    },
  ],
  suggestedDuration: {
    typicalStay: "1–2 nights",
    overview:
      "One night works if you arrive by lunch and leave after a morning walk or gondola attempt. Two nights help in winter, or if you want a full day without watching the clock for the Srinagar drive.",
  },
  bestTimeToVisit: {
    overview:
      "Gulmarg is a seasonal town in the strict sense: the road and the gondola both answer to snow and wind. We confirm what is realistic only when your dates are known.",
    seasons: [
      {
        name: "April to June",
        summary:
          "Meadows green up, the air is still cool, and walking is the main reason to come. Gondola demand rises with school holidays.",
      },
      {
        name: "July and August",
        summary:
          "Busiest for families. Cloud and rain can hide the ridge. We still run overnight stays; we just do not promise a clear Apharwat view.",
      },
      {
        name: "September and October",
        summary:
          "Crisper and less crowded than midsummer. A strong window for couples on a slower Kashmir circuit.",
      },
      {
        name: "December to March",
        summary:
          "Snow season. Beautiful and slower. Transfers can take longer, and some outings simply do not run. We say so in the quote instead of hoping the road behaves.",
      },
    ],
  },
  travelInformation: {
    overview:
      "Gulmarg is a road destination from Srinagar, typically via Tangmarg. The drive is often around one and a half to two hours in clear weather, and longer after snowfall or on weekend mornings. These are planning ranges, not a timetable.",
    details: [
      "We prefer an overnight to a same-day out-and-back if you care about the meadow, not just a photograph at the gondola base.",
      "The last stretch is winding. Anyone who gets car-sick should sit forward and keep the Gulmarg day free of extra valley hops.",
      "Gondola, ponies, and ski hire are local services with their own tickets. We do not publish rates here because they change, and an enquiry is not a booking.",
      "In winter we build slack into the drive and a fallback night in Srinagar if the road is not worth attempting that morning.",
    ],
  },
  nearbyDestinationSlugs: ["srinagar", "yusmarg", "doodhpathri"],
  faqs: [
    {
      question: "Is Gulmarg a day trip or an overnight?",
      answer:
        "A day trip from Srinagar is possible. An overnight is kinder. You get evening meadow light, a slower morning, and a second chance if the gondola is closed on arrival day.",
    },
    {
      question: "Is the Gulmarg Gondola included in a tour package?",
      answer:
        "Only if your written quote says so. Otherwise it is an optional, ticketed outing. Wind, maintenance, and queues can still cancel a ride after you have planned for it.",
    },
    {
      question: "What is the best time to visit Gulmarg for snow?",
      answer:
        "Winter, typically from late December through March, is when Gulmarg is a snow town. Depth and road status change week to week. We will not promise skiing or a white meadow until we are looking at your actual dates.",
    },
    {
      question: "Can families travel to Gulmarg?",
      answer:
        "Yes, with honest pacing. Keep the first afternoon light, skip stacking it with a second long drive, and treat the gondola as optional for small children. A family Kashmir package often uses one Gulmarg night between Srinagar and Pahalgam.",
    },
  ],
  heroImage,
  gallery: [],
  featured: true,
  published: true,
  seoTitle: "Gulmarg Kashmir Travel Guide",
  seoDescription:
    "Gulmarg travel with Aleeza Travels: meadows, gondola days when the mountain is open, and Kashmir tour packages that include an overnight in Gulmarg.",
});
