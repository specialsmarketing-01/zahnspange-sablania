import Link from "next/link";
import LegalSection from "@/components/datenschutz/LegalSection";

export function LegalPart1() {
  return (
    <>
      <LegalSection id="einleitung-und-ueberblick">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Einleitung und Überblick</h2>
        <div className="prose-legal mt-4 space-y-4 text-gray-700">
          <p>
            Wir haben diese Datenschutzerklärung (Fassung 25.01.2023-122397436) verfasst, um Ihnen gemäß der Vorgaben
            der{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=122397436#d1e2269-1-1"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz-Grundverordnung (EU) 2016/679
            </a>{" "}
            und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als
            Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig
            verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind
            geschlechtsneutral zu verstehen.Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie
            verarbeiten.
          </p>
          <p>
            Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese
            Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich
            beschreiben. Soweit es der Transparenz förderlich ist, werden technische Begriffe leserfreundlich erklärt,
            Links zu weiterführenden Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in
            klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten
            verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man
            möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard
            sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und
            informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.Wenn
            trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche
            Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen.
            Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="anwendungsbereich">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Anwendungsbereich</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und
            für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit
            personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name,
            E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür,
            dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der
            Anwendungsbereich dieser Datenschutzerklärung umfasst:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
            <li>Social Media Auftritte und E-Mail-Kommunikation</li>
            <li>mobile Apps für Smartphones und andere Geräte</li>
          </ul>
          <p>
            Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen
            über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in
            Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="rechtsgrundlagen">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Rechtsgrundlagen</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen
            Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns
            ermöglichen, personenbezogene Daten zu verarbeiten.Was das EU-Recht betrifft, beziehen wir uns auf die
            VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese
            Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht,
            unter{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
            </a>{" "}
            nachlesen.
          </p>
          <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
          <ol className="list-decimal space-y-3 pl-5 marker:font-medium marker:text-primary">
            <li>
              Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem
              bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines
              Kontaktformulars.
            </li>
            <li>
              Vertrag (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen
              zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen,
              benötigen wir vorab personenbezogene Informationen.
            </li>
            <li>
              Rechtliche Verpflichtung (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung
              unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die
              Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
            </li>
            <li>
              Berechtigte Interessen (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre
              Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen
              zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben
              zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.
            </li>
          </ol>
          <p>
            Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher
            Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche
            Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.
          </p>
          <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>
              In Österreich ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung
              personenbezogener Daten (Datenschutzgesetz), kurz DSG.
            </li>
            <li>In Deutschland gilt das Bundesdatenschutzgesetz, kurzBDSG.</li>
          </ul>
          <p>
            Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden
            Abschnitten darüber.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="kontaktdaten-des-verantwortlichen">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Kontaktdaten des Verantwortlichen</h2>
        <p className="mt-4 text-gray-700">
          Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die
          Kontaktdaten der verantwortlichen Person bzw. Stelle: Zahnspange Sablania, Forsthausgasse 16–20, Stiege 3, EG, 1200 Wien
        </p>
        <div className="mt-6 rounded-lg border border-primary/15 bg-primary/[0.03] px-4 py-3 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-8 sm:gap-y-2">
          <p className="text-sm font-medium text-primary">
            E-Mail:{" "}
            <a href="mailto:info@zahnspange-sablania.at" className="font-normal text-accent underline-offset-2 hover:underline">
              info@zahnspange-sablania.at
            </a>
          </p>
          <p className="text-sm font-medium text-primary">
            Telefon:{" "}
            <a href="tel:+4313306090" className="font-normal text-accent underline-offset-2 hover:underline">
              +43-1-3306090
            </a>
          </p>
          <p className="text-sm font-medium text-primary">
            Impressum:{" "}
            <Link href="/impressum" className="font-normal text-accent underline-offset-2 hover:underline">
              zahnspange-sablania.at/impressum
            </Link>
          </p>
        </div>
      </LegalSection>

      <LegalSection id="speicherdauer">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Speicherdauer</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen
            und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir
            personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In
            einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches
            Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.
          </p>
          <p>
            Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden
            die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.
          </p>
          <p>
            Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere
            Informationen dazu haben.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="rechte-laut-datenschutz-grundverordnung">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Rechte laut Datenschutz-Grundverordnung</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu
            einer fairen und transparenten Verarbeitung von Daten kommt:
          </p>
          <p>
            Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das
            zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu
            erfahren:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
            <li>die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
            <li>
              wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert
              werden kann;
            </li>
            <li>wie lange die Daten gespeichert werden;</li>
            <li>
              das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem
              Widerspruchsrecht gegen die Verarbeitung;
            </li>
            <li>
              dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter
              unten);
            </li>
            <li>die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
            <li>
              ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil
              von Ihnen zu gelangen.
            </li>
          </ul>
          <p>
            Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung
            mit sich bringt.
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-primary">
            <li>
              Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung
              öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die
              Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch
              rechtlich nachkommen können.
            </li>
            <li>
              Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der
              Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.
            </li>
            <li>
              Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung
              widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.
            </li>
          </ul>
          <p>
            Kurz gesagt: Sie haben Rechte – zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu
            kontaktieren!
          </p>
          <p>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
            datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der
            Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter{" "}
            <a href="https://www.dsb.gv.at/?tid=122397436" className="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
              https://www.dsb.gv.at/
            </a>{" "}
            finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen
            können Sie sich an die{" "}
            <a
              href="https://www.bfdi.bund.de/DE/Home/home_node.html"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
            </a>{" "}
            wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:
          </p>
        </div>
        <div className="mt-8 rounded-xl border border-primary/15 bg-gray-50/90 p-5">
          <h3 className="text-lg font-bold text-primary">Österreich Datenschutzbehörde</h3>
          <p className="mt-3 text-gray-700">
            Leiterin: Mag. Dr. Andrea JelinekAdresse: Barichgasse 40-42, 1030 WienTelefonnr.: +43 1 52 152-0E-Mail-Adresse:{" "}
            <a href="mailto:dsb@dsb.gv.at" className="text-accent underline-offset-2 hover:underline">
              dsb@dsb.gv.at
            </a>{" "}
            Website:{" "}
            <a href="https://www.dsb.gv.at/" className="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
              https://www.dsb.gv.at/
            </a>
          </p>
        </div>
      </LegalSection>

      <LegalSection id="datenuebertragung-in-drittlaender">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">Datenübertragung in Drittländer</h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            Wir übertragen oder verarbeiten Daten nur dann in Länder außerhalb der EU (Drittländer), wenn Sie dieser
            Verarbeitung zustimmen, dies gesetzlich vorgeschrieben ist oder vertraglich notwendig und in jedem Fall nur
            soweit dies generell erlaubt ist. Ihre Zustimmung ist in den meisten Fällen der wichtigste Grund, dass wir
            Daten in Drittländern verarbeiten lassen. Die Verarbeitung personenbezogener Daten in Drittländern wie den
            USA, wo viele Softwarehersteller Dienstleistungen anbieten und Ihre Serverstandorte haben, kann bedeuten,
            dass personenbezogene Daten auf unerwartete Weise verarbeitet und gespeichert werden.
          </p>
          <p>
            Wir weisen ausdrücklich darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes
            Schutzniveau für den Datentransfer in die USA besteht. Die Datenverarbeitung durch US-Dienste (wie
            beispielsweise Google Analytics) kann dazu führen, dass gegebenenfalls Daten nicht anonymisiert verarbeitet
            und gespeichert werden. Ferner können gegebenenfalls US-amerikanische staatliche Behörden Zugriff auf
            einzelne Daten nehmen. Zudem kann es vorkommen, dass erhobene Daten mit Daten aus anderen Diensten desselben
            Anbieters, sofern Sie ein entsprechendes Nutzerkonto haben, verknüpft werden. Nach Möglichkeit versuchen wir
            Serverstandorte innerhalb der EU zu nutzen, sofern das angeboten wird.
          </p>
          <p>
            Wir informieren Sie an den passenden Stellen dieser Datenschutzerklärung genauer über Datenübertragung in
            Drittländer, sofern diese zutrifft.
          </p>
        </div>
      </LegalSection>
    </>
  );
}
