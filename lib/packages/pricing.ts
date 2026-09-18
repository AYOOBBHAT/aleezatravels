import { formatMoney } from "@/lib/format";
import { PRICE_NOTE } from "@/lib/packages/defaults";
import type { TravelPackage } from "@/lib/packages/schema";

export type PackagePriceDisplay = {
  eyebrow: string;
  label: string;
  note: string;
  isOnRequest: boolean;
};

export function packagePriceDisplay(pkg: TravelPackage): PackagePriceDisplay {
  const note = pkg.priceNote?.trim() || PRICE_NOTE;

  if (pkg.startingPrice == null) {
    return {
      eyebrow: "Pricing",
      label: "Get a customized quote",
      note,
      isOnRequest: true,
    };
  }

  return {
    eyebrow: "Starting from",
    label: `From ${formatMoney(pkg.startingPrice, pkg.priceCurrency)}`,
    note,
    isOnRequest: false,
  };
}
