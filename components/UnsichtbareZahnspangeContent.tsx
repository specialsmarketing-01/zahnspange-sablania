import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function UnsichtbareZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/unsichtbare-zahnspange-wien";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Unsichtbare Zahnspange Wien";
  const lead = leads[dePath];
  const terminHref = getHref("/online-termin", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
      <h2>Unsichtbare Zahnspange Wien: Innovative Behandlungsmethode mit Invisalign in Wien</h2>
      <p>
        Die Behandlungsmethode der unsichtbaren Zahnspange bietet verschiedene Namen, darunter
        „Unsichtbare Zahnspange Wien“ und „Invisalign Wien“. Bei dieser modernen Art der Behandlung
        von Zahnfehlstellungen werden transparente und durchsichtige Folien verwendet, die mithilfe
        von computergestützter Technologie präzise im Labor hergestellt werden.
      </p>
      <p>
        Die unsichtbare Zahnspange Wien, auch bekannt als Invisible oder Invisalign Clear Aligners,
        durchsichtige Schienen / Aligners, ermöglichen es sowohl Jugendlichen als auch Erwachsenen
        von den Vorteilen der Clear Aligner Technologie zu profitieren.
      </p>
      <p>
        Diese Schienentherapie ist eine hochmoderne Methode zur Korrektur von Zahnfehlstellungen, bei
        der keine Brackets oder Drähte verwendet werden. Die Schienen üben sanfte Kräfte auf die
        Zähne aus, um sie Schritt für Schritt in die zuvor digital geplante Richtung zu lenken.
      </p>
      <p>
        Darüber hinaus bietet die unsichtbare Zahnspange auch eine verkürzte Behandlungszeit im
        Vergleich zu traditionellen Methoden. In einigen Fällen kann die Dauer der Behandlung mit
        Clear Aligners kürzer sein, was zu schnelleren Ergebnissen führt und weniger häufige Besuche
        beim Kieferorthopäden erfordert.
      </p>
      <p>
        Es ist jedoch wichtig anzumerken, dass jede Behandlungsmethode ihre eigenen Vor- und
        Nachteile hat. Die Eignung der unsichtbaren Zahnspange für einen individuellen Fall sollte
        immer in Absprache mit Facharzt für Kieferorthopädie entschieden werden, der die
        spezifischen Bedürfnisse und Anforderungen des Patienten berücksichtigt.
      </p>

      <h2 className="mt-10">Vor- und Nachteile der unsichtbaren Zahnspange bzw. Zahnregulierung</h2>

      <h3 className="mt-8">Vorteile der Invisalign – Clear Aligners Therapie:</h3>
      <ul>
        <li>
          <strong>Ästhetik:</strong> Die Clear Aligners sind nahezu unsichtbar, da sie aus
          transparentem Material bestehen. Dadurch fällt es anderen oft nicht auf, dass man eine
          Zahnspange trägt.
        </li>
        <li>
          <strong>Komfort:</strong> Im Vergleich zu herkömmlichen Zahnspangen mit Brackets und
          Drähten sind die Clear Aligners deutlich angenehmer zu tragen. Sie bestehen aus glattem
          Kunststoff, der keine Reibung oder Irritationen im Mund verursacht.
        </li>
        <li>
          <strong>Herausnehmbar:</strong> Die Clear Aligners können zum Essen, Trinken und zur
          Zahnpflege einfach herausgenommen werden. Dadurch entstehen keine Einschränkungen bei der
          Nahrungsaufnahme und die Zahnpflege gestaltet sich unkompliziert.
        </li>
        <li>
          <strong>Präzision:</strong> Die Invisalign Clear Aligners werden mithilfe modernster
          Computertechnologie und 3D-Bildgebung individuell für jeden Patienten angefertigt.
          Dadurch wird eine präzise und effektive Korrektur der Zahnfehlstellungen ermöglicht.
        </li>
        <li>
          <strong>Zeitersparnis:</strong> In einigen Fällen kann die Behandlung mit Clear Aligners
          schneller abgeschlossen werden als mit herkömmlichen Zahnspangen. Die regelmäßigen
          Kontrolltermine beim Kieferorthopäden sind meist weniger zeitaufwendig.
        </li>
        <li>
          <strong>Alltagstauglichkeit:</strong> Die unsichtbare Zahnspange beeinträchtigt kaum den
          Alltag des Patienten. Sportliche Aktivitäten, Musikinstrumente spielen oder wichtige
          Veranstaltungen stellen keine Hindernisse dar, da die Invisaligns herausgenommen werden
          können.
        </li>
      </ul>

      <h3 className="mt-8">Unsichtbare Zahnspange Wien - Invisalign Clear Aligners</h3>

      <h3 className="mt-6">Nachteile der Invisalign – Clear Aligners Therapie:</h3>
      <ul>
        <li>
          <strong>Disziplin und Eigenverantwortung:</strong> Da die Clear Aligners herausnehmbar
          sind, erfordert die Behandlung eine Disziplin und Eigenverantwortung seitens des
          Patienten. Die Aligners müssen konsequent für die vorgeschriebene Tragezeit (in der Regel
          20-22 Stunden pro Tag) eingesetzt werden, um die gewünschten Ergebnisse zu erzielen.
        </li>
        <li>
          <strong>Einschränkungen bei manchen Lebensmitteln:</strong> Während der Behandlung mit
          Invisalign sollten bestimmte Lebensmittel vermieden werden, insbesondere solche, die hart,
          klebrig oder stark färbend sind. Der Verzicht auf diese Lebensmittel kann für manche
          Menschen eine Einschränkung darstellen.
        </li>
        <li>
          <strong>Begrenzte Behandlungsmöglichkeiten:</strong> Obwohl die unsichtbare
          Zahnregulierung mit Invisalign für viele Fälle von Zahnfehlstellungen geeignet ist, gibt
          es bestimmte komplexe oder schwere Fehlstellungen, bei denen möglicherweise eine
          herkömmliche feste Zahnspange effektiver ist. Als Kieferorthopäde kann ich die besten
          Optionen für die individuelle Situation eines Patienten einschätzen.
        </li>
        <li>
          <strong>Regelmäßige Besuche in der Kieferorthopädie:</strong> Wie bei jeder
          kieferorthopädischen Behandlung erfordert auch die Invisalign – Clear Aligners Therapie
          regelmäßige Besuche beim Kieferorthopäden, um den Fortschritt zu überwachen, die Aligners
          anzupassen und weitere Anweisungen zu erhalten. Diese Termine können für manche Menschen
          zusätzlichen Zeitaufwand bedeuten.
        </li>
      </ul>

      <p className="mt-6">
        <Link
          href={terminHref}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          Kostenlose Erstberatung für Invisalign vereinbaren
        </Link>
      </p>

      <h2 className="mt-10">Details zur Behandlung mit Invisalign, der unsichtbaren Zahnspange Wien</h2>
      <p>
        Die Behandlung mit Invisalign, der unsichtbaren Zahnspange, basiert auf einer Reihe von
        transparenten Alignern, die speziell für jeden Patienten individuell angefertigt werden.
        Die unsichtbaren Aligners werden 12 bis 14 Tage getragen, daraufhin kommen bereits neue
        Schienen zum Einsatz. Wir geben unseren Patienten stets 4 bis 6 Aligners zum Wechseln mit
        nach Hause, damit Sie nicht jedes Mal in die Praxis kommen müssen.
      </p>
      <p>Hier sind einige Details zur Behandlung:</p>
      <ul>
        <li>
          <strong>Konsultation und Behandlungsplanung:</strong> Zu Beginn erfolgt eine ausführliche
          Konsultation bei mir, Ihrem Kieferorthopäden, um die Ziele der Behandlung zu besprechen
          und festzustellen, ob Invisalign die geeignete Option ist. Mithilfe moderner
          3D-Bildgebungstechnologie wird ein digitaler Behandlungsplan erstellt, der die Bewegung
          der Zähne während der gesamten Behandlung zeigt.
        </li>
        <li>
          <strong>Anfertigung der Aligner:</strong> Basierend auf dem Behandlungsplan werden die
          transparenten Aligner individuell im Invisalign-Labor hergestellt. Jeder Aligner wird
          dabei so konzipiert, dass er schrittweise die gewünschte Zahnposition erreicht. In der
          Regel werden mehrere Aligner-Sets für die gesamte Behandlung erstellt.
        </li>
        <li>
          <strong>Tragezeit der Aligner:</strong> Die Invisalign Aligner müssen in der Regel 20-22
          Stunden pro Tag getragen werden. Sie werden alle 12 bis 14 Tage gewechselt, um den
          Fortschritt der Zahnverschiebung zu ermöglichen. Es ist wichtig, die Aligner nur zum
          Essen, Trinken (außer Wasser) und zur Zahnpflege herauszunehmen.
        </li>
        <li>
          <strong>Fortschrittskontrollen:</strong> Während der Behandlung sind regelmäßige
          Kontrollbesuche – der erste Kontrolltermin findet 8 Wochen nach Behandlungsstart statt –
          beim Kieferorthopäden erforderlich. In diesen Terminen wird der Fortschritt überprüft,
          und gegebenenfalls werden Anpassungen vorgenommen, um die Behandlung auf Kurs zu halten.
          Neue Aligner werden ausgehändigt, um die Zähne weiterhin in die gewünschte Position zu
          bewegen. Bei jedem Termin erfolgt eine digitale Computersimulation.
        </li>
        <li>
          <strong>Behandlungsdauer:</strong> Die Dauer der Invisalign-Behandlung variiert je nach
          individuellem Fall. In der Regel dauert sie jedoch zwischen 6 (leicht Fälle), 18 (Mittel)
          und 24 (Schwer) Monaten. Die genaue Behandlungsdauer wird vom Kieferorthopäden basierend
          auf den spezifischen Zahnfehlstellungen und den Behandlungszielen bestimmt.
        </li>
        <li>
          <strong>Nachbehandlung:</strong> Nach Abschluss der Behandlung mit Invisalign werden
          häufig Retainer eingesetzt, um die erzielten Ergebnisse langfristig zu stabilisieren.
          Retainer sind individuell angefertigte, transparente Schienen, die in der Regel nachts
          getragen werden.
        </li>
      </ul>

      <h2 className="mt-10">Invisalign Behandlung für Erwachsene und Jugendliche</h2>
      <p>
        Invisalign Aligner ist eine beliebte Behandlungsmethode sowohl für Erwachsene als auch
        Jugendliche.
      </p>
      <p>
        Für Erwachsene ist die unsichtbare Zahnspange besonders gut mit beruflichen Anforderungen
        zu kombinieren. Invisalign bietet eine diskrete Lösung für berufstätige Erwachsene, die
        während der Behandlung kein offensichtliches Tragen einer Zahnspange wünschen. Die
        Möglichkeit, die Aligner bei wichtigen beruflichen Anlässen herauszunehmen, ist ein großer
        Vorteil.
      </p>

      <h3 className="mt-8">Jugendliche schätzen die Diskretion der Clear Aligners</h3>
      <p className="font-medium">Unsichtbare Zahnspange Wien - Invisalign Wien Clear Aligners</p>
      <ul>
        <li>
          <strong>Ästhetik und Selbstbewusstsein:</strong> Jugendliche schätzen die ästhetischen
          Vorteile von Invisalign, da die transparenten Aligner ihnen ermöglichen, ihr
          Selbstbewusstsein zu bewahren und sich während der Behandlung wohler zu fühlen.
        </li>
        <li>
          <strong>Sport und Aktivitäten:</strong> Invisalign bietet Jugendlichen die Flexibilität,
          ihren Sport- und Aktivitätsroutinen uneingeschränkt nachzugehen. Die Aligner können
          während des Sports herausgenommen werden, um Verletzungen zu vermeiden.
        </li>
        <li>
          <strong>Soziale Interaktionen:</strong> Die Möglichkeit, die Aligner zum Essen oder bei
          sozialen Anlässen herauszunehmen, erleichtert es den Jugendlichen, sich mit Freunden zu
          treffen und ihr soziales Leben normal fortzusetzen.
        </li>
        <li>
          <strong>Pädagogische Unterstützung:</strong> Invisalign bietet spezielle Funktionen wie
          Compliance-Indikatoren und spezielle Aligner für das Wachstum des Kiefers bei
          Jugendlichen. Dies hilft dabei, die Behandlung zu überwachen und die Einhaltung des
          Behandlungsplans sicherzustellen.
        </li>
      </ul>

      <h2 className="mt-10">Behandlung nach Schweregrad - IOTN</h2>
      <p>
        Die Dauer der Behandlung mit Clear Aligners kann tatsächlich je nach Schweregrad der
        individuellen Zahnfehlstellung (gemessen am Index of Orthodontic Treatment Need, IOTN)
        variieren. Eine genaue Diagnostik und umfassende Therapieplanung sind entscheidende
        Erfolgsfaktoren für eine effektive Clear Aligner-Behandlung.
      </p>
      <p>
        Im Rahmen der Diagnostik werden verschiedene Untersuchungen durchgeführt, um den genauen
        Zustand der Zahnfehlstellung zu erfassen. Dazu gehören Röntgenbilder, Abdrücke der Zähne
        und möglicherweise auch digitale 3D-Scans. Basierend auf diesen Informationen wird ein
        Therapieplan entwickelt, der die spezifischen Ziele und Bedürfnisse des Patienten
        berücksichtigt.
      </p>
      <p>
        Die Herstellung der Set-Up-Modelle, die die gewünschte Zahnposition am Ende der Behandlung
        darstellen, ist ein weiterer wichtiger Schritt. Diese Modelle werden verwendet, um die
        Aligner individuell anzufertigen und sicherzustellen, dass sie optimal auf die Zähne passen
        und die gewünschten Bewegungen erreichen.
      </p>
      <p>
        Die Fertigung der Clear Aligner erfolgt im Labor unter Verwendung fortschrittlicher
        computergestützter Technologie. Jeder Aligner wird speziell für den Patienten hergestellt
        und ist darauf ausgelegt, die Zähne schrittweise in die gewünschte Position zu bewegen.
      </p>
      <p>
        Es ist wichtig zu betonen, dass die Zielerreichung und die Behandlungsdauer auch von der
        Mitarbeit des Patienten abhängen. Das Tragen der Aligner für die vorgeschriebene Tragezeit
        pro Tag und das regelmäßige Einsetzen neuer Aligner gemäß dem Behandlungsplan sind
        entscheidend, um den gewünschten Fortschritt zu erzielen.
      </p>

      <h2 className="mt-10">
        Invisalign Clear Aligners Zahnspange Rückerstattungsmöglichkeiten durch Krankenkasse oder
        Zusatzversicherungen
      </h2>
      <p>
        Je nach Schwergrad der Zahnfehlstellung und Art der Behandlung, werden von Krankenkassen
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

      <h2 className="mt-10">Unsichtbare Zahnspange Wien - Invisalign Clear Aligners in meiner Praxis</h2>
      <p>
        1200 Wien nähe zu 1210, 1190, 1220, 1020 und Klosterneuburg.
      </p>

      <h3 className="mt-8">Aligners</h3>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellungen in unserer Kieferorthopädie. Termin nur
          nach Vereinbarung!
        </li>
        <li>
          Behandlungsunterlagen für individuellen Behandlungsverlauf werden erstellt. Eine Diagnose
          mit Röntgen, Fotos und digitalen Scans erfolgt – ohne Abdrücke.
        </li>
        <li>
          Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art
          von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.
        </li>
        <li>
          Behandlungsbeginn. Einsetzen des Geräts und Aufklärung über Reinigung sowie Tragezeiten.
        </li>
        <li>Wichtige und notwendige Kontrolltermine alle 6-8 Wochen</li>
        <li>
          Behandlungsende. Entfernen der unsichtbaren Zahnspange und Besprechung des
          Behandlungsergebnisses.
        </li>
        <li>
          <strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses.
        </li>
      </ol>

      <p className="mt-6">
        <Link href={terminHref} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
          Kostenlose Erstberatung für Invisalign vereinbaren
        </Link>
      </p>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Invisible braces Vienna: innovative treatment with Invisalign in Vienna</h2>
          <p>The invisible brace treatment goes by several names, including „Invisible braces Vienna“ and „Invisalign Vienna“. This modern approach uses transparent aligner trays made with computer-aided technology in the lab.</p>
          <p>Invisible braces Vienna – also known as Invisalign clear aligners – allow both teenagers and adults to benefit from clear aligner technology.</p>
          <p>This aligner therapy is a state-of-the-art way to correct misalignment without brackets or wires. The trays apply gentle forces to move the teeth step by step towards the planned result.</p>
          <p>In some cases treatment with clear aligners can also be shorter than with traditional methods, with fewer visits.</p>
          <p>Every method has pros and cons. Suitability for the invisible brace should always be decided with a specialist orthodontist who considers your individual needs.</p>
          <h2 className="mt-10">Advantages and disadvantages of invisible braces</h2>
          <h3 className="mt-8">Advantages of Invisalign – clear aligner therapy</h3>
          <ul>
            <li><strong>Aesthetics:</strong> The aligners are almost invisible.</li>
            <li><strong>Comfort:</strong> More comfortable than fixed braces; smooth plastic, no irritation.</li>
            <li><strong>Removable:</strong> For eating, drinking and brushing – no dietary restrictions.</li>
            <li><strong>Precision:</strong> Individually made using 3D imaging and computer technology.</li>
            <li><strong>Time:</strong> In some cases treatment can be faster; check-ups often less time-consuming.</li>
            <li><strong>Daily life:</strong> Sport, playing instruments and events are easier as aligners can be removed.</li>
          </ul>
          <h3 className="mt-8">Disadvantages of Invisalign – clear aligner therapy</h3>
          <ul>
            <li><strong>Discipline:</strong> Must be worn 20–22 hours per day for the best result.</li>
            <li><strong>Food:</strong> Some foods (hard, sticky, strongly coloured) should be avoided.</li>
            <li><strong>Limits:</strong> Some complex or severe cases may be better with fixed braces.</li>
            <li><strong>Visits:</strong> Regular check-ups are still needed.</li>
          </ul>
          <p className="mt-6"><Link href={terminHref} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Book a free Invisalign consultation</Link></p>
          <h2 className="mt-10">Details of treatment with Invisalign, the invisible brace</h2>
          <p>Treatment uses a series of transparent aligners made individually for you. Each set is worn 12–14 days. We give patients 4–6 aligners to take home so you don’t need to come in every time.</p>
          <p>Details: consultation and planning with 3D imaging; aligners made in the Invisalign lab; wear 20–22 hours per day, change every 12–14 days; progress checks (first around 8 weeks); treatment duration typically 6–24 months depending on the case; after treatment, retainers are often used to stabilise the result.</p>
          <h2 className="mt-10">Invisalign for adults and teenagers</h2>
          <p>For adults, the invisible brace fits well with work. For teenagers: aesthetics and confidence; sport and activities; social situations; compliance indicators and growth-specific options.</p>
          <h2 className="mt-10">Treatment by severity – IOTN</h2>
          <p>Treatment duration with clear aligners depends on the severity of misalignment (IOTN). Diagnosis and planning are key. We use X-rays, impressions or 3D scans, set-up models and lab-made aligners. Patient cooperation (wear time and changing aligners on schedule) is essential.</p>
          <h2 className="mt-10">Invisalign clear aligners – reimbursement from health funds or supplementary insurance</h2>
          <p>Depending on severity and type of treatment, health funds or supplementary insurance may reimburse part of the cost. Click your fund: <a href="https://www.svs.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SVS</a>, <a href="https://www.bvaeb.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">BVA</a>, <a href="https://www.oegk.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">KFA</a>. For supplementary insurance, please contact your insurer.</p>
          <h2 className="mt-10">Invisible braces Vienna – Invisalign in our practice</h2>
          <p>1200 Vienna, near 1210, 1190, 1220, 1020 and Klosterneuburg.</p>
          <h3 className="mt-8">Aligners – the process</h3>
          <ol>
            <li>Free initial consultation. By appointment only!</li>
            <li>Treatment records. Diagnosis with X-rays, photos and digital scans – without impressions.</li>
            <li>Planning discussion. X-ray review and analysis of which brace/brackets are needed.</li>
            <li>Start of treatment. Fitting and advice on cleaning and wear.</li>
            <li>Check-ups every 6–8 weeks.</li>
            <li>End of treatment. Removal and discussion of the result.</li>
            <li><strong>Retention</strong> – stabilising the result.</li>
          </ol>
          <p className="mt-6"><Link href={terminHref} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">Book a free Invisalign consultation</Link></p>
        </>
      )}
    </PageContent>
  );
}
