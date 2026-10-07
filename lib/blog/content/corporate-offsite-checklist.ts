import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import {
  corporateRelatedDestinations,
  corporateRelatedPackages,
  hrefs,
} from "@/lib/blog/content/corporate-shared";

const { h2, p, ul, note } = articleBlocks("corporate-offsite-checklist");

export const corporateOffsiteChecklist = defineArticle({
  _type: "blogPost",
  id: "corporate-offsite-kashmir-planning-checklist",
  slug: "corporate-offsite-kashmir-planning-checklist",
  title: "Corporate Offsite in Kashmir: A Practical Planning Checklist",
  excerpt:
    "A copy-able checklist for HR and team leads planning a Kashmir corporate offsite: dates, rooms, transport, meals, budget, and who owns the quote.",
  featuredImage: {
    ...blogImages.honeymoon,
    alt: "Houseboats on Dal Lake in Srinagar, sometimes requested for a Kashmir corporate offsite night",
  },
  author: "Aleeza Travels",
  publishedAt: "2026-10-05",
  updatedAt: "2026-10-07",
  category: "corporate-travel",
  tags: [
    "corporate offsite Kashmir",
    "planning checklist",
    "employee trip Kashmir",
  ],
  seoTitle: "Corporate Offsite in Kashmir: Planning Checklist",
  seoDescription:
    "Practical checklist for a Kashmir corporate offsite: dates, headcount, rooms, transport, meals, sightseeing, budget, and emergency contacts. Use it before you enquire.",
  relatedPackageSlugs: [...corporateRelatedPackages],
  relatedDestinationSlugs: [...corporateRelatedDestinations],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Can I download this checklist as a file?",
      answer:
        "This page is the checklist. Copy it into your own doc or print the article. We do not currently offer a separate file download.",
    },
    {
      question: "Do we need every box ticked before we talk to you?",
      answer:
        "No. Dates and headcount are enough to start. The rest can be filled as the quote takes shape.",
    },
  ],
  content: [
    p(
      "A Kashmir corporate offsite fails in the boring places: no rooming list, no flight times, nobody who can approve the quote. Use this list with the ",
      link("corporate retreat guide", hrefs.retreatGuide),
      " and send whatever you already know via the ",
      link("corporate enquiry form", hrefs.corporateQuote),
      ".",
    ),
    h2("people-and-dates", "People and dates"),
    ul([
      "☐ Company travel dates (or a two-week window)",
      "☐ Number of employees travelling",
      "☐ Named decision-maker and backup contact",
      "☐ Flight cities and whether arrivals are staggered",
    ]),
    h2("stays-and-rooms", "Stays and rooms"),
    ul([
      "☐ Accommodation category or budget band",
      "☐ Room sharing rules (twins, singles, any families mixed in)",
      "☐ Houseboat night: required, optional, or skip",
      "☐ Accessibility or medical notes that affect rooms",
    ]),
    h2("movement-and-days", "Movement and days"),
    ul([
      "☐ Transportation preference (cabs, larger vehicle if available, to be discussed)",
      "☐ Airport transfers included in the quote or handled separately",
      "☐ Sightseeing must-haves versus optional days",
      "☐ Team activities you want us to arrange versus your own sessions",
    ]),
    h2("meals-money-risk", "Meals, money, and risk"),
    ul([
      "☐ Meals to include (breakfast only, half board, or discuss)",
      "☐ Budget band or a request for a customized quotation",
      "☐ Emergency contact on the company side during travel",
      "☐ Weather and season constraints (snow, gardens, monsoon-adjacent weeks)",
    ]),
    h2("close-the-loop", "Close the loop"),
    ul([
      "☐ Final itinerary accepted in writing",
      "☐ Payment schedule agreed with finance",
      "☐ Rooming list sent before arrival",
    ]),
    p(
      "Print this page or paste the boxes into Notion, Docs, or email. We are not attaching a separate file because the list should stay next to the destination notes for ",
      link("Srinagar", hrefs.srinagar),
      " and ",
      link("Gulmarg", hrefs.gulmarg),
      ".",
    ),
    note(
      "Ticking a box is not a booking. Hotels, vehicles, and inclusions are confirmed only after you accept a written quote.",
    ),
    p(
      "When enough boxes are honest, ",
      link("plan the offsite with Aleeza Travels", hrefs.corporate),
      ".",
    ),
  ],
});
