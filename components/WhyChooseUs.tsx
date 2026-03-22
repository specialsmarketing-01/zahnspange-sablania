import type { Dictionary } from "@/lib/dictionaries";

const ICONS = [
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  // Instalment & financing options – card icon
  <path
    key="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M4 7a2 2 0 012-2h12a2 2 0 012 2v2H4V7zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm4 4h3m-7-4h.01"
  />,
];

export default function WhyChooseUs({ dict }: { dict: Dictionary }) {
  const h = dict.homepage;
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {h.whyTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {h.whySub}
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {h.whyFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className="h-full rounded-2xl bg-white/90 p-8 text-center shadow-sm border border-[#e0e6f2] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
