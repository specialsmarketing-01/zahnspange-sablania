export type Locale = "de" | "en";

export interface ServiceItem {
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  imageSlug: string;
}

export const services: ServiceItem[] = [
  {
    titleDe: "Unsichtbare Zahnspange",
    titleEn: "Invisible Braces",
    descriptionDe: "Diskrete Zahnkorrektur mit modernen Alignern.",
    descriptionEn: "Discreet tooth correction with modern aligners.",
    imageSlug: "Invisible Braces",
  },
  {
    titleDe: "Lingual Zahnspange",
    titleEn: "Lingual Braces",
    descriptionDe: "Innenliegende unsichtbare Zahnspange.",
    descriptionEn: "Inside-mounted invisible braces.",
    imageSlug: "Lingual",
  },
  {
    titleDe: "Zahnbleaching",
    titleEn: "Teeth Whitening",
    descriptionDe: "Professionelle Zahnaufhellung.",
    descriptionEn: "Professional teeth whitening.",
    imageSlug: "Whitening",
  },
  {
    titleDe: "Professionelle Mundhygiene",
    titleEn: "Professional Oral Hygiene",
    descriptionDe: "Gesunde Zähne durch moderne Reinigung.",
    descriptionEn: "Healthy teeth through modern cleaning.",
    imageSlug: "Oral Hygiene",
  },
  {
    titleDe: "Zahnspange für Kinder",
    titleEn: "Braces for Children",
    descriptionDe: "Frühzeitige Zahnkorrektur.",
    descriptionEn: "Early orthodontic correction.",
    imageSlug: "Children",
  },
  {
    titleDe: "Zahnspange für Jugendliche",
    titleEn: "Braces for Teens",
    descriptionDe: "Moderne Lösungen für Jugendliche.",
    descriptionEn: "Modern solutions for teenagers.",
    imageSlug: "Teens",
  },
  {
    titleDe: "Zahnspange für Erwachsene",
    titleEn: "Braces for Adults",
    descriptionDe: "Ästhetische Behandlung für Erwachsene.",
    descriptionEn: "Aesthetic treatment for adults.",
    imageSlug: "Adults",
  },
  {
    titleDe: "Krone & Brücke",
    titleEn: "Crown & Bridge",
    descriptionDe: "Hochwertiger Zahnersatz.",
    descriptionEn: "High-quality dental prosthetics.",
    imageSlug: "Crown & Bridge",
  },
  {
    titleDe: "Sport Mundschutz",
    titleEn: "Sports Mouthguard",
    descriptionDe: "Individueller Schutz für Zähne.",
    descriptionEn: "Custom protection for your teeth.",
    imageSlug: "Mouthguard",
  },
];

function getPlaceholderImageUrl(slug: string): string {
  return `https://placehold.co/400x240/f8f9fb/0f2e5c?text=${encodeURIComponent(slug)}`;
}

export function getServiceTitle(service: ServiceItem, locale: Locale): string {
  return locale === "de" ? service.titleDe : service.titleEn;
}

export function getServiceDescription(service: ServiceItem, locale: Locale): string {
  return locale === "de" ? service.descriptionDe : service.descriptionEn;
}

export function getServiceImageUrl(service: ServiceItem): string {
  return getPlaceholderImageUrl(service.imageSlug);
}
