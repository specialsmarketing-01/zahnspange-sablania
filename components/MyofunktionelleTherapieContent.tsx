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
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termin", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
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
        <Link href={terminHref} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
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
        <Link href={ablaufHref} className="text-accent font-medium hover:underline">
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Myofunctional therapy for the treatment of misalignment</h2>
          <p>Myofunctional therapy uses removable appliances to influence the masticatory muscles and other facial muscles (actively and passively). These play a part in tooth position and jaw growth.</p>
          <p>Myofunctional therapy helps to prevent misalignment in the early phase and is also a treatment option when misalignment is already present.</p>
          <h2 className="mt-10">Myofunctional treatment – timing, aims and details</h2>
          <p>Myofunctional therapy is used early, in the primary dentition, early mixed dentition or mixed dentition.</p>
          <p>The aim is to improve bad habits such as tongue thrusting, incorrect swallowing patterns or mouth breathing.</p>
          <p>This can prevent later tooth and jaw misalignment.</p>
          <p>The younger the patients and the more growth spurts remain, the better the prognosis and the chance of avoiding misalignment early.</p>
          <h3 className="mt-8">Note!</h3>
          <p>Controlling growth is an essential aim of myofunctional therapy. It also removes early disruptive factors and ensures a harmonious growth process with regulation in the jaw.</p>
          <h2 className="mt-10">Functional orthodontics – myofunctional therapy</h2>
          <p>Functional orthodontic appliances involve the orofacial muscles in treatment. They normalise muscle activity. In particular, myofunctional therapy aims to correct dysfunctions permanently. The appliances guide forces during growth. This inhibition and stimulation of growth can correct skeletal misalignment.</p>
          <h3 className="mt-8">Details of myofunctional treatment: effects</h3>
          <ul>
            <li>Great importance is placed on lip and mouth closure with the appliances used.</li>
            <li>The tongue is given ample functional space.</li>
            <li>Appliances are used during the growth phase.</li>
            <li>Improvement in nasal breathing.</li>
            <li>Also used in the stabilisation/retention phase after treatment for misalignment – at any age.</li>
          </ul>
          <h3 className="mt-8">Myofunctional brace</h3>
          <p>Myofunctional brace</p>
          <h2 className="mt-10">Wear time and duration of myofunctional therapy</h2>
          <p>With removable appliances, patient cooperation is especially important. Minimum wear time: 12–14 hours. That means all night plus several hours during the day.</p>
          <p><Link href={terminHref} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Book a free initial consultation!</Link></p>
          <h2 className="mt-10">The process at our practice</h2>
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
