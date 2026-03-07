import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";

/** Icon filenames in public/icons, in same order as treatmentsCards */
const SERVICE_ICON_FILES = [
  "Teil und Vollprothesen   .png",
  "Aesthetic tooth-colored fillings.png",
  "Teeth whitening - oral hygiene.png",
  "Free braces.png",
  "Invisible braces Invisalign and lingual braces.png",
  "Veneers Crown Bridge.png",
];

export default function ServicesSimple({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.homepage;
  const titles = h.treatmentsCards ?? [];
  const sectionTitle = h.treatmentsTitle ?? "Alle Zahnbehandlungen in einer Praxis:";
  const subtitle =
    locale === "en"
      ? "From orthodontics to dental prosthetics – all under one roof."
      : "Von Kieferorthopädie bis Zahnersatz – alles aus einer Hand.";

  return (
    <section className="py-20 bg-[#F7F8FB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#1F2A44] mb-4 tracking-tight">
          {sectionTitle}
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {titles.map((title, i) => {
            const iconFile = SERVICE_ICON_FILES[i];
            const iconSrc = iconFile
              ? `/icons/${encodeURIComponent(iconFile)}`
              : null;
            return (
              <div
                key={i}
                className="
                  group
                  rounded-full
                  bg-white
                  shadow-sm
                  border border-[#d8dde8]
                  px-8 py-4
                  flex items-center
                  gap-4
                  text-left
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                {iconSrc && (
                  <span className="flex items-center justify-center w-10 h-10 relative opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </span>
                )}
                <span
                  className="
                    text-[#1F2A44]
                    font-semibold
                    text-sm sm:text-[15px]
                    tracking-tight
                    leading-snug
                    group-hover:text-[#0f2e5c]
                    transition-colors duration-300
                    max-w-full
                    flex-1 min-w-0
                  "
                >
                  {title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
