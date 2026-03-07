import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function ZahnspangeJugendlicheContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-jugendliche";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnspange für Jugendliche";
  const lead = leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
      <h2>Zahnspange für Jugendliche im Alter von 10 bis 18 Jahren</h2>
      <p>
        Die vielfältigen Behandlungsmöglichkeiten für Jugendliche mit einer Zahnspange finden Sie
        gleich nachstehend. Alle Behandlungsdetails erhalten Sie durch Klick auf die gewünschte
        Behandlungsart!
      </p>

      <h3 className="mt-8">Metallbrackets</h3>
      <p>Erwachsen-Metal brackets</p>
      <p>Junge Frau mit Zahnspangen in grauer Farbe</p>

      <h3 className="mt-6">Durchsichtige Zahnspange – Unsichtbare Zahnspange</h3>
      <p>Keramik Zahnspange für Kinder</p>

      <h3 className="mt-6">Clear Aligners, Invisalign Unsichtbare zahnspange</h3>
      <p>Unsichtbare Zahnspange Wien - Invisalign Wien Clear Aligners Zahnspange für Erwachsene | Clear Aligners</p>

      <h2 className="mt-10">Warum ist die Zahnspange für Jugendliche in der Entwicklung so wichtig?</h2>
      <p>
        Schiefe Zähne oder eine Kiefer-Fehlstellung führen zu Überbelastungen einzelner Regionen.
      </p>
      <p>
        <strong>ACHTUNG:</strong> Das kann die Zähne selbst schädigen oder auch Probleme des
        Zahnhalte-Apparates, des Kieferknochens, des Kiefergelenkes und der Kaumuskulatur
        verursachen. Auch Sprachprobleme sind eine häufig Ursache.
      </p>
      <p>
        Das Wachstum des Kiefers kann in diesem Alter noch optimal beeinflusst werden. Ein
        überschießendes Wachstum muss gehemmt werden. Ein zu langsames Wachstum des Kiefers muss
        beschleunigt werden. Das sind wichtige Aufgaben eines guten Kieferorthopäden.
      </p>
      <p>Eine rechtzeitige Behandlung kann bei einer Vielzahl an Problemen helfen:</p>
      <ul>
        <li>Man kann zukünftigen, kieferorthopädische Behandlungen vorbeugen!</li>
        <li>
          Psychosoziale Aspekte und Optik sind häufig Gründe das man sich nicht wohl fühlt
        </li>
        <li>
          Das Wachstum kann in dieser Zeit perfekt für die Behandlung genutzt werden.
          Gesichtsschädel-Wachstum, der Zahnwechsel und der Zahndurchbruch.
        </li>
      </ul>

      <h2 className="mt-10">
        Was ist bei der kieferorthopädischen Behandlung (Zahnregulierung) einer Zahnfehlstellung zu
        beachten?
      </h2>
      <h3 className="mt-6">Wann ist eine kieferorthopädische Behandlung bei Jugendlichen notwendig?</h3>
      <p>
        <strong>Zeitpunkt ist sehr wichtig:</strong>
      </p>
      <ul>
        <li>
          Ab dem 11, 12 Lebensjahr beginnt die wichtige Hauptphase der Behandlung – Phase 2 beginnt
          nach Ende des späten Wechselgebisses oder direkt im Anschluss an den Zahnwechsels.
        </li>
        <li>
          Der Wachstums-Höhepunkt wird bei Mädchen etwa mit 11 oder 12 Lebensjahr und bei Jungen mit
          dem 13 oder 14 Lebensjahr erreicht.
        </li>
      </ul>
      <p>Ein Behandlungsstart vor / zu diesem Zeitpunkt sinnvoll und vorteilhaft!</p>

      <p className="mt-6 font-medium">
        Der richtige Startzeitpunkt der kieferorthopädischen Behandlung Zahnregulierung ist
        besonders wichtig.
      </p>
      <p>Für den richtigen Startzeitpunkt relevant:</p>
      <ul>
        <li>Das chronologische Alter</li>
        <li>Das dentale und skelettale Alter</li>
        <li>Die skelettale Entwicklung</li>
        <li>Die Art der Fehlstellung (Dysgnathie).</li>
      </ul>
      <p>
        Ungünstige Wachstumseinflüsse können die Fehlstellung natürlich zusätzlich verstärken. einer
        Erschwerung der Behandlung und einer Verschlechterung der Prognose beitragen.
      </p>
      <p>
        Für die optimale Behandlung der Zahnfehlstellung wie z.B. Unterkiefer- oder
        Oberkiefer-Rücklage ist das Wachstum unerlässlich.
      </p>

      <h2 className="mt-10">Zahnspange bei Jugendlichen und die Behandlungsdauer</h2>
      <p>
        Je nach Zahnfehlstellung dauert eine Behandlung mit einer festsitzenden Zahnspange im
        Durchschnitt 18-24 Monate mit Brackets. Bei Erwachsenen variiert die Dauer von Fall zu Fall.
        Alle Details werden dann in dem kostenlosen Erstgespräch abgeklärt.
      </p>
      <p>Zahnspange Erwachsene</p>

      <h2 className="mt-10">Zahnspange für Jugendliche, der Ablauf!</h2>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach
          Vereinbarung!
        </li>
        <li>
          Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit
          Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.
        </li>
        <li>
          Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung welche Art
          von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.
        </li>
        <li>
          Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten
        </li>
        <li>Wichtige und notwendigen Kontrolltermine alle 6-8 Wochen</li>
        <li>
          Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses
        </li>
        <li>
          <strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses
        </li>
      </ol>

      <p className="mt-6">
        <Link href={ablaufHref} className="text-accent font-medium hover:underline">
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Braces for teenagers aged 10 to 18</h2>
          <p>You will find the various treatment options for teenagers with braces below. Click on the option you are interested in for full details.</p>
          <h3 className="mt-8">Metal brackets</h3>
          <p>Adult metal brackets</p>
          <p>Young woman with grey braces</p>
          <h3 className="mt-6">Clear braces – invisible braces</h3>
          <p>Ceramic braces for children</p>
          <h3 className="mt-6">Clear aligners, Invisalign invisible braces</h3>
          <p>Invisible braces Vienna – Invisalign Vienna clear aligners, braces for adults | clear aligners</p>
          <h2 className="mt-10">Why are braces so important for teenagers during development?</h2>
          <p>Crooked teeth or jaw misalignment lead to overload in certain areas.</p>
          <p><strong>WARNING:</strong> This can damage the teeth themselves or cause problems with the periodontium, jawbone, jaw joint and masticatory muscles. Speech problems are also a common cause.</p>
          <p>Jaw growth can still be influenced optimally at this age. Excessive growth must be restrained; slow growth must be encouraged. These are key tasks for a good orthodontist.</p>
          <p>Timely treatment can help with many problems:</p>
          <ul>
            <li>It can prevent the need for future orthodontic treatment.</li>
            <li>Psychosocial aspects and appearance are often reasons for feeling uncomfortable.</li>
            <li>Growth can be used perfectly for treatment during this period – facial growth, tooth eruption and the change to permanent teeth.</li>
          </ul>
          <h2 className="mt-10">What should you consider with orthodontic treatment (correction) for misalignment?</h2>
          <h3 className="mt-6">When is orthodontic treatment necessary for teenagers?</h3>
          <p><strong>Timing is very important:</strong></p>
          <ul>
            <li>From around 11–12 years of age the main phase of treatment begins – phase 2 starts after the late mixed dentition or directly after the tooth change.</li>
            <li>The growth peak is reached at around 11–12 in girls and 13–14 in boys.</li>
          </ul>
          <p>Starting treatment at or before this time is advisable and beneficial!</p>
          <p className="mt-6 font-medium">The right start time for orthodontic treatment is especially important.</p>
          <p>Relevant for the right start time:</p>
          <ul>
            <li>Chronological age</li>
            <li>Dental and skeletal age</li>
            <li>Skeletal development</li>
            <li>Type of misalignment (dysgnathia)</li>
          </ul>
          <p>Unfavourable growth can further worsen misalignment and make treatment harder and the prognosis less favourable.</p>
          <p>For optimal treatment of misalignment (e.g. lower or upper jaw retrusion), growth is essential.</p>
          <h2 className="mt-10">Braces for teenagers and treatment duration</h2>
          <p>Depending on the misalignment, treatment with fixed braces usually takes 18–24 months on average. In adults, duration varies from case to case. All details are discussed at the free initial consultation.</p>
          <p>Braces for adults</p>
          <h2 className="mt-10">Braces for teenagers – the process</h2>
          <ol>
            <li>Free initial consultation for misalignment at our orthodontic practice. By appointment only!</li>
            <li>Create treatment records for your individual plan. Diagnosis with X-rays, photos and digital scans. Always without impressions.</li>
            <li>Planning discussion and explanation. X-ray review and analysis of which type of brace and/or brackets are needed.</li>
            <li>Start of treatment. Fitting the appliance and advice on cleaning and wear times.</li>
            <li>Check-up appointments every 6–8 weeks.</li>
            <li>End of treatment. Removal of the brace and discussion of the result.</li>
            <li><strong>Retention</strong> – the start of stabilising the treatment result.</li>
          </ol>
          <p className="mt-6"><Link href={ablaufHref} className="text-accent font-medium hover:underline">Full details of the treatment process at our practice</Link></p>
        </>
      )}
    </PageContent>
  );
}
