import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("kashmir-travel-guide-first-time");

export const kashmirFirstTimeGuide = defineArticle({
  _type: "blogPost",
  id: "kashmir-travel-guide-first-time-visitors",
  slug: "kashmir-travel-guide-first-time-visitors",
  title: "Kashmir Travel Guide for First-Time Visitors",
  excerpt:
    "How a first Kashmir trip usually works: fly into Srinagar, keep driving days honest, and choose meadow nights after you know the season — not the other way around.",
  featuredImage: blogImages.hero,
  author: "Aleeza Travels",
  publishedAt: "2026-04-22",
  updatedAt: "2026-09-10",
  category: "kashmir-travel-guide",
  tags: ["first visit", "itinerary", "srinagar", "planning"],
  seoTitle: "Kashmir Travel Guide for First-Time Visitors",
  seoDescription:
    "A practical first-timer’s Kashmir travel guide from Aleeza Travels: where to start, how many nights, and which destinations belong on a first circuit.",
  relatedPackageSlugs: [
    "kashmir-5-nights-6-days",
    "kashmir-6-nights-7-days",
    "customized-kashmir-tour",
  ],
  relatedDestinationSlugs: [
    "srinagar",
    "gulmarg",
    "pahalgam",
    "doodhpathri",
    "yusmarg",
  ],
  featured: true,
  published: true,
  faqs: [
    {
      question: "Where should a first Kashmir trip start?",
      answer:
        "Srinagar. You land there, recover, and use the city as the hub for every meadow town. Landing and driving straight to Gulmarg the same afternoon is possible; it is harder on children and late flights.",
    },
    {
      question: "Do we need both Gulmarg and Pahalgam on a first visit?",
      answer:
        "They are different landscapes — a high bowl and a river valley. Most first circuits we write include both if you have at least five or six nights. If you are short on time, we pick one overnight and keep the other as a conversation, not a stack of same-day drives.",
    },
    {
      question: "Is a custom itinerary better than a fixed package?",
      answer:
        "A published package is a starting outline. Almost every trip is adjusted for dates, hotels, and pace before it is confirmed. If the outline is not close, we write a custom Kashmir trip instead of forcing extra stops.",
    },
  ],
  content: [
    p(
      "A first Kashmir trip is easier when you treat ",
      link("Srinagar", paths.destination("srinagar")),
      " as home base, not as a one-night layover you barely see. The lake, the gardens, and the airport are all here. Meadow towns are road destinations from this city, each with its own weather and personality.",
    ),
    p(
      "This Kashmir travel guide is the briefing we give people who have not been before. It is written from how we plan trips, not from a list of every named viewpoint in the valley.",
    ),
    h2("start-in-srinagar", "Start in Srinagar"),
    p(
      "Fly into Srinagar Airport. Plan a buffer night. Dal Lake and the Mughal gardens are the usual first full day. A houseboat night is a request we confirm in a quote — it is not assumed. Read the ",
      link("Srinagar destination guide", paths.destination("srinagar")),
      " for how we use the city on arrival and departure days.",
    ),
    h2("choose-meadow-nights-second", "Choose meadow nights second"),
    p(
      link("Gulmarg", paths.destination("gulmarg")),
      " is the high meadow most people picture: pine, a gondola when it is running, and colder nights. ",
      link("Pahalgam", paths.destination("pahalgam")),
      " is the Lidder Valley — river walks, Aru or Betaab as a morning, and a gentler village scale for families.",
    ),
    p(
      link("Sonamarg", paths.destination("sonamarg")),
      " is glacier-and-river country on a different road. ",
      link("Doodhpathri", paths.destination("doodhpathri")),
      " and ",
      link("Yusmarg", paths.destination("yusmarg")),
      " are usually Srinagar day trips, not extra hotel changes on a first visit.",
    ),
    h2("how-long", "How long should you stay?"),
    p(
      "For a first circuit we most often write five nights / six days or six nights / seven days. That is long enough for Srinagar plus two meadow stops without stacking three long drives back to back. Shorter trips still work; they simply keep more nights in the city and fewer in the mountains. See ",
      link("how many days are enough for a Kashmir trip", paths.blogPost("how-many-days-are-enough-for-a-kashmir-trip")),
      " for the trade-offs.",
    ),
    h2("what-we-do-not-pack-in", "What we do not pack into day one"),
    ul([
      "Airport to Gulmarg to Pahalgam on the same date.",
      "Gulmarg and Sonamarg as a combined day trip. They are different roads.",
      "A gondola ticket printed as a guarantee months ahead.",
      "Hotel names before you have accepted a written quote.",
    ]),
    h2("packages-vs-custom", "Packages versus a custom trip"),
    p(
      "Our ",
      link("Kashmir tour packages", paths.packages),
      " are outlines: honeymoon, family, group, and a classic circuit. They exist so you can see a shape. Dates, room category, and whether Gulmarg is one night or two are still decided with you. If you already know you want Doodhpathri instead of a second meadow overnight, start from a ",
      link("custom Kashmir trip", paths.customTrips),
      ".",
    ),
    note(
      "This guide does not quote live room rates, road timings as a timetable, or “must-see” lists copied from other sites. An enquiry is how we turn it into a plan for your dates.",
    ),
    p(
      link("Plan your trip", paths.contact),
      " with travel month and group size, or browse the ",
      link("5-night Kashmir package", paths.package("kashmir-5-nights-6-days")),
      " and the ",
      link("6-night circuit", paths.package("kashmir-6-nights-7-days")),
      ".",
    ),
  ],
});
