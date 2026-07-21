import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function ZahnspangeKinderContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-kinder";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnspange für Kinder";
  const lead = leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termine", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
      {/* SECTION 1 – HERO */}
      <section className="mb-10 rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Zahnspange für Kinder
            </h2>
            <p className="mt-3 text-sm sm:text-base text-sky-50/90 leading-relaxed">
              Eine frühzeitige kieferorthopädische Behandlung kann das Wachstum nutzen und spätere Behandlungen
              vereinfachen – besonders wichtig in der Kieferorthopädie für Kinder in Wien.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-sky-100/90">
              Frühbehandlung Zahnspange · Zahnspange für Kinder Wien · Kieferorthopädie Kinder Wien
            </p>
            <div className="mt-4">
              <Link
                href={terminHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
              >
                Kostenlose Erstberatung vereinbaren
              </Link>
            </div>
          </div>
          <div className="mt-6 flex-1 lg:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
              <Image
                src="/zahnspange-fuer-kinder/Kind-Laecheln-300x234.png"
                alt="Kind mit Zahnspange in kieferorthopädischer Behandlung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – FRÜHBEHANDLUNG BEI KINDERN */}
      <section className="mt-6">
        <div className="max-w-3xl">
      <h2>Zahnspange für Kinder, Frühbehandlung im Milch- und Wechselgebiss</h2>
      <p>
        Eine kieferorthopädische oder Zahnregulierung Behandlung im <strong>Milchgebiss</strong> ist in der Regel
        nur bei einer Zahnfehlstellung bei Kindern im Alter zwischen 6-10 Jahren notwendig – in dieser{" "}
        <strong>Wechselgebiss</strong>-Phase ist die <strong>Frühbehandlung</strong> besonders effektiv.
      </p>
        </div>
      </section>

      {/* SECTION 3 – WARUM DER RICHTIGE ZEITPUNKT WICHTIG IST */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
          Zahnspangen für Kinder, die Diagnose und der richtige Zeitpunkt ist sehr wichtig.
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <ul className="space-y-2">
              <li>
                Die richtige Zeitpunkt ist entscheidend: Nur so kann das Gesichtsschädel-Wachstum, der
                Zahnwechsel und der Zahndurchbruch für die Behandlung optimal genutzt werden.
              </li>
              <li>
                Nach der Behandlung, die aktive Phase der Therapie, erfolgt die wichtige Retention-Phase
                zur Stabilisierung des Behandlungsergebnisses.
              </li>
              <li>Manchmal ist auch eine Behandlung in zwei Phasen sinnvoll.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 sm:p-5 shadow-soft">
            <h3 className="text-sm font-semibold text-[#0f2e5c]">
              Warum Timing in der Kieferorthopädie Kinder Wien so wichtig ist:
            </h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-[#0f3c6e] text-white text-[10px] flex items-center justify-center">1</span>
                <span><strong>Wachstum des Gesichtsschädels</strong> kann gezielt genutzt werden, um Kieferlagen früh zu beeinflussen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-[#0f3c6e] text-white text-[10px] flex items-center justify-center">2</span>
                <span><strong>Zahnwechsel</strong> eröffnet Zeitfenster, in denen Platz geschaffen und Engstände korrigiert werden können.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-[#0f3c6e] text-white text-[10px] flex items-center justify-center">3</span>
                <span><strong>Zahndurchbruch</strong> lässt sich lenken, um spätere, umfangreichere Behandlungen zu vermeiden.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 – BEHANDLUNG IN ZWEI PHASEN */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
          Behandlung in zwei Phasen
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-sm font-semibold">
                1
              </span>
              <h3 className="text-sm font-semibold text-[#0f2e5c]">Phase 1 – frühe Behandlung</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              In Phase 1 werden Kiefer- oder Zahnfehlstellungen (z.B. wachstumsabhängige Fehlstellung)
              oder Anomalien mit herausnehmbaren Geräten im Milchgebiss, im frühen Wechselgebiss,
              korrigiert. Für die optimale Behandlung der Fehlstellung (Unterkiefer-Rücklage, Rücklage
              des Oberkiefers) ist Wachstum unerlässlich.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-sm font-semibold">
                2
              </span>
              <h3 className="text-sm font-semibold text-[#0f2e5c]">Phase 2 – Behandlung ab dem 12. Lebensjahr</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Phase 2: ab dem 12ten Lebensjahr, wenn Kinder Milchzähne verlieren.
            </p>
          </div>
        </div>
      </section>

      <ul className="mt-4">
        <li>
          Ungünstige Wachstumseinflüsse können die Fehlstellung natürlich verstärken und sind
          manchmal Grund dafür, dass kieferorthopädische Prognosen negativ beeinflusst werden.
        </li>
      </ul>

      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>
          Progenie bezeichnet eine Kieferfehlstellung, die durch einen umgekehrten Überbiss der
          Schneidezähne (frontaler Kreuzbiss) als Leitsymptom charakterisiert ist.
        </li>
        <li>
          Skelettale Entwicklungen sind für die zeitliche Planung einer kieferorthopädischen
          Therapie von großer Bedeutung.
        </li>
      </ol>

      <ul className="mt-4">
        <li>
          Bei extremen Dysgnathien (Zusammenfassung von Fehlentwicklungen der Zähne, der Kiefer
          und/oder des Kausystems) sollte versucht werden, ungünstigen Entwicklungen durch
          präventive oder frühtherapeutische Maßnahmen entgegenzuwirken.
        </li>
      </ul>

      {/* SECTION 5 – BEHANDLUNGSABLAUF */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
          Ihr Kind benötigt eine Zahnspange? Hier der typische Behandlungsverlauf:
        </h2>
        <div className="mt-4 grid gap-4">
          {[
            "Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
            "Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.",
            "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
            "Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten.",
            "Wichtige und notwendige Kontrolltermine alle 6-8 Wochen.",
            "Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses.",
            "<strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses.",
          ].map((text, idx) => (
            <div
              key={idx}
              className="group flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c6e] text-white text-xs font-semibold">
                {idx + 1}
              </div>
              <p
                className="text-sm sm:text-base text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </section>

      <p className="mt-6">
        <Link href={ablaufHref} className="text-accent font-medium hover:underline">
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>

      {/* SECTION 6 – BEISPIELE FÜR ZAHNFEHLSTELLUNGEN */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
          Beispiele: Kinder die Kieferorthopädie / Zahnregulierung benötigen:
        </h2>

        {/* SECTION 7 – PLATZHALTER */}
        <div className="mt-8">
        <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-5 py-6 shadow-soft max-w-3xl mx-auto w-full">
          <h3 className="text-lg font-semibold text-[#0f2e5c]">Platzhalter</h3>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            <strong>Fixed Platzhalter:</strong> Wenn Kinder frühzeitig Milchzähne verlieren, muss Platz
            für die nachkommenden Zähne gehalten werden.
          </p>
          <p className="mt-1 text-sm text-slate-700">Platzhalter-Spacemaintainer</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
            <div className="relative h-56 w-full">
              <Image
                src="/zahnspange-fuer-kinder/Platzhalter-1-860x649.jpg"
                alt="Platzhalter für frühzeitig verlorene Milchzähne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
              />
            </div>
          </div>
        </div>
        </div>

        {/* GRID DER WICHTIGSTEN ZAHNFEHLSTELLUNGEN */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
            <h3 className="text-sm font-semibold text-[#0f2e5c]">Engstand-Crowding</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              <strong>Primär Engstand:</strong> ist hereditär, ein Missverhältnis zwischen Kiefergröße
              und Zahngröße, entweder die Zähne zu groß oder Kiefer zu klein ist.
            </p>
            <p className="mt-1 text-sm text-slate-700 leading-relaxed">
              <strong>Sekundäre Engstand:</strong> ist erworben, entsteht durch frühzeitig Milchzahn
              Verlust.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
            <h3 className="text-sm font-semibold text-[#0f2e5c]">Lateraler Kreuzbiss</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Lateraler Kreuzbiss mit Gefahr einer Wachstumshemmung des Oberkiefers
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
            <h3 className="text-sm font-semibold text-[#0f2e5c]">Rücklage Oberkiefer</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Rücklage Oberkiefer, KL 3 Wachstum-hemmung im Oberkiefer
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
            <h3 className="text-sm font-semibold text-[#0f2e5c]">Milchgebissprogenie-Frontkreuzbiss</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Rücklage Oberkiefer, KL 3 Wachstum-hemmung im Oberkiefer
            </p>
          </div>
        </div>

        {/* IMAGE CARDS FOR TYPICAL CASES */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          <div className="relative h-40 w-full">
            <Image
              src="/zahnspange-fuer-kinder/9-vor-1-768x318.jpg"
              alt="Engstand und Platzmangel im Kindergebiss"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <figcaption className="px-3 py-2 text-sm text-gray-600">
            Engstand / Platzmangel durch frühzeitigen Milchzahnverlust
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          <div className="relative h-40 w-full">
            <Image
              src="/zahnspange-fuer-kinder/4-Vorher-768x348.jpg"
              alt="Traumatischer Tiefbiss / Überbiss bei Kindern"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <figcaption className="px-3 py-2 text-sm text-gray-600">
            Traumatischer Tiefbiss / Überbiss
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          <div className="relative h-40 w-full">
            <Image
              src="/zahnspange-fuer-kinder/13-vor-768x399.jpg"
              alt="Lateraler Kreuzbiss und Rücklage Oberkiefer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <figcaption className="px-3 py-2 text-sm text-gray-600">
            Lateraler Kreuzbiss / Rücklage Oberkiefer
          </figcaption>
        </figure>
      </div>
      </section>
        </>
      )}
      {/* SECTION 9 – CTA */}
      {locale === "de" && (
        <section className="mt-14 mb-2 rounded-3xl bg-[#0f3c6e] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Braucht Ihr Kind eine Zahnspange?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
            Wir beraten Sie gerne über den richtigen Zeitpunkt für eine Behandlung und erstellen gemeinsam einen individuellen Behandlungsplan.
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              href={terminHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm sm:text-base font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
            >
              Termin für Erstberatung vereinbaren
            </Link>
          </div>
        </section>
      )}
      {locale === "en" && (
        <>
          {/* HERO – same layout as DE, English text */}
          <section className="mb-10 rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Braces for children
                </h2>
                <p className="mt-3 text-sm sm:text-base text-sky-50/90 leading-relaxed">
                  Orthodontic or teeth straightening treatment in the primary teeth is usually only necessary if the
                  teeth are misaligned in children between the ages of 6–10.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-sky-100/90">
                  Early orthodontic treatment · braces for children · child orthodontics in Vienna
                </p>
                <div className="mt-4">
                  <Link
                    href={terminHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
                  >
                    Free initial consultation
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex-1 lg:mt-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
                  <Image
                    src="/zahnspange-fuer-kinder/Kind-Laecheln-300x234.png"
                    alt="Child with braces during orthodontic treatment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* EARLY TREATMENT SECTION */}
          <section className="mt-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Braces for children – early treatment in primary and mixed dentition
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
              Orthodontic or teeth straightening treatment in the primary teeth is usually only necessary if the teeth
              are misaligned in children between the ages of 6–10.
            </p>
          </section>

          {/* DIAGNOSIS & TIMING */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Braces for children, the diagnosis and the right timing is very important.
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2 md:items-start">
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <ul className="space-y-2 list-disc list-outside pl-5">
                  <li>
                    The right time is crucial: to make optimal use of facial skull growth, tooth change, and tooth
                    eruption for treatment.
                  </li>
                  <li>
                    After the treatment, the active phase of therapy, the important retention phase takes place to
                    stabilise the treatment result.
                  </li>
                  <li>Sometimes treatment in two phases makes sense.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 sm:p-5 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">
                  Exact time to start or check for orthodontic treatment:
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  As a rule, the first phase of treatment begins from the age of 6–10 – early treatment. This treatment
                  is necessary in order to be able to treat the misalignment in primary or mixed teeth.
                </p>
              </div>
            </div>
          </section>

          {/* TWO-PHASE TREATMENT */}
          <section className="mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Treatment in two phases
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-sm font-semibold">
                    1
                  </span>
                  <h3 className="text-sm font-semibold text-[#0f2e5c]">Phase 1 – early treatment</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  In phase 1, jaw or tooth misalignments (e.g., growth‑dependent misalignment) or anomalies are corrected
                  with removable devices in the primary teeth, in the early mixed dentition. Growth is essential for
                  optimal treatment of the misalignment (lower jaw retention, upper jaw retention).
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-sm font-semibold">
                    2
                  </span>
                  <h3 className="text-sm font-semibold text-[#0f2e5c]">Phase 2 – from age 12</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Phase 2: from the age of 12, when children lose milk teeth.
                </p>
              </div>
            </div>
          </section>

          {/* GROWTH / PROGNATHISM / DYS GNATHIA TEXT */}
          <section className="mt-8 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Unfavourable growth can influence or worsen the misalignment and is sometimes the reason why orthodontic
              prognoses are negatively influenced.
            </p>
            <p>
              Prognathism refers to a jaw misalignment that is characterized by a reversed overbite of the incisors
              (frontal crossbite) as the main symptom.
            </p>
            <p>
              Skeletal developments are of great importance for the timing of orthodontic therapy.
            </p>
            <p>
              At extremes, dysgnathias (summary of maldevelopment of the teeth, jaws, and/or the chewing system)
              attempts should be made to counteract unfavorable development through preventive or early therapeutic
              measures.
            </p>
          </section>

          {/* TREATMENT PROCESS – TIMELINE */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Does your child need braces? Here is the typical procedure of treatment:
            </h2>
            <div className="mt-4 grid gap-4">
              {[
                "Free initial consultation for misaligned teeth in our orthodontics. Appointment only by appointment!",
                "Create treatment documents for individual treatment courses. Diagnosis with X-rays, photos, and digital scans. Always without marks.",
                "Plan discussion and explanation. X-ray evaluation and the analysis discussion about which type of braces and/or brackets are necessary for the individual case.",
                "Start of treatment. Inserting the device and providing information about cleaning and wearing times.",
                "Important and necessary check-ups every 6-8 weeks.",
                "End of treatment. Removing the braces and discussing the results of the treatment.",
                "Retention – the beginning of stabilization of the treatment result.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="group flex gap-3 rounded-2xl bg-[#f8fafc] px-4 py-3 sm:px-5 sm:py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c6e] text-white text-xs font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link href={ablaufHref} className="text-accent font-medium hover:underline">
                Here you will find the entire process in my orthodontics explained in detail.
              </Link>
            </p>
          </section>

          {/* EXAMPLES – SPACE MAINTAINER & CROWDING ETC. */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c]">
              Examples: Children who need orthodontics / tooth straightening:
            </h2>
            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/80 px-5 py-6 shadow-soft max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-[#0f2e5c]">Placeholder</h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                <strong>Fixed space maintainer:</strong> If children lose milk teeth early, space must be kept for the
                teeth that will follow.
              </p>
              <p className="mt-1 text-sm text-slate-700">Platzhalter‑Spacemaintainer</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
                <div className="relative h-56 w-full">
                  <Image
                    src="/zahnspange-fuer-kinder/Platzhalter-1-860x649.jpg"
                    alt="Fixed space maintainer after early loss of primary teeth"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">Crowding – less space in jaw</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  <strong>Primary crowding:</strong> is hereditary, a mismatch between jaw size and tooth size, either
                  the teeth are too big or the jaw is too small.
                </p>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  <strong>Secondary crowding:</strong> is acquired and occurs due to early loss of primary teeth.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">Traumatic deep bite‑overbite</h3>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">Lateral crossbite</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Lateral crossbite with risk of growth inhibition of the upper jaw.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">Upper jaw reduced growth</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  KL 3 – growth inhibition in the upper jaw or excessive growth in the lower jaw.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-soft">
                <h3 className="text-sm font-semibold text-[#0f2e5c]">Primary dentition prognathism – anterior crossbite</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Reduced growth in upper jaw, KL 3 growth inhibition in the upper jaw.
                </p>
              </div>
            </div>

            {/* IMAGE CARDS FOR TYPICAL CASES (same layout as German page) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
                <div className="relative h-40 w-full">
                  <Image
                    src="/zahnspange-fuer-kinder/9-vor-1-768x318.jpg"
                    alt="Crowding and lack of space in children’s teeth"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-3 py-2 text-sm text-gray-600">
                  Crowding / lack of space due to early loss of primary teeth
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
                <div className="relative h-40 w-full">
                  <Image
                    src="/zahnspange-fuer-kinder/4-Vorher-768x348.jpg"
                    alt="Traumatic deep bite / overbite in a child"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-3 py-2 text-sm text-gray-600">
                  Traumatic deep bite / overbite
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
                <div className="relative h-40 w-full">
                  <Image
                    src="/zahnspange-fuer-kinder/13-vor-768x399.jpg"
                    alt="Lateral crossbite and upper jaw retrusion"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-3 py-2 text-sm text-gray-600">
                  Lateral crossbite / upper jaw retrusion
                </figcaption>
              </figure>
            </div>
          </section>
        </>
      )}
    </PageContent>
  );
}
