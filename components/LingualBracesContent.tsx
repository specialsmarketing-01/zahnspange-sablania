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

  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termin", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
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
            <Link href={terminHref} className="text-accent font-medium hover:underline">
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
            <li>Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!</li>
            <li>Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.</li>
            <li>Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.</li>
            <li>Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten.</li>
            <li>Wichtige und notwendige Kontrolltermine alle 6-8 Wochen.</li>
            <li>Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses.</li>
            <li><strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses.</li>
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
          <h2>Lingual Braces – Inner (Lingual) Braces</h2>
          <p>
            Lingual braces are invisible braces where the brackets are placed on the inside of the teeth (tongue/palate side) rather than on the outside. Unlike the classic visible brace fixed to the outer surface, the invisible inner brace is especially suitable for patients who need orthodontic treatment but want to keep it discreet.
          </p>
          <p>
            Thanks to modern technology and advances in orthodontics, it is now possible to treat misalignments with inner brackets as successfully as with outer brackets.
          </p>
          <p>
            The inner brace, brackets and wires are made individually in state-of-the-art specialist laboratories. Every tooth, every surface, size and shape is different. The biomechanics also differ from outer brackets.
          </p>
          <h2 className="mt-10">Inner (lingual) braces – advantages and disadvantages</h2>
          <p>
            Treatment duration depends on the type of misalignment, the methods used and the technique. Minor cases may need a few weeks or months; more severe cases, several months or years. Because of the higher effort involved, the cost of inner braces is also significantly higher than aligners or outer braces.
          </p>
          <p>
            Find out more here:{" "}
            <Link href={terminHref} className="text-accent font-medium hover:underline">
              Book a free initial consultation
            </Link>
          </p>
          <p className="font-medium">
            Important check-up appointments (inner braces) take place every 6–8 weeks!
          </p>
          <h3 className="mt-8">Advantages of lingual braces</h3>
          <ul>
            <li>
              This fixed inner brace is not visible from the outside – ideal for patients who want to correct their misalignment unnoticed (e.g. politicians, singers, models, commuters with a lot of customer contact).
            </li>
            <li>
              Almost all misalignments can be corrected with inner braces, in both teenagers and adults. Lower caries risk because the inner brace is near the salivary glands: regular rinsing and remineralisation of the tooth surface.
            </li>
          </ul>
          <h3 className="mt-8">Disadvantages of lingual braces</h3>
          <ul>
            <li>You need to get used to speaking at first – S and C sounds can be harder to pronounce initially.</li>
            <li>Eating and chewing can be uncomfortable at first.</li>
            <li>A fixed inner brace that is not removable, unlike aligner trays.</li>
          </ul>
          <h2 className="mt-10">Lingual braces and the process at our practice</h2>
          <ol>
            <li>Free initial consultation for misalignment at our orthodontic practice. By appointment only!</li>
            <li>Create treatment records for your individual plan. Diagnosis with X-rays, photos and digital scans. Always without impressions.</li>
            <li>Planning discussion and explanation. X-ray review and analysis of which type of brace and/or brackets are needed for your case.</li>
            <li>Start of treatment. Fitting the appliance and advice on cleaning and wear times.</li>
            <li>Important check-up appointments every 6–8 weeks.</li>
            <li>End of treatment. Removal of the brace and discussion of the result.</li>
            <li><strong>Retention</strong> – the start of stabilising the treatment result.</li>
          </ol>
          <p className="mt-6">
            <Link href={ablaufHref} className="text-accent font-medium hover:underline">
              Full details of the treatment process at our practice
            </Link>
          </p>
        </>
      )}
    </PageContent>
  );
}
