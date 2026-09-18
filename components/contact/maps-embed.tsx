import {
  isAllowedGoogleMapsEmbed,
  isAllowedGoogleMapsPlace,
  type BusinessNap,
} from "@/lib/site/nap";

export function MapsEmbed({ nap }: { nap: BusinessNap }) {
  const embed =
    nap.mapsEmbedUrl && isAllowedGoogleMapsEmbed(nap.mapsEmbedUrl)
      ? nap.mapsEmbedUrl
      : undefined;
  const place =
    nap.mapsPlaceUrl && isAllowedGoogleMapsPlace(nap.mapsPlaceUrl)
      ? nap.mapsPlaceUrl
      : undefined;

  if (embed) {
    return (
      <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
        <iframe
          title={`Google Map showing the location of ${nap.name}`}
          src={embed}
          className="h-72 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  if (!place) {
    return null;
  }

  return (
    <p>
      <a
        href={place}
        className="text-sm text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Google Maps
      </a>
    </p>
  );
}
