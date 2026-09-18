import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import { paths } from "@/lib/seo/paths";

const { h2, p, ul, note } = articleBlocks("what-to-pack-kashmir");

export const whatToPackKashmir = defineArticle({
  _type: "blogPost",
  id: "what-to-pack-for-kashmir",
  slug: "what-to-pack-for-kashmir",
  title: "What to Pack for Kashmir",
  excerpt:
    "A practical packing list for Kashmir by season: layers for meadow wind, modest city clothes, and what you can leave to the hotel once the quote is confirmed.",
  featuredImage: blogImages.family,
  author: "Aleeza Travels",
  publishedAt: "2026-08-05",
  updatedAt: "2026-09-10",
  category: "travel-tips",
  tags: ["packing", "travel tips", "family", "winter"],
  seoTitle: "What to Pack for Kashmir",
  seoDescription:
    "What to pack for Kashmir in spring, summer, autumn, and winter. Layer-based advice from Aleeza Travels — no sponsored gear lists or fake temperature charts.",
  relatedPackageSlugs: [
    "kashmir-family-package",
    "kashmir-5-nights-6-days",
    "kashmir-honeymoon-package",
  ],
  relatedDestinationSlugs: ["srinagar", "gulmarg", "pahalgam"],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Do we need snow boots in summer?",
      answer:
        "No. In the warmer months, comfortable walking shoes with some grip are enough for town and meadow paths. Winter is a different packing list.",
    },
    {
      question: "Should children carry their own jackets on meadow days?",
      answer:
        "Yes. Gulmarg and open pastureland can turn windy even when Srinagar feels mild. A packable layer in the car is more useful than a heavy suitcase of “just in case” outfits.",
    },
  ],
  content: [
    p(
      "Kashmir packing is about layers, not a shopping haul. ",
      link("Srinagar", paths.destination("srinagar")),
      " can feel mild while ",
      link("Gulmarg", paths.destination("gulmarg")),
      " is windy. You move between city, highway, and meadow in the same trip. Pack for that, not for a single postcard.",
    ),
    h2("all-seasons", "What belongs in every bag"),
    ul([
      "Comfortable walking shoes with grip — paths are uneven in meadows and old Srinagar.",
      "A warm layer you can add in the car, even in summer.",
      "Sun protection: hat, sunglasses, and sunscreen. Altitude and snow glare are real in winter; summer meadows are open.",
      "Any regular medicines, plus copies of IDs you already travel with.",
      "A small daypack for valley mornings so the suitcase can stay at the stay.",
    ]),
    h2("spring-autumn", "April–June and September–October"),
    p(
      "Think city-smart layers plus a jacket for evenings and meadow days. Light rain protection is sensible; we do not pretend to know whether your week will be dry. Modest clothing is respectful in the old city and at religious sites.",
    ),
    h2("midsummer", "July and August"),
    p(
      "Srinagar afternoons can be warm; Pahalgam and Gulmarg stay cooler. Families on a ",
      link("family tour", paths.familyTours),
      " should still pack a fleece for the car and for river evenings. Breathable clothes beat a suitcase of formal wear you will not use.",
    ),
    h2("winter", "November to March"),
    p(
      "Pack for cold: proper jacket, warm footwear, gloves, and a hat. Gulmarg in snow is not a city pavement. If you ski, hire locally rather than flying with a full kit unless you already own it — we do not list hire shops here because they change.",
    ),
    h2("leave-at-home", "What you can leave"),
    p(
      "You do not need a separate outfit for every viewpoint. You do not need to pack hotel toiletries as if the stay were a camp. Once a property is confirmed in your quote, we can say what the rooms actually provide. Until then, pack as if you are moving hotels once or twice — because you probably are.",
    ),
    note(
      "This is not a climate table and not a shopping list with prices. If someone in the group has specific medical or mobility needs, tell us at enquiry so the days match the packing, not the other way around.",
    ),
    p(
      "Unsure about the month? Read ",
      link("best time to visit Kashmir", paths.blogPost("best-time-to-visit-kashmir")),
      " then ",
      link("send an enquiry", paths.contact),
      ".",
    ),
  ],
});
