import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("kashmir-trip-budget");

export const kashmirTripBudget = defineArticle({
  _type: "blogPost",
  id: "kashmir-trip-budget-guide",
  slug: "kashmir-trip-budget-guide",
  title: "Kashmir Trip Budget Guide",
  excerpt:
    "What a Kashmir trip budget is actually made of: nights, cars, season, and extras such as the gondola. No invented rupee figures — we quote after we know your dates.",
  featuredImage: blogImages.classic,
  author: "Aleeza Travels",
  publishedAt: "2026-08-26",
  updatedAt: "2026-09-10",
  category: "travel-tips",
  tags: ["budget", "planning", "quote", "packages"],
  seoTitle: "Kashmir Trip Budget Guide",
  seoDescription:
    "How Kashmir trip costs are built: hotels, transfers, season, and optional activities. Aleeza Travels explains the moving parts without publishing fake tariffs.",
  relatedPackageSlugs: [
    "kashmir-5-nights-6-days",
    "customized-kashmir-tour",
    "kashmir-family-package",
  ],
  relatedDestinationSlugs: ["srinagar", "gulmarg", "pahalgam"],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Why don’t you show a starting price on packages?",
      answer:
        "Because a live tariff depends on season, room category, and your dates. Publishing a made-up rupee figure would be guesswork. We share a quote after the enquiry.",
    },
    {
      question: "What is usually extra?",
      answer:
        "Airfares, most lunches and dinners unless named in the quote, gondola and other optional tickets, entrance fees paid on the day, and personal expenses. The package pages list inclusions and exclusions in plain language.",
    },
  ],
  content: [
    p(
      "A Kashmir trip budget is not one number on a banner. It is nights, vehicles, season, and how many optional outings you want. Aleeza Travels does not publish live tariffs on this website. When a package says “price on request,” that is the honest line — see any of the ",
      link("Kashmir tour packages", paths.packages),
      " for how we say it.",
    ),
    h2("what-the-quote-covers", "What a land quote usually covers"),
    ul([
      "Stay for the nights in the outline, in a category agreed after we know dates and budget range.",
      "Airport pickup in Srinagar when that is part of the plan.",
      "Sightseeing and inter-town transfers as described, with driver costs for those cab days.",
      "A proposed day-by-day plan before you confirm.",
    ]),
    p(
      "Hotel and houseboat names are shown only after they are confirmed in writing. We will not invent a five-star list to make a budget look premium.",
    ),
    h2("what-moves-the-number", "What moves the number"),
    p(
      "Season is the large lever: holiday weeks and snow operations do not cost the same as a quiet midweek in autumn. Room category is the next. A houseboat night is a different product from a city hotel. Private cabs for two people are not priced like a group coach. Tell us adults, children, and month — that is enough to start, as the ",
      link("enquiry form", paths.contact),
      " already asks.",
    ),
    h2("optional-costs", "Optional costs people forget"),
    ul([
      "Flights or trains to Srinagar, which we do not assume.",
      "Gulmarg Gondola and similar tickets, unless the quote includes them.",
      "Shikara time, ponies, and park entries paid on the day.",
      "Lunches, dinners, and tips unless named.",
    ]),
    h2("how-to-talk-about-budget-without-a-fake-figure", "How to talk about budget without a fake figure"),
    p(
      "On the enquiry form we ask for a range in words: to be discussed, comfortable / mid-range, premium, or flexible. That is enough for us to pick a room band. It is not a menu of invented rupee slabs. If you already know a ceiling, put it in the message field.",
    ),
    h2("value-is-pacing", "Value is pacing, not more stops"),
    p(
      "Adding ",
      link("Sonamarg", paths.destination("sonamarg")),
      " or a second meadow day only helps if the calendar can hold it. A cheaper-looking itinerary that stacks Gulmarg and Pahalgam on back-to-back marathon drives is a poor use of money. Read ",
      link("how many days are enough", paths.blogPost("how-many-days-are-enough-for-a-kashmir-trip")),
      " before you cut a night to “save.”",
    ),
    note(
      "This article contains no sample INR amounts, no “average couple spend,” and no hotel tariff table. Those figures would be guesses. Your quote is the document that matters.",
    ),
    p(
      "When you are ready, ",
      link("request a quote", paths.contact),
      " or start from a ",
      link("classic 5-night outline", paths.package("kashmir-5-nights-6-days")),
      " or a ",
      link("custom Kashmir trip", paths.package("customized-kashmir-tour")),
      ".",
    ),
  ],
});
