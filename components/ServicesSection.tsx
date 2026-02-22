import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";

const SERVICE_IMAGES_AND_PATHS = [
  { image: "/services/lingual.jpg", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
  { image: "/services/fillings.jpg", path: "/komposit-zahnfuellung" },
  { image: "/services/bleaching.jpg", path: "/zahnbleaching" },
  { image: "/services/veneers.jpg", path: "/krone-bruecke" },
  { image: "/services/mundhygiene.jpg", path: "/mundhygiene-wien" },
  { image: "/services/invisalign.jpg", path: "/unsichtbare-zahnspange-wien" },
  { image: "/services/vollprothese.jpg", path: "/zahnersatz" },
  { image: "/services/teilprothese.jpg", path: "/zahnersatz" },
  { image: "/services/implantat.jpg", path: "/zahnersatz" },
  { image: "/services/krone.jpg", path: "/krone-bruecke" },
  { image: "/services/mouthguard.jpg", path: "/sportschutz-mouthguards" },
] as const;

export default function ServicesSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  const title = h.servicesSectionTitle;
  const sub = h.servicesSectionSub;
  const cards = h.servicesSectionCards;
  const moreLabel = dict.common.learnMore;

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          {sub}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const { image, path } = SERVICE_IMAGES_AND_PATHS[i];
            return (
              <article
                key={path + i}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-primary/10"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 bg-gray-200">
                  <Image
                    src={image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-primary/90 via-primary/50 to-transparent px-4 pb-4 pt-12"
                    aria-hidden
                  >
                    <h3 className="text-left text-lg font-semibold text-white drop-shadow-md">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    {card.text}
                  </p>
                  <Link
                    href={getHref(path, locale)}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                  >
                    {moreLabel}
                    <span className="ml-1.5 text-accent transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
