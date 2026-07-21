import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function PatientReviewsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage as Record<string, unknown>;
  const title = (h.patientReviewsTitle as string) ?? (locale === "de" ? "Patientenbewertungen" : "Patient reviews");
  const subtitle = (h.patientReviewsSubtitle as string) ?? (locale === "de" ? "⭐ 4.8 / 5 basierend auf 91 Google Bewertungen" : "⭐ 4.8 / 5 based on 91 Google reviews");

  return (
    <section className="bg-gray-50/90 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        </header>
      </div>
    </section>
  );
}
