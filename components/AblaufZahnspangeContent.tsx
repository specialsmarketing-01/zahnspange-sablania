import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

const GALLERY_IMAGES = [
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (1).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).png",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).png",
  "/ablauf-zahnspange-kieferorthopaedie/behandlungsbeginn-einsetzen-zahnspange.png",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (5).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (6).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (7).jpg",
] as const;

export default function AblaufZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/ablauf-zahnspange-kieferorthopaedie";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Ablauf Zahnspange & Kieferorthopädie";
  const lead =
    leads[dePath] ??
    "Erfahren Sie Schritt für Schritt, wie Ihre Zahnkorrektur in unserer Kieferorthopädie abläuft – von der kostenfreien Erstberatung bis zur stabilen, schönen Zahnstellung.";

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} hideHeader showCta={false}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block">
          <Image
            src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).png"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-5">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Sanfte Zahnkorrektur in Wien
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Ablauf Zahnspange &amp; Kieferorthopädie
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-sky-50/90 leading-relaxed">
            Vom ersten Gespräch bis zur stabilen, schönen Zahnstellung – hier sehen Sie den gesamten
            Behandlungsablauf in unserer Kieferorthopädie Schritt für Schritt erklärt.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={getHref("/online-termine", locale)}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
            >
              Kostenfreie Erstberatung vereinbaren
            </Link>
            <a
              href="#ablauf-timeline"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ablauf im Überblick ansehen
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-sky-50/90">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                🕒
              </span>
              <span>Kurzfristige Termine &amp; digitale Kontrolltermine möglich</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="ablauf-timeline" className="mt-10 sm:mt-12">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#0f2e5c]">
          Ihre Behandlung in 6 Schritten
        </h2>
        <p className="mt-3 text-center text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Ein transparenter Überblick über alle Termine – von der ersten Beratung bis zur Retentionsphase.
        </p>
        <div className="mt-8 grid gap-4 sm:gap-5">
          {[
            {
              nr: 1,
              title: "Kostenfreie Erstberatung",
              text: "Erstgespräch zur Einschätzung der Zahnfehlstellung, Wünsche und Behandlungsoptionen.",
            },
            {
              nr: 2,
              title: "Behandlungsunterlagen",
              text: "Fotos, Digital-Scan und Röntgenaufnahmen für eine präzise Behandlungsplanung.",
            },
            {
              nr: 3,
              title: "Besprechung & Behandlungsplan",
              text: "Gemeinsame Besprechung der Auswertung, Therapieoptionen und individueller Ziele.",
            },
            {
              nr: 4,
              title: "Start der Behandlung",
              text: "Einsetzen der Zahnspange oder Aligner und ausführliche Instruktion.",
            },
            {
              nr: 5,
              title: "Regelmäßige Kontrolltermine",
              text: "Kontrollen alle 4–8 Wochen, Anpassungen und digitale Verlaufskontrolle.",
            },
            {
              nr: 6,
              title: "Stabilisierung & Retention",
              text: "Retainer und Schienen sichern das Behandlungsergebnis langfristig ab.",
            },
          ].map((step) => (
            <div
              key={step.nr}
              className="group relative flex gap-4 rounded-2xl bg-[#f8fafc] px-4 py-4 sm:px-5 sm:py-5 shadow-sm hover:shadow-md border border-slate-100 transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f3c6e] text-white text-sm font-semibold shadow">
                  {step.nr}
                </div>
                <div className="mt-1 h-full w-px bg-slate-200 group-last:hidden" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#0f2e5c]">
                  {step.nr}. {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              1. Kostenfreie Erstberatung für Zahnfehlstellung in meiner Kieferorthopädie
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              In dieser Erstberatung besprechen wir im Detail alle vorhandenen Beschwerden und Ihre Wünsche zur
              Korrektur der Zahnfehlstellung. Ziel ist es, die effizienteste und schonendste
              Kieferorthopädie-Therapieform für Ihre Situation zu finden.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Nach der detaillierten Befragung der Patient:innen und dem notwendigen Panorama-Röntgen (in unserer
              Kieferorthopädie) zur Beurteilung des Gesamtzustandes und zur Abklärung von kariösen Kavitäten,
              Wurzelbehandlungen, Anlage der Zähne etc. werden die Zähne auf Karies, Zahnfleisch,
              Gebissentwicklung, Zahnfehlstellungen sowie Fehlfunktionen wie falsche Schluckmuster und die
              Zungenposition untersucht.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Am Ende der Erstberatung erhalten Sie eine erste grobe Diagnose Ihrer Zahnfehlstellung sowie alle
              wichtigen Informationen zur Behandlung:
            </p>
            <ul className="mt-3 list-disc list-outside pl-6 space-y-1 text-[#1f2933] marker:text-[#0f2e5c]">
              <li>Welche Behandlungsoptionen möglich sind</li>
              <li>Der Schweregrad der Zahnfehlstellung (IOTN 1–5)</li>
              <li>
                Welche Behandlungsmethode am besten passt – z. B. feste Zahnspange (Metall), durchsichtige
                Zahnspange/Invisalign (Aligner-Schienen) oder Lingualzahnspange (innenliegende Zahnspange)
              </li>
              <li>Die Kosten und mögliche Rückerstattung durch die Krankenkasse</li>
              <li>Ungefähre Behandlungsdauer und mögliche Behandlungsziele</li>
              <li>Die Möglichkeit, verschiedene Apparaturen und Modelle anzusehen</li>
            </ul>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (7).jpg"
                alt="Kostenfreie Erstberatung für Zahnfehlstellung – Kieferorthopädie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              2. Behandlungsunterlagen für den individuellen Behandlungsverlauf
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              Im zweiten Schritt erstellen wir alle notwendigen <strong>Behandlungsunterlagen</strong>, die auch
              für Krankenkassen und Versicherungen erforderlich sind:
            </p>
            <ul className="mt-3 list-disc list-outside pl-6 space-y-1 text-[#1f2933] marker:text-[#0f2e5c]">
              <li>Fotos der Zahnfehlstellung</li>
              <li>Digital-Scan des Gebisses</li>
              <li>Fernröntgen-Seitenbild (FRS)</li>
            </ul>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (5).jpg"
                alt="Behandlungsunterlagen für den individuellen Behandlungsverlauf"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              3. Kieferorthopädische Besprechung der Zahnfehlstellung und des individuellen Behandlungsplanes
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              Alle Unterlagen werden <strong>digital ausgewertet</strong>. Sie erhalten einen detaillierten,
              genau auf Ihre Zahnfehlstellung und Ihre Bedürfnisse ausgerichteten Behandlungsplan.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Alternative Behandlungsmöglichkeiten und die genaue Analyse der Zahnfehlstellung sind ebenfalls ein
              wichtiger Bestandteil dieser Besprechung.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (6).jpg"
                alt="Kieferorthopädische Besprechung der Zahnfehlstellung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              4. Behandlungsbeginn – Einsetzen der Zahnspange
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              Beim kieferorthopädischen Behandlungsbeginn setzen wir die erste Invisalign-/Clear-Aligner-Schiene
              oder die festsitzende Zahnspange ein. Bei der festen Zahnspange werden individuell angefertigte
              Brackets mit höchster Präzision an Ihren Zähnen befestigt.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Für diesen Termin nehmen wir uns bewusst mehr Zeit – die Dauer liegt in der Regel zwischen{" "}
              <strong>40 und 60 Minuten</strong>. Sie erhalten alle Informationen rund um die Behandlung, z. B.
              zur Mundhygiene und zu geeigneten Essgewohnheiten.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/behandlungsbeginn-einsetzen-zahnspange.png"
                alt="Behandlungsbeginn – Einsetzen der Zahnspange"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              5. Kieferorthopädie und digitale Kontrolltermine
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              <strong>Kontrolltermine</strong> sind während der laufenden Behandlung entscheidend, um den geplanten
              Verlauf beurteilen und digital dokumentieren zu können. Nur so können wir auf unvorhersehbare
              Entwicklungen rechtzeitig reagieren.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              In Abständen von <strong>4 bis 8 Wochen</strong> (die Termine werden vorab vereinbart) kommen Sie in
              unsere Praxis. Wir prüfen, ob Ihre Behandlung und die Korrektur der Zahn‑ bzw. Kieferfehlstellung wie
              geplant verlaufen. Eine Kontrolle Ihrer Invisalign-Aligner oder Ihrer Zahnspange ist dabei
              selbstverständlich.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Falls nötig, reaktivieren und optimieren wir Ihre Zahnspange und/oder Schienen – bei Bedarf auch mit
              einem neuen Draht. Von Beginn an und auch während der Behandlung werden Fotos gemacht, um den
              Behandlungsverlauf genau nachvollziehen und rechtzeitig Korrekturen vornehmen zu können.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              <strong>Merke:</strong> Die Mitarbeit der Patient:innen – insbesondere von Kindern – ist entscheidend.
              Diese Kontrolltermine dienen auch dazu, auf Fehler hinzuweisen, die regelmäßige Mundhygiene zu
              besprechen und zu prüfen, ob z. B. Gummizüge konsequent getragen werden.{" "}
              <em>Das Nichttragen führt automatisch zu einem schlechteren Behandlungsergebnis.</em>
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).jpg"
                alt="Kieferorthopädie und digitale Kontrolltermine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white/70 shadow-soft px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              6. Abschluss der Korrekturphase und Beginn der Stabilisierung (Retention)
            </h2>
            <p className="mt-4 text-[#1f2933] leading-relaxed">
              Damit die erreichte Zahnstellung dauerhaft schön und stabil bleibt, ist eine konsequente{" "}
              <strong>Stabilisierungsphase (Retention)</strong> notwendig.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Dafür befestigen wir an der Rückseite der Frontzähne einen kleinen, unsichtbaren Retainer-Draht und
              fertigen passgenaue Stabilisierungsschienen für Sie an. Auch nach Ende der aktiven Behandlung
              kontrollieren wir die Stabilität der neuen Zahnstellung regelmäßig.
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Mehr Details zur Stabilisierung finden Sie auf unserer Seite{" "}
              <Link href={getHref("/kfo-retainer", locale)} className="text-accent font-medium hover:underline">
                Retention – Stabilisierungsphase
              </Link>
              .
            </p>
            <p className="mt-3 text-[#1f2933] leading-relaxed">
              Zähne haben lebenslang die Tendenz, sich in ihre ursprüngliche Position zurückzubewegen. Damit der
              erzielte Behandlungserfolg langfristig stabil bleibt, empfehlen wir mindestens{" "}
              <strong>zweimal pro Jahr</strong> eine Kontrolle des Retainer-Drahtes und der Schienen.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <Image
                src="/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (1).jpg"
                alt="Abschluss der Korrekturphase und Stabilisierung (Retention)"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BOX */}
      <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-5 sm:px-6 sm:py-6 flex gap-3 sm:gap-4 items-start">
        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-[#0f3c6e]">
          ℹ️
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-[#0f2e5c]">
            Wichtige Informationen zur Behandlung
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed max-w-[46rem]">
            Eine gute Mitarbeit, sorgfältige Mundhygiene und regelmäßige Kontrolltermine sind entscheidend für
            ein langfristig stabiles und schönes Behandlungsergebnis. Sprechen Sie uns jederzeit an, wenn Sie
            Fragen zu Ihrer Therapie oder den nächsten Schritten haben.
          </p>
        </div>
      </div>

      {/* TRUST SECTION */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white px-4 py-5 sm:px-6 sm:py-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0f2e5c]">Faire Preise</p>
            </div>
          </div>
          <div className="flex gap-6 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e]">
                🦷
              </span>
              <span>Moderne, digitale Kieferorthopädie</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e]">
                ❤️
              </span>
              <span>Besonders kinderfreundliche Betreuung</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
          Einblicke in unsere Behandlung – Bildergalerie
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#1f2933] leading-relaxed max-w-[44rem]">
          Die folgenden Aufnahmen geben Ihnen einen visuellen Eindruck vom Ablauf der Zahnspangenbehandlung in
          unserer Praxis – von der Erstberatung bis zur Retentionsphase.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <figure
              key={src}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Ablauf Zahnspange – Impression ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-14 mb-2 rounded-3xl bg-[#0f3c6e] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Starten Sie Ihre Zahnkorrektur noch heute
        </h2>
        <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
          Vereinbaren Sie Ihre kostenfreie Erstberatung und erhalten Sie einen individuellen Behandlungsplan
          für Ihre Zahnkorrektur – persönlich, verständlich und transparent.
        </p>
        <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            href={getHref("/online-termine", locale)}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm sm:text-base font-semibold text-[#0f3c6e] shadow-md transition hover:bg-sky-50 hover:shadow-lg"
          >
            Termin online buchen
          </Link>
          <a
            href="tel:+4313306090"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/85 bg-white/10 px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md transition hover:bg-white/20 hover:shadow-lg"
            aria-label={locale === "de" ? "Anrufen: +43 1 3306090" : "Call +43 1 3306090"}
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z"
              />
            </svg>
            +43 1 3306090
          </a>
        </div>
      </section>
    </PageContent>
  );
}

