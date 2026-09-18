import "server-only";

import { cache } from "react";
import { faqs as localFaqs } from "@/lib/data/faq";
import { FAQS_GROQ, mapSanityFaqs, type SanityFaq } from "@/lib/faq/cms";
import { cmsOrFallback, fetchSanity } from "@/lib/sanity/fetch";
import { CACHE_TAGS } from "@/lib/sanity/tags";
import type { FaqItem } from "@/lib/types";

export const getPublishedFaqs = cache(async (): Promise<FaqItem[]> => {
  const remote = await fetchSanity<SanityFaq[]>(
    FAQS_GROQ,
    {},
    { tags: [CACHE_TAGS.faqs, CACHE_TAGS.cms] },
  );

  if (!remote) {
    return localFaqs;
  }

  try {
    return cmsOrFallback(mapSanityFaqs(remote), localFaqs);
  } catch (error) {
    console.error("[sanity] FAQ mapping failed; using local FAQs.", error);
    return localFaqs;
  }
});
