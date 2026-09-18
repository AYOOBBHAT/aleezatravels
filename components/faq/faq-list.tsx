import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types";

type FaqListProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqList({ items, className }: FaqListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={className ?? "divide-y divide-border rounded-2xl bg-card ring-1 ring-foreground/8"}>
      {items.map((item) => (
        <details key={item.question} className="faq-item group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left font-heading text-lg leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
            {item.question}
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
