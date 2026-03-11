import Link from "next/link";
import Image from "next/image";
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
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {locale === "de" && (
        <>
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
      <div className="mt-4 max-w-2xl mx-auto">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          <Image
            src="/braces-for-teen/Braces-1-628x649.png"
            alt="Keramikbrackets mit Bögen in Zahnfarbe"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
          />
        </div>
      </div>
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

      <div className="mt-4 max-w-2xl mx-auto">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          <Image
            src="/zahnspange-fuer-erwachsene/Lingualtechnik-640-\u00d7-500-px-e1670235670602.png"
            alt="Lingualtechnik Zahnspange – innenliegende Zahnspange"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 768px"
          />
        </div>
      </div>

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
        <Link href={ablaufHref} className="text-accent font-medium hover:underline">
          Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.
        </Link>
      </p>
        </>
      )}
      {locale === "en" && (
        <>
          <h2>Invisalign, invisible braces, clear aligner orthodontics for adults</h2>
          <p>Treatment is generally possible at any age. For adult braces there are some special considerations. Whether treatment is advisable and feasible only becomes clear after an examination of the teeth, gums and jaw. Then follows the diagnosis and assessment of the expected outcome with braces.</p>
          <h2 className="mt-10">Braces for adults</h2>
          <p>As with children, there are various options for orthodontic treatment in adults. The following types are possible:</p>
          <h3 className="mt-8">Ceramic brackets</h3>
          <p><strong>Metal brackets</strong> – the fixed brace for adults. With clear ceramic brackets you benefit from a much improved appearance.</p>
          <p>Brackets are bonded directly to the outside of the teeth and are popular with both teenagers and adults. Archwires in tooth colour can also be used.</p>
          <p>Braces for adults</p>
          <h3 className="mt-8">Lingual brace</h3>
          <p>This inner brace works with high precision and is almost completely invisible, all day.</p>
          <p><strong>Plus:</strong> Invisible! The brace cannot be seen from the outside.</p>
          <p><strong>Minus:</strong> At the start, S and C sounds can be harder to pronounce when speaking.</p>
          <h3 className="mt-8">Invisalign clear aligner trays</h3>
          <p>Another option for treating misalignment. Correction is done with individually made trays. Almost invisible and removable.</p>
          <p>These trays are often worn by adults and should be worn both during the day and at night. They are removed for eating and brushing.</p>
          <h2 className="mt-10">Reimbursement options for adult braces</h2>
          <p>Depending on the severity of misalignment and type of treatment, health insurers or supplementary insurance may reimburse part of the cost.</p>
          <p><strong>Information on health fund reimbursement:</strong></p>
          <p>Please click on your fund – you will be taken to their information page.</p>
          <ul className="list-none space-y-2">
            <li><a href="https://www.svs.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SVS</a></li>
            <li><a href="https://www.bvaeb.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">BVA</a></li>
            <li><a href="https://www.oegk.at" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">KFA</a></li>
          </ul>
          <p><strong>Information on reimbursement from supplementary insurance:</strong></p>
          <p>Please contact your insurer; we do not have access to individual policy terms.</p>
          <h2 className="mt-10">Orthodontic treatment for adults – the process</h2>
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
