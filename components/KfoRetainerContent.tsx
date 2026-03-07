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
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
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
        <Link href={ablaufHref} className="text-accent font-medium hover:underline">
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Retention – the important stabilisation phase after treatment for misalignment</h2>
          <p>Teeth can shift continuously throughout life. When treatment for a misalignment has ended, the important period of stabilisation begins.</p>
          <p>The term retainer is an umbrella term (from English) for a group of devices (retention appliances) that are removable or fixed and help to stabilise the result of orthodontic treatment. The essential stabilisation phase lasts 2–3 years. In some cases, lifelong retention may be necessary.</p>
          <h2 className="mt-10">Retention and the cost of retainers</h2>
          <p>The cost of the initial fitting is included in the treatment package!</p>
          <h2 className="mt-10">Braces and retention – why stabilisation after treatment is so important</h2>
          <h3 className="mt-6">What is a retainer?</h3>
          <p>A fixed or removable appliance that serves to maintain and stabilise the optimised tooth and jaw position after orthodontic treatment.</p>
          <p>Stabilisation (retention) is extremely important from a medical point of view. Here are some key reasons and details:</p>
          <ul>
            <li>Braces, aligner trays or ceramic brackets move teeth from their original position to the optimised position. Teeth are not yet stable in this new position and have a strong tendency to move back. This process loosens bone lamellae and stretches connective tissue fibres.</li>
            <li>If you do not use retention to stabilise the result, the misalignment can quickly return.</li>
            <li>Return to the old position and other unwanted changes after treatment are one of the main problems in orthodontics. Without retention, both function and the aesthetic result can be lost. Therefore, at the end of every orthodontic treatment the result must be stabilised with a fixed retainer or removable trays.</li>
          </ul>
          <p className="font-medium mt-6"><strong>Note!</strong> At the end of every orthodontic treatment the result must be stabilised with fixed retainers or removable trays.</p>
          <h2 className="mt-10">Retention with removable appliances – advantages and disadvantages</h2>
          <p className="font-medium">Choosing the right retainer to stabilise your result.</p>
          <p>The choice of retention appliance always depends on your individual situation. The original misalignment is one factor.</p>
          <h3 className="mt-6">Advantages of removable retention appliances</h3>
          <ul><li>Easy to use.</li><li>Removable. Easy to insert and remove yourself.</li></ul>
          <h3 className="mt-6">Disadvantages of retention appliances</h3>
          <ul>
            <li>Compliance or insufficient wear during the day.</li>
            <li>We always recommend using retention for the long term, often for life. Motivation to wear the appliance can be low.</li>
          </ul>
          <h3 className="mt-6">Myofunctional brace – removable</h3>
          <p>Myofunctional brace</p>
          <h2 className="mt-10">Retention and the fixed retainer (bonded retainer wire)</h2>
          <p>The fixed (bonded) retainer is a thin wire attached behind the front teeth of the upper and/or lower jaw using a special bonding technique. Usually from canine to canine.</p>
          <h3 className="mt-6">Advantages of fixed retainers</h3>
          <ul><li>Invisible because it sits on the inside.</li><li>Stabilises the teeth day and night, 24 hours.</li><li>Cannot be lost or forgotten.</li><li>Comfortable and secure compared to removable models.</li></ul>
          <h3 className="mt-6">Disadvantages of non-removable retainers</h3>
          <ul><li>You must clean between the teeth thoroughly.</li><li>You must use dental floss regularly.</li></ul>
          <p>The fixed retainer offers more effective long-term results because it is permanently attached. Of course, setbacks can still occur, e.g. if a bond or the wire breaks and individual teeth move undesirably.</p>
          <p>Fixed retainer</p>
          <h2 className="mt-10">Retention with aligners as removable brace</h2>
          <p>Clear overlay aligners can be used as a retention element during the stabilisation phase.</p>
          <p>Aligners</p>
          <h2 className="mt-10">How long must a retainer be worn for stabilisation?</h2>
          <p>It is not possible to predict which cases will relapse. Misalignment with jaw retrusion or lower front crowding are more prone to relapse.</p>
          <p>Long-term use of retainers (fixed or removable) may be necessary to maintain the result.</p>
          <p>After the end of treatment I recommend a check-up twice a year to ensure the result is stable.</p>
          <p>Regular self-check of the retainer when brushing your teeth is essential.</p>
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
