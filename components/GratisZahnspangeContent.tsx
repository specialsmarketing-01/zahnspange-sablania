import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function GratisZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/gratis-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Gratis Zahnspange";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Seit Juli 2015 gibt es neue Regeln für die Gratis-Zahnspange!</h2>
      <p>
        Als Fachzahnarzt für Kieferorthopädie und qualifizierter
        Wahl-Kieferorthopäde der ÖGK biete ich auch die Gratiszahnspange an.
      </p>
      <p>
        Das bedeutet: <strong>PatientInnen bekommen 80% – 100% des Kassentarifs refundiert.</strong>
      </p>
      <figure className="mt-6">
        <Image
          src="/gratis-zahnspange/erwachsen-metal-brackets.jpg"
          alt="Festsitzende Gratis-Zahnspange mit Metall-Brackets"
          width={960}
          height={480}
          className="w-full rounded-xl shadow-soft object-cover"
        />
        <figcaption className="mt-2 text-sm text-gray-500">
          Festsitzende Gratis-Zahnspange mit Metall-Brackets.
        </figcaption>
      </figure>

      <h2 className="mt-10">Gratis-Zahnspange Wien, Voraussetzungen und Ihr Anspruch auf Rückerstattung</h2>
      <p>
        Anspruch haben Kinder und Jugendliche während und nach dem Zahnwechsel und bis zur
        Vollendung des 18. Lebensjahres.
      </p>

      <h3 className="mt-8">Zahnregulierung – Gratis Zahnspange, festsitzend oder abnehmbar: Voraussetzungen</h3>
      <ul>
        <li>
          Es muss eine schwere Zahn-Fehlstellung und/oder Kiefer-Fehlstellung vorliegen, um Anspruch
          auf eine Gratiszahnspange zu erhalten. Die Korrektur muss aus medizinischen Gründen
          erforderlich sein (<strong>IOTN 4 oder 5</strong>). Das wird in einer Erstberatung festgestellt.
          Schweregrad-Feststellung:&nbsp;
          <Link href={getHref("/online-termin", locale)}>Termin für Erstberatung vereinbaren</Link>.
        </li>
        <li>
          Vor Behandlungsbeginn (Gratis Zahnspange) ist ein Antrag bei der Krankenkasse einzureichen.
          Bei positiver Prüfung werden <strong>80–100% des Kassentarifs</strong> der festsitzenden Gratis
          Zahnspange rückerstattet.{" "}
          <em>
            Tipp: Erkundigen Sie sich bei der Krankenkasse bereits vor Beginn der Behandlung.
          </em>
        </li>
        <li>
          Durchführung ausschließlich mit <strong>Metall-Brackets</strong>. Aufzahlungen für z. B. Keramik-Brackets
          sind bei der Krankenkasse nicht zulässig.
        </li>
      </ul>

      <h3 className="mt-10">Alternativen zur Gratis-Zahnspange</h3>
      <p>
        <strong>Merke:</strong> Wenn ein Fehlstellung-Schweregrad IOTN 4 oder 5 vorliegt, Eltern ihren
        Kindern aber eine alternative Möglichkeit (ohne Zuschuss von der Krankenkassa) zur Gratis
        Zahnspange anbieten wollen, dann bieten wir unter anderem:
      </p>
      <ul>
        <li>Durchsichtige Zahnspange</li>
        <li>Keramik-Brackets</li>
        <li>Durchsichtige Schienen (unsichtbare Zahnspange) Clear Aligner, Invisalign</li>
        <li>Keramik-Zahnspange für Kinder</li>
        <li>Aligner-Behandlung</li>
      </ul>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/durchsichtige-zahnspange.jpg"
            alt="Durchsichtige Zahnspange"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Durchsichtige Zahnspange</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/keramik-brackets.jpg"
            alt="Keramik-Brackets"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Keramik-Brackets</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/clear-aligner-invisalign.jpg"
            alt="Clear Aligner / Invisalign"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Clear Aligner / Invisalign</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/keramik-kinder.jpg"
            alt="Keramik-Zahnspange für Kinder"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">
            Keramik-Zahnspange für Kinder
          </figcaption>
        </figure>
      </div>

      <h2 className="mt-10">Gratis-Zahnspange – Interzeptive Behandlung in der Wechselgebiss-Phase</h2>
      <p>
        Im <strong>Wechselgebiss</strong> (geeignet für Kinder zwischen ca. 6 und 10 Jahren) handelt es
        sich um eine Behandlung in der Frühphase – eine begrenzte Behandlung im Milch- oder
        Wechselgebiss.
      </p>
      <p>
        <strong>Dauer der Behandlung:</strong> maximal 1 Jahr. Danach wird eine Pause eingelegt. In der
        Folge finden regelmäßige Kontrollen im Abstand von 4–6 Monaten statt.
      </p>
      <p>
        <strong>Warum ist das so?</strong> Weil Kinder in dieser Phase Milchzähne verlieren und die
        bleibenden Zähne gerade durchbrechen. Im Alter von 12–13 Jahren wird erneut kontrolliert,
        ob eine weitere Zahnregulierung notwendig ist. Falls ja, erfolgt in der Regel eine Behandlung
        mit festsitzender Zahnspange.
      </p>

      <h2 className="mt-10">Kiefer-Zahnfehlstellungen, die unbedingt eine Behandlung erfordern</h2>
      <ul>
        <li>
          <strong>Habits</strong> – schlechte Gewohnheiten, die eine Kiefer- oder Zahn-Fehlstellung
          verursachen, z. B. Zungenpressen, falsche Schluckmuster, Daumenlutschen, Lippenpressen,
          Fingernägelkauen etc.
        </li>
        <li>
          <strong>Kreuzbiss</strong> seitlich (beidseitig oder einseitig), Kreuzbiss der Frontzähne /
          progener Zwangsbiss.
        </li>
        <li>Front offener Biss.</li>
        <li>
          Platzmangel durch verschiedene Gründe oder frühzeitiges Verlieren der Milchzähne.
        </li>
        <li>Tiefbiss / Deckbiss (Überbiss).</li>
        <li>
          Ausgeprägte Frontzahnstufe, Rücklage im Oberkiefer (Maxilla) – Klasse-III-Situationen.
        </li>
      </ul>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/front-offener-biss.jpg"
            alt="Front offener Biss"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Front offener Biss</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/tiefbiss-deepbite.jpg"
            alt="Tiefbiss (Deepbite)"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Tiefbiss (Deepbite)</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
          <Image
            src="/gratis-zahnspange/deckbiss-ueberbiss.jpg"
            alt="Deckbiss / Überbiss"
            width={480}
            height={320}
            className="h-40 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-gray-600">Deckbiss / Überbiss</figcaption>
        </figure>
      </div>

      <h2 className="mt-10">Gratis-Zahnspange – Hauptbehandlung im bleibenden Gebiss</h2>
      <p>
        Liegt eine Schweregrad-Fehlstellung von <strong>IOTN 4 oder IOTN 5</strong> vor, besteht
        grundsätzlich Anspruch auf Rückerstattung der Zahnspange. Diese „Gratis-Zahnspange“ für
        Kinder hat eine wichtige Voraussetzung: Es dürfen nur{" "}
        <strong>festsitzende Zahnspangen aus Metall</strong> verwendet werden.
      </p>
      <p>
        <strong>TIPP:</strong> Auch wenn der Schweregrad der Fehlstellung (IOTN) bereits feststeht,
        empfehle ich immer eine Rücksprache mit der Krankenkasse.
      </p>
      <p>
        Die Behandlungsdauer für eine festsitzende oder abnehmbare Gratis-Zahnspange ist natürlich
        vom Schweregrad der Zahn-Fehlstellung abhängig. In der Regel dauert die Behandlung mit
        einer festsitzenden Gratis-Zahnspange etwa <strong>18–24 Monate</strong>.
      </p>

      <h3 className="mt-8">Die abnehmbare Gratis-Zahnspange</h3>
      <p>
        Die abnehmbare Gratis-Zahnspange ist nur dann hilfreich, wenn sie{" "}
        <strong>mindestens 12–14 Stunden pro Tag</strong> getragen wird.
      </p>
      <p>
        <strong>Behandlungsdauer:</strong> etwa 1 Jahr.
      </p>

      <h2 className="mt-10">Gratis Zahnspange Wien: Wichtige Schritte zur Rückerstattung</h2>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellungen in unserer Kieferorthopädie. Termin nur
          nach Vereinbarung.
        </li>
        <li>
          Behandlungsunterlagen für den individuellen Behandlungsverlauf erstellen – Diagnose mit
          Röntgen, Fotos und digitalen Scans, immer ohne Abdrücke.
        </li>
        <li>
          Planbesprechung und Erklärung: Röntgenauswertung und Analyse-Gespräch, welche Art von
          Zahnspange und/oder Brackets im individuellen Fall notwendig ist.
        </li>
        <li>
          Behandlungsbeginn: Einsetzen des Geräts und Aufklärung über Reinigung und Tragezeiten.
        </li>
        <li>Wichtige und notwendige Kontrolltermine alle 6–8 Wochen.</li>
        <li>
          Behandlungsende: Entfernen der Spange und Besprechung des Behandlungsergebnisses.
        </li>
        <li>
          <strong>Retention</strong> – Beginn der Stabilisierung des Behandlungsergebnisses.
        </li>
      </ol>

      <h2 className="mt-10">
        Behandlungsmöglichkeiten bei Zahnfehlstellungen ohne Möglichkeit der Rückerstattung
      </h2>
      <p>
        Wenn Kinder keinen Schweregrad IOTN 4 oder 5 (Voraussetzung für eine Gratis-Zahnspange),
        sondern nur <strong>IOTN 2 oder 3</strong> haben, gibt es folgende Alternativen:
      </p>
      <ul>
        <li>
          Behandlung mit <strong>Keramik-Brackets</strong> – eine festsitzende Zahnspange.
        </li>
        <li>
          Behandlung mit <strong>Clear Alignern</strong> – durchsichtige Aligner oder durchsichtige
          Schienen.
        </li>
        <li>
          Behandlung mit der <strong>unsichtbaren Zahnspange</strong> – innenliegend (lingual).
        </li>
      </ul>

      <h2 className="mt-10">Kieferorthopädie und der genaue Ablauf einer Behandlung</h2>
      <ol>
        <li>
          Kostenlose Erstberatung für Zahnfehlstellungen in unserer Kieferorthopädie. Termin nur
          nach Vereinbarung.
        </li>
        <li>
          Behandlungsunterlagen für den individuellen Behandlungsverlauf erstellen – Diagnose mit
          Röntgen, Fotos und digitalen Scans, immer ohne Abdrücke.
        </li>
        <li>
          Planbesprechung und Erklärung – Röntgenauswertung und Analyse-Besprechung, welche Art von
          Zahnspange und/oder Brackets im individuellen Fall notwendig sind.
        </li>
        <li>
          Behandlungsbeginn – Einsetzen des Geräts und Aufklärung über Reinigung und Tragezeiten.
        </li>
        <li>Wichtige und notwendige Kontrolltermine alle 6–8 Wochen.</li>
        <li>
          Behandlungsende – Entfernen der Spange und Besprechung des Behandlungsergebnisses.
        </li>
        <li>
          <strong>Retention</strong> – der Beginn der Stabilisierung des Behandlungsergebnisses.
        </li>
      </ol>

      <p className="mt-6 text-gray-600">
        Den gesamten Ablauf in meiner Kieferorthopädie finden Sie{" "}
        <Link
          href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)}
          className="text-accent font-medium hover:underline"
        >
          hier im Detail erklärt
        </Link>
        .
      </p>
    </PageContent>
  );
}

