import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Vorher & Nachher Ergebnisse | Zahnspange Wien",
  description:
    "Behandlungsbeispiele aus der Praxis Zahnspange Sablania: Vorher-Nachher-Ergebnisse kieferorthopädischer Behandlungen in Wien.",
  alternates: {
    canonical: `${SITE_URL}/vorher-nachher`,
    languages: { de: `${SITE_URL}/vorher-nachher`, en: `${SITE_URL}/en/before-after` },
  },
};

const GALLERY = [
  {
    treatment: "Festsitzende Behandlung, Dauer ca. 18 Monate.",
  },
  {
    treatment: "Aligner-Therapie für Erwachsene.",
  },
  {
    treatment: "Kieferorthopädie im Jugendalter.",
  },
];

export default function VorherNachherPage() {
  const dict = getDictionary(locale);
  return (
    <PageContent
      title="Vorher & Nachher Ergebnisse"
      lead="Einblicke in unsere Behandlungen und Ergebnisse."
      locale={locale}
      dict={dict}
    >
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY.map((item, i) => (
          <article
            key={i}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                Vorher
              </div>
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                Nachher
              </div>
            </div>
            <p className="p-4 text-sm text-gray-600">{item.treatment}</p>
          </article>
        ))}
      </div>
    </PageContent>
  );
}
