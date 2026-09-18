import type { Testimonial } from "@/lib/types";

export type { Testimonial };

/**
 * Public testimonials need a real guest name, quote, publication permission,
 * and verification. Do not invent any of these. Do not emit Review or
 * aggregateRating schema until genuine review data is supplied.
 */
export function isPublicTestimonial(item: Testimonial): boolean {
  return (
    item.verified &&
    item.permissionGranted &&
    Boolean(item.customerName.trim()) &&
    Boolean(item.quote.trim())
  );
}
