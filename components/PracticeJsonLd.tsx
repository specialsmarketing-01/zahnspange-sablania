import JsonLd from "@/components/JsonLd";
import { PRACTICE, DOCTOR, DEFAULT_OG_IMAGE } from "@/lib/practiceInfo";
import { SITE_URL } from "@/lib/site";

const base = SITE_URL.replace(/\/$/, "");

/** Sitewide Dentist / LocalBusiness + WebSite + Person schema for AI and local SEO. */
export default function PracticeJsonLd() {
  const dentistId = `${base}/#dentist`;
  const personId = `${base}/#doctor`;
  const websiteId = `${base}/#website`;

  const data = [
    {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
      "@id": dentistId,
      name: PRACTICE.name,
      url: PRACTICE.url,
      telephone: PRACTICE.telephone,
      email: PRACTICE.email,
      image: `${base}${DEFAULT_OG_IMAGE}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: PRACTICE.streetAddress,
        postalCode: PRACTICE.postalCode,
        addressLocality: PRACTICE.addressLocality,
        addressCountry: PRACTICE.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: PRACTICE.geo.latitude,
        longitude: PRACTICE.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "17:00",
        },
      ],
      availableLanguage: [
        { "@type": "Language", name: "German" },
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Hindi" },
      ],
      areaServed: {
        "@type": "City",
        name: "Vienna",
      },
      founder: { "@id": personId },
      employee: { "@id": personId },
      medicalSpecialty: ["Orthodontics", "Dentistry"],
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: DOCTOR.name,
      honorificPrefix: DOCTOR.honorificPrefix,
      givenName: DOCTOR.givenName,
      familyName: DOCTOR.familyName,
      jobTitle: DOCTOR.jobTitleEn,
      description: `${DOCTOR.name}, ${DOCTOR.credentials}. ${DOCTOR.experienceComboEn}`,
      image: `${base}${DOCTOR.imagePath}`,
      url: `${base}/ueber-mich`,
      worksFor: { "@id": dentistId },
      knowsLanguage: ["German", "English", "Hindi"],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Dental Surgery (BDS), India",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Science in Specialized Orthodontics, Germany",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: PRACTICE.name,
      url: PRACTICE.url,
      inLanguage: ["de-AT", "en"],
      publisher: { "@id": dentistId },
    },
  ];

  return <JsonLd data={data} />;
}
