import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Die angeforderte Seite existiert nicht.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-xl text-base text-gray-600">
        Die gesuchte Seite gibt es nicht oder wurde verschoben. Nutzen Sie die Links
        unten, um weiterzukommen.
      </p>
      <nav
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        aria-label="Hilfreiche Links"
      >
        <Link
          href="/"
          className="inline-flex min-w-[12rem] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Zur Startseite
        </Link>
        <Link
          href="/leistungen"
          className="inline-flex min-w-[12rem] items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
        >
          Leistungen
        </Link>
        <Link
          href="/online-termine"
          className="inline-flex min-w-[12rem] items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
        >
          Online Termin
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex min-w-[12rem] items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
        >
          Kontakt
        </Link>
      </nav>
    </main>
  );
}
