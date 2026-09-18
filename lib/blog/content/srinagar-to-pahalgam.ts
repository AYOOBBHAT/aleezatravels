import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("srinagar-to-pahalgam");

export const srinagarToPahalgam = defineArticle({
  _type: "blogPost",
  id: "srinagar-to-pahalgam-travel-guide",
  slug: "srinagar-to-pahalgam-travel-guide",
  title: "Srinagar to Pahalgam Travel Guide",
  excerpt:
    "The Srinagar–Pahalgam transfer is a half-day, not a hop. How we use arrival evenings, Aru and Betaab mornings, and why we will not stack Sonamarg on the same date.",
  featuredImage: blogImages.pahalgam,
  author: "Aleeza Travels",
  publishedAt: "2026-06-03",
  updatedAt: "2026-09-10",
  category: "kashmir-destinations",
  tags: ["pahalgam", "srinagar", "transfers", "family"],
  seoTitle: "Srinagar to Pahalgam Travel Guide",
  seoDescription:
    "Srinagar to Pahalgam by road: how long to plan, when to add Aru or Betaab, and how Aleeza Travels paces family and honeymoon nights in the Lidder Valley.",
  relatedPackageSlugs: [
    "kashmir-family-package",
    "kashmir-honeymoon-package",
    "kashmir-6-nights-7-days",
  ],
  relatedDestinationSlugs: ["srinagar", "pahalgam", "sonamarg", "gulmarg"],
  featured: false,
  published: true,
  faqs: [
    {
      question: "How long is Srinagar to Pahalgam?",
      answer:
        "Typically around two to two and a half hours in clear weather via Anantnag. Weekend traffic and winter ice add time. We treat it as a half-day transfer.",
    },
    {
      question: "Can we do Aru on arrival day?",
      answer:
        "Only if you reach town before lunch and the group still has energy. Most plans keep arrival for the river and save Aru or Betaab for the next morning.",
    },
  ],
  content: [
    p(
      "Pahalgam sits further from ",
      link("Srinagar", paths.destination("srinagar")),
      " than Gulmarg in driving terms. The Lidder Valley is the reward: a river you can walk, pine slopes, and side valleys that work as mornings rather than as a checklist. Read the ",
      link("Pahalgam guide", paths.destination("pahalgam")),
      " alongside this road note.",
    ),
    h2("the-transfer", "The transfer"),
    p(
      "The usual highway is via Anantnag. In clear weather we plan two to two and a half hours. That is a range for writing an itinerary, not a promise. Arrival days should not also include Aru or Betaab unless you are in town early.",
    ),
    h2("how-many-nights", "How many nights"),
    ul([
      "One night is a taste — you mostly see the transfer.",
      "Two nights is the stay that feels complete for most families and couples.",
      "Three nights suit honeymoons and anyone who wants almost no driving once they arrive.",
    ]),
    p(
      "A ",
      link("Kashmir family package", paths.package("kashmir-family-package")),
      " uses Pahalgam because the village scale is easier than a high bowl once you are there. Couples use it for river evenings after Srinagar. See ",
      link("things to do in Pahalgam", paths.blogPost("things-to-do-in-pahalgam")),
      ".",
    ),
    h2("aru-and-betaab", "Aru and Betaab Valley"),
    p(
      "These are half-days from town, not extra destinations you “do” from Srinagar. Park gates fill by late morning in peak season, so we start early. One well-timed valley is enough for most first visits. Ponies and park tickets are local, optional, and paid on the day unless named in your quote.",
    ),
    h2("what-not-to-combine", "What not to combine"),
    p(
      link("Sonamarg", paths.destination("sonamarg")),
      " is a different road from Srinagar. We do not write Srinagar–Pahalgam–Sonamarg as a single date. ",
      link("Gulmarg", paths.destination("gulmarg")),
      " belongs on its own night or as a separate city day, not as a stop on the Pahalgam transfer.",
    ),
    note(
      "Side-valley roads can close or slow with weather. Chandanwari toward the Amarnath route is seasonal. We never sell it as a guaranteed stop.",
    ),
    p(
      link("Enquire with your dates", paths.contact),
      " if Pahalgam is the stay you care about most, or start from the ",
      link("6-night Kashmir circuit", paths.package("kashmir-6-nights-7-days")),
      ".",
    ),
  ],
});
