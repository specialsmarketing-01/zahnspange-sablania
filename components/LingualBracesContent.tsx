import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

type LingualBracesDict = {
  title: string;
  lead: string;
  intro2: string;
  intro3: string;
  advantagesDisadvantagesTitle: string;
  advantagesDisadvantagesIntro: string;
  consultationNote: string;
  checkupNote: string;
  advantagesTitle: string;
  advantages: string[];
  disadvantagesTitle: string;
  disadvantages: string[];
  processTitle: string;
  steps: string[];
  processLinkText: string;
  processLinkPath: string;
};

export default function LingualBracesContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const lb = dict.lingualBraces as unknown as LingualBracesDict;
  if (!lb) return null;

  return (
    <PageContent title={lb.title} lead={lb.lead} locale={locale} dict={dict}>
      <p className="text-gray-600">{lb.intro2}</p>
      <p className="mt-4 text-gray-600">{lb.intro3}</p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{lb.advantagesDisadvantagesTitle}</h2>
      <p className="text-gray-600">{lb.advantagesDisadvantagesIntro}</p>
      <p className="mt-3 text-gray-600">
        <Link href={getHref("/online-termin", locale)} className="text-accent hover:underline">
          {lb.consultationNote}
        </Link>
      </p>
      <p className="mt-2 text-gray-600 font-medium">{lb.checkupNote}</p>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-2">{lb.advantagesTitle}</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {lb.advantages.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-primary mt-8 mb-2">{lb.disadvantagesTitle}</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {lb.disadvantages.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{lb.processTitle}</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-600">
        {lb.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <p className="mt-8 text-gray-600">
        <Link href={getHref(lb.processLinkPath, locale)} className="text-accent hover:underline font-medium">
          {lb.processLinkText}
        </Link>
      </p>
    </PageContent>
  );
}
