import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const BASE = "/asethetic-dental-services";

/** Local assets — each file used at least once (see sections below). */
const IMG = {
  smile: `${BASE}/Aesthetik.jpg`,
  bridgeWide: `${BASE}/dental-ga63c0bf75_1920-1536x864.png`,
  drSs: `${BASE}/DrSS-qccg77rgojbtrcav5z20egkfccceiwy9acpag4xm8o.png`,
  drMansi: `${BASE}/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png`,
  implant: `${BASE}/Implant-2.jpg`,
  implantSm: `${BASE}/Implant-2-300x241.jpg`,
  keramik: `${BASE}/Keramikkrone-1.png`,
  lingual: `${BASE}/Lingualtechnik-640-×-500-px-e1670235670602.png`,
  qualityDentist: `/services/${encodeURIComponent(
    "Practice for general, aesthetic dentistry, implantology & specialist dentist for orthodontic (6).png",
  )}`,
  schiene: `${BASE}/Schiene.png`,
  bracesColor: `${BASE}/SDC12934.jpg`,
  sports: `${BASE}/Zaehne-Sportschutz.png`,
  bleaching: `${BASE}/Zahnbleichen.png`,
  hygiene: `${BASE}/zahnhygiene.png`,
} as const;

function ServiceCard({
  href,
  title,
  imageSrc,
  alt,
}: {
  href: string;
  title: string;
  imageSrc: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-50">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-primary group-hover:text-accent">{title}</h3>
      </div>
    </Link>
  );
}

