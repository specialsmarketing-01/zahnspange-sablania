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

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
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
        <Link
          href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)}
          className="text-accent font-medium hover:underline"
        >
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>
    </PageContent>
  );
}
