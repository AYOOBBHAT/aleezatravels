import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("things-to-do-gulmarg");

export const thingsToDoGulmarg = defineArticle({
  _type: "blogPost",
  id: "things-to-do-in-gulmarg",
  slug: "things-to-do-in-gulmarg",
  title: "Things to Do in Gulmarg",
  excerpt:
    "Meadow time first, gondola second. A practical list of things to do in Gulmarg that does not assume the mountain is open or that you need to buy a ride to have arrived.",
  featuredImage: blogImages.gulmarg,
  author: "Aleeza Travels",
  publishedAt: "2026-06-17",
  updatedAt: "2026-09-10",
  category: "kashmir-destinations",
  tags: ["gulmarg", "things to do", "gondola", "winter"],
  seoTitle: "Things to Do in Gulmarg",
  seoDescription:
    "Things to do in Gulmarg, Kashmir: meadow walks, gondola mornings when the mountain is open, and winter pacing from Aleeza Travels — no fake opening hours.",
  relatedPackageSlugs: [
    "kashmir-honeymoon-package",
    "kashmir-5-nights-6-days",
    "kashmir-group-tour",
  ],
  relatedDestinationSlugs: ["gulmarg", "srinagar", "yusmarg"],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Is the gondola the main thing to do in Gulmarg?",
      answer:
        "It is the famous outing, not the whole visit. If it is closed, pine-edge walks still make the overnight worthwhile. We treat the cable car as a weather-and-queue decision.",
    },
    {
      question: "Can children do Gulmarg?",
      answer:
        "Yes, with a light first afternoon and the gondola optional. Height and cold tire mixed-age groups faster than a city day in Srinagar.",
    },
  ],
  content: [
    p(
      "Things to do in Gulmarg start on the grass or snow, not at the ticket window. The town is a high meadow bowl in the Pir Panjal. You come for air, pine, and a view — the ",
      link("Gulmarg destination page", paths.destination("gulmarg")),
      " covers why we use it on a circuit. This article is the day itself.",
    ),
    h2("walk-the-meadow", "Walk the meadow"),
    p(
      "Give the first hour to walking at your own pace. In summer that is the bowl and forest edge. In winter it is a snowfield and a short, warm outing. This is the point of staying overnight, described more fully in the ",
      link("Srinagar to Gulmarg travel guide", paths.blogPost("srinagar-to-gulmarg-travel-guide")),
      ".",
    ),
    h2("gondola", "Ride the gondola if it is running"),
    p(
      "Phase 1 is enough for many guests. The upper ridge toward Apharwat is for clear days and people comfortable with height and cold. Wind and maintenance can stop a phase with little notice. Tickets are a local purchase unless your quote includes them.",
    ),
    h2("winter-days", "Keep winter days short"),
    ul([
      "Skiers will have their own rhythm and hire locally — we do not invent operator names or slope reports.",
      "Everyone else should plan for cold, slow roads, and an early return to the room.",
      "A second Gulmarg night is more useful in snow than a stacked day trip back to Srinagar.",
    ]),
    h2("what-we-skip", "What we skip"),
    p(
      "Shopping lanes are not a reason to come. Combining Gulmarg with a same-day ",
      link("Yusmarg", paths.destination("yusmarg")),
      " picnic usually means seeing neither. Evening nightlife is not what this town is for — stay longer in Srinagar if that matters.",
    ),
    note(
      "Gondola, ponies, and ski hire are local services with their own tickets. Rates change; an enquiry is not a booking of those extras.",
    ),
    p(
      "Want Gulmarg as a night on a longer trip? See a ",
      link("Kashmir honeymoon outline", paths.package("kashmir-honeymoon-package")),
      " or ",
      link("enquire", paths.contact),
      ".",
    ),
  ],
});
