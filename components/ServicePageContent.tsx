import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";

interface ServicePageContentProps {
  dePath: string;
  locale: Locale;
  dict: Dictionary;
}

export default function ServicePageContent({ dePath, locale, dict }: ServicePageContentProps) {
  const title = (dict.routeTitles as Record<string, string>)[dePath] ?? dePath;
  const lead = (dict.pageLeads as Record<string, string>)[dePath];
  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict}>
      {null}
    </PageContent>
  );
}
