import { CoverImage } from "@/components/media/cover-image";
import type { MediaAsset } from "@/lib/types";

type PackageGalleryProps = {
  images: MediaAsset[];
  title: string;
};

export function PackageGallery({ images, title }: PackageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="package-gallery-heading" className="mt-10">
      <h2 id="package-gallery-heading" className="text-2xl sm:text-3xl">
        Gallery
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Placeholder photography of places typically covered on {title}. Replace
        with licensed images before launch.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <li key={image.src}>
            <CoverImage
              image={image}
              className="aspect-[4/3] rounded-xl"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
