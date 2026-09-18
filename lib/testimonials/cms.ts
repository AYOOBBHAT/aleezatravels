import type { MediaAsset, Testimonial } from "@/lib/types";
import { SANITY_IMAGE_PROJECTION } from "@/lib/sanity/image";

export const TESTIMONIALS_GROQ = `*[_type == "testimonial" && published == true && verified == true && permissionGranted == true] | order(date desc, customerName asc) {
  "id": coalesce(id, _id),
  quote,
  "customerName": coalesce(customerName, attribution),
  date,
  trip,
  packageSlug,
  permissionGranted,
  verified,
  published,
  "photo": photo ${SANITY_IMAGE_PROJECTION}
}`;

export type SanityTestimonial = {
  id?: string | null;
  quote?: string | null;
  customerName?: string | null;
  attribution?: string | null;
  date?: string | null;
  trip?: string | null;
  packageSlug?: string | null;
  permissionGranted?: boolean | null;
  verified?: boolean | null;
  published?: boolean | null;
  photo?: MediaAsset | null;
};

export function mapSanityTestimonials(docs: SanityTestimonial[]): Testimonial[] {
  return docs
    .filter((doc) => doc.published !== false)
    .filter((doc) => doc.verified === true && doc.permissionGranted === true)
    .filter((doc) => doc.quote?.trim() && (doc.customerName?.trim() || doc.attribution?.trim()))
    .map((doc, index) => ({
      id: doc.id?.trim() || `testimonial-${index + 1}`,
      quote: doc.quote!.trim(),
      customerName: (doc.customerName || doc.attribution || "").trim(),
      date: doc.date?.trim() || undefined,
      trip: doc.trip?.trim() || undefined,
      packageSlug: doc.packageSlug?.trim() || undefined,
      photo: doc.photo?.src ? doc.photo : undefined,
      permissionGranted: true,
      verified: true,
    }));
}
