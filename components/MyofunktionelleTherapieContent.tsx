import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function MyofunktionelleTherapieContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/myofunktionelle-therapie";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Myofunktionelle Therapie";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Myofunktionelle Therapie zur Behandlung von Zahnfehlstellungen!</h2>
      <p>
        Die myofunktionelle Therapie ist eine Behandlung mit herausnehmbaren Geräten, um die
        Kau-Muskulatur und andere Gesichtsmuskeln aktiv und passiv zu beeinflussen. Diese sind für
        die Stellung der Zähne und für die Entwicklung des Kieferwachstums mitverantwortlich.
      </p>
      <p>
        Die myofunktionelle Therapie dient einerseits zur Vorbeugung von Zahnfehlstellungen in der
        Frühphase und bezeichnet andererseits auch eine Behandlungsmöglichkeit bei bereits
        vorhandenen Fehlstellungen.
      </p>

      <h2 className="mt-10">
        Myofunktionelle Behandlung - der richtige Startzeitpunkt, Ziele und alle Details
      </h2>
      <p>
        Die myofunktionelle Therapie kommt frühzeitig im Milchgebiss, Frühwechselgebiss oder
        Wechselbiss zum Einsatz.
      </p>
      <p>Ziel ist es schlechte Gewohnheiten wie Zungenpressen, falsches Schluckmuster oder Mundatmung zu verbessern.</p>
      <p>So können spätere Zahn und Kieferfehlstellungen verhindert werden.</p>
      <p>
        Je jünger die PatientInnen und je mehr Wachstumsschübe vorhanden sind,
      </p>
      <p>desto besser ist die Prognose und die Chance Zahnfehlstellungen frühzeitig zu vermeiden?</p>

      <h3 className="mt-8">Merke!</h3>
      <p>
        Nicht nur die Steuerung des Wachstums ist ein essenzielles Ziel der myofunktionelle
        Therapie. Sie beseitigt auch frühzeitige störende Faktoren und sichert einen harmonisierten
        Wachstumsprozess mit Regulierung im Kiefer.
      </p>

      <h2 className="mt-10">Funktionskieferorthopädie - myofunktionellen Therapie</h2>
      <p>
        Funktionskieferorthopädische Geräte beziehen die orofaziale Muskulatur in die Behandlung.
        Diese sollen die Muskeltätigkeit normalisieren. Im Besonderen sollen myofunktionellen
        Therapie Fehlfunktionen dauerhaft abgestellt werden. Die kieferorthopädischen Geräte steuern
        die Kräfte im Wachstum. Durch diesen Hemmungs- und Förderungsprozess im Wachstum kann eine
        skeletale Fehlstellung ausgeglichen werden.
      </p>

      <h3 className="mt-8">Details zur myofunktionellen Behandlung: Auswirkung</h3>
      <ul>
        <li>Bei den verwendeten Geräten wird großer Wert auf Mund- und Lippenschluss gelegt</li>
        <li>Die Zunge erhält großen Funktionsraum</li>
        <li>Geräte werden in der Wachstumsphase genutzt</li>
        <li>Verbesserung der Nasenatmung</li>
        <li>
          Wird auch der Phase der Stabilisierung/Retention des Behandlungsergebnisse von
          Zahnfehlstellungen genutzt – in jedem Alter.
        </li>
      </ul>

      <h3 className="mt-8">Myofunktionelle Zahnspange</h3>
      <p>myofunktionelle Zahnspange</p>

      <h2 className="mt-10">Tragedauer und Dauer der myofunktionellen Therapie</h2>
      <p>
        Bei herausnehmbaren Geräten ist die Mitarbeit des Patienten besonders wichtig – unabhängig
        von der Zahnfehlstellung. Eine minimale Tragezeit von 12-14 Stunden! Das bedeutet die ganze
        Nacht plus ein paar Stunden am Tag.
      </p>
      <p>
        <Link
          href={getHref("/online-termin", locale)}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          Vereinbaren Sie einen Termin zur kostenlosen Erstbesprechung!
        </Link>
      </p>

      <h2 className="mt-10">Der Ablauf in meiner Kieferorthopädie:</h2>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach
          Vereinbarung!
        </li>
        <li>
          Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit
          Röntgen, Fotos und digitalen Scans ohne Abdrücke.
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
