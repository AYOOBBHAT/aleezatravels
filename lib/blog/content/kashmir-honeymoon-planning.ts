import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("kashmir-honeymoon-planning");

export const kashmirHoneymoonPlanning = defineArticle({
  _type: "blogPost",
  id: "kashmir-honeymoon-planning-guide",
  slug: "kashmir-honeymoon-planning-guide",
  title: "Kashmir Honeymoon Planning Guide",
  excerpt:
    "How we plan a Kashmir honeymoon: fewer transfers, a houseboat only if you want one, and meadow nights chosen for quiet rather than for a packed circuit.",
  featuredImage: blogImages.honeymoon,
  author: "Aleeza Travels",
  publishedAt: "2026-07-15",
  updatedAt: "2026-09-10",
  category: "honeymoon",
  tags: ["honeymoon", "couples", "houseboat", "planning"],
  seoTitle: "Kashmir Honeymoon Planning Guide",
  seoDescription:
    "Plan a Kashmir honeymoon with Aleeza Travels: pacing, houseboats on request, Gulmarg and Pahalgam nights, and what we never assume in a romantic itinerary.",
  relatedPackageSlugs: [
    "kashmir-honeymoon-package",
    "kashmir-6-nights-7-days",
    "customized-kashmir-tour",
  ],
  relatedDestinationSlugs: ["srinagar", "gulmarg", "pahalgam"],
  featured: true,
  published: true,
  faqs: [
    {
      question: "Is a houseboat included in a Kashmir honeymoon?",
      answer:
        "Only if you ask and the season and dates allow it. It is confirmed in the quote, never assumed. Some couples prefer a hotel for easier luggage and winter stays.",
    },
    {
      question: "How many nights do you recommend?",
      answer:
        "The honeymoon outline on this site is 6 nights / 7 days. Shorter trips can work if we cut a meadow overnight rather than squeezing both Gulmarg and Pahalgam into rushed days.",
    },
    {
      question: "Can you arrange room decoration?",
      answer:
        "Often, at one stay, if you tell us before arrival. It depends on the property we actually book after the quote — we will not name a hotel here and then hope it offers décor.",
    },
  ],
  content: [
    p(
      "A Kashmir honeymoon is not a group circuit with rose petals added. It is fewer transfers, later starts, and rooms chosen for rest as much as for views. Aleeza Travels writes that kind of trip from Srinagar. The published ",
      link("Kashmir honeymoon package", paths.package("kashmir-honeymoon-package")),
      " is the outline; your dates still decide the rest.",
    ),
    h2("pacing", "Pacing comes first"),
    p(
      "Couples usually want ",
      link("Srinagar", paths.destination("srinagar")),
      " for the lake, ",
      link("Gulmarg", paths.destination("gulmarg")),
      " for a high meadow night, and ",
      link("Pahalgam", paths.destination("pahalgam")),
      " for the river. What they do not want is three long drives in a row. We keep the first Srinagar evening empty if you land late. Read ",
      link("how many days are enough", paths.blogPost("how-many-days-are-enough-for-a-kashmir-trip")),
      " before you cut nights.",
    ),
    h2("houseboat", "Houseboat nights"),
    p(
      "A houseboat is a Srinagar-specific stay. It suits couples who want the lake at the door and can board a shikara with luggage. It is a poor default in deep winter or if anyone in the pair is uneasy on water. We only name a property after you accept a written quote.",
    ),
    h2("what-we-can-add", "What we can add — when you ask"),
    ul([
      "Private cab for the couple on sightseeing days, rather than sharing with a larger party.",
      "Room decoration at one stay, requested before arrival and confirmed with the hotel we actually book.",
      "A slower Pahalgam afternoon instead of a second valley gate.",
      "Gondola tickets only if you want them and the mountain is behaving that morning.",
    ]),
    h2("season", "Pick a season that matches the mood"),
    p(
      "Spring and autumn are the kindest for gardens and walking. Midsummer is busier. Winter is a different honeymoon — snow, shorter days, honest road slack. The ",
      link("best time to visit Kashmir", paths.blogPost("best-time-to-visit-kashmir")),
      " article is the season briefing; this page is the couple-specific version.",
    ),
    h2("privacy", "Privacy is a plan, not a slogan"),
    p(
      "We cannot promise empty meadows in peak weeks. We can avoid stacking you on the busiest gates at midday, and we can keep evenings free. Browse ",
      link("honeymoon packages", paths.honeymoon),
      " and then ",
      link("tell us what to change", paths.contact),
      ".",
    ),
    note(
      "Nothing here is a live tariff or a guaranteed hotel. Decoration, houseboats, and private sightseeing are confirmed in writing after your enquiry.",
    ),
  ],
});
