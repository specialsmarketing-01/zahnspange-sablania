import IllustrationCard from "@/components/datenschutz/IllustrationCard";
import LegalSection from "@/components/datenschutz/LegalSection";
import SummaryCard from "@/components/datenschutz/SummaryCard";

export function LegalPart2() {
  return (
    <>
      <LegalSection id="sicherheit-der-datenverarbeitung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Sicherheit der Datenverarbeitung</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen
            umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Dadurch
            machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf
            persönliche Informationen schließen können.
          </p>
          <p>
            Art. 25 DSGVO spricht hier von “Datenschutz durch Technikgestaltung und durch datenschutzfreundliche
            Voreinstellungen” und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch Hardware (z. B.
            Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir,
            falls erforderlich, noch auf konkrete Maßnahmen ein.
          </p>
        </div>
        <h3 className="mt-10 text-lg font-bold text-primary">TLS-Verschlüsselung mit https</h3>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das Hypertext
            Transfer Protocol Secure steht für „sicheres Hypertext-Übertragungsprotokoll“), um Daten abhörsicher im Internet
            zu übertragen.Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver
            abgesichert ist – niemand kann “mithören”.
          </p>
          <p>
            Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz durch
            Technikgestaltung (
            <a
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=122397436"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artikel 25 Absatz 1 DSGVO
            </a>
            ). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren
            Datenübertragung im Internet, können wir den Schutz vertraulicher Daten sicherstellen.Sie erkennen die
            Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser, links von
            der Internetadresse (z. B. beispielseite.de) und der Verwendung des Schemas https (anstatt http) als Teil
            unserer Internetadresse.Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche
            nach “Hypertext Transfer Protocol Secure wiki” um gute Links zu weiterführenden Informationen zu erhalten.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="kommunikation">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Kommunikation</h2>
        <SummaryCard title="Kommunikation Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Alle, die mit uns per Telefon, E-Mail oder Online-Formular kommunizieren
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> z. B. Telefonnummer, Name, E-Mail-Adresse, eingegebene Formulardaten.
              Mehr Details dazu finden Sie bei der jeweils eingesetzten Kontaktart
            </li>
            <li>
              <strong>Zweck:</strong> Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.
            </li>
            <li>
              <strong>Speicherdauer:</strong> Dauer des Geschäftsfalls und der gesetzlichen Vorschriften
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO
              (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <div className="space-y-4 text-gray-700">
          <p>
            Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur
            Verarbeitung personenbezogener Daten kommen.
          </p>
          <p>
            Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenhängenden
            Geschäftsvorgangs verarbeitet. Die Daten während eben solange gespeichert bzw. solange es das Gesetz
            vorschreibt.
          </p>
          <h3 className="text-lg font-semibold text-primary">Betroffene Personen</h3>
          <p>
            Von den genannten Vorgängen sind alle betroffen, die über die von uns bereit gestellten Kommunikationswege den
            Kontakt zu uns suchen.
          </p>
          <h3 className="text-lg font-semibold text-primary">Telefon</h3>
          <p>
            Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endgerät und beim eingesetzten
            Telekommunikationsanbieter pseudonymisiert gespeichert. Außerdem können Daten wie Name und Telefonnummer im
            Anschluss per E-Mail versendet und zur Anfragebeantwortung gespeichert werden. Die Daten werden gelöscht,
            sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.
          </p>
          <h3 className="text-lg font-semibold text-primary">E-Mail</h3>
          <p>
            Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen Endgerät (Computer,
            Laptop, Smartphone,…) gespeichert und es kommt zur Speicherung von Daten auf dem E-Mail-Server. Die Daten
            werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.
          </p>
          <h3 className="text-lg font-semibold text-primary">Online Formulare</h3>
          <p>
            Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver gespeichert und
            gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten werden gelöscht, sobald der
            Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlagen</h3>
          <p>Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>
              Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der
              Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen
              Daten gegen die DSGVO verstößt.
            </li>
            <li>
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung Ihre Daten zu speichern und weiter
              für den Geschäftsfall betreffende Zwecke zu verwenden;
            </li>
            <li>
              Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit für die Erfüllung eines Vertrags mit
              Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir müssen die Daten für
              vorvertragliche Tätigkeiten, wie z. B. die Vorbereitung eines Angebots, verarbeiten;
            </li>
            <li>
              Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und geschäftliche Kommunikation
              in einem professionellen Rahmen betreiben. Dazu sind gewisse technische Einrichtungen wie z. B.
              E-Mail-Programme, Exchange-Server und Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben
              zu können.
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="auftragsverarbeitungsvertrag-avv">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Auftragsverarbeitungsvertrag (AVV)</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            In diesem Abschnitt möchten wir Ihnen erklären, was ein Auftragsverarbeitungsvertrag ist und warum dieser
            benötigt wird. Weil das Wort “Auftragsverarbeitungsvertrag” ein ziemlicher Zungenbrecher ist, werden wir hier im
            Text auch öfters nur das Akronym AVV benutzen. Wie die meisten Unternehmen arbeiten wir nicht alleine,
            sondern nehmen auch selbst Dienstleistungen anderer Unternehmen oder Einzelpersonen in Anspruch. Durch die
            Einbeziehung verschiedener Unternehmen bzw. Dienstleister kann es sein, dass wir personenbezogene Daten zur
            Verarbeitung weitergeben. Diese Partner fungieren dann als Auftragsverarbeiter, mit denen wir einen Vertrag,
            den sogenannten Auftragsverarbeitungsvertrag (AVV), abschließen. Für Sie am wichtigsten zu wissen ist, dass die
            Verarbeitung Ihrer personenbezogenen Daten ausschließlich nach unserer Weisung erfolgt und durch den AVV
            geregelt werden muss.
          </p>
          <h3 className="text-lg font-semibold text-primary">Wer sind Auftragsverarbeiter?</h3>
          <p>
            Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich.
            Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw.
            jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Genauer und nach der DSGVO-Definition
            gesagt: jede natürliche oder juristische Person, Behörde, Einrichtung oder eine andere Stelle, die in unserem
            Auftrag personenbezogene Daten verarbeitet, gilt als Auftragsverarbeiter. Auftragsverarbeiter können folglich
            Dienstleister wie Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie
            beispielsweise Google oder Microsoft sein.
          </p>
          <p>Zur besseren Verständlichkeit der Begrifflichkeiten hier ein Überblick über die drei Rollen in der DSGVO:</p>
          <p>
            Betroffener (Sie als Kunde oder Interessent) → Verantwortlicher (wir als Unternehmen und Auftraggeber) →
            Auftragsverarbeiter (Dienstleister wie z. B. Webhoster oder Cloudanbieter)
          </p>
          <h3 className="text-lg font-semibold text-primary">Inhalt eines Auftragsverarbeitungsvertrages</h3>
          <p>
            Wie bereits oben erwähnt, haben wir mit unseren Partnern, die als Auftragsverarbeiter fungieren, einen AVV
            abgeschlossen. Darin wird allen voran festgehalten, dass der Auftragsverarbeiter die zu bearbeitenden Daten
            ausschließlich gemäß der DSGVO verarbeitet. Der Vertrag muss schriftlich abgeschlossen werden, allerdings gilt
            in diesem Zusammenhang auch der elektronische Vertragsabschluss als „schriftlich“. Erst auf der Grundlage des
            Vertrags erfolgt die Verarbeitung der personenbezogenen Daten. Im Vertrag muss folgendes enthalten sein:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>Bindung an uns als Verantwortlichen</li>
            <li>Pflichten und Rechte des Verantwortlichen</li>
            <li>Kategorien betroffener Personen</li>
            <li>Art der personenbezogenen Daten</li>
            <li>Art und Zweck der Datenverarbeitung</li>
            <li>Gegenstand und Dauer der Datenverarbeitung</li>
            <li>Durchführungsort der Datenverarbeitung</li>
          </ul>
          <p>Weiters enthält der Vertrag alle Pflichten des Auftragsverarbeiters. Die wichtigsten Pflichten sind:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>Maßnahmen zur Datensicherheit zu gewährleisten</li>
            <li>mögliche technische und organisatorischen Maßnahmen zu treffen, um die Rechte der betroffenen Person zu schützen</li>
            <li>ein Daten-Verarbeitungsverzeichnis zu führen</li>
            <li>auf Anfrage der Datenschutz-Aufsichtsbehörde mit dieser zusammenzuarbeiten</li>
            <li>eine Risikoanalyse in Bezug auf die erhaltenen personenbezogenen Daten durchzuführen</li>
            <li>Sub-Auftragsverarbeiter dürfen nur mit schriftlicher Genehmigung des Verantwortlichen beauftragt werden</li>
          </ul>
          <p>
            Wie so eine AVV konkret aussieht, können Sie sich beispielsweise unter{" "}
            <a
              href="https://www.wko.at/service/wirtschaftsrecht-gewerberecht/eu-dsgvo-mustervertrag-auftragsverarbeitung.html"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.wko.at/service/wirtschaftsrecht-gewerberecht/eu-dsgvo-mustervertrag-auftragsverarbeitung.html
            </a>{" "}
            ansehen. Hier wird ein Mustervertrag vorgestellt.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="cookies">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Cookies</h2>
        <SummaryCard title="Cookies Zusammenfassung">
          <ul className="space-y-2">
            <li>
              <strong>Betroffene:</strong> Besucher der Website
            </li>
            <li>
              <strong>Zweck:</strong> abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim
              Hersteller der Software, der das Cookie setzt.
            </li>
            <li>
              <strong>Verarbeitete Daten:</strong> Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie
              weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.
            </li>
            <li>
              <strong>Speicherdauer:</strong> abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO
              (Berechtigte Interessen)
            </li>
          </ul>
        </SummaryCard>
        <IllustrationCard
          src="/http-cookie-interaction.svg"
          alt="Interaktion zwischen Webbrowser und Webserver bei HTTP-Cookies"
          caption="Die Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser und dem Webserver."
        />
        <div className="space-y-4 text-gray-700">
          <h3 className="text-lg font-semibold text-primary">Was sind Cookies?</h3>
          <p>
            Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.Im Folgenden erklären wir, was
            Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
          </p>
          <p>
            Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise
            Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine
            Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
          </p>
          <p>
            Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites verwenden
            Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche
            gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese
            Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres Browsers, untergebracht. Ein Cookie
            besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere
            Attribute angegeben werden.
          </p>
          <p>
            Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen.
            Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite
            zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt
            sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle
            Cookies in einer einzigen Datei gespeichert.
          </p>
          <p>
            Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome und dem
            Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie zurück, welches der
            Browser erneut verwendet, sobald eine andere Seite angefordert wird.
          </p>
          <p>
            Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von
            unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt.
            Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines
            Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und
            enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs
            zugreifen.
          </p>
          <p>So können zum Beispiel Cookie-Daten aussehen:</p>
          <p>
            Name: _gaWert: GA1.2.1326744211.152122397436-9Verwendungszweck: Unterscheidung der WebsitebesucherAblaufdatum:
            nach 2 Jahren
          </p>
          <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>Mindestens 4096 Bytes pro Cookie</li>
            <li>Mindestens 50 Cookies pro Domain</li>
            <li>Mindestens 3000 Cookies insgesamt</li>
          </ul>
          <h3 className="text-lg font-semibold text-primary">Welche Arten von Cookies gibt es?</h3>
          <p>
            Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den
            folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen
            Arten von HTTP-Cookies eingehen.
          </p>
          <p>Man kann 4 Arten von Cookies unterscheiden:</p>
          <p>
            Unerlässliche CookiesDiese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum
            Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten
            weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn
            der User sein Browserfenster schließt.
          </p>
          <p>
            Zweckmäßige CookiesDiese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen
            bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen
            Browsern gemessen.
          </p>
          <p>
            Zielorientierte CookiesDiese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden
            eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.
          </p>
          <p>
            Werbe-CookiesDiese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell
            angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
          </p>
          <p>
            Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen
            möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
          </p>
          <p>
            Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc6265"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://datatracker.ietf.org/doc/html/rfc6265
            </a>
            , dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State Management Mechanism”.
          </p>
          <h3 className="text-lg font-semibold text-primary">Zweck der Verarbeitung über Cookies</h3>
          <p>
            Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim
            Hersteller der Software, die das Cookie setzt.
          </p>
          <h3 className="text-lg font-semibold text-primary">Welche Daten werden verarbeitet?</h3>
          <p>
            Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies gespeichert werden,
            kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der folgenden Datenschutzerklärung über
            die verarbeiteten bzw. gespeicherten Daten informieren.
          </p>
          <h3 className="text-lg font-semibold text-primary">Speicherdauer von Cookies</h3>
          <p>
            Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche Cookies werden nach
            weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem Computer gespeichert bleiben.
          </p>
          <p>
            Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser sämtliche Cookies
            jederzeit manuell löschen (siehe auch unten “Widerspruchsrecht”). Ferner werden Cookies, die auf einer
            Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung gelöscht, wobei die Rechtmäßigkeit der
            Speicherung bis dahin unberührt bleibt.
          </p>
          <h3 className="text-lg font-semibold text-primary">Widerspruchsrecht – wie kann ich Cookies löschen?</h3>
          <p>
            Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher
            Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur
            teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies
            zulassen.
          </p>
          <p>
            Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen
            ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?tid=122397436"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=122397436"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=122397436"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=122397436"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=122397436"
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </a>
            </li>
          </ul>
          <p>
            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer
            informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie
            das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die
            Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome” im Falle
            eines Chrome Browsers.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rechtsgrundlage</h3>
          <p>
            Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies
            eine Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es
            allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die
            Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die
            Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie
            weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
          </p>
          <p>
            Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen berechtigte Interessen
            (Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den
            Besuchern der Website eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt
            notwendig.
          </p>
          <p>
            Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer
            Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern eingesetzte
            Software Cookies verwendet.
          </p>
        </div>
      </LegalSection>
    </>
  );
}
