import type { FaqItem } from "@/lib/types";

export const FAQS_GROQ = `*[_type == "faq"] | order(order asc, question asc) {
  question,
  answer,
  published,
  order
}`;

export type SanityFaq = FaqItem & {
  published?: boolean | null;
  order?: number | null;
};

export function mapSanityFaqs(docs: SanityFaq[]): FaqItem[] {
  return docs
    .filter((doc) => doc.published !== false)
    .filter((doc) => doc.question?.trim() && doc.answer?.trim())
    .map((doc) => ({
      question: doc.question.trim(),
      answer: doc.answer.trim(),
    }));
}
