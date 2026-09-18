import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { telUrl } from "@/lib/format";
import {
  formattedStreetAddress,
  isAllowedGoogleMapsPlace,
  type BusinessNap,
} from "@/lib/site/nap";

type NapBlockProps = {
  nap: BusinessNap;
  tone?: "default" | "invert";
  className?: string;
};

function NapField({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "default" | "invert";
  children: ReactNode;
}) {
  return (
    <p>
      <span
        className={cn(
          "block text-xs tracking-[0.16em] uppercase",
          tone === "invert"
            ? "text-primary-foreground/55"
            : "text-muted-foreground",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "mt-1 inline-block text-sm leading-6",
          tone === "invert"
            ? "text-primary-foreground/90"
            : "text-foreground",
        )}
      >
        {children}
      </span>
    </p>
  );
}

export function NapBlock({ nap, tone = "default", className }: NapBlockProps) {
  const address = formattedStreetAddress(nap);
  const mapsHref =
    nap.mapsPlaceUrl && isAllowedGoogleMapsPlace(nap.mapsPlaceUrl)
      ? nap.mapsPlaceUrl
      : undefined;
  const linkClass =
    tone === "invert"
      ? "hover:text-primary-foreground"
      : "text-primary hover:underline";

  return (
    <address
      className={cn("space-y-4 not-italic", className)}
      data-nap="true"
    >
      <NapField label="Name" tone={tone}>
        {nap.name}
      </NapField>
      {address ? (
        <NapField label="Address" tone={tone}>
          {mapsHref ? (
            <a
              href={mapsHref}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          ) : (
            address
          )}
        </NapField>
      ) : null}
      {nap.phone ? (
        <NapField label="Phone" tone={tone}>
          <a href={telUrl(nap.phone)} className={linkClass}>
            {nap.phone}
          </a>
        </NapField>
      ) : null}
    </address>
  );
}
