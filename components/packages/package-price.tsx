import { packagePriceDisplay } from "@/lib/packages/pricing";
import type { TravelPackage } from "@/lib/packages/schema";

type PackagePriceProps = {
  tourPackage: TravelPackage;
  size?: "card" | "detail";
};

export function PackagePrice({ tourPackage, size = "card" }: PackagePriceProps) {
  const price = packagePriceDisplay(tourPackage);

  return (
    <p className="text-sm">
      <span className="text-muted-foreground">{price.eyebrow}</span>
      <span
        className={
          size === "detail"
            ? "mt-0.5 block font-heading text-2xl"
            : "mt-0.5 block font-medium"
        }
      >
        {price.label}
      </span>
      <span className="mt-1 block text-xs leading-5 text-muted-foreground">
        {price.note}
      </span>
    </p>
  );
}
