import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Angaben gemäß Informationspflicht der Praxis Zahnspange Sablania, Wien — E-Commerce-Gesetz, UGB, GewO, Mediengesetz.",
  alternates: {
    canonical: `${SITE_URL}/impressum`,
    languages: { de: `${SITE_URL}/impressum`, en: `${SITE_URL}/en/imprint` },
  },
};

export default function ImpressumPage() {
  const dict = getDictionary(locale);
  const i = dict.impressum;

  return (
    <PageContent title="Impressum" showCta={false} locale={locale} dict={dict}>
      <div className="mx-auto max-w-4xl space-y-10 text-gray-700">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Impressum Angaben gemäß Informationspflicht</h2>
          <p>
            laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25
            Mediengesetz.
          </p>
          <p>
            <strong>Zahnspange Sablania</strong>
            <br />
            Manish Sablania
            <br />
            Forsthausgasse 16-20/ Stiege 3/ EG
            <br />
            1200 Wien, Österreich
          </p>
          <p>
            <strong>Unternehmensgegenstand:</strong> Kieferorthopädie
            <br />
            <strong>Tel.:</strong> +43-1-3306090
            <br />
            <strong>E-Mail:</strong> info@zahnspange-sablania.at
          </p>
          <p>
            <strong>Mitglied bei:</strong> Ärztekammer Wien
            <br />
            <strong>Berufsrecht:</strong> Gewerbeordnung: www.ris.bka.gv.at
            <br />
            <strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bundesministerium für Soziales, Gesundheit, Pflege und
            Konsumentenschutz
            <br />
            <strong>Berufsbezeichnung:</strong> Facharzt für Kieferorthopädie
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Kontaktdaten des Verantwortlichen für Datenschutz</h2>
          <p>
            Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen
            Person bzw. Stelle:
          </p>
          <p>
            <strong>Zahnspange Sablania</strong>
            <br />
            Forsthausgasse 16-20/ Stiege 3/ EG
            <br />
            1200 Wien,
            <br />
            <strong>E-Mail-Adresse:</strong> info@zahnspange-sablania.at
            <br />
            <strong>Telefon:</strong> +43-1-3306090
            <br />
            <strong>Impressum:</strong>{" "}
            <a
              href="https://www.zahnspange-sablania.at/impressum"
              className="text-accent underline-offset-2 hover:underline"
            >
              https://www.zahnspange-sablania.at/impressum
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">EU-Streitschlichtung</h2>
          <p>
            Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie
            über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
          </p>
          <p>
            Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen
            Kommission unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
              className="text-accent underline-offset-2 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
            </a>{" "}
            zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum. Wir möchten Sie
            jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Haftung für Inhalte dieser Website</h2>
          <p>
            Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen
            bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website
            übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht
            verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unsere Verpflichtungen zur Entfernung
            von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von
            gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon
            unberührt. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
            kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
            Impressum.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Haftung für Links auf dieser Website</h2>
          <p>
            Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für
            verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben,
            uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn
            uns Rechtswidrigkeiten bekannt werden. Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
            wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Urheberrechtshinweis</h2>
          <p>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns
            bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen
            Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte
            unserer Seite rechtlich verfolgen. Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
            verletzen, bitten wir Sie uns zu kontaktieren.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Bildernachweis</h2>
          <p>
            Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt. Die Bilderrechte liegen
            bei: canva.comDr. Manish Sablania Alle Texte sind urheberrechtlich geschützt.
          </p>
          <p className="text-gray-600">
            Quelle: Erstellt mit dem Impressum Generator von AdSimple
          </p>
        </section>

        <p className="pt-4 text-gray-600">
          <Link href={getHref("/datenschutz", locale)} className="text-accent hover:underline">
            {i.privacy}
          </Link>
          {" | "}
          <Link href={getHref("/", locale)} className="text-accent hover:underline">
            {i.home}
          </Link>
        </p>
      </div>
    </PageContent>
  );
}
