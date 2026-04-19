"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

export type HeroSlide = { src: string; alt: string };

const AUTOPLAY_MS = 6500;

const labels = {
  de: {
    carousel: "Impressionen: Zahnspangen für Erwachsene",
    prev: "Vorheriges Bild",
    next: "Nächstes Bild",
    dot: (i: number, total: number) => `Bild ${i} von ${total}`,
  },
  en: {
    carousel: "Gallery: braces for adults",
    prev: "Previous image",
    next: "Next image",
    dot: (i: number, total: number) => `Image ${i} of ${total}`,
  },
} as const;

export default function AdultsHeroSlider({
  slides,
  locale,
}: {
  slides: HeroSlide[];
  locale: "de" | "en";
}) {
  const L = labels[locale];
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const n = slides.length;
  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (n <= 1 || reducedMotion) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [n, go, reducedMotion]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  const onTouchEnd = (clientX: number) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const dx = clientX - start;
    if (Math.abs(dx) < 48) return;
    if (dx < 0) go(1);
    else go(-1);
  };

  if (n === 0) return null;

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-soft-lg"
      aria-roledescription="carousel"
      aria-label={slides.length > 1 ? L.carousel : undefined}
    >
      <div
        role="region"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative aspect-[21/9] min-h-[200px] w-full outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:min-h-[240px]"
        onTouchStart={(e) => {
          touchStartX.current = e.targetTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const x = e.changedTouches[0]?.clientX;
          if (x != null) onTouchEnd(x);
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                i === index ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
          aria-hidden
        />

        {n > 1 && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex justify-center pb-3 pt-8">
              <div className="pointer-events-auto flex gap-1.5 rounded-full bg-black/25 px-2 py-1.5 backdrop-blur-sm">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={L.dot(i + 1, n)}
                    aria-current={i === index}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 z-[3] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#0f2e5c] shadow-md backdrop-blur-sm transition hover:bg-white sm:left-3 sm:h-11 sm:w-11"
              aria-label={L.prev}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 z-[3] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#0f2e5c] shadow-md backdrop-blur-sm transition hover:bg-white sm:right-3 sm:h-11 sm:w-11"
              aria-label={L.next}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
