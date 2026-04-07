import Image from "next/image";
import type { ReactNode } from "react";

export default function IllustrationCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/80 p-4 shadow-soft">
      <div className="relative mx-auto flex max-h-56 items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={220}
          unoptimized
          className="h-auto max-h-52 w-auto object-contain"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-gray-600">{caption}</figcaption>
    </figure>
  );
}
