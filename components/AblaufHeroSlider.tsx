"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const SLIDES = [
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (1).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).jpg",
] as const;

export default function AblaufHeroSlider({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const label =
    locale === "de"
      ? "Ablauf: Zahnspange & Kieferorthopädie"
      : "Process: Braces & Orthodontics";

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft">
          <div className="relative h-64 sm:h-80 lg:h-96">
            {SLIDES.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`${label} – Bild ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white drop-shadow">
              Ablauf: Zahnspange Kieferorthopädie Zahnregulierung Invisalign Clear Aligner Unsichtbare Zahnspange in der Ordination.
            </h1>
          </div>
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-colors ${
                  i === index ? "bg-white" : "bg-white/20"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