export default function AestheticDentalServicesContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/asethetic-dental-services";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Ästhetische Zahnärztliche Leistungen";
  const lead = leads[dePath];
  const isDe = locale === "de";

  const h = {
    tagline: isDe
      ? "Schönheit und Funktion vereint – Ästhetische Zahnmedizin für ein strahlendes Lächeln"
      : "Beauty and function combined – aesthetic dentistry for a radiant smile",
    intro1: isDe
      ? "In meiner Zahnarzt-Kieferorthopädie-Praxis im 20. Bezirk biete ich auch ästhetische Zahnmedizin an. Dabei lege ich großen Wert darauf, Ihnen ein strahlendes und ästhetisch ansprechendes Lächeln zu ermöglichen, das Ihre individuelle Schönheit unterstreicht. Sie profitieren von langjährigem Fachwissen kombiniert mit modernsten Technologien für die besten ästhetischen Zahnlösungen. So lasse ich Ihre Zähne in neuem Glanz erstrahlen und gleichzeitig wird die Funktion und Gesundheit erhalten."
      : "At our dental and orthodontic practice in Vienna’s 20th district we offer aesthetic dentistry with a focus on a radiant, natural-looking smile. You benefit from many years of expertise combined with modern technology for high-quality aesthetic solutions—restoring shine while preserving function and health.",
    intro2: isDe
      ? "Mit meinem umfangreichen Leistungsangebot in der ästhetischen Zahnmedizin kann ich auf Ihre spezifischen Bedürfnisse und Wünsche eingehen und individuelle Lösungen entwickeln. Ich weiß, dass jeder Patient einzigartig ist, und deshalb lege ich großen Wert darauf, Ihre persönlichen Vorstellungen zu berücksichtigen und gemeinsam mit Ihnen ein Behandlungskonzept zu entwickeln, das perfekt auf Sie zugeschnitten ist."
      : "Our wide range of aesthetic services allows tailored solutions for your goals. Every patient is unique—we take your wishes seriously and plan treatment together with you.",
    intro3: isDe
      ? "Ich stehe für Qualität, Patientenorientierung und fortschrittliche Technologien. Mein Ziel ist es, Ihnen ein strahlendes Lächeln zu schenken, das Ihr Selbstbewusstsein stärkt und Ihre natürliche Schönheit zum Ausdruck bringt."
      : "We stand for quality, patient focus and advanced technology—helping you smile with confidence.",
    heart: isDe ? "Zahnmedizin mit ❤" : "Dentistry with heart",
    servicesH: isDe
      ? "Allgemeine und ästhetische Leistungen der Kieferorthopädie Wien"
      : "General and aesthetic services in orthodontics, Vienna",
    orthoH: isDe
      ? "Die unsichtbare Zahnspange für selbstbewusstes Lächeln"
      : "Invisible braces for a confident smile",
    orthoBody: isDe
      ? "Die Möglichkeit, Zahnspangen bei Zahnfehlstellungen zu nutzen, ist heute eines der effizientesten Mittel zur Lösung kieferorthopädischer Probleme. Zahnspangen für Kinder, Jugendliche oder Erwachsene sind mein langjähriges Spezialgebiet. Meine Erfahrung von über 23 Jahren aus mehr als 6.500 Zahnspangen-Behandlungen ist ein Mehrwert, den ich Ihnen ans Herz legen möchte. Mit Herz, Leidenschaft und fundiertem Wissen widme ich mich in meiner Kieferorthopädie-Ordination der Lösung kieferorthopädischer Probleme. Dieser Grundsatz bildet das Fundament meiner Arbeit und treibt mich jeden Tag an, meinen Patientinnen und Patienten die bestmögliche Behandlung zu bieten. Das Wohl meiner Patienten steht immer im Mittelpunkt meiner Tätigkeit. Ich setze alles daran, individuelle Bedürfnisse zu verstehen und eine maßgeschneiderte Behandlung anzubieten. Dabei arbeite ich eng mit Ihnen zusammen, höre zu und beantworte Ihre Fragen, damit Sie sich während des gesamten Behandlungsprozesses gut aufgehoben fühlen."
      : "Braces remain one of the most effective ways to treat malocclusion. Treating children, teens and adults has been my focus for many years—with over 23 years of experience and more than 6,500 brace treatments. Passion and sound knowledge guide every day in our practice. Your wellbeing is central: we listen, explain and support you throughout treatment.",
    orthoBody2: isDe
      ? "In meiner Kieferorthopädie-Ordination geht es nicht nur um die Lösung kieferorthopädischer Probleme, sondern auch um ein positives und freundliches Umfeld. Ich möchte, dass Sie sich vom ersten Besuch bis zum Abschluss der Behandlung wohl und willkommen fühlen."
      : "Beyond clinical results, we want you to feel welcome and comfortable from your first visit through completion of treatment.",
    invisH: isDe ? "Unsichtbare Zahnspange Invisalign" : "Invisalign clear aligners",
    invisSub1: isDe ? "Unsichtbare Zahnspange Invisalign" : "Invisalign",
    invisSub2: isDe ? "Unsichtbare Lingualzahnspange" : "Lingual braces",
    consultH: isDe ? "Kostenlose Erstberatung" : "Free initial consultation",
    consultBody: isDe
      ? "Ich biete eine umfassende Beratung an, in der wir Ihre individuellen Bedürfnisse und Wünsche besprechen und alle möglichen Behandlungsoptionen aufzeigen. Meine Leidenschaft für die Kieferorthopädie treibt mich dazu an, stets auf dem neuesten Stand der Forschung und Technologie zu bleiben. Ich halte mich kontinuierlich über die neuesten Entwicklungen in meinem Fachgebiet auf dem Laufenden und nehme regelmäßig an Fortbildungen teil. Dadurch kann ich innovative und effektive Behandlungsmethoden einsetzen und erstklassige Ergebnisse bieten."
      : "We offer thorough consultations to discuss your goals and options. Continuous training keeps us at the forefront of research and technology so we can deliver up-to-date, effective care.",
    consultBody2: isDe
      ? "Ein vertrauensvolles Verhältnis ist mir besonders wichtig. Ich nehme mir Zeit für eine gründliche Diagnose, individuelle Behandlungspläne und alle Informationen, die Sie für eine informierte Entscheidung brauchen."
      : "Trust matters: we take time for diagnosis, planning and clear information.",
    consultBody3: isDe
      ? "Eine kostenlose Erstberatung gibt Ihnen die Möglichkeit, mich als Zahnarzt / Kieferorthopäden in 1200 Wien kennenzulernen, Fragen zu stellen und eine fundierte Entscheidung über Ihre kieferorthopädische Behandlung zu treffen. Im Rahmen der Erstberatung besprechen wir Ihre Wünsche und führen eine gründliche Untersuchung der Zahn- und Kieferstruktur durch. Auf dieser Basis zeige ich Behandlungsoptionen mit Vor- und Nachteilen, den voraussichtlichen Ablauf und die geschätzten Kosten auf."
      : "A free initial consultation lets you meet the team, ask questions, and understand options, timeline and costs before you decide.",
    consultBody4: isDe
      ? "Mein Ziel ist es, Sie umfassend zu informieren und Ihnen zu helfen, die beste Entscheidung für Ihre Behandlung zu treffen. Kontaktieren Sie mich noch heute, um einen Termin für Ihre kostenlose kieferorthopädische Erstberatung zu vereinbaren. Ich freue mich darauf, Sie zu unterstützen und Ihnen zu einem schönen und gesunden Lächeln zu verhelfen."
      : "Contact us today to book your free orthodontic consultation—we look forward to helping you achieve a healthy, beautiful smile.",
    arztH: isDe ? "Dr. med. dent. Manish Sablania M.Sc. Orthodontics" : "Dr Manish Sablania M.Sc. Orthodontics",
    arztSub: isDe
      ? "Dr. med. dent. Manish Sablania BDS M.Sc. – Kieferorthopädie-Zahnarzt Wien 1200"
      : "Specialist orthodontist Vienna 1200",
    arztLi1: isDe
      ? "Qualifizierter Wahlkieferorthopäde für „Krankenkasse-Gratis Zahnspange“, spezialisiert in Kieferorthopädie und Orthodontie."
      : "Qualified partner for publicly funded braces and specialist orthodontics.",
    arztLi2: isDe
      ? "Über 25 Jahre Erfahrung und mehr als 7.000 Zahnregulierungen und Zahnspangenbehandlungen – mit Fokus auf das Wohlbefinden der Patientinnen und Patienten."
      : "Over 25 years of experience and thousands of orthodontic treatments with patient wellbeing at the centre.",
    ctaAesthetic: isDe ? "Termin für ästhetische Zahnmedizin vereinbaren" : "Book an aesthetic dentistry appointment",
    ctaConsult: isDe ? "Kostenlose Erstberatung vereinbaren" : "Book a free consultation",
  };

  const u = (path: string) => getHref(path, locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted text-white shadow-soft-lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light/95">
                {isDe ? "Ästhetische Zahnmedizin Wien" : "Aesthetic dentistry Vienna"}
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">{h.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-white/90">{h.intro1}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-accent-light"
                >
                  {h.ctaAesthetic}
                </a>
                <Link
                  href={u("/online-termin")}
                  className="inline-flex rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
                >
                  {isDe ? "Termin online" : "Book online"}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center px-4 pb-8 pt-4 sm:px-8 sm:pb-10 sm:pt-6 lg:justify-end lg:px-10 lg:pb-12 lg:pl-6 lg:pt-10">
              <figure className="relative aspect-[4/5] w-full max-w-[min(100%,20rem)] overflow-hidden rounded-3xl border border-white/25 bg-white/[0.07] shadow-[0_24px_55px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/15 sm:max-w-[22rem] lg:aspect-[3/4] lg:max-h-[min(26rem,52vh)] lg:w-full lg:max-w-md">
                <Image
                  src={IMG.smile}
                  alt={isDe ? "Strahlendes Lächeln" : "Radiant smile"}
                  fill
                  className="object-cover object-[center_28%]"
                  sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 28rem, 24rem"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/35 via-transparent to-white/[0.07]"
                  aria-hidden
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Intro + smile images */}
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-gray-700 sm:mt-16">
          <p>{h.intro2}</p>
          <p>{h.intro3}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-2xl font-bold text-primary">{h.heart}</p>
          <h2 className="mt-10 text-xl font-bold text-primary sm:text-2xl">{h.servicesH}</h2>
        </div>

        {/* 8 service cards */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            href={u("/unsichtbare-zahnspange-wien")}
            title={isDe ? "Unsichtbare Zahnspange" : "Invisible braces"}
            imageSrc={IMG.schiene}
            alt={isDe ? "Aligner / Schiene" : "Clear aligner"}
          />
          <ServiceCard
            href={u("/mundhygiene-wien")}
            title={isDe ? "Professionelle Mundhygiene" : "Professional oral hygiene"}
            imageSrc={IMG.hygiene}
            alt={isDe ? "Professionelle Mundhygiene" : "Oral hygiene"}
          />
          <ServiceCard
            href={u("/zahnbleaching")}
            title={isDe ? "Zahnbleaching" : "Teeth whitening"}
            imageSrc={IMG.bleaching}
            alt={isDe ? "Zahnbleaching" : "Whitening"}
          />
          <ServiceCard
            href={u("/komposit-zahnfuellung")}
            title={isDe ? "Ästhetische Zahnfüllungen" : "Aesthetic fillings"}
            imageSrc={IMG.keramik}
            alt={isDe ? "Keramik / ästhetische Versorgung" : "Ceramic restoration"}
          />
          <ServiceCard
            href={u("/sportschutz-mouthguards")}
            title={isDe ? "Sportschutz-Mouthguards" : "Sports mouthguards"}
            imageSrc={IMG.sports}
            alt={isDe ? "Sportschutz für die Zähne" : "Sports mouthguard"}
          />
          <ServiceCard
            href={u("/implantat-wien")}
            title={isDe ? "Zahn-Implantat" : "Dental implants"}
            imageSrc={IMG.implant}
            alt={isDe ? "Zahnimplantat" : "Dental implant"}
          />
          <ServiceCard
            href={u("/krone-bruecke")}
            title={isDe ? "Zahn Krone–Brücke" : "Crown & bridge"}
            imageSrc={IMG.bridgeWide}
            alt={isDe ? "Krone und Brücke" : "Crown and bridge"}
          />
          <ServiceCard
            href={u("/kieferorthopaedie")}
            title={isDe ? "Kieferorthopädie für Zahnspangen Wien" : "Orthodontics Vienna"}
            imageSrc={IMG.bracesColor}
            alt={isDe ? "Zahnspange" : "Braces"}
          />
        </div>

        {/* Orthodontics narrative + image */}
        <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.orthoH}</h2>
          <div className="relative mx-auto mt-6 aspect-[16/9] w-full max-w-xs overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft sm:max-w-sm">
            <Image
              src={IMG.qualityDentist}
              alt={isDe ? "Behandlung in der Zahnarztpraxis" : "Dental treatment"}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 85vw, 384px"
            />
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-700">{h.orthoBody}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">{h.orthoBody2}</p>
        </section>

        {/* Invisalign / Lingual */}
        <section className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">{h.invisH}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Link
              href={u("/unsichtbare-zahnspange-wien")}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMG.schiene}
                  alt={isDe ? "Unsichtbare Zahnspange / Aligner" : "Clear aligners"}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                  sizes="50vw"
                />
              </div>
              <p className="p-4 text-center font-semibold text-primary group-hover:text-accent">{h.invisSub1}</p>
            </Link>
            <Link
              href={u("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange")}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMG.lingual}
                  alt={isDe ? "Lingualtechnik" : "Lingual braces"}
                  fill
                  className="object-contain bg-gray-50 p-2 transition group-hover:scale-[1.02]"
                  sizes="50vw"
                />
              </div>
              <p className="p-4 text-center font-semibold text-primary group-hover:text-accent">{h.invisSub2}</p>
            </Link>
          </div>
        </section>

        {/* Erstberatung + DrSS image */}
        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/15 bg-primary/[0.04] px-6 py-8 sm:mt-20 sm:px-10">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{h.consultH}</h2>
          <div className="relative mx-auto mt-6 aspect-[16/10] max-w-lg overflow-hidden rounded-xl border border-gray-100 shadow-soft">
            <Image src={IMG.drSs} alt="" fill className="object-cover object-top" sizes="(max-width: 512px) 100vw, 512px" />
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-800">{h.consultBody}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody2}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody3}</p>
          <p className="mt-4 text-base leading-relaxed text-gray-800">{h.consultBody4}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
            >
              {h.ctaConsult}
            </a>
            <Link href={u("/kontakt")} className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-white">
              {isDe ? "Kontakt" : "Contact"}
            </Link>
          </div>
        </section>

        {/* Doctor */}
        <section className="mx-auto mt-16 flex max-w-3xl flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-soft-lg sm:mt-20 sm:flex-row sm:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-gray-50">
            <Image src={IMG.drMansi} alt="Dr. Manish Sablania" fill className="object-cover object-top" sizes="220px" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">{h.arztH}</h2>
            <p className="mt-1 text-gray-600">{h.arztSub}</p>
            <ul className="mt-4 space-y-2 text-gray-800">
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                {h.arztLi1}
              </li>
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                {h.arztLi2}
              </li>
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-muted"
            >
              {h.ctaConsult}
            </a>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
