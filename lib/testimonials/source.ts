import "server-only";

import { cache } from "react";
import { testimonials as localTestimonials } from "@/lib/data/testimonials";
import { mapSanityTestimonials, TESTIMONIALS_GROQ, type SanityTestimonial } from "@/lib/testimonials/cms";
import { isPublicTestimonial } from "@/lib/testimonials/schema";
import { cmsOrFallback, fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";
import type { Testimonial } from "@/lib/types";

export const getPublishedTestimonials = cache(async (): Promise<Testimonial[]> => {
  const remote = await fetchSanity<SanityTestimonial[]>(
    TESTIMONIALS_GROQ,
    {},
    { tags: [CACHE_TAGS.testimonials, CACHE_TAGS.cms] },
  );

  if (!remote) {
    return localTestimonials.filter(isPublicTestimonial);
  }

  try {
    return cmsOrFallback(mapSanityTestimonials(remote), localTestimonials).filter(
      isPublicTestimonial,
    );
  } catch (error) {
    console.error("[sanity] Testimonial mapping failed; using local data.", error);
    return localTestimonials.filter(isPublicTestimonial);
  }
});
