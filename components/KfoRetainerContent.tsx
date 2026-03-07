import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function KfoRetainerContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/kfo-retainer";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "KFO Retainer";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Retention, die wichtige Stabilisierungsphase nach der Behandlung von Zahnfehlstellungen!</h2>
      <p>
        Zähne können sich kontinuierlich und ein Leben lang verschieben. Wenn die Behandlung nach
        einer Zahnfehlstellungen beendet ist, beginnt die wichtige Zeit der Stabilisierung.
      </p>
      <p>
        Bei der Bezeichnung Retainer handelt es sich um einen, aus dem Englischen entlehnten,
        Oberbegriff für eine Gruppe von Geräten (Retentionsgeräte), die abnehmbar oder festsitzend
        sind und dabei helfen das Behandlungsergebnis der Zahnfehlstellung zu stabilisieren. Die
        unerlässliche Stabilisierungsphase dauert 2-3 Jahre. Auch ein Zahnregulierung auf Lebenszeit
        kann von Fall zu Fall notwendig sein.
      </p>

      <h2 className="mt-10">Retention und die Kosten von Retainern:</h2>
      <p>Die Kosten für die erstmalige Anfertigung sind in der Behandlungspauschale inkludiert!</p>

      <h2 className="mt-10">
        Zahnspange und Retention - warum die Stabilisierung nach der Behandlung so wichtig ist!
      </h2>
      <h3 className="mt-6">Was ist ein Retainer?</h3>
      <p>
        Ein festsitzendes oder abnehmbares „Gerät“, das dazu dient, die optimierte Zahn- und
        Kieferstellung (nach kieferorthopädischer Behandlung) zu erhalten und zu stabilisieren.
      </p>
      <p>
        Stabilisierung, Retention, ist aus medizinischer Sicht extrem wichtig. Hier ein paar gute
        Gründe und alle notwendigen Details:
      </p>
      <ul>
        <li>
          Durch Zahnspangen, Aligners Schienen oder Keramik Brackets werden Zähne von ihrer
          ursprünglichen Position in die optimierte Position bewegt. Die Zähne sind an dieser
          Position noch nicht so fest und haben eine hohe Tendenz dazu, sich wieder zu bewegen. Durch
          diese Bewegungsprozesse werden Knochenlamellen wieder gelockert und Bindegewebsfasern
          gedehnt.
        </li>
        <li>
          Wer nicht auf Retention setzt, also die Stabilisierung des Behandlungsergebnisses, läuft
          Gefahr, dass die Fehlstellung rasch zurückkehrt.
        </li>
        <li>
          Die Rückkehr in die alte Stellung und andere unerwünschte Veränderungen nach der
          Behandlung sind eines der Hauptprobleme in der Kieferorthopädie. Werden keine
          Retention-Maßnahmen angewendet, gehen nicht nur die gute Funktion, sondern auch das
          ästhetische Behandlungsergebnis verloren. PatientInnen leiden unter einer regelrechten
          Verzahnung. Daher muss am Ende jeder kieferorthopädischen Behandlung das
          Behandlungsergebnis mittels festsitzendem Retainer oder herausnehmbaren Schienen
          stabilisiert werden. Retention – Kieferorthopädie – warum ist die Stabilisierung nach
          einer Zahnfehlstellung so wichtig?
        </li>
      </ul>
      <p className="font-medium mt-6">
        <strong>Merke!</strong> Am Ende jeder kieferorthopädischen Behandlung muss das
        Behandlungsergebnis mittels festsitzenden Retainern oder herausnehmbaren Schienen
        stabilisiert werden.
      </p>

      <h2 className="mt-10">Retention mit abnehmbaren Geräte, Vor- und Nachteile</h2>
      <p className="font-medium">Die richtige Auswahl von Retainern zur Stabilisierung des Behandlungsergebnisses.</p>
      <p>
        Die Auswahl des Retention-Gerätes richtet sich immer nach der individuellen Situation. Die
        ursprüngliche Zahnfehlstellung ist hier ein Gradmesser.
      </p>

      <h3 className="mt-6">Vorteil von abnehmbaren Retention-Geräten</h3>
      <ul>
        <li>Easy to use.</li>
        <li>Abnehmbar. Einfaches selbständiges einsetzen und herausnehmen.</li>
      </ul>

      <h3 className="mt-6">Nachteile von Retention-Geräten</h3>
      <ul>
        <li>Compliance oder mangelhaftes Tragen des Gerätes über Tag.</li>
        <li>
          Die Empfehlung lautet immer Retention-Maßnahmen ständig, ein Leben lang, zu nutzen. Die
          Motivation die Geräte zu tragen ist leider sehr gering.
        </li>
      </ul>

      <h3 className="mt-6">myofunktionelle Zahnspange - herausnehmbar</h3>
      <p>Myofunktionelle Zahnspange</p>

      <h2 className="mt-10">Retention und der festsitzende Retainer, der geklebte Retainer-Draht</h2>
      <p>
        Der festsitzende Retainer, der Kleberetainer ist ein dünner Draht der mit Hilfe der
        speziellen Klebetechnik hinter die Frontzähne des Ober- und/oder Unterkiefers befestigt wird.
        Meist von Eckzahn zu Eckzahn.
      </p>

      <h3 className="mt-6">Retention und die Vorteile festsitzender Retainer:</h3>
      <ul>
        <li>Unsichtbar weil innenliegend.</li>
        <li>Stabilisiert die Zähne Tag und Nacht, 24 Stunden.</li>
        <li>Kann nicht verloren oder vergessen werden.</li>
        <li>Komfortabel und sicher im Vergleich zu den herausnehmbaren Modellen.</li>
      </ul>

      <h3 className="mt-6">Retention und die Nachteile nicht abnehmbarer Retainer:</h3>
      <ul>
        <li>Man muss die Zahnzwischenräume gründlich putzen.</li>
        <li>Man muss regelmäßig Zahnseide verwenden.</li>
      </ul>
      <p>
        Der festsitzende Retainer hat den Vorteil eines effizienteren Behandlungserfolges, weil er
        dauerhaft an den Zähnen befestigt ist. Natürlich können auch bei festsitzenden Retainern
        Rückschritte auftreten. Zum Beispiel durch Brüche einzelner Klebestellen oder des
        Retainer-Drahtes und der anschließenden unerwünschten Bewegung betroffener Einzelzähne.
      </p>
      <p>fester Retainer</p>

      <h2 className="mt-10">Retention mit Aligners als abnehmbare Zahnspange</h2>
      <p>
        Clear Overlay Aligners können als Retention-Element in der Stabilisierungsphase verwendet
        werden.
      </p>
      <p>Aligners</p>

      <h2 className="mt-10">Wie lange muss ein Retainer zur Stabilisierung getragen werden?</h2>
      <p>
        Es ist nicht vorhersehbar, welche Fälle zu einem Rückfall neigen und welche nicht.
        Fehlstellung mit Kiefer-Rücklage oder eine Unterkiefer Front mit Engstand sind in jedem Fall
        anfällig.
      </p>
      <p>
        Auch eine langjährige Anwendung von Retainern, ob festsitzend oder herausnehmbar, kann von
        Fall zu Fall notwendig sein um das Behandlungsergebnis aufrechtzuerhalten.
      </p>
      <p>
        Nach Ende der Behandlung einer Kieferfehlstellung empfehle ich 2 mal pro Jahr eine
        Kontrolle um den Erfolg sicherzustellen.
      </p>
      <p>Regelmäßige, selbstständige Kontrolle des Retainers beim Zähneputzen ist unbedingt notwendig.</p>

      <h2 className="mt-10">Der Ablauf in meiner Kieferorthopädie:</h2>
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
          Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses.
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
