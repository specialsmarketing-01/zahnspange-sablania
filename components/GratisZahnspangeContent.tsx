import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function GratisZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/gratis-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Gratis Zahnspange";
  const lead = leads[dePath];
  const terminHref = getHref("/online-termin", locale);
  const isDe = locale === "de";

  const heroTitle = isDe ? "Gratis Zahnspange für Kinder" : "Free braces for children";
  const heroSubtitle = isDe
    ? "Die Österreichische Gesundheitskasse (ÖGK) unterstützt unter bestimmten Voraussetzungen die Kosten für festsitzende Zahnspangen bei Kindern und Jugendlichen."
    : "In Austria, the health insurance fund covers the costs of fixed braces for children and teenagers if specific criteria are met.";
  const introHeading = isDe ? "Was bedeutet Gratis Zahnspange?" : "What does “free braces” mean?";
  const introText1 = isDe
    ? "Seit Juli 2015 gibt es neue Regeln für die Gratis-Zahnspange."
    : "Since July 2015 there have been new rules for the Austrian “free braces” scheme.";
  const introText2 = isDe
    ? "Als Fachzahnarzt für Kieferorthopädie und qualifizierter Wahl-Kieferorthopäde der ÖGK biete ich auch die Gratiszahnspange an."
    : "As a specialist orthodontist and qualified ÖGK partner, we also offer treatment within the free braces scheme.";
  const introText3 = isDe
    ? "PatientInnen bekommen 80% – 100% des Kassentarifs refundiert."
    : "Patients can receive 80–100% of the statutory tariff back from the health insurance fund.";

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} hideHeader showCta={false}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f3c6e] via-[#155e75] to-[#38bdf8] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block">
          <Image
            src="/gratis-zahnspange/Teaser-Zahspange.png"
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center gap-5">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            {isDe ? "Kassen-Zahnspange für Kinder & Jugendliche" : "Publicly funded braces for children & teens"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">{heroTitle}</h1>
          <p className="max-w-2xl text-sm sm:text-base text-sky-50/90 leading-relaxed">{heroSubtitle}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={terminHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
            >
              {isDe ? "Kostenlose Erstberatung vereinbaren" : "Book a free initial consultation"}
            </Link>
            <a
              href="#gratis-intro"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              {isDe ? "Mehr zur Gratis Zahnspange" : "Learn more about free braces"}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-sky-50/90">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                ⭐
              </span>
              <span>
                5&nbsp;/&nbsp;5 Google-Bewertung <span className="opacity-80">· 70+ Patientenbewertungen</span>
              </span>
            </div>
            <div className="h-4 w-px bg-sky-100/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                🧒
              </span>
              <span>{isDe ? "Spezialisiert auf Kinder & Jugendliche" : "Specialised in children & teens"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="gratis-intro" className="mt-10 sm:mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f2e5c]">{introHeading}</h2>
        <div className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
          <p>{introText1}</p>
          <p>{introText2}</p>
          <p>
            {isDe ? (
+              <span>
+                <strong>PatientInnen bekommen 80% – 100% des Kassentarifs refundiert.</strong>
+              </span>
            ) : (
              <span>{introText3}</span>
            )}
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c] text-center">
          {isDe ? "Einblicke in unsere Behandlung" : "A look into our treatments"}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto">
          {isDe
            ? "Moderne Kieferorthopädie mit Fokus auf schonende Behandlung, kindgerechte Betreuung und langfristig stabile Ergebnisse."
            : "Modern orthodontics with gentle treatment, child-friendly care and long-lasting results."}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/gratis-zahnspange/Kind-Laecheln.png",
              alt: "Kind mit Zahnspange",
            },
            {
              src: "/gratis-zahnspange/jugendliche-skaliert.png",
              alt: "Jugendliche mit Zahnspange",
            },
            {
              src: "/gratis-zahnspange/beautiful-young-woman-is-dentist-she-is-open-mouthed-shows-newly-fixed-aesthetic-self-aligning-lingual-locks-close-up-860x649.jpg",
              alt: "Erwachsene mit Zahnspange in Behandlung",
            },
            {
              src: "/gratis-zahnspange/Zahnarzt-1-e1671695799854.png",
              alt: "Zahnarzt bei der Behandlung",
            },
            {
              src: "/gratis-zahnspange/spiegle-etc-klein.png",
              alt: "Kieferorthopädische Instrumente",
            },
            {
              src: "/gratis-zahnspange/Zahnspange-1-pzjfyo51j40kv49z4w8mofsr7omfkjws47rwkxmwx8.png",
              alt: "Detailansicht einer Zahnspange",
            },
          ].map((img) => (
            <figure
              key={img.src}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* INFORMATION CARDS */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c] text-center">
          {isDe ? "Wer hat Anspruch auf die Gratis Zahnspange?" : "Who is eligible for free braces?"}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-lg mb-3">
              🧒
            </div>
            <h3 className="text-base font-semibold text-[#0f2e5c]">
              {isDe ? "Wer bekommt die Gratis Zahnspange?" : "Who can receive free braces?"}
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {isDe
                ? "Kinder und Jugendliche während und nach dem Zahnwechsel bis zur Vollendung des 18. Lebensjahres können – bei vorliegender schwerer Fehlstellung – Anspruch auf die Gratis Zahnspange haben."
                : "Children and teenagers during and after the mixed dentition phase up to their 18th birthday may be eligible if a severe malocclusion is present."}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-lg mb-3">
              📊
            </div>
            <h3 className="text-base font-semibold text-[#0f2e5c]">
              {isDe ? "Voraussetzungen (IOTN 4 & 5)" : "Requirements (IOTN 4 & 5)"}
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {isDe
                ? "Die Zahn- bzw. Kieferfehlstellung muss einen Schweregrad von IOTN 4 oder 5 aufweisen. Dies wird im Rahmen der Erstberatung und Befundaufnahme exakt festgestellt."
                : "The dental or jaw misalignment must reach severity level IOTN 4 or 5, determined precisely during the initial consultation and diagnostic work-up."}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-lg mb-3">
              📅
            </div>
            <h3 className="text-base font-semibold text-[#0f2e5c]">
              {isDe ? "Alter der Kinder" : "Age of children"}
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {isDe
                ? "Je nach Befund beginnt die Behandlung im Wechselgebiss (ca. 6–10 Jahre) oder im bleibenden Gebiss. Wir beraten Sie persönlich, welches Timing für Ihr Kind optimal ist."
                : "Depending on the findings, treatment starts in the mixed dentition (approx. 6–10 years) or in the permanent dentition. We advise you personally on the best timing."}
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2e5c] text-center">
          {isDe ? "Ihre Vorteile in unserer Kieferorthopädie" : "Your benefits at our orthodontic practice"}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "💶",
              title: isDe ? "Kostenübernahme durch Krankenkasse" : "Cost coverage by health fund",
              text: isDe
                ? "Wir helfen bei Antragstellung und Rückerstattung durch die Krankenkasse."
                : "We support you with applications and reimbursement by the insurance fund.",
            },
            {
              icon: "🦷",
              title: isDe ? "Moderne Behandlungsmethoden" : "Modern treatment methods",
              text: isDe
                ? "Festsitzende Zahnspangen, Aligner und Keramikbrackets je nach Situation."
                : "Fixed appliances, aligners and ceramic brackets depending on the case.",
            },
            {
              icon: "💻",
              title: isDe ? "Digitale Planung" : "Digital planning",
              text: isDe
                ? "Digitale Scans statt Abdruck, präzise Planung und Verlaufskontrolle."
                : "Digital scans instead of impressions, precise planning and progress tracking.",
            },
            {
              icon: "👨‍👩‍👧",
              title: isDe ? "Individuelle Betreuung" : "Individual care",
              text: isDe
                ? "Ausführliche Beratung für Kinder und Eltern – verständlich und transparent."
                : "Comprehensive counselling for children and parents – clear and transparent.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-soft flex flex-col"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-[#0f3c6e] text-lg mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#0f2e5c]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-14 mb-2 rounded-3xl bg-[#0f3c6e] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {isDe ? "Jetzt kostenlose Erstberatung vereinbaren" : "Book your free initial consultation now"}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
          {isDe
            ? "Wir prüfen, ob Ihr Kind Anspruch auf die Gratis Zahnspange hat und welche Behandlungsmöglichkeiten in Frage kommen – transparent und verständlich."
            : "We check whether your child is eligible for the Austrian free braces scheme and discuss all suitable treatment options – clearly and transparently."}
        </p>
        <div className="mt-5 flex justify-center">
          <Link
            href={terminHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm sm:text-base font-semibold text-[#0f3c6e] shadow-md hover:bg-sky-50 hover:shadow-lg transition"
          >
            {isDe ? "Termin online buchen" : "Book appointment online"}
          </Link>
        </div>
      </section>
    </PageContent>
  );
}

