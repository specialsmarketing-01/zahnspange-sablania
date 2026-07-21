import Link from "next/link";
import type { Locale } from "@/lib/paths";
import { getHref } from "@/lib/paths";

const LINKS_DE = [
  { label: "Dr. Manish Sablania – Über mich", path: "/ueber-mich" },
  { label: "Kieferorthopädie in Wien", path: "/kieferorthopaedie" },
  { label: "Gratis Zahnspange", path: "/gratis-zahnspange" },
  { label: "Unsichtbare Zahnspange", path: "/unsichtbare-zahnspange-wien" },
  { label: "Online Termin", path: "/online-termine" },
] as const;

const LINKS_EN = [
  { label: "Dr. Manish Sablania – About", path: "/ueber-mich" },
  { label: "Orthodontics in Vienna", path: "/kieferorthopaedie" },
  { label: "Publicly funded braces", path: "/gratis-zahnspange" },
  { label: "Invisible braces", path: "/unsichtbare-zahnspange-wien" },
  { label: "Book an appointment", path: "/online-termine" },
] as const;

export default function HomeInternalLinks({ locale }: { locale: Locale }) {
  const isDe = locale === "de";
  const links = isDe ? LINKS_DE : LINKS_EN;

  return (
    <section className="bg-white py-12" aria-labelledby="home-quick-links">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="home-quick-links" className="text-xl font-bold text-primary sm:text-2xl">
          {isDe ? "Wichtige Informationen" : "Key information"}
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          {isDe
            ? "Mehr zu Ihrem Kieferorthopäden in 1200 Wien und zu unseren Behandlungen."
            : "Learn more about your orthodontist in 1200 Vienna and our treatments."}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={getHref(link.path, locale)}
                className="inline-flex rounded-full border border-primary/20 bg-primary/[0.03] px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/40 hover:bg-primary/[0.06]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
