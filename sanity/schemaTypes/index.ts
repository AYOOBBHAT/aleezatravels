import type { SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { destination } from "./destination";
import { faq, testimonial } from "./faqAndTestimonial";
import {
  altImage,
  faqItem,
  hotelStay,
  itineraryDay,
  labeledItem,
  seasonItem,
} from "./objects";
import { siteSettings } from "./siteSettings";
import { travelPackage } from "./travelPackage";

export const schemaTypes: SchemaTypeDefinition[] = [
  altImage,
  faqItem,
  labeledItem,
  seasonItem,
  itineraryDay,
  hotelStay,
  travelPackage,
  destination,
  blogPost,
  faq,
  testimonial,
  siteSettings,
];
