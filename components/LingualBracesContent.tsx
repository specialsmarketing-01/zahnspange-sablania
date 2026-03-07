import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function LingualBracesContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Lingual Braces - Innenliegende Zahnspange";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Lingual Braces - Innenliegende Zahnspange</h2>
      <p>
        Lingual Zahnspange bezeichnen unsichtbare Zahnspangen bei denen die Brackets nicht außen,
        sondern auf der Innenseite der Zähne aufgebracht werden (Zungenseite-Gaumenseite). Im
        Vergleich zu der klassischen Zahnspange, die sichtbar und auf der Außenseite beklebt wird.
        Die unsichtbare, innenliegende Zahnspange ist vor allem für PatientInnen geeignet, die eine
        Zahnregulierung benötigen, diese aber verstecken möchten.
      </p>
      <p>
        Durch moderne Technik und die Fortschritte in der Kieferorthopädie ist es heute möglich,
        Zahnfehlstellungen mit innenliegenden Brackets ebenso erfolgreich zu behandeln wie mit
        Brackets auf der Außenseite.
      </p>
      <p>
        Die innenliegende Zahnspange, die Brackets und Drähte, werden individuell in hochmodernen
        Fachlabors hergestellt. Jeder Zahn, jede Zahnfläche, -größe und -form ist verschieden. Auch
        die Biomechanik ist im Vergleich zu außenliegenden Brackets unterschiedlich.
      </p>

      <h2 className="mt-10">Innenliegende Zahnspange (lingual) und die Vor- und Nachteile</h2>
      <p>
        Die Behandlungsdauer hängt natürlich von der Fehlstellung, den Behandlungsmethoden und der
        angewendeten Technik ab. Kleine Fehlstellung brauchen z.B. ein paar Wochen / Monate. Schwere
        Fehlstellung ein paar Monate / Jahre. Die Kosten einer innenliegenden Zahnspange sind, auf
        Grund des hohen Aufwands, auch deutlich höher als z.B. Aligners oder die außenliegende
        Zahnspange.
      </p>
      <p>
        Alle Details erfahren Sie hier:{" "}
        <Link href={getHref("/online-termin", locale)} className="text-accent font-medium hover:underline">
          Kostenlosen Erstberatung
        </Link>
      </p>
      <p className="font-medium">
        Die wichtigen Kontrolltermine (innenliegende Zahnspange) finden alle 6-8 Wochen statt!
      </p>

      <h3 className="mt-8">Lingual Zahnspange Vorteile:</h3>
      <ul>
        <li>
          Von außen ist diese festsitzende, innenliegende Zahnspange nicht zu sehen – gut geeignet
          für Patienten die wirklich unbemerkt ihre Zahnfehlstellung korrigieren möchten.
          Politiker/in, Sänger/in, Models. PendlerInnen mit viel Kundenkontakt.
        </li>
        <li>
          Fast alle Fehlstellungen können mit der innenliegenden Zahnspange behoben werden. Sowohl
          bei Jugendlichen als auch bei Erwachsen. Geringes Karies-Risiko weil sich die
          innenliegende Zahnspange in der Nähe der Speicheldrüsen befinden: regelmäßig Spülung und
          Re-Mineralisierung der Zahnfläche.
        </li>
      </ul>

      <h3 className="mt-8">Lingual Zahnspange Nachteile:</h3>
      <ul>
        <li>
          Beim Sprechen muss man sich zu Beginn daran gewöhnen – gerade S- und C-Lauten können zu
          Anfang schwer zu sprechen sein.
        </li>
        <li>Essen und Kauen ist am Anfang nicht sehr komfortabel</li>
        <li>
          Eine festsitzende, innenliegende Zahnspange die nicht abnehmbar ist. Im Gegensatz zu z.B.
          Aligners Schienen.
        </li>
      </ul>

      <h2 className="mt-10">Lingual Zahnspange und der Ablauf in meiner Kieferorthopädie</h2>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur
          nach Vereinbarung!
        </li>
        <li>
          Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit
          Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.
        </li>
        <li>
          Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art
          von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.
        </li>
        <li>
          Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die
          Tragezeiten.
        </li>
        <li>Wichtige und notwendige Kontrolltermine alle 6-8 Wochen.</li>
        <li>
          Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses.
        </li>
        <li>
          <strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses.
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
