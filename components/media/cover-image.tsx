import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/lib/types";

type CoverImageProps = {
  image: MediaAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CoverImage({
  image,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: CoverImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-primary/15", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={priority ? 80 : 70}
        className="object-cover"
      />
    </div>
  );
}
