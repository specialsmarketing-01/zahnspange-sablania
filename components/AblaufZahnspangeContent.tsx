import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

const GALLERY_IMAGES = [
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (1).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (1).png",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (2).png",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (3).png",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (4).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (5).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (6).jpg",
  "/ablauf-zahnspange-kieferorthopaedie/ablauf-zahnspange-kieferorthopaedie (7).jpg",
] as const;

export default function AblaufZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/ablauf-zahnspange-kieferorthopaedie";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Ablauf Zahnspange & Kieferorthopädie";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2 className="mt-4">Ablauf Zahnspange bei uns</h2>
      <p>
        Zunächst vereinbaren Sie einen Termin für eine <strong>kostenfreie Erstberatung</strong> zur
        Behandlung Ihrer Zahnfehlstellung – per Telefon, via E‑Mail oder ganz einfach über unsere{" "}
        <Link href={getHref("/online-termin", locale)} className="text-accent font-medium hover:underline">
          Online-Terminvereinbarung
        </Link>
        .
      </p>

      <h3 className="mt-8">Schnellnavigation – Ihre Termine im Überblick</h3>
      <ol>
        <li>Termin Nr. 1: Kostenfreie Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie</li>
        <li>Termin Nr. 2: Behandlungsunterlagen für den individuellen Behandlungsverlauf</li>
        <li>Termin Nr. 3: Besprechung der Zahnfehlstellung und des individuellen Behandlungsplanes</li>
        <li>Termin Nr. 4: Behandlungsbeginn</li>
        <li>Termin Nr. 5: Digitale Kontrolltermine</li>
        <li>Termin Nr. 6: Abschluss der Korrekturphase &amp; Beginn der Stabilisierung</li>
      </ol>

      <h2 className="mt-10">1. Kostenfreie Erstberatung für Zahnfehlstellung</h2>
      <p>
        In dieser Erstberatung besprechen wir im Detail alle vorhandenen Beschwerden und Ihre Wünsche zur
        Korrektur der Zahnfehlstellung. Ziel ist es, die effizienteste und schonendste
        Kieferorthopädie-Therapieform für Ihre Situation zu finden.
      </p>
      <p>
        Nach der detaillierten Befragung der Patient:innen und dem notwendigen Panorama-Röntgen (in unserer
        Kieferorthopädie) zur Beurteilung des Gesamtzustandes und zur Abklärung von kariösen Kavitäten,
        Wurzelbehandlungen, Anlage der Zähne etc. werden die Zähne auf Karies, Zahnfleisch,
        Gebissentwicklung, Zahnfehlstellungen sowie Fehlfunktionen wie falsche Schluckmuster und die
        Zungenposition untersucht.
      </p>
      <p>
        Am Ende der Erstberatung erhalten Sie eine erste grobe Diagnose Ihrer Zahnfehlstellung sowie alle
        wichtigen Informationen zur Behandlung:
      </p>
      <ul>
        <li>Welche Behandlungsoptionen möglich sind</li>
        <li>Der Schweregrad der Zahnfehlstellung (IOTN 1–5)</li>
        <li>
          Welche Behandlungsmethode am besten passt – z. B. feste Zahnspange (Metall), durchsichtige
          Zahnspange/Invisalign (Aligner-Schienen) oder Lingualzahnspange (innenliegende Zahnspange)
        </li>
        <li>Die Kosten und mögliche Rückerstattung durch die Krankenkasse</li>
        <li>Ungefähre Behandlungsdauer und mögliche Behandlungsziele</li>
        <li>Die Möglichkeit, verschiedene Apparaturen und Modelle anzusehen</li>
      </ul>

      <h2 className="mt-10">2. Behandlungsunterlagen für den individuellen Behandlungsverlauf</h2>
      <p>
        Im zweiten Schritt erstellen wir alle notwendigen <strong>Behandlungsunterlagen</strong>, die auch
        für Krankenkassen und Versicherungen erforderlich sind:
      </p>
      <ul>
        <li>Fotos der Zahnfehlstellung</li>
        <li>Digital-Scan des Gebisses</li>
        <li>Fernröntgen-Seitenbild (FRS)</li>
      </ul>

      <h2 className="mt-10">
        3. Kieferorthopädische Besprechung der Zahnfehlstellung und des individuellen Behandlungsplanes
      </h2>
      <p>
        Alle Unterlagen werden <strong>digital ausgewertet</strong>. Sie erhalten einen detaillierten,
        genau auf Ihre Zahnfehlstellung und Ihre Bedürfnisse ausgerichteten Behandlungsplan.
      </p>
      <p>
        Alternative Behandlungsmöglichkeiten und die genaue Analyse der Zahnfehlstellung sind ebenfalls ein
        wichtiger Bestandteil dieser Besprechung.
      </p>

      <h2 className="mt-10">4. Behandlungsbeginn – Einsetzen der Zahnspange</h2>
      <p>
        Beim kieferorthopädischen Behandlungsbeginn setzen wir die erste Invisalign-/Clear-Aligner-Schiene
        oder die festsitzende Zahnspange ein. Bei der festen Zahnspange werden individuell angefertigte
        Brackets mit höchster Präzision an Ihren Zähnen befestigt.
      </p>
      <p>
        Für diesen Termin nehmen wir uns bewusst mehr Zeit – die Dauer liegt in der Regel zwischen{" "}
        <strong>40 und 60 Minuten</strong>. Sie erhalten alle Informationen rund um die Behandlung, z. B.
        zur Mundhygiene und zu geeigneten Essgewohnheiten.
      </p>

      <h2 className="mt-10">5. Kieferorthopädie und digitale Kontrolltermine</h2>
      <p>
        <strong>Kontrolltermine</strong> sind während der laufenden Behandlung entscheidend, um den
        geplanten Verlauf beurteilen und digital dokumentieren zu können. Nur so können wir auf
        unvorhersehbare Entwicklungen rechtzeitig reagieren.
      </p>
      <p>
        In Abständen von <strong>4 bis 8 Wochen</strong> (die Termine werden vorab vereinbart) kommen Sie
        in unsere Praxis. Wir prüfen, ob Ihre Behandlung und die Korrektur der Zahn‑ bzw.
        Kieferfehlstellung wie geplant verlaufen. Eine Kontrolle Ihrer Invisalign-Aligner oder Ihrer
        Zahnspange ist dabei selbstverständlich.
      </p>
      <p>
        Falls nötig, reaktivieren und optimieren wir Ihre Zahnspange und/oder Schienen – bei Bedarf auch
        mit einem neuen Draht. Von Beginn an und auch während der Behandlung werden Fotos gemacht, um den
        Behandlungsverlauf genau nachvollziehen und rechtzeitig Korrekturen vornehmen zu können.
      </p>
      <p>
        <strong>Merke:</strong> Die Mitarbeit der Patient:innen – insbesondere von Kindern – ist
        entscheidend. Diese Kontrolltermine dienen auch dazu, auf Fehler hinzuweisen, die regelmäßige
        Mundhygiene zu besprechen und zu prüfen, ob z. B. Gummizüge konsequent getragen werden.{" "}
        <em>Das Nichttragen führt automatisch zu einem schlechteren Behandlungsergebnis.</em>
      </p>

      <h2 className="mt-10">
        6. Abschluss der Korrekturphase und Beginn der Stabilisierung (Retention)
      </h2>
      <p>
        Damit die erreichte Zahnstellung dauerhaft schön und stabil bleibt, ist eine konsequente{" "}
        <strong>Stabilisierungsphase (Retention)</strong> notwendig.
      </p>
      <p>
        Dafür befestigen wir an der Rückseite der Frontzähne einen kleinen, unsichtbaren Retainer-Draht und
        fertigen passgenaue Stabilisierungsschienen für Sie an. Auch nach Ende der aktiven Behandlung
        kontrollieren wir die Stabilität der neuen Zahnstellung regelmäßig.
      </p>
      <p>
        Mehr Details zur Stabilisierung finden Sie auf unserer Seite{" "}
        <Link href={getHref("/kfo-retainer", locale)} className="text-accent font-medium hover:underline">
          Retention – Stabilisierungsphase
        </Link>
        .
      </p>
      <p>
        Zähne haben lebenslang die Tendenz, sich in ihre ursprüngliche Position zurückzubewegen. Damit der
        erzielte Behandlungserfolg langfristig stabil bleibt, empfehlen wir mindestens{" "}
        <strong>zweimal pro Jahr</strong> eine Kontrolle des Retainer-Drahtes und der Schienen.
      </p>

      <h2 className="mt-12">Einblicke in unsere Behandlung – Bildergalerie</h2>
      <p>
        Die folgenden Aufnahmen geben Ihnen einen visuellen Eindruck vom Ablauf der Zahnspangenbehandlung
        in unserer Praxis.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((src, i) => (
          <figure key={src} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-soft">
            <div className="relative h-48 w-full">
              <Image
                src={src}
                alt={`Ablauf Zahnspange – Impression ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </figure>
        ))}
      </div>
    </PageContent>
  );
}

