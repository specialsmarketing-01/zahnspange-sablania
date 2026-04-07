import type { ReactNode } from "react";
import LegalSection from "@/components/datenschutz/LegalSection";
import SummaryCard from "@/components/datenschutz/SummaryCard";

function DefinitionAccordion({
  title,
  begriff,
  erlaeuterung,
}: {
  title: string;
  begriff: ReactNode;
  erlaeuterung: ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white shadow-soft open:shadow-soft-lg">
      <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-primary transition-colors hover:bg-primary/[0.04] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span>{title}</span>
          <span className="text-accent transition-transform group-open:rotate-180" aria-hidden>
            ▼
          </span>
        </span>
      </summary>
      <div className="space-y-4 border-t border-gray-100 px-5 pb-5 pt-4 text-gray-700">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-muted">Begriffsbestimmung</h4>
          <div className="mt-2 text-sm leading-relaxed">{begriff}</div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-muted">Erläuterung</h4>
          <div className="mt-2 text-sm leading-relaxed">{erlaeuterung}</div>
        </div>
      </div>
    </details>
  );
}

export function LegalPart5() {
  return (
    <>
      <LegalSection id="online-buchungssysteme-einleitung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Online-Buchungssysteme Einleitung</h2>
        <SummaryCard title="Online-Buchungssysteme Datenschutzerklärung Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Besucher der Website
            </li>
            <li>
              <strong>Zweck:</strong> Verbesserung der Nutzererfahrung und Organisation
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> Welche Daten verarbeitet werden, hängt stark von den verwendeten Diensten
              ab. Meist handelt es sich um IP-Adresse, Kontakt- und Bezahldaten und/oder technische Daten. Mehr Details dazu
              finden Sie bei den jeweils eingesetzten Tools.
            </li>
            <li>
              <strong>Speicherdauer:</strong> abhängig von den eingesetzten Tools
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
              (Berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was ist ein Online-Buchungssystem?</h3>
          <p>
            Damit Sie über unsere Website Buchungen vornehmen können, nutzen wir ein oder mehrere Buchungssysteme. Termine
            etwa können so ganz einfach online erstellt werden. Ein Buchungssystem ist eine in unsere Website eingebundene
            Softwareanwendung, die verfügbare Ressourcen (wie zum Beispiel freie Termine) anzeigt und über die Sie direkt
            online buchen und meist auch bezahlen können. Sie kennen wahrscheinlich solche Buchungssysteme bereits aus der
            Gastronomie oder Hotellerie. Mittlerweile werden solche Systeme aber in den verschiedensten Branchen angewandt.
            Buchungssysteme können je nach Tool und Einstellungen sowohl intern für uns als auch für Kunden wie Sie genutzt
            werden. Dabei werden in der Regel auch personenbezogene Daten von Ihnen erhoben und gespeichert.
          </p>
          <p>
            Meistens funktioniert die Buchung wie folgt: Sie finden auf unsere Website das Buchungssystem, in dem Sie per
            Mausklick und Angaben Ihrer Daten direkt einen Termin für eine Dienstleistung buchen und meist auch gleich
            bezahlen können. Es kann sein, dass Sie über ein Formular verschiedene Angaben über Ihre Person eintragen
            können. Bitte seien Sie sich bewusst, dass alle von Ihnen eingegebenen Daten in einer Datenbank gespeichert und
            verwaltet werden können.
          </p>
          <h3 className="text-lg font-semibold text-primary">Warum nutzen wir ein Online-Buchungssystem?</h3>
          <p>
            Wir verstehen unsere Website in gewisser Weise auch als freie Dienstleistung für Sie. Sie sollen hilfreiche
            Informationen erhalten und sich auf unsere Seite rundum wohl fühlen. Dazu gehört auch ein Online-Service, das Ihnen
            das Buchen von Terminen bzw. Dienstleistungen so einfach wie möglich macht. Vorbei sind die Zeiten, in denen Sie
            umständlich via Telefon oder E-Mail tagelang auf eine Buchungsbestätigung warten mussten. Mit einem
            Online-Buchungssystem haben Sie nach wenigen Klicks alles erledigt und können sich wieder um andere Dinge kümmern.
            Auch für uns erleichtert das System das Management aller Buchungen und Termine. Daher betrachten wir ein solches
            Buchungssystem sowohl für Sie als auch für uns als absolut sinnvoll.
          </p>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden verarbeitet?</h3>
          <p>
            Welche Daten genau verarbeitet werden, können wir Ihnen in diesem allgemeinen Informationstext über Buchungssystem
            natürlich nicht sagen. Das ist stets vom verwendeten Tool und den darin enthaltenen Funktionen und Möglichkeiten
            abhängig. Viele Buchungssysteme bieten neben der herkömmlichen Buchungsfunktion auch noch eine Reihe an weiteren
            Features an. So haben beispielsweise viele Systeme auch ein externes Online-Zahlsystem (z. B. von Stripe, Klarna
            oder Paypal) und eine Kalender-Synchronisierungsfunktion integriert. Dementsprechend können je nach Funktionen
            unterschiedliche und unterschiedlich viele Daten verarbeitet werden. Für gewöhnlich werden Daten wie IP-Adresse,
            Name und Kontaktdaten, technische Angaben zu Ihrem Gerät und Zeitpunkt einer Buchung verarbeitet. Wenn Sie im
            System auch eine Zahlung vornehmen, werden auch Bankdaten wie Kontonummer, Kreditkartennummer, Passwörter, TANs usw.
            gespeichert und an den jeweiligen Zahlungsanbieter weitergegeben. Wir empfehlen Ihnen die jeweilige
            Datenschutzerklärung des verwendeten Tools genau durchzulesen, damit Sie wissen, welche Daten von Ihnen konkret
            verarbeitet werden.
          </p>
          <h3 className="text-lg font-semibold text-primary">Dauer der Datenverarbeitung</h3>
          <p>
            Jedes Buchungssystem speichert Daten unterschiedlich lange. Darum können wir über die Dauer der Datenverarbeitung
            hier noch keine konkreten Angaben geben. Grundsätzlich werden allerdings personenbezogene Daten immer nur so lange
            gespeichert, wie es zur Bereitstellung der Dienste unbedingt nötig ist. Buchungssystem verwenden in der Regel auch
            Cookies, die Informationen unterschiedlich lange speichern. Manche Cookies werden sofort nach Verlassen der Seite
            wieder gelöscht, andere können einige Jahre gespeichert werden. In unserem Abschnitt „Cookies“ erfahren Sie mehr
            darüber. Schauen Sie sich bitte auch die jeweiligen Datenschutzerklärungen der Anbieter an. Darin sollte erläutert
            werden, wie lange Ihre Daten im konkreten Fall gespeichert werden.
          </p>
          <h3 className="text-lg font-semibold text-primary">Widerspruchsrecht</h3>
          <p>
            Wenn Sie der Datenverarbeitung durch ein Buchungssystem zugestimmt haben, haben Sie natürlich auch immer die
            Möglichkeit und das Recht diese Einwilligung zu widerrufen. Seien Sie sich also bitte stets bewusst, dass Sie
            Rechte in Bezug auf Ihre personenbezogenen Daten haben und diese Rechte auch jederzeit wirkend machen können. Wenn
            Sie nicht wollen, dass personenbezogene Daten verarbeitet werden, dann dürfen auch keine personenbezogenen Daten
            verarbeitet werden. So einfach ist das. Am einfachsten widerrufen Sie die Datenverarbeitung über ein
            Cookie-Consent-Tool oder über andere angebotene Opt-Out-Funktionen. Die Datenspeicherung durch Cookies können Sie
            zum Beispiel auch direkt in Ihrem Browser verwalten. Bis zu Ihrem Widerruf bleibt die Rechtmäßigkeit der
            Datenverwaltung unberührt.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Wenn Sie eingewilligt haben, dass Buchungssysteme eingesetzt werden dürfen, ist die Rechtsgrundlage der
            entsprechenden Datenverarbeitung diese Einwilligung. Sie stellt laut Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) die
            Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie durch Buchungssysteme vorkommen kann, dar.
          </p>
          <p>
            Weiters haben auch wir ein berechtigtes Interesse, Buchungssysteme zu verwenden, weil wir damit einerseits unser
            Kundenservice erweitern und andererseits unsere interne Buchungsorganisation optimieren. Die dafür entsprechende
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen die Tools gleichwohl nur ein,
            soweit Sie eine Einwilligung erteilt haben. Das wollen wir an dieser Stelle unbedingt nochmals festgehalten haben.
          </p>
          <p>
            Informationen zu speziellen Buchungssystemen erhalten Sie – sofern vorhanden – in den folgenden Abschnitten.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="erklaerung-verwendeter-begriffe">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Erklärung verwendeter Begriffe</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei
            technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische
            Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse)
            zu verwenden. Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische
            Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht
            ausreichend eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen
            handelt, werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          <DefinitionAccordion
            title="Auftragsverarbeiter"
            begriff={
              <>
                <p className="font-medium text-primary">Begriffsbestimmung nach Artikel 4 der DSGVO</p>
                <p className="mt-2">Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <p className="mt-2 italic">
                  „Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
                  personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;
                </p>
              </>
            }
            erlaeuterung={
              <p>
                Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich.
                Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw.
                jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter können folglich,
                neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter, Bezahlungs- oder
                Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.
              </p>
            }
          />
          <DefinitionAccordion
            title="Einwilligung"
            begriff={
              <>
                <p className="font-medium text-primary">Begriffsbestimmung nach Artikel 4 der DSGVO</p>
                <p className="mt-2">Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <p className="mt-2 italic">
                  „Einwilligung“ der betroffenen Person jede freiwillig für den bestimmten Fall, in informierter Weise und
                  unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen
                  bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie
                  betreffenden personenbezogenen Daten einverstanden ist;
                </p>
              </>
            }
            erlaeuterung={
              <p>
                In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das
                bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie
                der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und
                so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen,
                dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine Einwilligung
                natürlich auch schriftlich, also nicht über ein Tool, erfolgen.
              </p>
            }
          />
          <DefinitionAccordion
            title="Personenbezogene Daten"
            begriff={
              <>
                <p className="font-medium text-primary">Begriffsbestimmung nach Artikel 4 der DSGVO</p>
                <p className="mt-2">Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <p className="mt-2 italic">
                  „personenbezogene Daten“ alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
                  Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person
                  angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
                  Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die
                  Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder
                  sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;
                </p>
              </>
            }
            erlaeuterung={
              <>
                <p>
                  Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren können. Das sind in der
                  Regel Daten wie etwa:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-primary">
                  <li>Name</li>
                  <li>Adresse</li>
                  <li>E-Mail-Adresse</li>
                  <li>Post-Anschrift</li>
                  <li>Telefonnummer</li>
                  <li>Geburtsdatum</li>
                  <li>
                    Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder
                    Matrikelnummer
                  </li>
                  <li>Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
                </ul>
                <p className="mt-3">
                  Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre IP-Adresse zu den personenbezogenen Daten. IT-Experten
                  können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in weiterer Folge Sie als
                  Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer IP-Adresse eine Rechtsgrundlage im
                  Sinne der DSGVO. Es gibt auch noch sogenannte „besondere Kategorien“ der personenbezogenen Daten, die auch
                  besonders schützenswert sind. Dazu zählen:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-primary">
                  <li>rassische und ethnische Herkunft</li>
                  <li>politische Meinungen</li>
                  <li>religiöse bzw. weltanschauliche Überzeugungen</li>
                  <li>die Gewerkschaftszugehörigkeit</li>
                  <li>
                    genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden
                  </li>
                  <li>
                    biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen Merkmalen,
                    die eine Person identifizieren können).Gesundheitsdaten
                  </li>
                  <li>Daten zur sexuellen Orientierung oder zum Sexualleben</li>
                </ul>
              </>
            }
          />
          <DefinitionAccordion
            title="Profiling"
            begriff={
              <>
                <p className="font-medium text-primary">Begriffsbestimmung nach Artikel 4 der DSGVO</p>
                <p className="mt-2">Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <p className="mt-2 italic">
                  „Profiling“ jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
                  personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
                  Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage,
                  Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel
                  dieser natürlichen Person zu analysieren oder vorherzusagen;
                </p>
              </>
            }
            erlaeuterung={
              <p>
                Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese
                Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen
                angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen
                auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an eine
                Zielgruppe ausgespielt werden kann.
              </p>
            }
          />
          <DefinitionAccordion
            title="Verantwortlicher"
            begriff={
              <>
                <p className="font-medium text-primary">Begriffsbestimmung nach Artikel 4 der DSGVO</p>
                <p className="mt-2">Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <p className="mt-2 italic">
                  „Verantwortlicher“ die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein
                  oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                  entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der
                  Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner
                  Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;
                </p>
              </>
            }
            erlaeuterung={
              <p>
                In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der
                “Verantwortliche”. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister weitergeben, sind diese
                “Auftragsverarbeiter”. Dafür muss ein “Auftragsverarbeitungsvertrag (AVV)” unterzeichnet werden.
              </p>
            }
          />
        </div>
      </LegalSection>

      <LegalSection id="schlusswort">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Schlusswort</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte
            Datenschutzerklärung „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer
            Datenschutzerklärung sehen, nehmen wir den Schutz Ihrer persönlichen Daten, alles andere als auf die leichte
            Schulter.Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu
            informieren. Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die
            Beweggründe für die Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung
            sehr technisch und juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir
            auch sprachlich einen anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist
            dies natürlich aufgrund der Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der
            Datenschutzerklärung näher erläutert.Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht,
            uns oder die verantwortliche Stelle zu kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf
            unserer Website bald wieder begrüßen zu dürfen.
          </p>
        </div>
        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50/90 px-5 py-6 text-center text-sm text-gray-600">
          <p>Alle Texte sind urheberrechtlich geschützt.</p>
          <p className="mt-3">
            Quelle: Erstellt mit dem{" "}
            <a
              href="https://www.adsimple.at/datenschutz-generator/"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz Generator
            </a>{" "}
            von AdSimple
          </p>
        </div>
      </LegalSection>
    </>
  );
}
