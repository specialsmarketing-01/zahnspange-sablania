import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import ServiceImageCard from "@/components/ServiceImageCard";
import { services } from "@/data/services";

export default function TreatmentsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  const cards = h.treatmentsCards ?? [];
  const title = h.treatmentsTitle ?? "Alle Zahnbehandlungen in einer Praxis:";

  return (
    <section className="relative bg-[#e9e9ef] py-14 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#0f2e5c] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Von Kieferorthopädie bis Implantologie – alles aus einer Hand.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceImageCard
              key={i}
              title={cards[i] ?? service.title}
              image={service.image}
            />
          ))}
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
