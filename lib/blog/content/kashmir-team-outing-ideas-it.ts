import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import {
  corporateRelatedDestinations,
  corporateRelatedPackages,
  hrefs,
} from "@/lib/blog/content/corporate-shared";

const { h2, h3, p, ul, note } = articleBlocks("kashmir-team-outing-it");

export const kashmirTeamOutingIdeasIt = defineArticle({
  _type: "blogPost",
  id: "kashmir-team-outing-ideas-it-technology-companies",
  slug: "kashmir-team-outing-ideas-it-technology-companies",
  title: "Kashmir Team Outing Ideas for IT & Technology Companies",
  excerpt:
    "Outing ideas for IT, software, startup, and tech teams in Kashmir: houseboats on request, Dal Lake, Gulmarg, Pahalgam, and Sonamarg — none of them automatic inclusions.",
  featuredImage: {
    ...blogImages.srinagar,
    alt: "Shikaras on Dal Lake in Srinagar, a common shared outing for a Kashmir tech team trip",
  },
  author: "Aleeza Travels",
  publishedAt: "2026-09-22",
  updatedAt: "2026-10-07",
  category: "corporate-travel",
  tags: [
    "IT company trip Kashmir",
    "technology company team outing Kashmir",
    "startup team trip Kashmir",
    "Kashmir team outing",
  ],
  seoTitle: "Kashmir Team Outing Ideas for IT and Technology Companies",
  seoDescription:
    "Team outing ideas in Kashmir for IT and technology companies, including startup team trips: Srinagar houseboats on request, Dal Lake, Gulmarg, Pahalgam, and Sonamarg.",
  relatedPackageSlugs: [...corporateRelatedPackages],
  relatedDestinationSlugs: [...corporateRelatedDestinations],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Are these activities included in a corporate package?",
      answer:
        "No. They are possible experiences. Tickets, houseboats, and add-ons are included only when they appear in your written quote.",
    },
    {
      question: "Can a small startup team do this in a long weekend?",
      answer:
        "A compact Srinagar-based outing with one meadow day is more realistic than three overnights. Arrival time still decides the first evening.",
    },
  ],
  content: [
    p(
      "IT and product teams tend to want two things from a Kashmir outing: a shared set of photographs that are not another WeWork terrace, and enough unstructured time that introverts are not scheduled into every hour. The ideas below are experiences we can plan around. None of them is bundled unless your quote says so.",
    ),
    p(
      "Start from ",
      link("corporate and team travel to Kashmir", hrefs.corporate),
      " or a ",
      link("customized itinerary", hrefs.customPackage),
      " if the group is small and dates are odd.",
    ),
    h2("srinagar-and-the-lake", "Srinagar and the lake"),
    h3("houseboat", "A Srinagar houseboat stay"),
    p(
      "A houseboat is a ",
      link("Srinagar", hrefs.srinagar),
      "-specific night on the water. It suits teams who want the lake at the door and can board with luggage. It is a request, not a default, and a poor fit in deep winter or if anyone is uneasy on water. We only name a boat after dates and occupancy are clear.",
    ),
    h3("dal-lake", "Dal Lake as a shared hour"),
    p(
      "A shikara hour in daylight is an easy group activity: no fitness test, no ticket lottery if you keep it simple. It is not a three-hour meeting with a view unless you book it that way. Sunset slots depend on season and crowding that evening.",
    ),
    h2("meadow-days", "Meadow days"),
    h3("gulmarg", "Gulmarg as a day trip or overnight"),
    p(
      link("Gulmarg", hrefs.gulmarg),
      " is the high-meadow contrast to the city. A day trip from Srinagar works if you start early and keep the gondola optional — tickets and wind closures are local decisions, not something this article can guarantee. An overnight is kinder if the team wants evening quiet in the pines rather than a long return the same day.",
    ),
    h3("pahalgam", "A Pahalgam trip"),
    p(
      link("Pahalgam", hrefs.pahalgam),
      " is river and valley time. It is a longer transfer than Gulmarg. Teams that like walking more than rides often prefer it. Aru or Betaab are add-ons for the day, not promises printed months ahead.",
    ),
    h3("sonamarg", "Sonamarg as a long day"),
    p(
      link("Sonamarg", hrefs.sonamarg),
      " is usually a day into the Sindh Valley and back to Srinagar unless you specifically want an overnight and rooms exist. Glacier outings are seasonal and optional. Do not sell the close-up to a team as a guaranteed stop.",
    ),
    h2("evenings-and-pace", "Scenic group time and quieter evenings"),
    ul([
      "Garden visits in Srinagar scheduled early, not as a rushed tick-list after a late flight.",
      "A meadow picnic-style lunch only when the weather and the road support it.",
      "One evening left empty so people can walk, talk, or sleep without a programme.",
    ]),
    p(
      "For a compact sample shape, see the ",
      link("5-day corporate sample itinerary", hrefs.fiveDay),
      ". For a broader place list, read ",
      link("best places in Kashmir for a company team trip", hrefs.bestPlaces),
      ".",
    ),
    note(
      "Gondola, shikara, houseboats, and side-valley visits are optional unless they are written into your quote. Weather can cancel a meadow day.",
    ),
    p(
      "If you already have a headcount, ",
      link("request a corporate quote", hrefs.corporateQuote),
      " and tell us whether this is a long-weekend outing or a full circuit.",
    ),
  ],
});
