import { articleBlocks, defineArticle, link } from "@/lib/blog/defaults";
import { blogImages } from "@/lib/blog/images";
import {
  corporateRelatedDestinations,
  corporateRelatedPackages,
  hrefs,
} from "@/lib/blog/content/corporate-shared";

const { h2, p, ul, note } = articleBlocks("plan-kashmir-trip-team-size");

export const planKashmirTripTeamSize = defineArticle({
  _type: "blogPost",
  id: "plan-kashmir-trip-for-team-of-10-20-or-50",
  slug: "plan-kashmir-trip-for-team-of-10-20-or-50",
  title: "How to Plan a Kashmir Trip for a Team of 10, 20 or 50 Employees",
  excerpt:
    "How rooming, transport, meals, and pacing change as a Kashmir company trip grows from 10 to 20 to 50 people — without claiming a guaranteed capacity.",
  featuredImage: {
    ...blogImages.hero,
    alt: "Dal Lake in Srinagar, a practical group base when a company trip needs everyone in one place",
  },
  author: "Aleeza Travels",
  publishedAt: "2026-10-02",
  updatedAt: "2026-10-07",
  category: "corporate-travel",
  tags: [
    "employee trip Kashmir",
    "Kashmir team trip",
    "group coordination",
  ],
  seoTitle: "Plan a Kashmir Trip for a Team of 10, 20 or 50",
  seoDescription:
    "Rooming, transport, meals, and coordination for Kashmir company trips of about 10, 20, or 50 people. Availability is confirmed in a quote — not claimed here.",
  relatedPackageSlugs: [...corporateRelatedPackages],
  relatedDestinationSlugs: [...corporateRelatedDestinations],
  featured: false,
  published: true,
  faqs: [
    {
      question: "Can Aleeza Travels take a group of 50?",
      answer:
        "We plan around the headcount you send. Whether rooms and vehicles can be confirmed together depends on dates and the category you want. This page does not claim a fixed capacity.",
    },
    {
      question: "Should a large group stay only in Srinagar?",
      answer:
        "Often that is the least fragile option: one hotel, meadow days as outings. Overnights in Gulmarg or Pahalgam are added if every room can be held.",
    },
  ],
  content: [
    p(
      "Headcount is not a branding exercise. Ten people can share two cabs and a houseboat conversation. Fifty people are a check-in, a meal seating, and a convoy. The destination can stay Kashmir; the operations change.",
    ),
    p(
      "Nothing below is a promise that we currently hold rooms for a specific size. Send the number on the ",
      link("corporate enquiry form", hrefs.corporateQuote),
      " and we will say what can be confirmed.",
    ),
    h2("around-ten", "Around 10 employees"),
    p(
      "Treat this like a large family or a small incentive group. Twin rooms, one or two singles for people who need them, and a vehicle plan that still feels private. A houseboat night in ",
      link("Srinagar", hrefs.srinagar),
      " is more realistic at this size than at fifty. Meadow overnights in ",
      link("Gulmarg", hrefs.gulmarg),
      " or ",
      link("Pahalgam", hrefs.pahalgam),
      " are easier to place because you are not filling a floor.",
    ),
    h2("around-twenty", "Around 20 employees"),
    p(
      "You are now coordinating two breakfast sittings in spirit if not in fact. Keep hotel changes down. Decide room sharing in writing before anyone flies. Vehicles may be more than one cab or a larger van if that can be booked. Meals on road days need a plan so the group does not fragment across three restaurants.",
    ),
    h2("around-fifty", "Around 50 employees"),
    p(
      "Start from one Srinagar base unless we can hold enough meadow rooms for everyone. Check-in and check-out need a single contact on your side with a rooming list. Emergency contacts and a simple messaging group (whatever you already use at work) matter more than a printed booklet. Split transfers only if flights are split — and budget for that.",
    ),
    h2("shared-planning-themes", "What does not change with size"),
    ul([
      "Room allocation agreed before arrival.",
      "Airport transfers timed to the actual flights.",
      "Itinerary pacing that does not punish the slowest walkers.",
      "Meal inclusions written in the quote.",
      "A named person for the travel window, and a backup if meadow roads fail that morning.",
    ]),
    p(
      "The published ",
      link("Kashmir group tour outline", hrefs.groupPackage),
      " is written with larger parties in mind, still as a starting point. Compare also ",
      link("how to plan a retreat", hrefs.retreatGuide),
      ".",
    ),
    note(
      "We do not advertise a maximum group size or a coach fleet on this website. The quote is where capacity for your dates is stated.",
    ),
    p(
      "When you have a number — even a range — ",
      link("talk to us about a corporate Kashmir trip", hrefs.corporate),
      ".",
    ),
  ],
});
