import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  className,
  children,
  variant,
  size = "xl",
  external,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
