import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("things-to-do-pahalgam");

export const thingsToDoPahalgam = defineArticle({
  _type: "blogPost",
  id: "things-to-do-in-pahalgam",
  slug: "things-to-do-in-pahalgam",
  title: "Things to Do in Pahalgam",
  excerpt:
    "River walks, one side valley, and a quiet second night. Things to do in Pahalgam that fit families and couples without turning the Lidder into a checklist.",
  featuredImage: blogImages.pahalgam,
  author: "Aleeza Travels",
  publishedAt: "2026-07-01",
  updatedAt: "2026-09-10",
  category: "kashmir-destinations",
  tags: ["pahalgam", "things to do", "family", "aru"],
  seoTitle: "Things to Do in Pahalgam",
  seoDescription:
    "Things to do in Pahalgam: Lidder River walks, Aru or Betaab Valley mornings, and slower family pacing — written by Aleeza Travels, not copied from a listicle.",
  relatedPackageSlugs: [
    "kashmir-family-package",
    "kashmir-honeymoon-package",
    "kashmir-6-nights-7-days",
  ],
  relatedDestinationSlugs: ["pahalgam", "srinagar", "sonamarg"],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Do we need both Aru and Betaab?",
      answer:
        "No. One well-timed valley morning is enough for most first visits. The second is only if you have a spare afternoon and want it.",
    },
    {
      question: "Is Pahalgam good for families?",
      answer:
        "Yes. The riverfront and village scale are easier than a high meadow town. We keep driving days shorter once you arrive and treat pony rides as optional.",
    },
  ],
  content: [
    p(
      "Things to do in Pahalgam work best when the first evening is a walk, not another transfer. The Lidder is why the town exists on a Kashmir map. Use the ",
      link("Pahalgam destination guide", paths.destination("pahalgam")),
      " for stay length and season; use this page for the days themselves.",
    ),
    h2("the-river", "Walk the Lidder"),
    p(
      "Stay near the water if you can. You do not need a ticketed park to feel you have arrived. Rafting, if you want it, is a separate seasonal activity we will not assume in a package.",
    ),
    h2("one-valley", "Pick one side valley"),
    ul([
      "Aru is a high village and meadow road beyond town — good for a morning.",
      "Betaab Valley photographs well and fills by late morning in summer. Go early.",
      "Combining both in a rush is how the day becomes gates and queues.",
    ]),
    p(
      "The ",
      link("Srinagar to Pahalgam travel guide", paths.blogPost("srinagar-to-pahalgam-travel-guide")),
      " explains why we keep these outings off arrival day.",
    ),
    h2("a-quiet-second-night", "Leave a quiet second night"),
    p(
      "If your stay has two nights, the second afternoon can remain in town. That is not wasted time. Families and honeymoon couples both remember the river more than a third named meadow. A ",
      link("family Kashmir package", paths.package("kashmir-family-package")),
      " is built on that idea.",
    ),
    h2("what-not-to-add", "What not to add"),
    p(
      "Do not stack a ",
      link("Sonamarg", paths.destination("sonamarg")),
      " day onto a Pahalgam stay. Different road, different valley. Chandanwari is a scenic corridor in season and closed out of season — never a guaranteed extra.",
    ),
    note(
      "Pony rides and park tickets are optional and usually paid on the day. Hotel names appear only after a written quote.",
    ),
    p(
      link("Plan a Pahalgam stay", paths.contact),
      " around your dates, or read the ",
      link("honeymoon outline", paths.package("kashmir-honeymoon-package")),
      " that uses the Lidder for quieter rooms.",
    ),
  ],
});
