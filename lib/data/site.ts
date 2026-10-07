import { env } from "@/lib/env";
import { resolvedBusinessConfig } from "@/lib/site-config";
import { paths } from "@/lib/seo/paths";
import type { MediaAsset, NavItem, SiteRoute, SocialLink } from "@/lib/types";

const business = resolvedBusinessConfig();

export const siteConfig = {
  name: business.businessName,
  legalName: business.legalBusinessName,
  title: `${business.businessName} | Kashmir Tour Packages & Travel Agency`,
  tagline: "Discover Kashmir, your way.",
  description: business.description,
  locale: "en_IN",
  location: {
    city: business.city ?? undefined,
    region: business.state ?? undefined,
    country: business.country ?? undefined,
  },
  url: business.websiteUrl,
  shareImage: {
    src: "/images/hero/dal-lake.jpg",
    alt: "Evening light over Dal Lake in Srinagar, Kashmir",
    width: 1920,
    height: 1280,
  } satisfies MediaAsset,
  contact: {
    email: business.email ?? undefined,
    phone: business.phone ?? undefined,
    whatsapp: business.whatsapp ?? undefined,
  },
  social: [
    { name: "Instagram", href: business.instagramUrl ?? undefined },
    { name: "Facebook", href: business.facebookUrl ?? undefined },
    { name: "YouTube", href: env.youtube },
  ] satisfies SocialLink[],
} as const;

export const siteRoutes: SiteRoute[] = [
  {
    path: paths.home,
    label: "Home",
    description: "Kashmir tour packages and custom trips by Aleeza Travels.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: paths.packages,
    label: "Kashmir Packages",
    description: "Kashmir tour packages for couples, families, groups, and custom itineraries.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: paths.destinations,
    label: "Destinations",
    description: "Explore Srinagar, Gulmarg, Pahalgam, Sonamarg, and more of Kashmir.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: paths.honeymoon,
    label: "Honeymoon",
    description: "Kashmir honeymoon packages with private planning and houseboat stays.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: paths.familyTours,
    label: "Family Tours",
    description: "Family-friendly Kashmir holiday packages with comfortable pacing.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: paths.groupTours,
    label: "Group Tours",
    description: "Group travel across Kashmir for friends, clubs, and larger parties.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: paths.corporateTravel,
    label: "Corporate Travel",
    description:
      "Plan team trips, corporate retreats, and employee getaways to Kashmir with customized itineraries.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: paths.customTrips,
    label: "Custom Trips",
    description: "Customized Kashmir trip packages built around your dates and pace.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: paths.about,
    label: "About",
    description: "Meet Aleeza Travels, a Kashmir travel agency planning tour packages and custom trips.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: paths.blog,
    label: "Blog",
    description: "Travel notes and practical guides for visiting Kashmir.",
    changeFrequency: "weekly",
    priority: 0.5,
  },
  {
    path: paths.contact,
    label: "Contact",
    description: "Plan a Kashmir trip with Aleeza Travels.",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: paths.privacy,
    label: "Privacy Policy",
    description: "How Aleeza Travels handles personal information.",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: paths.terms,
    label: "Terms & Conditions",
    description: "Terms for using the Aleeza Travels website and planning a trip.",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

export const primaryNav: NavItem[] = [
  { href: paths.home, label: "Home" },
  { href: paths.packages, label: "Kashmir Packages" },
  { href: paths.destinations, label: "Destinations" },
  { href: paths.honeymoon, label: "Honeymoon" },
  { href: paths.familyTours, label: "Family Tours" },
  { href: paths.about, label: "About" },
  { href: paths.blog, label: "Blog" },
  { href: paths.contact, label: "Contact" },
];

export const desktopNav: NavItem[] = primaryNav.filter((item) => item.href !== paths.home);

export const footerNav = {
  explore: [
    { href: paths.packages, label: "Kashmir Packages" },
    { href: paths.destinations, label: "Destinations" },
    { href: paths.honeymoon, label: "Honeymoon" },
    { href: paths.familyTours, label: "Family Tours" },
    { href: paths.groupTours, label: "Group Tours" },
    { href: paths.corporateTravel, label: "Corporate Travel" },
    { href: paths.customTrips, label: "Custom Trips" },
  ],
  company: [
    { href: paths.about, label: "About" },
    { href: paths.blog, label: "Blog" },
    { href: paths.contact, label: "Contact" },
    { href: paths.privacy, label: "Privacy Policy" },
    { href: paths.terms, label: "Terms & Conditions" },
  ],
} as const;

export const keywords = [
  "Kashmir travel agency",
  "Kashmir tour packages",
  "Kashmir holiday packages",
  "Kashmir honeymoon packages",
  "Kashmir family tour packages",
  "Kashmir trip packages",
  "Srinagar tour packages",
  "Kashmir tourism",
];
