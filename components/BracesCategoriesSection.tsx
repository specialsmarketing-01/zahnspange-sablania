import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";

const CATEGORIES = [
  {
    image: "/services/kinder.jpg",
    path: "/zahnspange-fuer-kinder",
    key: "bracesChildren" as const,
    textKey: "bracesCategoriesCardChildren" as const,
  },
  {
    image: "/services/jugendliche.jpg",
    path: "/zahnspange-fuer-jugendliche",
    key: "bracesTeens" as const,
    textKey: "bracesCategoriesCardTeens" as const,
  },
  {
    image: "/services/erwachsene.jpg",
    path: "/zahnspange-fuer-erwachsene",
    key: "bracesAdults" as const,
    textKey: "bracesCategoriesCardAdults" as const,
  },
] as const;

export default function BracesCategoriesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.homepage;
  const nd = dict.navDropdown;
  const title =
    "bracesCategoriesTitle" in h
      ? (h as { bracesCategoriesTitle: string }).bracesCategoriesTitle
      : "Kieferorthopädie in Wien";
  const sub =
    "bracesCategoriesSub" in h
      ? (h as { bracesCategoriesSub: string }).bracesCategoriesSub
      : "";

  const getCardText = (textKey: (typeof CATEGORIES)[number]["textKey"]) => {
    if (!(textKey in h)) return "";
    const value = (h as unknown as Record<string, unknown>)[textKey];
    return typeof value === "string" ? value : "";
  };

  const p1 = "bracesCategoriesPara1" in h ? (h as { bracesCategoriesPara1: string }).bracesCategoriesPara1 : "";
  const p2 = "bracesCategoriesPara2" in h ? (h as { bracesCategoriesPara2: string }).bracesCategoriesPara2 : "";
  const p3 = "bracesCategoriesPara3" in h ? (h as { bracesCategoriesPara3: string }).bracesCategoriesPara3 : "";

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </h2>
        {sub && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
            {sub}
          </p>
        )}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-primary/10"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 bg-gray-200">
                <Image
                  src={cat.image}
                  alt={nd[cat.key]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <div
                  className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-primary/90 via-primary/50 to-transparent px-4 pb-4 pt-12"
                  aria-hidden
                >
                  <h3 className="text-left text-lg font-semibold text-white drop-shadow-md">
                    {nd[cat.key]}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {getCardText(cat.textKey)}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    href={getHref("/online-termin", locale)}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 sm:px-4 sm:text-sm whitespace-nowrap"
                  >
                    {dict.common.ctaBook}
                  </Link>
                  <Link
                    href={getHref(cat.path, locale)}
                    className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 sm:px-4 sm:text-sm whitespace-nowrap"
                  >
                    {dict.common.learnMore}
                    <span className="ml-1 shrink-0" aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {(p1 || p2 || p3) && (
          <div className="mt-16 w-full">
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed text-center">
              {p1 && <p>{p1}</p>}
              {p2 && <p>{p2}</p>}
              {p3 && <p>{p3}</p>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
