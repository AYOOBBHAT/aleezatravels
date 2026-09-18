/**
 * Shared GROQ fragments. Keep projections aligned with UI document shapes.
 */
export const SANITY_IMAGE_PROJECTION = `{
  "src": asset->url,
  "alt": coalesce(alt, ""),
  "width": coalesce(asset->metadata.dimensions.width, 1920),
  "height": coalesce(asset->metadata.dimensions.height, 1080),
  "credit": credit
}`;
