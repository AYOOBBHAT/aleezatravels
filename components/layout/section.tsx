import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
};

export function Section({ children, className, id, ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}
