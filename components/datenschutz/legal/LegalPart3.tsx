import IllustrationCard from "@/components/datenschutz/IllustrationCard";
import LegalSection from "@/components/datenschutz/LegalSection";
import SummaryCard from "@/components/datenschutz/SummaryCard";

export function LegalPart3() {
  return (
    <>
      <LegalSection id="webhosting-einleitung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Webhosting Einleitung</h2>
        <SummaryCard title="Webhosting Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Besucher der Website
            </li>
            <li>
              <strong>Zweck:</strong> professionelles Hosting der Website und Absicherung des Betriebs
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere
              Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider.
            </li>
            <li>
              <strong>Speicherdauer:</strong> abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <IllustrationCard
          src="/browser-und-webserver.svg"
          alt="Darstellung von Browser, Internet und Hosting"
          caption="Zusammenspiel zwischen Browser, Internet und Hosting-Provider bei der Auslieferung einer Website."
        />
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was ist Webhosting?</h3>
          <p>
            Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen – auch personenbezogene Daten –
            automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und
            nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf
            einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier).
            Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.
          </p>
          <p>
            Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein
            Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome,
            Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.
          </p>
          <p>
            Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website
            gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe,
            weswegen dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten
            Webhosting an und sorgen damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine
            ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!
          </p>
          <p>
            Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und
            während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten
            kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang
            speichern, um einen ordentlichen Betrieb zu gewährleisten.
          </p>
          <p>
            Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel
            zwischen Browser, dem Internet und dem Hosting-Provider.
          </p>
          <h3 className="text-lg font-semibold text-primary">Warum verarbeiten wir personenbezogene Daten?</h3>
          <p>Die Zwecke der Datenverarbeitung sind:</p>
          <ol className="list-decimal space-y-2 pl-5 marker:text-primary">
            <li>Professionelles Hosting der Website und Absicherung des Betriebs</li>
            <li>zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
            <li>
              Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw.
              Verfolgung von Ansprüchen
            </li>
          </ol>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden verarbeitet?</h3>
          <p>
            Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem
            diese Webseite gespeichert ist, in der Regel automatisch Daten wie
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
            <li>Browser und Browserversion (z. B. Chrome 87)</li>
            <li>das verwendete Betriebssystem (z. B. Windows 10)</li>
            <li>
              die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B.{" "}
              <a
                href="https://www.beispielquellsite.de/vondabinichgekommen/"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.beispielquellsite.de/vondabinichgekommen/
              </a>
              )
            </li>
            <li>
              den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und
              194.23.43.121)
            </li>
            <li>Datum und Uhrzeit</li>
            <li>in Dateien, den sogenannten Webserver-Logfiles</li>
          </ul>
          <h3 className="text-lg font-semibold text-primary">Wie lange werden Daten gespeichert?</h3>
          <p>
            In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben
            diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem
            Verhalten von Behörden eingesehen werden.
          </p>
          <p>
            Kurz gesagt: Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern
            (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6
            Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei
            einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und
            Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu können.
          </p>
          <p>
            Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß
            Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="website-baukastensysteme-einleitung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Website Baukastensysteme Einleitung</h2>
        <SummaryCard title="Website Baukastensysteme Datenschutzerklärung Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Besucher der Website
            </li>
            <li>
              <strong>Zweck:</strong> Optimierung unserer Serviceleistung
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> Daten wie etwa technische Nutzungsinformationen wie Browseraktivität,
              Clickstream-Aktivitäten, Sitzungs-Heatmaps sowie Kontaktdaten, IP-Adresse oder Ihr geografischer Standort.
              Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung und in der Datenschutzerklärung der
              Anbieter.
            </li>
            <li>
              <strong>Speicherdauer:</strong> hängt vom Anbieter ab
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen), Art. 6 Abs. 1 lit. a
              DSGVO (Einwilligung)
            </li>
          </ul>
        </SummaryCard>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was sind Website Baukastensysteme?</h3>
          <p>
            Wir verwenden für unsere Website ein Website Baukastensystem. Baukastensysteme sind besondere Formen eines
            Content-Management-Systems (CMS). Mit einem Baukastensystem können Websitebetreiber sehr leicht und ohne
            Programmierkenntnisse eine Website erstellen. In vielen Fällen bieten auch Webhoster Baukastensysteme an. Durch
            die Verwendung eines Baukastensystems können auch personenbezogene Daten von Ihnen erhoben, gespeichert und
            verarbeitet werden. In diesem Datenschutztext geben wir Ihnen allgemeine Informationen über die
            Datenverarbeitung durch Baukastensysteme. Nähere Informationen finden Sie in den Datenschutzerklärungen des
            Anbieters.
          </p>
          <h3 className="text-lg font-semibold text-primary">Warum verwenden wir Website Baukastensysteme für unsere Website?</h3>
          <p>
            Der größte Vorteil eines Baukastensystems ist die einfache Bedienbarkeit. Wir wollen Ihnen eine klare, einfache
            und übersichtliche Website bieten, die wir selbst – ohne externe Unterstützung – problemlos bedienen und
            warten können. Ein Baukastensystem bietet mittlerweile viele hilfreiche Funktionen, die wir auch ohne
            Programmierkenntnisse anwenden können. Dadurch können wir unsere Webpräsenz nach unseren Wünschen gestalten und
            Ihnen eine informative und angenehme Zeit auf unserer Website bieten.
          </p>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden von einem Baukastensystem gespeichert?</h3>
          <p>
            Welche Daten genau gespeichert werden hängt natürlich vom verwendeten Website-Baukastensystem ab. Jeder
            Anbieter verarbeitet und erhebt unterschiedliche Daten des Websitebesuchers. Doch in der Regel werden technische
            Nutzungsinformationen wie etwa etwa Betriebssystem, Browser, Bildschirmauflösung, Sprach- und
            Tastatureinstellungen, Hostinganbieter und das Datum Ihres Websitebesuches erhoben. Weiter können auch
            Trackingdaten (z.B. Browseraktivität, Clickstreamaktivitäten, Sitzungs-Heatmaps u.a.) verarbeitet werden. Zudem
            können auch personenbezogene Daten erfasst und gespeichert werden. Dabei handelt es sich meistens um
            Kontaktdaten wie E-Mail-Adresse, Telefonnummer (falls Sie diese angegeben haben), IP-Adresse und geografischen
            Standortdaten. Welche Daten genau gespeichert werden, finden Sie in der Datenschutzerklärung des Anbieters.
          </p>
          <h3 className="text-lg font-semibold text-primary">Wie lange und wo werden die Daten gespeichert?</h3>
          <p>
            Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten im Zusammenhang mit dem verwendeten
            Website Baukastensystem, sofern wir weitere Informationen dazu haben. In den Datenschutzerklärung des Anbieters
            finden Sie detaillierte Informationen darüber. Generell verarbeiten wir personenbezogene Daten nur so lange wie
            es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Es kann sein, dass der
            Anbieter nach eigenen Maßgaben Daten von Ihnen speichert, worauf wir keinen Einfluss haben.
          </p>
          <h3 className="text-lg font-semibold text-primary">Widerspruchsrecht</h3>
          <p>
            Sie haben immer das Recht auf Auskunft, Berichtigung und Löschung Ihrer personenbezogenen Daten. Bei Fragen
            können Sie auch jederzeit Verantwortliche des verwendeten Website Baukastensystems kontaktieren. Kontaktdaten
            finden Sie entweder in unserer Datenschutzerklärung oder auf der Website des entsprechenden Anbieters.
          </p>
          <p>
            Cookies, die Anbieter für ihre Funktionen verwenden, können Sie in Ihrem Browser löschen, deaktivieren oder
            verwalten. Je nachdem welchen Browser Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise.
            Bitte beachten Sie aber, dass dann eventuell nicht mehr alle Funktionen wie gewohnt funktionieren.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Wir haben ein berechtigtes Interesse daran, ein Website Baukastensystem zu verwenden, um unseren Online-Service
            zu optimieren und für Sie effizient und nutzeransprechend darzustellen. Die dafür entsprechende
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen den Baukasten gleichwohl
            nur ein, soweit Sie eine Einwilligung erteilt haben.
          </p>
          <p>
            Soweit die Verarbeitung von Daten für den Betrieb der Webseite nicht unbedingt notwendig ist, werden die Daten
            nur auf Grundlage Ihrer Einwilligung verarbeitet. Dies betrifft insbesondere Aktivitäten des Trackings.
            Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            Mit dieser Datenschutzerklärung haben wir Ihnen die wichtigsten allgemeinen Informationen rund um die
            Datenverarbeitung nähergebracht. Wenn Sie sich diesbezüglich noch genauer informieren wollen, finden Sie
            weitere Informationen – sofern vorhanden – in dem folgenden Abschnitt bzw. in der Datenschutzerklärung des
            Anbieters.
          </p>
        </div>
        <h3 className="mt-10 text-lg font-bold text-primary">WordPress.com Datenschutzerklärung</h3>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Wir nutzen für unsere Website WordPress.com, ein Website Baukastensystem. Dienstanbieter ist das amerikanische
            Unternehmen Automattic Inc., 60 29th Street #343, San Francisco, CA 94110, USA.
          </p>
          <p>
            WordPress verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des
            Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies
            kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.
          </p>
          <p>
            Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union,
            Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet
            WordPress sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln
            (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
            sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in
            Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln
            verpflichtet sich WordPress, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau
            einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln
            basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden
            Standardvertragsklauseln u.a. hier:{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
          </p>
          <p>
            Die Datenverarbeitungsbedingungen (Data Processing Agreements), welche den Standardvertragsklauseln entsprechen,
            finden Sie unter{" "}
            <a
              href="https://wordpress.com/support/data-processing-agreements/"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wordpress.com/support/data-processing-agreements/
            </a>
            .
          </p>
          <p>
            Mehr über die Daten, die durch die Verwendung von WordPress.com verarbeitet werden, erfahren Sie in der
            Datenschutzerklärung auf{" "}
            <a href="https://automattic.com/de/privacy/" className="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
              https://automattic.com/de/privacy/
            </a>
            .
          </p>
        </div>
      </LegalSection>

      <LegalSection id="cookie-consent-management-platform-einleitung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Cookie Consent Management Platform Einleitung</h2>
        <SummaryCard title="Cookie Consent Management Platform Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Website Besucher
            </li>
            <li>
              <strong>Zweck:</strong> Einholung und Verwaltung der Zustimmung zu bestimmten Cookies und somit dem Einsatz
              bestimmter Tools
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> Daten zur Verwaltung der eingestellten Cookie-Einstellungen wie
              IP-Adresse, Zeitpunkt der Zustimmung, Art der Zustimmung, einzelne Zustimmungen. Mehr Details dazu finden Sie
              beim jeweils eingesetzten Tool.
            </li>
            <li>
              <strong>Speicherdauer:</strong> Hängt vom eingesetzten Tool ab, man muss sich auf Zeiträume von mehreren Jahren
              einstellen
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO
              (berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <IllustrationCard
          src="/consent-management-platform-overview.svg"
          alt="Überblick Cookie Consent Management Platform"
          caption="Beziehung zwischen Browser, Webserver und Cookie-Consent-Management-Plattform (CMP)."
        />
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was ist eine Cookie Consent Manangement Platform?</h3>
          <p>
            Wir verwenden auf unserer Website eine Consent Management Platform (CMP) Software, die uns und Ihnen den
            korrekten und sicheren Umgang mit verwendeten Skripten und Cookies erleichtert. Die Software erstellt
            automatisch ein Cookie-Popup, scannt und kontrolliert alle Skripts und Cookies, bietet eine datenschutzrechtlich
            notwendige Cookie-Einwilligung für Sie und hilft uns und Ihnen den Überblick über alle Cookies zu behalten. Bei
            den meisten Cookie Consent Management Tools werden alle vorhandenen Cookies identifiziert und kategorisiert.
            Sie als Websitebesucher entscheiden dann selbst, ob und welche Skripte und Cookies Sie zulassen oder nicht
            zulassen. Die folgende Grafik stellt die Beziehung zwischen Browser, Webserver und CMP dar.
          </p>
          <h3 className="text-lg font-semibold text-primary">Warum verwenden wir ein Cookie-Management-Tool?</h3>
          <p>
            Unser Ziel ist es, Ihnen im Bereich Datenschutz die bestmögliche Transparenz zu bieten. Zudem sind wir dazu auch
            rechtlich verpflichtet. Wir wollen Sie über alle Tools und alle Cookies, die Daten von Ihnen speichern und
            verarbeiten können, so gut wie möglich aufklären. Es ist auch Ihr Recht, selbst zu entscheiden, welche Cookies
            Sie akzeptieren und welche nicht. Um Ihnen dieses Recht einzuräumen, müssen wir zuerst genau wissen, welche
            Cookies überhaupt auf unserer Website gelandet sind. Dank eines Cookie-Management-Tools, welches die Website
            regelmäßig nach allen vorhandenen Cookies scannt, wissen wir über alle Cookies Bescheid und können Ihnen
            DSGVO-konform Auskunft darüber geben. Über das Einwilligungssystem können Sie dann Cookies akzeptieren oder
            ablehnen.
          </p>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden verarbeitet?</h3>
          <p>
            Im Rahmen unseres Cookie-Management-Tools können Sie jedes einzelnen Cookies selbst verwalten und haben die
            vollständige Kontrolle über die Speicherung und Verarbeitung Ihrer Daten. Die Erklärung Ihrer Einwilligung wird
            gespeichert, damit wir Sie nicht bei jedem neuen Besuch unserer Website abfragen müssen und wir Ihre
            Einwilligung, wenn gesetzlich nötig, auch nachweisen können. Gespeichert wird dies entweder in einem
            Opt-in-Cookie oder auf einem Server. Je nach Anbieter des Cookie-Management-Tools variiert Speicherdauer Ihrer
            Cookie-Einwilligung. Meist werden diese Daten (etwa pseudonyme User-ID, Einwilligungs-Zeitpunkt, Detailangaben zu
            den Cookie-Kategorien oder Tools, Browser, Gerätinformationen) bis zu zwei Jahren gespeichert.
          </p>
          <h3 className="text-lg font-semibold text-primary">Dauer der Datenverarbeitung</h3>
          <p>
            Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu
            haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer
            Dienstleistungen und Produkte unbedingt notwendig ist. Daten, die in Cookies gespeichert werden, werden
            unterschiedlich lange gespeichert. Manche Cookies werden bereits nach dem Verlassen der Website wieder gelöscht,
            andere können über einige Jahre in Ihrem Browser gespeichert sein. Die genaue Dauer der Datenverarbeitung hängt
            vom verwendeten Tool ab, meistens sollten Sie sich auf eine Speicherdauer von mehreren Jahren einstellen. In
            den jeweiligen Datenschutzerklärungen der einzelnen Anbieter erhalten Sie in der Regel genaue Informationen über
            die Dauer der Datenverarbeitung.
          </p>
          <h3 className="text-lg font-semibold text-primary">Widerspruchsrecht</h3>
          <p>
            Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies zu
            widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen.
            Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies
            verwalten, deaktivieren oder löschen.
          </p>
          <p>
            Informationen zu speziellen Cookie-Management-Tools, erfahren Sie – sofern vorhanden – in den folgenden
            Abschnitten.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Wenn Sie Cookies zustimmen, werden über diese Cookies personenbezogene Daten von Ihnen verarbeitet und
            gespeichert. Falls wir durch Ihre Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO) Cookies verwenden dürfen, ist
            diese Einwilligung auch gleichzeitig die Rechtsgrundlage für die Verwendung von Cookies bzw. die Verarbeitung
            Ihrer Daten. Um die Einwilligung zu Cookies verwalten zu können und Ihnen die Einwilligung ermöglichen zu
            können, kommt eine Cookie-Consent-Management-Platform-Software zum Einsatz. Der Einsatz dieser Software
            ermöglicht uns, die Website auf effiziente Weise rechtskonform zu betreiben, was ein berechtigtes Interesse
            (Artikel 6 Abs. 1 lit. f DSGVO) darstellt.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="security-anti-spam">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Security &amp; Anti-Spam</h2>
        <SummaryCard title="Security & Anti-Spam Datenschutzerklärung Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Besucher der Website
            </li>
            <li>
              <strong>Zweck:</strong> Cybersicherheit
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> Daten wie etwa Ihre IP-Adresse, Name oder technische Daten wie etwa
              BrowserversionMehr Details dazu finden Sie weiter unten und den einzelnen Datenschutztexten.
            </li>
            <li>
              <strong>Speicherdauer:</strong> meisten werden die Daten solange gespeichert, bis sie zur Erfüllung der
              Dienstleistung nicht mehr benötigt werden
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
              (Berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was ist eine Security- & Anti-Spam-Software?</h3>
          <p>
            Mit sogenannten Security- & Anti-Spam-Softwares können Sie sich und wir uns vor diversen Spam- oder
            Phishing-Mails und möglichen anderen Cyberattacken schützen. Unter Spam versteht man Werbemails aus einem
            Massenversand, die man selbst nicht verlangte. Solche Mails werden auch Datenmüll genannt und können auch
            Kosten verursachen. Phishing-Mails sind wiederum Nachrichten, die darauf abzielen, über gefälschte Nachrichten
            oder Websites Vertrauen aufzubauen, um an persönliche Daten zu gelangen. Eine Anti-Spam-Software schützt in der
            Regel vor unerwünschten Spam-Nachrichten oder bösartigen Mails, die etwa Viren in unser System einschleusen
            könnten. Wir nutzen auch allgemeine Firewall- und Sicherheitssysteme, die unsere Computer vor unerwünschten
            Netzwerkangriffen schützen.
          </p>
          <h3 className="text-lg font-semibold text-primary">Warum verwenden wir Security- & Anti-Spam-Software?</h3>
          <p>
            Wir legen auf unserer Website besonders großen Wert auf Sicherheit. Schließlich geht es nicht nur um unsere,
            sondern vor allem auch um Ihre Sicherheit. Leider gehören mittlerweile in der Welt der IT und des Internets
            Cyberbedrohungen schon zum Alltag. Oft versuchen Hacker mit Hilfe einer Cyberattacke personenbezogene Daten aus
            einem IT-System zu stehlen. Und daher ist ein gutes Abwehrsystem absolut notwendig. Ein Sicherheitssystem
            überwacht alle ein- und ausgehenden Verbindungen zu unserem Netzwerk bzw. Computer. Damit wir noch größere
            Sicherheit vor Cyberangriffen erreichen, nutzen wir neben den standardisierten Sicherheitssystemen auf unserem
            Computer auch noch weitere externe Security-Dienste. Unerlaubter Verkehr von Daten wird dadurch besser
            unterbunden und so schützen wir uns vor Cyberkriminalität.
          </p>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden durch Security- & Anti-Spam-Softwares verarbeitet?</h3>
          <p>
            Welche Daten genau erhoben und gespeichert werden hängt natürlich vom jeweiligen Dienst ab. Wir sind allerdings
            stets bemüht nur Programme zu verwenden, die sehr sparsam Daten erheben bzw. nur Daten speichern, die für die
            Erfüllung der angebotenen Leistung nötig sind. Grundsätzlich kann der Dienst Daten wie beispielsweise Name,
            Adresse, IP-Adresse, E-Mail-Adresse und technische Daten wie Browsertyp oder Browserversion speichern. Auch
            können etwaige Leistungs- und Protokolldaten erhoben werden, um mögliche eingehende Bedrohungen rechtzeitig zu
            erkennen. Diese Daten werden im Rahmen der Services und unter Einhaltung der geltenden Gesetze verarbeitet.
            Dazu zählt auch bei US-amerikanischen Anbietern (über die Standardvertragsklauseln) die DSGVO. Diese
            Security-Dienste arbeiten in einigen Fällen auch mit Drittanbietern zusammen, die unter Anweisung und in
            Übereinstimmung mit den Datenschutzrichtlinien und weiteren Sicherheitsmaßnahmen Daten speichern und/oder
            verarbeiten können. Die Datenspeicherung erfolgt meist über Cookies.
          </p>
          <h3 className="text-lg font-semibold text-primary">Dauer der Datenverarbeitung</h3>
          <p>
            Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu
            haben. Beispielsweise speichern Security-Programme Daten bis Sie oder wir die Datenspeicherung widerrufen.
            Generell werden personenbezogene Daten nur so lange, wie es für die Bereitstellung der Dienstleistungen
            unbedingt notwendig ist, gespeichert. In vielen Fällen fehlen uns leider von den Anbietern präzise
            Informationen über die Länge der Speicherung.
          </p>
          <h3 className="text-lg font-semibold text-primary">Widerspruchsrecht</h3>
          <p>
            Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw.
            Drittanbietern von Security-Software zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool
            oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern,
            indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.
          </p>
          <p>
            Da bei solchen Sicherheitsdiensten auch Cookies zum Einsatz kommen können, empfehlen wir Ihnen unsere allgemeine
            Datenschutzerklärung über Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet
            werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Wir setzen die Sicherheitsdienste hauptsächlich auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1
            lit. f DSGVO) an einem guten Sicherheitssystem gegen diverse Cyberangriffe ein.
          </p>
          <p>
            Bestimmte Verarbeitungen, insbesondere der Einsatz von Cookies sowie die Nutzung von Sicherheitsfunktionen
            bedürfen Ihrer Einwilligung. Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene
            Security-Dienste verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
            Datenverarbeitung (Art. 6 Abs. 1 lit. a DSGVO). Die meisten von uns verwendeten Dienste setzen Cookies in Ihrem
            Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau
            durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.
          </p>
          <p>
            Informationen zu speziellen Tools erfahren Sie – sofern vorhanden – in den folgenden Abschnitten.
          </p>
        </div>
      </LegalSection>
    </>
  );
}
