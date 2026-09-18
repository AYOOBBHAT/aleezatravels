import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { paths } from "@/lib/seo/paths";
import type { MediaAsset } from "@/lib/types";

type SiteLogoProps = {
  name?: string;
  logo?: MediaAsset;
};

export function SiteLogo({ name = siteConfig.name, logo }: SiteLogoProps) {
  return (
    <Link href={paths.home} className="flex items-center gap-2.5 text-foreground">
      {logo ? (
        <Image
          src={logo.src}
          alt={logo.alt || name}
          width={36}
          height={36}
          className="size-9 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <svg viewBox="0 0 32 32" className="size-5" fill="none">
            <path
              d="M4 22 L12 12 L16 17 L20 11 L28 22 Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M4 23.5 Q16 27 28 23.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg tracking-tight">{name}</span>
        <span className="mt-0.5 text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Kashmir
        </span>
      </span>
    </Link>
  );
}
