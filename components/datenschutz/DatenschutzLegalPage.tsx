import type { ReactNode } from "react";
import DatenschutzDocument from "@/components/datenschutz/DatenschutzDocument";
import { DATENSCHUTZ_TOC } from "@/components/datenschutz/toc";

function TocNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Inhaltsverzeichnis" className={className}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary-muted">Inhaltsverzeichnis</p>
      <ul className="max-h-[min(70vh,36rem)] space-y-0.5 overflow-y-auto pr-1 text-sm leading-snug">
        {DATENSCHUTZ_TOC.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-md px-2 py-1.5 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function DatenschutzLegalPage({ footerLinks }: { footerLinks: ReactNode }) {
  return (
    <div className="min-w-0 bg-white">
      <header className="border-b border-primary/10 bg-gradient-to-br from-primary/[0.07] via-white to-accent/[0.08]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary/80">Rechtliches</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Datenschutzerklärung</h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Informationen zum Schutz Ihrer personenbezogenen Daten
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-12">
        <details className="group mb-8 rounded-xl border border-gray-200 bg-gray-50/80 p-4 shadow-soft lg:hidden">
          <summary className="cursor-pointer list-none font-semibold text-primary [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between">
              Inhaltsverzeichnis
              <span className="text-accent transition-transform group-open:rotate-180" aria-hidden>
                ▼
              </span>
            </span>
          </summary>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <TocNav />
          </div>
        </details>

        <aside className="mb-10 hidden lg:mb-0 lg:block">
          <div className="sticky top-24 rounded-xl border border-gray-100 bg-gray-50/90 p-5 shadow-soft">
            <TocNav />
          </div>
        </aside>

        <article className="min-w-0 lg:max-w-3xl lg:justify-self-start">
          <DatenschutzDocument />
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-gray-200 pt-8 text-sm text-gray-600">
            {footerLinks}
          </div>
        </article>
      </div>
    </div>
  );
}
