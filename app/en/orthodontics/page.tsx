import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";
import { buildPageMetadata } from "@/lib/seo";

const locale = "en" as const;

const FAQS = [
  {
    q: "Does Dr. Sablania treat adults?",
    a: "Yes. Children, teenagers and adults are treated with fixed braces, clear aligners and lingual options depending on the diagnosis.",
  },
  {
    q: "Are clear aligners available?",
    a: "Yes. Clear aligners and invisible lingual braces are among the options offered at the practice.",
  },
  {
    q: "Does the practice offer publicly funded braces?",
    a: "Under certain conditions (including age and IOTN grades 4 or 5), publicly funded treatment may be possible. Details are explained on the publicly funded braces page.",
  },
  {
    q: "Is Dr. Manish Sablania an Indian orthodontist in Vienna?",
    a: "Yes. Dr. med. dent. Manish Sablania, BDS, M.Sc., is an Indian-origin specialist orthodontist and general dentist in 1200 Vienna. Consultations are available in German, English and Hindi.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Orthodontics Vienna | Braces & Aligners",
  description:
    "Orthodontics in Vienna: correction of dental and jaw misalignments for children, teens and adults. Fixed braces, aligners and lingual treatment.",
  dePath: "/kieferorthopaedie",
  locale,
});

export default function OrthodonticsPage() {
  const dict = getDictionary(locale);
  const k = dict.kieferorthopaedie;
  const nd = dict.navDropdown;

  return (
    <PageContent locale={locale} dict={dict} title={k.title} lead={k.lead}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.whatIs}</h2>
      <p className="text-gray-600">{k.whatIsText}</p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.treatmentOptions}</h2>
      <p className="text-gray-600">{k.treatmentOptionsText}</p>
      <ul className="mt-6 space-y-2 list-disc pl-6 text-gray-600">
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-wien", locale)} className="text-accent hover:underline">
            {nd.invisibleBraces}
          </Link>
        </li>
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange", locale)} className="text-accent hover:underline">
            Lingual / inner braces
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-kinder", locale)} className="text-accent hover:underline">
            {nd.bracesChildren}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-jugendliche", locale)} className="text-accent hover:underline">
            {nd.bracesTeens}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-erwachsene", locale)} className="text-accent hover:underline">
            {nd.bracesAdults}
          </Link>
        </li>
        <li>
          <Link href={getHref("/kfo-retainer", locale)} className="text-accent hover:underline">
            {nd.retainers}
          </Link>
        </li>
        <li>
          <Link href={getHref("/gratis-zahnspange", locale)} className="text-accent hover:underline">
            Publicly funded braces
          </Link>
        </li>
        <li>
          <Link href={getHref("/ueber-mich", locale)} className="text-accent hover:underline">
            Dr. Manish Sablania – About
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.process}</h2>
      <p className="text-gray-600">
        {k.processText}{" "}
        <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">
          {k.processLink}
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Frequently asked questions</h2>
      <dl className="mt-6 space-y-6">
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <dt className="font-semibold text-primary">{faq.q}</dt>
            <dd className="mt-2 text-gray-600">{faq.a}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-gray-600">{k.closing}</p>
      <p className="mt-6 text-xs text-gray-500">
        General information does not replace a personal examination or diagnosis.
      </p>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </PageContent>
  );
}
