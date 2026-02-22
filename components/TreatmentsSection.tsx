import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

function CardIcon({ index }: { index: number }) {
  const icons: Record<number, React.ReactNode> = {
    0: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 12h16M4 16h16M8 8v8M12 8v8M16 8v8" />,
    1: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4l2 2-4 4 2 2 4-4 2 2M12 20v-8" />,
    2: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v2m0 8v2m-3-4h.01M12 12h.01M15 12h.01" />,
    3: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 10h12v4H6v-4zm0-2v-.5M18 10v-.5M9 14h6" />,
    4: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8M6 10h12v4H6v-4z" />,
    5: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12M9 9l3-3 3 3M15 15l-3 3-3-3" />,
  };
  return <>{icons[index] ?? icons[0]}</>;
}

export default function TreatmentsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  const cards = h.treatmentsCards ?? [];
  const title = h.treatmentsTitle ?? "Alle Zahnbehandlungen in einer Praxis:";

  return (
    <section className="relative bg-primary/[0.04] py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Von Kieferorthopädie bis Implantologie – alles aus einer Hand.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft border border-primary/5 hover:shadow-soft-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <CardIcon index={i} />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-primary sm:text-base leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center shrink-0">
            <div className="relative w-64 h-64 xl:w-80 xl:h-80">
              <Image
                src="/Dr-Manish-mobile-fsvicon%20logo.png"
                alt="Dr. Sablania – Zahnspange Sablania"
                width={320}
                height={320}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg className="relative w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
          <path fill="#ffffff" d="M0 120L50 105c50-15 150-45 250-45s200 30 300 30 200-30 300-30 150 15 250 30l50 15V120H0z" />
        </svg>
      </div>
    </section>
  );
}
