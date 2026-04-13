import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  hero:
    "/Invisible-beaces/" +
    encodeURIComponent("Unsichtbare Zahnspange Wien Invisalign oder Clear Aligners.png"),
} as const;

const INSURERS = [
  { label: "SVS", href: "https://www.svs.at" },
  { label: "BVA", href: "https://www.bvaeb.at" },
  { label: "KFA", href: "https://www.oegk.at" },
] as const;

function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  const TagName = Tag;
  return (
    <TagName
      className={`font-bold text-primary ${Tag === "h2" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"} ${className}`}
    >
      {children}
    </TagName>
  );
}

export default function UnsichtbareZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/unsichtbare-zahnspange-wien";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Unsichtbare Zahnspange Wien";
  const lead = leads[dePath];
  const terminHref = getHref("/online-termin", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const isDe = locale === "de";

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[2/1] min-h-[200px] w-full sm:aspect-[21/9]">
            <Image
              src={IMG.hero}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </section>

        {isDe ? (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-5 sm:mt-14">
              <SectionTitle>Unsichtbare Zahnspange Wien: Innovative Behandlungsmethode mit Invisalign in Wien</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                Die Behandlungsmethode der unsichtbaren Zahnspange bietet verschiedene Namen, darunter
                „Unsichtbare Zahnspange Wien“ und „Invisalign Wien“. Bei dieser modernen Art der Behandlung
                von Zahnfehlstellungen werden transparente und durchsichtige Folien verwendet, die mithilfe
                von computergestützter Technologie präzise im Labor hergestellt werden.
              </p>
              <p className="leading-relaxed text-gray-800">
                Die unsichtbare Zahnspange Wien, auch bekannt als Invisible oder Invisalign Clear Aligners,
                durchsichtige Schienen / Aligners, ermöglichen es sowohl Jugendlichen als auch Erwachsenen
                von den Vorteilen der Clear Aligner Technologie zu profitieren.
              </p>
              <p className="leading-relaxed text-gray-800">
                Diese Schienentherapie ist eine hochmoderne Methode zur Korrektur von Zahnfehlstellungen, bei
                der keine Brackets oder Drähte verwendet werden. Die Schienen üben sanfte Kräfte auf die
                Zähne aus, um sie Schritt für Schritt in die zuvor digital geplante Richtung zu lenken.
              </p>
              <p className="leading-relaxed text-gray-800">
                Darüber hinaus bietet die unsichtbare Zahnspange auch eine verkürzte Behandlungszeit im
                Vergleich zu traditionellen Methoden. In einigen Fällen kann die Dauer der Behandlung mit
                Clear Aligners kürzer sein, was zu schnelleren Ergebnissen führt und weniger häufige Besuche
                beim Kieferorthopäden erfordert.
              </p>
              <p className="leading-relaxed text-gray-800">
                Es ist jedoch wichtig anzumerken, dass jede Behandlungsmethode ihre eigenen Vor- und
                Nachteile hat. Die Eignung der unsichtbaren Zahnspange für einen individuellen Fall sollte
                immer in Absprache mit Facharzt für Kieferorthopädie entschieden werden, der die
                spezifischen Bedürfnisse und Anforderungen des Patienten berücksichtigt.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">
                Vor- und Nachteile der unsichtbaren Zahnspange bzw. Zahnregulierung
              </SectionTitle>
              <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-emerald-950 sm:text-lg">
                    Vorteile der Invisalign – Clear Aligners Therapie:
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-800">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Ästhetik:</strong> Die Clear Aligners sind nahezu unsichtbar, da sie aus
                        transparentem Material bestehen. Dadurch fällt es anderen oft nicht auf, dass man eine
                        Zahnspange trägt.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Komfort:</strong> Im Vergleich zu herkömmlichen Zahnspangen mit Brackets und
                        Drähten sind die Clear Aligners deutlich angenehmer zu tragen. Sie bestehen aus glattem
                        Kunststoff, der keine Reibung oder Irritationen im Mund verursacht.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Herausnehmbar:</strong> Die Clear Aligners können zum Essen, Trinken und zur
                        Zahnpflege einfach herausgenommen werden. Dadurch entstehen keine Einschränkungen bei der
                        Nahrungsaufnahme und die Zahnpflege gestaltet sich unkompliziert.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Präzision:</strong> Die Invisalign Clear Aligners werden mithilfe modernster
                        Computertechnologie und 3D-Bildgebung individuell für jeden Patienten angefertigt.
                        Dadurch wird eine präzise und effektive Korrektur der Zahnfehlstellungen ermöglicht.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Zeitersparnis:</strong> In einigen Fällen kann die Behandlung mit Clear Aligners
                        schneller abgeschlossen werden als mit herkömmlichen Zahnspangen. Die regelmäßigen
                        Kontrolltermine beim Kieferorthopäden sind meist weniger zeitaufwendig.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Alltagstauglichkeit:</strong> Die unsichtbare Zahnspange beeinträchtigt kaum den
                        Alltag des Patienten. Sportliche Aktivitäten, Musikinstrumente spielen oder wichtige
                        Veranstaltungen stellen keine Hindernisse dar, da die Invisaligns herausgenommen werden
                        können.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-white p-6 shadow-soft sm:p-8">
                  <p className="text-center text-sm font-semibold text-primary">
                    Unsichtbare Zahnspange Wien – Invisalign Clear Aligners
                  </p>
                  <h3 className="mt-4 text-base font-bold text-amber-950 sm:text-lg">
                    Nachteile der Invisalign – Clear Aligners Therapie:
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-800">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Disziplin und Eigenverantwortung:</strong> Da die Clear Aligners herausnehmbar
                        sind, erfordert die Behandlung eine Disziplin und Eigenverantwortung seitens des
                        Patienten. Die Aligners müssen konsequent für die vorgeschriebene Tragezeit (in der Regel
                        20-22 Stunden pro Tag) eingesetzt werden, um die gewünschten Ergebnisse zu erzielen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Einschränkungen bei manchen Lebensmitteln:</strong> Während der Behandlung mit
                        Invisalign sollten bestimmte Lebensmittel vermieden werden, insbesondere solche, die hart,
                        klebrig oder stark färbend sind. Der Verzicht auf diese Lebensmittel kann für manche
                        Menschen eine Einschränkung darstellen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Begrenzte Behandlungsmöglichkeiten:</strong> Obwohl die unsichtbare
                        Zahnregulierung mit Invisalign für viele Fälle von Zahnfehlstellungen geeignet ist, gibt
                        es bestimmte komplexe oder schwere Fehlstellungen, bei denen möglicherweise eine
                        herkömmliche feste Zahnspange effektiver ist. Als Kieferorthopäde kann ich die besten
                        Optionen für die individuelle Situation eines Patienten einschätzen.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                      <span className="leading-relaxed">
                        <strong>Regelmäßige Besuche in der Kieferorthopädie:</strong> Wie bei jeder
                        kieferorthopädischen Behandlung erfordert auch die Invisalign – Clear Aligners Therapie
                        regelmäßige Besuche beim Kieferorthopäden, um den Fortschritt zu überwachen, die Aligners
                        anzupassen und weitere Anweisungen zu erhalten. Diese Termine können für manche Menschen
                        zusätzlichen Zeitaufwand bedeuten.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  href={terminHref}
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
                >
                  Kostenlose Erstberatung für Invisalign vereinbaren
                </Link>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
              <SectionTitle>Details zur Behandlung mit Invisalign, der unsichtbaren Zahnspange Wien</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                Die Behandlung mit Invisalign, der unsichtbaren Zahnspange, basiert auf einer Reihe von
                transparenten Alignern, die speziell für jeden Patienten individuell angefertigt werden. Die
                unsichtbaren Aligners werden 12 bis 14 Tage getragen, daraufhin kommen bereits neue Schienen zum
                Einsatz. Wir geben unseren Patienten stets 4 bis 6 Aligners zum Wechseln mit nach Hause, damit Sie
                nicht jedes Mal in die Praxis kommen müssen.
              </p>
              <p className="mt-4 font-medium text-gray-900">Hier sind einige Details zur Behandlung:</p>
              <ul className="mt-5 space-y-5 border-l-2 border-primary/20 pl-5 text-gray-800">
                <li className="leading-relaxed">
                  <strong>Konsultation und Behandlungsplanung:</strong> Zu Beginn erfolgt eine ausführliche
                  Konsultation bei mir, Ihrem Kieferorthopäden, um die Ziele der Behandlung zu besprechen und
                  festzustellen, ob Invisalign die geeignete Option ist. Mithilfe moderner 3D-Bildgebungstechnologie
                  wird ein digitaler Behandlungsplan erstellt, der die Bewegung der Zähne während der gesamten
                  Behandlung zeigt.
                </li>
                <li className="leading-relaxed">
                  <strong>Anfertigung der Aligner:</strong> Basierend auf dem Behandlungsplan werden die
                  transparenten Aligner individuell im Invisalign-Labor hergestellt. Jeder Aligner wird dabei so
                  konzipiert, dass er schrittweise die gewünschte Zahnposition erreicht. In der Regel werden mehrere
                  Aligner-Sets für die gesamte Behandlung erstellt.
                </li>
                <li className="leading-relaxed">
                  <strong>Tragezeit der Aligner:</strong> Die Invisalign Aligner müssen in der Regel 20-22 Stunden
                  pro Tag getragen werden. Sie werden alle 12 bis 14 Tage gewechselt, um den Fortschritt der
                  Zahnverschiebung zu ermöglichen. Es ist wichtig, die Aligner nur zum Essen, Trinken (außer Wasser)
                  und zur Zahnpflege herauszunehmen.
                </li>
                <li className="leading-relaxed">
                  <strong>Fortschrittskontrollen:</strong> Während der Behandlung sind regelmäßige Kontrollbesuche –
                  der erste Kontrolltermin findet 8 Wochen nach Behandlungsstart statt – beim Kieferorthopäden
                  erforderlich. In diesen Terminen wird der Fortschritt überprüft, und gegebenenfalls werden
                  Anpassungen vorgenommen, um die Behandlung auf Kurs zu halten. Neue Aligner werden ausgehändigt,
                  um die Zähne weiterhin in die gewünschte Position zu bewegen. Bei jedem Termin erfolgt eine
                  digitale Computersimulation.
                </li>
                <li className="leading-relaxed">
                  <strong>Behandlungsdauer:</strong> Die Dauer der Invisalign-Behandlung variiert je nach
                  individuellem Fall. In der Regel dauert sie jedoch zwischen 6 (leicht Fälle), 18 (Mittel) und 24
                  (Schwer) Monaten. Die genaue Behandlungsdauer wird vom Kieferorthopäden basierend auf den
                  spezifischen Zahnfehlstellungen und den Behandlungszielen bestimmt.
                </li>
                <li className="leading-relaxed">
                  <strong>Nachbehandlung:</strong> Nach Abschluss der Behandlung mit Invisalign werden häufig
                  Retainer eingesetzt, um die erzielten Ergebnisse langfristig zu stabilisieren. Retainer sind
                  individuell angefertigte, transparente Schienen, die in der Regel nachts getragen werden.
                </li>
              </ul>
            </section>

            <section className="mx-auto mt-14 max-w-3xl space-y-5 sm:mt-16">
              <SectionTitle>Invisalign Behandlung für Erwachsene und Jugendliche</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                Invisalign Aligner ist eine beliebte Behandlungsmethode sowohl für Erwachsene als auch Jugendliche.
              </p>
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6">
                <p className="leading-relaxed text-gray-800">
                  Für Erwachsene ist die unsichtbare Zahnspange besonders gut mit beruflichen Anforderungen zu
                  kombinieren. Invisalign bietet eine diskrete Lösung für berufstätige Erwachsene, die während der
                  Behandlung kein offensichtliches Tragen einer Zahnspange wünschen. Die Möglichkeit, die Aligner bei
                  wichtigen beruflichen Anlässen herauszunehmen, ist ein großer Vorteil.
                </p>
              </div>
              <h3 className="text-lg font-bold text-primary sm:text-xl">Jugendliche schätzen die Diskretion der Clear Aligners</h3>
              <p className="text-sm font-medium text-gray-700">Unsichtbare Zahnspange Wien - Invisalign Wien Clear Aligners</p>
              <ul className="space-y-4 text-gray-800">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Ästhetik und Selbstbewusstsein:</strong> Jugendliche schätzen die ästhetischen Vorteile
                    von Invisalign, da die transparenten Aligner ihnen ermöglichen, ihr Selbstbewusstsein zu bewahren
                    und sich während der Behandlung wohler zu fühlen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Sport und Aktivitäten:</strong> Invisalign bietet Jugendlichen die Flexibilität, ihren
                    Sport- und Aktivitätsroutinen uneingeschränkt nachzugehen. Die Aligner können während des Sports
                    herausgenommen werden, um Verletzungen zu vermeiden.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Soziale Interaktionen:</strong> Die Möglichkeit, die Aligner zum Essen oder bei sozialen
                    Anlässen herauszunehmen, erleichtert es den Jugendlichen, sich mit Freunden zu treffen und ihr
                    soziales Leben normal fortzusetzen.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">
                    <strong>Pädagogische Unterstützung:</strong> Invisalign bietet spezielle Funktionen wie
                    Compliance-Indikatoren und spezielle Aligner für das Wachstum des Kiefers bei Jugendlichen. Dies
                    hilft dabei, die Behandlung zu überwachen und die Einhaltung des Behandlungsplans
                    sicherzustellen.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:mt-16 sm:p-8">
              <SectionTitle>Behandlung nach Schweregrad - IOTN</SectionTitle>
              <div className="mt-5 space-y-4 leading-relaxed text-gray-800">
                <p>
                  Die Dauer der Behandlung mit Clear Aligners kann tatsächlich je nach Schweregrad der individuellen
                  Zahnfehlstellung (gemessen am Index of Orthodontic Treatment Need, IOTN) variieren. Eine genaue
                  Diagnostik und umfassende Therapieplanung sind entscheidende Erfolgsfaktoren für eine effektive
                  Clear Aligner-Behandlung.
                </p>
                <p>
                  Im Rahmen der Diagnostik werden verschiedene Untersuchungen durchgeführt, um den genauen Zustand
                  der Zahnfehlstellung zu erfassen. Dazu gehören Röntgenbilder, Abdrücke der Zähne und möglicherweise
                  auch digitale 3D-Scans. Basierend auf diesen Informationen wird ein Therapieplan entwickelt, der die
                  spezifischen Ziele und Bedürfnisse des Patienten berücksichtigt.
                </p>
                <p>
                  Die Herstellung der Set-Up-Modelle, die die gewünschte Zahnposition am Ende der Behandlung
                  darstellen, ist ein weiterer wichtiger Schritt. Diese Modelle werden verwendet, um die Aligner
                  individuell anzufertigen und sicherzustellen, dass sie optimal auf die Zähne passen und die
                  gewünschten Bewegungen erreichen.
                </p>
                <p>
                  Die Fertigung der Clear Aligner erfolgt im Labor unter Verwendung fortschrittlicher
                  computergestützter Technologie. Jeder Aligner wird speziell für den Patienten hergestellt und ist
                  darauf ausgelegt, die Zähne schrittweise in die gewünschte Position zu bewegen.
                </p>
                <p>
                  Es ist wichtig zu betonen, dass die Zielerreichung und die Behandlungsdauer auch von der Mitarbeit
                  des Patienten abhängen. Das Tragen der Aligner für die vorgeschriebene Tragezeit pro Tag und das
                  regelmäßige Einsetzen neuer Aligner gemäß dem Behandlungsplan sind entscheidend, um den gewünschten
                  Fortschritt zu erzielen.
                </p>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">
                Invisalign Clear Aligners Zahnspange Rückerstattungsmöglichkeiten durch Krankenkasse oder
                Zusatzversicherungen
              </SectionTitle>
              <div className="mt-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-white p-6 shadow-soft sm:p-8">
                <p className="leading-relaxed text-gray-800">
                  Je nach Schwergrad der Zahnfehlstellung und Art der Behandlung, werden von Krankenkassen oder
                  Zusatzversicherungen Teile der Behandlung rückerstattet!
                </p>
                <p className="mt-6 font-semibold text-gray-900">Informationen über Rückerstattungen der Krankenkassen:</p>
                <p className="mt-2 text-sm text-gray-700">
                  Bitte klicken Sie auf Ihre Kasse, Sie werden direkt auf die Informationsseite weitergeleitet.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {INSURERS.map((ins) => (
                    <a
                      key={ins.href}
                      href={ins.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-[5rem] items-center justify-center rounded-full border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/50 hover:bg-primary/[0.06]"
                    >
                      {ins.label}
                    </a>
                  ))}
                </div>
                <p className="mt-8 font-semibold text-gray-900">
                  Informationen über die Rückerstattung von Zusatz-Versicherungen:
                </p>
                <p className="mt-2 leading-relaxed text-gray-800">
                  Bitte nehmen Sie mit Ihrer Versicherung Kontakt auf, wir haben keinen Einblick in die
                  unterschiedlichen Verträge.
                </p>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
              <SectionTitle>Unsichtbare Zahnspange Wien - Invisalign Clear Aligners in meiner Praxis</SectionTitle>
              <p className="mt-4 leading-relaxed text-gray-800">
                1200 Wien nähe zu 1210, 1190, 1220, 1020 und Klosterneuburg.
              </p>
              <h3 className="mt-8 text-lg font-bold text-primary">Aligners</h3>
              <ol className="mt-6 space-y-0">
                {[
                  "Kostenlose Erstberatung für Zahnfehlstellungen in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
                  "Behandlungsunterlagen für individuellen Behandlungsverlauf werden erstellt. Eine Diagnose mit Röntgen, Fotos und digitalen Scans erfolgt – ohne Abdrücke.",
                  "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
                  "Behandlungsbeginn. Einsetzen des Geräts und Aufklärung über Reinigung sowie Tragezeiten.",
                  "Wichtige und notwendige Kontrolltermine alle 6-8 Wochen",
                  "Behandlungsende. Entfernen der unsichtbaren Zahnspange und Besprechung des Behandlungsergebnisses.",
                  "Retention – der Beginn der Stabilisierung des Behandlungsergebnisses.",
                ].map((step, i) => {
                  const isRet = step.startsWith("Retention");
                  return (
                    <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < 6 && (
                        <span
                          className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                          isRet ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="leading-relaxed text-gray-800">
                          {isRet ? (
                            <>
                              <strong>Retention</strong>
                              {" – der Beginn der Stabilisierung des Behandlungsergebnisses."}
                            </>
                          ) : (
                            step
                          )}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
              >
                Termin vereinbaren
              </a>
              <Link
                href={terminHref}
                className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
              >
                Kostenlose Erstberatung für Invisalign vereinbaren
              </Link>
              <Link
                href={kontaktHref}
                className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Kontakt
              </Link>
            </section>
          </>
        ) : (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-5 sm:mt-14">
              <SectionTitle>Invisible braces Vienna: innovative treatment with Invisalign in Vienna</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                The invisible brace treatment goes by several names, including „Invisible braces Vienna“ and „Invisalign Vienna“. This modern approach uses transparent aligner trays made with computer-aided technology in the lab.
              </p>
              <p className="leading-relaxed text-gray-800">
                Invisible braces Vienna – also known as Invisalign clear aligners – allow both teenagers and adults to benefit from clear aligner technology.
              </p>
              <p className="leading-relaxed text-gray-800">
                This aligner therapy is a state-of-the-art way to correct misalignment without brackets or wires. The trays apply gentle forces to move the teeth step by step towards the planned result.
              </p>
              <p className="leading-relaxed text-gray-800">
                In some cases treatment with clear aligners can also be shorter than with traditional methods, with fewer visits.
              </p>
              <p className="leading-relaxed text-gray-800">
                Every method has pros and cons. Suitability for the invisible brace should always be decided with a specialist orthodontist who considers your individual needs.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">Advantages and disadvantages of invisible braces</SectionTitle>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-emerald-950 sm:text-lg">Advantages of Invisalign – clear aligner therapy</h3>
                  <ul className="mt-5 space-y-3 text-gray-800">
                    <li className="leading-relaxed"><strong>Aesthetics:</strong> The aligners are almost invisible.</li>
                    <li className="leading-relaxed"><strong>Comfort:</strong> More comfortable than fixed braces; smooth plastic, no irritation.</li>
                    <li className="leading-relaxed"><strong>Removable:</strong> For eating, drinking and brushing – no dietary restrictions.</li>
                    <li className="leading-relaxed"><strong>Precision:</strong> Individually made using 3D imaging and computer technology.</li>
                    <li className="leading-relaxed"><strong>Time:</strong> In some cases treatment can be faster; check-ups often less time-consuming.</li>
                    <li className="leading-relaxed"><strong>Daily life:</strong> Sport, playing instruments and events are easier as aligners can be removed.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-white p-6 shadow-soft sm:p-8">
                  <h3 className="text-base font-bold text-amber-950 sm:text-lg">Disadvantages of Invisalign – clear aligner therapy</h3>
                  <ul className="mt-5 space-y-3 text-gray-800">
                    <li className="leading-relaxed"><strong>Discipline:</strong> Must be worn 20–22 hours per day for the best result.</li>
                    <li className="leading-relaxed"><strong>Food:</strong> Some foods (hard, sticky, strongly coloured) should be avoided.</li>
                    <li className="leading-relaxed"><strong>Limits:</strong> Some complex or severe cases may be better with fixed braces.</li>
                    <li className="leading-relaxed"><strong>Visits:</strong> Regular check-ups are still needed.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link href={terminHref} className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted">
                  Book a free Invisalign consultation
                </Link>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
              <SectionTitle>Details of treatment with Invisalign, the invisible brace</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                Treatment uses a series of transparent aligners made individually for you. Each set is worn 12–14 days. We give patients 4–6 aligners to take home so you don’t need to come in every time.
              </p>
              <p className="mt-4 font-medium text-gray-900">Details: consultation and planning with 3D imaging; aligners made in the Invisalign lab; wear 20–22 hours per day, change every 12–14 days; progress checks (first around 8 weeks); treatment duration typically 6–24 months depending on the case; after treatment, retainers are often used to stabilise the result.</p>
            </section>

            <section className="mx-auto mt-14 max-w-3xl space-y-4 sm:mt-16">
              <SectionTitle>Invisalign for adults and teenagers</SectionTitle>
              <p className="leading-relaxed text-gray-800">
                For adults, the invisible brace fits well with work. For teenagers: aesthetics and confidence; sport and activities; social situations; compliance indicators and growth-specific options.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:mt-16 sm:p-8">
              <SectionTitle>Treatment by severity – IOTN</SectionTitle>
              <p className="mt-5 leading-relaxed text-gray-800">
                Treatment duration with clear aligners depends on the severity of misalignment (IOTN). Diagnosis and planning are key. We use X-rays, impressions or 3D scans, set-up models and lab-made aligners. Patient cooperation (wear time and changing aligners on schedule) is essential.
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
              <SectionTitle className="text-center">Invisalign clear aligners – reimbursement from health funds or supplementary insurance</SectionTitle>
              <div className="mt-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-white p-6 shadow-soft sm:p-8">
                <p className="leading-relaxed text-gray-800">
                  Depending on severity and type of treatment, health funds or supplementary insurance may reimburse part of the cost.
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">Click your fund:</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {INSURERS.map((ins) => (
                    <a
                      key={ins.href}
                      href={ins.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-[5rem] items-center justify-center rounded-full border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/50 hover:bg-primary/[0.06]"
                    >
                      {ins.label}
                    </a>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-700">For supplementary insurance, please contact your insurer.</p>
              </div>
            </section>

            <section className="mx-auto mt-14 max-w-3xl sm:mt-16">
              <SectionTitle>Invisible braces Vienna – Invisalign in our practice</SectionTitle>
              <p className="mt-4 leading-relaxed text-gray-800">1200 Vienna, near 1210, 1190, 1220, 1020 and Klosterneuburg.</p>
              <h3 className="mt-8 text-lg font-bold text-primary">Aligners – the process</h3>
              <ol className="mt-6 space-y-0">
                {[
                  "Free initial consultation. By appointment only!",
                  "Treatment records. Diagnosis with X-rays, photos and digital scans – without impressions.",
                  "Planning discussion. X-ray review and analysis of which brace/brackets are needed.",
                  "Start of treatment. Fitting and advice on cleaning and wear.",
                  "Check-ups every 6–8 weeks.",
                  "End of treatment. Removal and discussion of the result.",
                  "Retention – stabilising the result.",
                ].map((step, i) => {
                  const isRet = step.startsWith("Retention");
                  return (
                    <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < 6 && (
                        <span className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20" aria-hidden />
                      )}
                      <span
                        className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                          isRet ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="leading-relaxed text-gray-800">
                          {isRet ? (
                            <>
                              <strong>Retention</strong>
                              {" – stabilising the result."}
                            </>
                          ) : (
                            step
                          )}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
              >
                Book an appointment
              </a>
              <Link
                href={terminHref}
                className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
              >
                Book a free Invisalign consultation
              </Link>
              <Link
                href={kontaktHref}
                className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Contact
              </Link>
            </section>
          </>
        )}
      </div>
    </PageContent>
  );
}
