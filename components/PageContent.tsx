import CTASection from "./CTASection";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

interface PageContentProps {
  title: string;
  lead?: string;
  children: React.ReactNode;
  showCta?: boolean;
  hideHeader?: boolean;
  /** When true, children are not wrapped in `prose` (use for heavy custom layouts; prefer default prose for text pages). */
  skipProse?: boolean;
  locale: Locale;
  dict: Dictionary;
}

export default function PageContent({
  title,
  lead,
  children,
  showCta = true,
  hideHeader = false,
  skipProse = false,
  locale,
  dict,
}: PageContentProps) {
  const contentClassName = skipProse
    ? "mt-10 min-w-0 overflow-x-hidden max-w-none break-words text-gray-800"
    : "mt-10 min-w-0 overflow-x-hidden prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline break-words";

  return (
    <div className="min-w-0 overflow-x-hidden bg-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        {!hideHeader && (
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">{lead}</p>
            )}
          </header>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
      {showCta && <CTASection locale={locale} dict={dict} />}
    </div>
  );
}
