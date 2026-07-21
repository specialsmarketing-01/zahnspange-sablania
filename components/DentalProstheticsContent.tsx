import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";
import { SITE_URL } from "@/lib/site";
import JsonLd from "./JsonLd";
import PageContent from "./PageContent";

const PAGE_PATH = "/en/dental-prosthetics";
const OG_IMAGE = "/services/teilprothese.jpg";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Forsthausgasse+16-20,+1200+Wien";

const IMG = {
  hero: "/services/teilprothese.jpg",
  partial: "/services/teilprothese.jpg",
  full: "/services/vollprothese.jpg",
  crown: "/services/krone.jpg",
  implant: "/services/implantat.jpg",
} as const;

const FAQS = [
  {
    q: "What is the difference between a partial denture and a full denture?",
    a: "A partial denture replaces one or more missing teeth when some natural teeth remain. A full denture replaces all teeth in the upper or lower jaw. The suitable option depends on the number of missing teeth and the condition of the remaining oral structures.",
  },
  {
    q: "How long does it take to get used to new dentures?",
    a: "The adjustment period differs between patients. Speaking and eating may initially feel unfamiliar, but this often improves with practice. Persistent pain or pressure areas should be checked by a dentist.",
  },
  {
    q: "Can dentures be repaired if they break?",
    a: "Some dentures can be professionally repaired, depending on the type and extent of damage. Do not use household glue or attempt to reshape a denture yourself. Contact the dental practice for an assessment.",
  },
  {
    q: "Do dentures need to be replaced?",
    a: "Dentures and the tissues supporting them can change over time. Adjustments, relining, repairs or replacement may eventually be necessary. Regular examinations help determine whether the denture still fits and functions appropriately.",
  },
  {
    q: "Are dental implants an alternative to dentures?",
    a: "Implants may support a single replacement tooth, a bridge or certain types of dentures. They are not suitable for every patient. Oral health, bone availability, medical history and other factors must be evaluated first.",
  },
  {
    q: "How much do dentures cost in Vienna?",
    a: "The cost depends on the type of denture, materials, required preparation and individual treatment plan. A reliable cost estimate can be provided only after an examination. Any possible insurance contribution should be confirmed with the relevant provider.",
  },
] as const;

const CARE_ITEMS = [
  "Clean the denture every day using an appropriate denture-cleaning method.",
  "Follow the dentist’s instructions regarding the cleaning product and brush.",
  "Clean the gums, tongue and remaining natural teeth carefully.",
  "Remove and store the denture according to the instructions given for the specific appliance.",
  "Avoid using very hot water, which may affect some denture materials.",
  "Do not repair or reshape a denture at home.",
  "Attend regular dental examinations even when no natural teeth remain.",
  "Contact the practice if the denture becomes loose, damaged or uncomfortable.",
] as const;

const PROCESS_STEPS = [
  {
    title: "Consultation and examination",
    body: "We discuss your concerns, medical history, existing restorations and expectations. The teeth, gums, bite and missing-tooth areas are examined.",
  },
  {
    title: "Diagnostics",
    body: "Depending on the situation, photographs, X-rays, scans or impressions may be required. Only the diagnostics that are necessary for your case are recommended.",
  },
  {
    title: "Treatment options",
    body: "Dr. Sablania explains suitable removable and fixed options, including important differences, limitations and likely maintenance requirements.",
  },
  {
    title: "Treatment and preparation",
    body: "Necessary preparatory dental care is completed before the final prosthesis is produced. The exact steps depend on the selected treatment.",
  },
  {
    title: "Fitting and adjustments",
    body: "The restoration is checked for fit, bite and comfort. Dentures sometimes require adjustments, especially during the initial adaptation period.",
  },
  {
    title: "Follow-up and maintenance",
    body: "Regular dental checks help monitor the denture, supporting teeth, gums and oral tissues. Changes in the mouth over time may make adjustments, repairs or replacement necessary.",
  },
] as const;

const btnPrimary =
  "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-primary/30";
