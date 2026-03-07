import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function ZahnspangeErwachseneContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-erwachsene";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnspange für Erwachsene";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Invisalign, Unsichtbare Zahnspange, Clear Aligner Kieferorthopädie für Erwachsene</h2>
      <p>
        Eine Behandlung ist grundsätzlich in jedem Alter möglich. Bei Zahnspangen für Erwachsenen
        gibt es allerdings einige Besonderheiten zu beachten. Ob eine Behandlung sinnvoll und
        möglich ist, zeigt sich erst nach einer Untersuchung von Zähnen, Zahnfleisch und
        Kieferknochen. Dann folgt die Diagnose und die Einschätzung des Behandlungserfolges mit
        einer Zahnspange.
      </p>

      <h2 className="mt-10">Zahnspangen für Erwachsene</h2>
      <p>
        Genau wie bei Kindern gibt es auch bei der kieferorthopädischen Behandlung von Erwachsenen
        verschiedene Möglichkeiten. Folgende Zahnspangentypen sind möglich:
      </p>

      <h3 className="mt-8">Keramik Brackets</h3>
      <p>
        <strong>Metall Brackets</strong> – die festsitzende Zahnspange für Erwachsene. Bei der
        Verwendung von durchsichtigen Keramikbrackets profitieren Sie von einer deutlich verbesserten
        Optik.
      </p>
      <p>
        Die Brackets werden direkt auf die Außenseite der Zähne geklebt und sind bei Jugendlichen und
        Erwachsenen besonders beliebt. Auch können Bögen in Zahnfarbe verwendet werden.
      </p>
      <p>Zahnspange Erwachsene</p>

      <h3 className="mt-8">Lingualzahnspange</h3>
      <p>
        Fast vollständige unsichtbar wirkt diese innenliegende Zahnspange mit großer Präzision, den
        ganzen Tag.
      </p>
      <p>
        <strong>Positiv:</strong> Unsichtbar! Von außen ist die Zahnspange nicht zu sehen.
      </p>
      <p>
        <strong>Negativ:</strong> Am Anfang beim Sprechen können zu Beginn S- &amp; C-Laute schwerer
        auszusprechen sein.
      </p>

      <h3 className="mt-8">Invisalign-Clear Aligner Durchsichtige Schienen</h3>
      <p>
        Eine weitere Möglichkeit zur Behandlung von Zahnfehlstellungen. Die Regulierung erfolgt mit
        individuell gestalteten Schienen. Fast unsichtbar und abnehmbar.
      </p>
      <p>
        Diese Schienen werden meist von Erwachsenen getragen und sollten sowohl am Tag als auch bei
        Nacht getragen werden. Zum Essens und Zähneputzens werden die Invisalign Clear Aligner
        Schienen herausgenommen.
      </p>

      <h2 className="mt-10">Rückerstattungsmöglichkeiten bei Zahnspangen für Erwachsene</h2>
      <p>
        Je nach Schwergrad der Zahnfehlstellung und Art der Behandlung werden von Krankenkassen
        oder Zusatzversicherungen Teile der Behandlung rückerstattet!
      </p>
      <p>
        <strong>Informationen über Rückerstattungen der Krankenkassen:</strong>
      </p>
      <p>Bitte klicken Sie auf Ihre Kasse, Sie werden direkt auf die Informationsseite weitergeleitet.</p>
      <ul className="list-none space-y-2">
        <li>
          <a
            href="https://www.svs.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            SVS
          </a>
        </li>
        <li>
          <a
            href="https://www.bvaeb.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            BVA
          </a>
        </li>
        <li>
          <a
            href="https://www.oegk.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            KFA
          </a>
        </li>
      </ul>
      <p>
        <strong>Informationen über die Rückerstattung von Zusatz-Versicherungen:</strong>
      </p>
      <p>
        Bitte nehmen Sie mit Ihrer Versicherung Kontakt auf, wir haben keinen Einblick in die
        unterschiedlichen Verträge.
      </p>

      <h2 className="mt-10">Zahnregulierung für Erwachsene, der Ablauf:</h2>
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
          Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die
          Tragezeiten
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
