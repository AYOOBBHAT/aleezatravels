/**
 * Package content that still needs a business decision.
 * Do not invent hotels, prices, availability, reviews, or statistics
 * to fill these. Update `lib/packages/data.ts` or Sanity when confirmed.
 */
export const packageContentTodos = [
  "TODO: Set startingPrice only after a real tariff is approved for that package.",
  "TODO: Set hotels[].name only after a property is confirmed for the season.",
  "TODO: Replace placeholder photography credits with licensed or owned images.",
  "TODO: Confirm meal plans per package instead of the default “to be confirmed” note.",
  "TODO: Confirm optional add-ons (houseboat night, gondola, decoration) as included or quoted separately.",
] as const;