const btnSecondary =
  "inline-flex items-center justify-center rounded-lg border border-primary/25 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function DentalProstheticsContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = SITE_URL.replace(/\/$/, "");
  const pageUrl = `${base}${PAGE_PATH}`;
  const dentistId = `${base}/#dentist`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${base}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${base}/en/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dental Prosthetics and Dentures",
        item: pageUrl,
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Dental Prosthetics and Dentures in Vienna",
    description:
      "Dental prosthetics and dentures in 1200 Vienna. Dr. Manish Sablania provides individual consultation for partial dentures, full dentures and tooth replacement.",
    inLanguage: "en",
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": dentistId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${base}${OG_IMAGE}`,
    },
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dental Prosthetics and Dentures",
    url: pageUrl,
    provider: { "@id": dentistId },
    areaServed: {
      "@type": "City",
      name: "Vienna",
    },
    availableLanguage: ["German", "English", "Hindi"],
    description:
      "Individual consultation and treatment planning for partial dentures, full dentures and tooth-replacement options at Zahnspange Sablania in 1200 Vienna.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <PageContent
      title="Dental Prosthetics and Dentures in Vienna"
      locale={locale}
      dict={dict}
      hideHeader
      skipProse
      showCta={false}
    >
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd, faqLd]} />

      <article className="space-y-14 sm:space-y-16">
        {/* Hero */}
        <header className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Tooth replacement · 1200 Vienna
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Dental Prosthetics and Dentures in Vienna
            </h1>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Missing teeth can affect chewing, speech, comfort and confidence. Dental prosthetics
                are used to replace missing teeth and restore important oral functions. At{" "}
                {PRACTICE.name} in 1200 Vienna, {DOCTOR.name} provides personal consultation and
                individual treatment planning for partial dentures, full dentures and other
                tooth-replacement options.
              </p>
              <p>
                The most suitable solution depends on the number and position of missing teeth, the
                condition of the remaining teeth and gums, general oral health and the patient’s
                personal needs. A clinical examination is therefore necessary before a treatment
                recommendation can be made.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/en/book-appointment" className={btnPrimary}>
                Book a Consultation
              </Link>
              <a href={`tel:${PRACTICE.telephoneTel}`} className={btnSecondary}>
                Call {PRACTICE.telephone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg">
            <Image
              src={IMG.hero}
              alt="Partial denture for dental prosthetics treatment in Vienna"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </header>

        {/* What are dental prosthetics */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What Are Dental Prosthetics?</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Dental prosthetics is the area of dentistry concerned with replacing missing teeth and
              restoring oral function. Depending on the individual situation, treatment may involve a
              removable denture, a fixed crown or bridge, an implant-supported solution or a
              combination of different methods.
            </p>
            <p>
              The aim is not only to improve appearance. A carefully planned restoration should also
              support chewing, speech and everyday comfort. Because every mouth is different, the
              treatment is planned individually after an examination of the teeth, gums, bite and
              available supporting structures.
            </p>
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Types of Dental Prosthetics</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <TypeCard
              title="Partial Dentures"
              image={IMG.partial}
              alt="Removable partial denture"
            >
              A partial denture may be considered when some natural teeth remain. It replaces one or
              more missing teeth and uses the remaining teeth or other supporting structures for
              stability. Different designs and materials are available, and the appropriate option
              depends on the position of the gaps, the condition of the supporting teeth and the
              patient’s needs.
            </TypeCard>
            <TypeCard title="Full Dentures" image={IMG.full} alt="Full denture for tooth replacement">
              A full denture replaces all teeth in the upper jaw, lower jaw or both jaws. Its fit
              depends on the shape of the jaw, oral tissues, saliva and muscular coordination. New
              dentures can require an adjustment period, during which speaking and eating gradually
              become more familiar.
            </TypeCard>
            <TypeCard title="Crowns and Bridges" image={IMG.crown} alt="Dental crown restoration">
              Crowns can restore heavily damaged teeth, while bridges can replace certain missing
              teeth using neighbouring teeth or other suitable support. Fixed restorations are not
              appropriate for every situation and require careful examination and planning.
              <p className="mt-4">
                <Link
                  href="/en/crown-bridge"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Learn more about dental crowns and bridges
                </Link>
              </p>
            </TypeCard>
            <TypeCard
              title="Implant-Supported Tooth Replacement"
              image={IMG.implant}
              alt="Dental implant supported tooth replacement"
            >
              Dental implants may provide support for a single replacement tooth, a bridge or certain
              types of dentures. Suitability depends on factors such as bone availability, oral
              health, medical history and individual risk factors. An examination and appropriate
              diagnostics are required before implant treatment can be considered.
              <p className="mt-4">
                <Link
                  href="/en/implant-vienna"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Learn more about dental implants in Vienna
                </Link>
              </p>
            </TypeCard>
          </div>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Partial Denture or Full Denture: What Is the Difference?
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-soft">
            <table className="min-w-full border-collapse text-left text-sm text-gray-800 sm:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    Partial denture
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    Full denture
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <ComparisonRow
                  feature="Teeth replaced"
                  partial="One or more missing teeth"
                  full="All teeth in one jaw"
                />
                <ComparisonRow
                  feature="Natural teeth remaining"
                  partial="Yes"
                  full="No usable natural teeth in the treated jaw"
                />
                <ComparisonRow
                  feature="Support"
                  partial="Remaining teeth and oral tissues, depending on design"
                  full="Mainly oral tissues; other support may be considered depending on treatment"
                />
                <ComparisonRow feature="Removable" partial="Usually" full="Usually" />
                <ComparisonRow
                  feature="Planning"
                  partial="Depends on gaps and supporting teeth"
                  full="Depends on jaw shape, tissues and bite"
                />
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            This comparison provides general information only. The appropriate treatment can be
            determined only after an individual dental examination.
          </p>
        </section>

        {/* When considered */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            When May a Denture Be Considered?
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              A denture or another prosthetic solution may be discussed when teeth have been lost
              because of tooth decay, gum disease, injury or other dental conditions. Patients may
              seek treatment because they have difficulty chewing, feel uncomfortable with visible
              gaps or want to improve the stability of an existing denture.
            </p>
            <p>
              Before planning a new restoration, the dentist examines the remaining teeth, gums, bite
              and supporting tissues. Existing dental disease may need to be treated before the final
              prosthesis is made. The right approach is individualised — not every missing tooth is
              treated in the same way.
            </p>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            How Is Dental Prosthetic Treatment Planned?
          </h2>
          <ol className="mt-8 space-y-5">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:p-6"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-700">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Getting used to */}
        <section className="max-w-3xl rounded-2xl border border-primary/15 bg-primary/[0.04] px-5 py-7 sm:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Getting Used to New Dentures
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              A new denture may initially feel unfamiliar. Some patients notice temporary changes in
              speaking, chewing or saliva production. Starting with softer foods, taking smaller
              bites and chewing carefully on both sides can make the adjustment period easier.
            </p>
            <p>
              Minor pressure areas should not be ignored. If a denture causes persistent discomfort,
              pain or irritation, contact the practice instead of trying to adjust it yourself.
              Professional adjustments can improve fit and reduce pressure on the oral tissues.
            </p>
          </div>
        </section>

        {/* Care */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">How to Care for Dentures</h2>
          <ul className="mt-5 space-y-3">
            {CARE_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-gray-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-gray-600">
            Care instructions may vary according to the denture material and design. Follow the
            individual instructions provided by the dental team. Good{" "}
            <Link
              href="/en/oral-hygiene"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              oral hygiene
            </Link>{" "}
            remains important for gums and any remaining natural teeth.
          </p>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Dental Prosthetics at Zahnspange Sablania in 1200 Vienna
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              {DOCTOR.name}, BDS, M.Sc., is a general dentist and specialist orthodontist with more
              than 28 years of clinical experience. At {PRACTICE.name}, patients receive a personal
              assessment of their dental needs and a clear explanation of suitable treatment options.
            </p>
            <p>
              Consultations are available in German, English and Hindi. The practice is located at
              Forsthausgasse 16–20, Staircase 3, Ground Floor, 1200 Vienna. You can also learn more{" "}
              <Link
                href="/en/about"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                about Dr. Sablania
              </Link>{" "}
              or browse our{" "}
              <Link
                href="/en/services"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                full range of dental services
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-soft-lg sm:p-8">
            <h3 className="text-xl font-bold text-primary">{PRACTICE.name}</h3>
            <p className="mt-1 text-gray-700">
              {DOCTOR.name}, BDS, M.Sc.
            </p>
            <address className="mt-4 not-italic text-gray-700">
              <p>Forsthausgasse 16–20</p>
              <p>Staircase 3, Ground Floor</p>
              <p>1200 Vienna, Austria</p>
            </address>
            <dl className="mt-5 space-y-2 text-gray-700">
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-primary">Monday–Friday:</dt>
                <dd>10:00–17:00</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-primary">Telephone:</dt>
                <dd>
                  <a
                    href={`tel:${PRACTICE.telephoneTel}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {PRACTICE.telephone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-primary">Languages:</dt>
                <dd>German, English and Hindi</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/en/book-appointment" className={btnPrimary}>
                Book an Appointment
              </Link>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                Directions
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] to-white px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Book a Consultation for Dental Prosthetics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
            If you have missing teeth, an uncomfortable denture or questions about tooth-replacement
            options, arrange a personal consultation at our practice in 1200 Vienna. After an
            examination, we can explain which solutions may be appropriate for your individual
            situation.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/en/book-appointment" className={btnPrimary}>
              Book Online
            </Link>
            <Link href="/en/contact" className={btnSecondary}>
              Contact the Practice
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-soft sm:p-6"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <span
                      className="mt-0.5 shrink-0 text-accent transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </article>
    </PageContent>
  );
}

function TypeCard({
  title,
  image,
  alt,
  children,
}: {
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
      <div className="relative aspect-[16/10] bg-gray-50">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
        <div className="mt-3 text-base leading-relaxed text-gray-700">{children}</div>
      </div>
    </div>
  );
}

function ComparisonRow({
  feature,
  partial,
  full,
}: {
  feature: string;
  partial: string;
  full: string;
}) {
  return (
    <tr className="align-top">
      <th scope="row" className="bg-gray-50 px-4 py-3 font-semibold text-primary sm:px-5">
        {feature}
      </th>
      <td className="px-4 py-3 sm:px-5">{partial}</td>
      <td className="px-4 py-3 sm:px-5">{full}</td>
    </tr>
  );
}
