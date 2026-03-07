import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

export default function ZahnspangeKinderContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnspange-fuer-kinder";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnspange für Kinder";
  const lead = leads[dePath];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      <h2>Zahnspange für Kinder, Frühbehandlung im Milch- und Wechselgebiss</h2>
      <p>
        Eine kieferorthopädische oder Zahnregulierung Behandlung im Milchgebiss ist in der Regel
        nur bei einer Zahnfehlstellung bei Kindern im Alter zwischen 6-10 Jahren notwendig.
      </p>

      <h2 className="mt-10">Zahnspangen für Kinder, die Diagnose und der richtige Zeitpunkt ist sehr wichtig.</h2>
      <ul>
        <li>
          Die richtige Zeitpunkt ist entscheidend: Nur so kann das Gesichtsschädel-Wachstum, der
          Zahnwechsel und der Zahndurchbruch für die Behandlung optimal genutzt werden.
        </li>
        <li>
          Nach der Behandlung, die aktive Phase der Therapie, erfolgt die wichtige Retention-Phase
          zur Stabilisierung des Behandlungsergebnisses.
        </li>
        <li>Manchmal ist auch eine Behandlung in zwei Phasen sinnvoll.</li>
      </ul>

      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>
          In Phase 1 werden Kiefer- oder Zahnfehlstellungen (z.B. wachstumsabhängige Fehlstellung)
          oder Anomalien mit herausnehmbaren Geräten im Milchgebiss, im frühen Wechselgebiss,
          korrigiert. Für die optimale Behandlung der Fehlstellung (Unterkiefer-Rücklage, Rücklage
          des Oberkiefers) ist Wachstum unerlässlich.
        </li>
        <li>Phase 2: ab dem 12ten Lebensjahr, wenn Kinder Milchzähne verlieren.</li>
      </ol>

      <ul className="mt-4">
        <li>
          Ungünstige Wachstumseinflüsse können die Fehlstellung natürlich verstärken und sind
          manchmal Grund dafür, dass kieferorthopädische Prognosen negativ beeinflusst werden.
        </li>
      </ul>

      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>
          Progenie bezeichnet eine Kieferfehlstellung, die durch einen umgekehrten Überbiss der
          Schneidezähne (frontaler Kreuzbiss) als Leitsymptom charakterisiert ist.
        </li>
        <li>
          Skelettale Entwicklungen sind für die zeitliche Planung einer kieferorthopädischen
          Therapie von großer Bedeutung.
        </li>
      </ol>

      <ul className="mt-4">
        <li>
          Bei extremen Dysgnathien (Zusammenfassung von Fehlentwicklungen der Zähne, der Kiefer
          und/oder des Kausystems) sollte versucht werden, ungünstigen Entwicklungen durch
          präventive oder frühtherapeutische Maßnahmen entgegenzuwirken.
        </li>
      </ul>

      <h2 className="mt-10">Ihr Kind benötigt eine Zahnspange? Hier der typische Behandlungsverlauf:</h2>
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

      <h2 className="mt-10">Beispiele: Kinder die Kieferorthopädie / Zahnregulierung benötigen:</h2>

      <h3 className="mt-8">Platzhalter</h3>
      <p>
        <strong>Fixed Platzhalter:</strong> Wenn Kinder frühzeitig Milchzähne verlieren, muss Platz
        für die nachkommenden Zähne gehalten werden.
      </p>
      <p>Platzhalter-Spacemaintainer</p>

      <h3 className="mt-8">Engstand-Crowding</h3>
      <p>
        <strong>Primär Engstand:</strong> ist hereditär, ein Missverhältnis zwischen Kiefergröße
        und Zahngröße, entweder die Zähne zu groß oder Kiefer zu klein ist.
      </p>
      <p>
        <strong>Sekundäre Engstand:</strong> ist erworben, entsteht durch frühzeitig Milchzahn
        Verlust.
      </p>

      <h3 className="mt-8">Traumatische Tiefbiss-überbiss</h3>

      <h3 className="mt-8">Lateraler Kreuzbiss</h3>
      <p>Lateraler Kreuzbiss mit Gefahr einer Wachstumshemmung des Oberkiefers</p>

      <h3 className="mt-8">Rücklage Oberkiefer</h3>
      <p>Rücklage Oberkiefer, KL 3 Wachstum-hemmung im Oberkiefer</p>

      <h3 className="mt-8">Milchgebissprogenie-Frontkreuzbiss</h3>
      <p>Rücklage Oberkiefer, KL 3 Wachstum-hemmung im Oberkiefer</p>
    </PageContent>
  );
}
