import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import {
  corporateRelatedDestinations,
  corporateRelatedPackages,
  hrefs,
} from "@/lib/blog/content/corporate-shared";

const { h2, p, ul, note } = articleBlocks("corporate-trip-kashmir-cost");

export const corporateTripKashmirCost = defineArticle({
  _type: "blogPost",
  id: "how-much-does-a-corporate-trip-to-kashmir-cost",
  slug: "how-much-does-a-corporate-trip-to-kashmir-cost",
  title: "How Much Does a Corporate Trip to Kashmir Cost?",
  excerpt:
    "What actually moves the cost of a company trip to Kashmir: group size, hotels, dates, transport, nights, meals, and rooming. No invented per-person prices.",
  featuredImage: {
    ...blogImages.family,
    alt: "The Lidder Valley near Pahalgam, a typical overnight on a longer Kashmir company trip",
  },
  author: "Aleeza Travels",
  publishedAt: "2026-09-25",
  updatedAt: "2026-10-07",
  category: "corporate-travel",
  tags: [
    "corporate trip to Kashmir",
    "Kashmir corporate tour",
    "company trip cost",
  ],
  seoTitle: "How Much Does a Corporate Trip to Kashmir Cost?",
  seoDescription:
    "What affects the cost of a corporate trip to Kashmir: group size, hotels, dates, transport, nights, and meals. Request a customized quotation — no fake tariffs.",
  relatedPackageSlugs: [...corporateRelatedPackages],
  relatedDestinationSlugs: [...corporateRelatedDestinations],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Do you publish a per-person corporate tariff?",
      answer:
        "No. A live figure depends on season, rooms, vehicles, and what you include. A customized quotation is the document that matters.",
    },
    {
      question: "What is the fastest way to get a number we can take to finance?",
      answer:
        "Send headcount, a date window, nights, and a hotel band on the corporate enquiry form. We reply with a proposed itinerary and a quote for those inputs.",
    },
  ],
  content: [
    p(
      "Finance will ask for a number. This website will not invent one. A corporate trip to Kashmir is a bundle of nights, rooms, vehicles, and optional days out — the same moving parts as any group movement, scaled to your headcount.",
    ),
    p(
      "If you need a figure you can take to a budget meeting, ",
      link("request a customized quotation", hrefs.corporateQuote),
      ". The notes below explain what that quote is actually adding up.",
    ),
    h2("group-size", "Group size"),
    p(
      "More people does not always mean a neat discount line. It can mean more rooms, a second vehicle, or a different hotel because the first one cannot take everyone together. A team of ten and a team of fifty are different products. We do not publish a sliding scale here.",
    ),
    h2("hotel-category-and-rooms", "Hotel category and room configuration"),
    p(
      "Room category is usually the large lever after season. Twin sharing is cheaper per person than a floor of singles. Houseboat nights in Srinagar are a different product from a city hotel. We confirm names and categories only for your dates. See ",
      link("how we think about stays on a retreat", hrefs.retreatGuide),
      ".",
    ),
    h2("travel-dates-and-nights", "Travel dates and number of nights"),
    p(
      "Holiday weeks and peak summer are not priced like a quiet midweek in autumn. Extra nights add rooms and meals; they can also reduce the feeling that the trip was only transfers. A sample ",
      link("5-day corporate outline", hrefs.fiveDay),
      " is one shape. Longer stays follow the same cost logic.",
    ),
    h2("transportation", "Transportation"),
    p(
      "Airport pickup at Srinagar, sightseeing, and inter-town drives are planned with the itinerary. Vehicle type depends on headcount and availability. We do not list a fleet or a per-kilometre chart on this page.",
    ),
    h2("meals-activities-sightseeing", "Meals, activities, and sightseeing"),
    ul([
      "Breakfast, lunch, and dinner are inclusions only when the quote says so.",
      "Gondola tickets, shikara rides, and guided walks are typically optional.",
      "Entrance fees paid on the day are often left out unless you ask to bundle them.",
    ]),
    p(
      "Sightseeing itself is mostly time and fuel. The expensive surprises are usually rooms and peak-week vehicles, not a garden ticket.",
    ),
    note(
      "This article contains no sample INR amounts and no “average company spend.” Those figures would be guesses. Your quote is the document that matters.",
    ),
    p(
      "Ready for a number that belongs to your dates? Use the ",
      link("corporate enquiry form", hrefs.corporateQuote),
      " or browse ",
      link("Kashmir tour packages", hrefs.packages),
      " if you still want a public outline before you talk to us.",
    ),
  ],
});
