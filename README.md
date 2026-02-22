# Zahnspange Sablania – Website

Professionelle Website für die kieferorthopädische Praxis Zahnspange Sablania (Österreich). Erstellt mit Next.js 14, TypeScript und Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Responsive, SEO-optimiert, deutsche Sprache

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Seite ist unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Build

```bash
npm run build
npm start
```

## Projektstruktur

- `app/` – App Router: Layout, Homepage, Leistungen, Über Uns, Galerie, Kontakt
- `components/` – Wiederverwendbare Komponenten (Navbar, Footer, Hero, Services, etc.)
- Design: Primärfarbe #0f2e5c, Akzent #c8a24d, Schrift Inter

## Anpassungen

- **Bilder:** Hero und Galerie nutzen Platzhalter (Unsplash). Ersetzen Sie die URLs in `components/Hero.tsx` und `app/galerie/page.tsx` durch Ihre eigenen Bilder.
- **Kontaktformular:** Die Absendelogik in `components/ContactSection.tsx` ist derzeit simuliert. Binden Sie eine API oder E-Mail-Funktion an.
- **Google Maps:** Ersetzen Sie den iframe-`src` in `ContactSection.tsx` durch Ihren eigenen Google-Maps-Embed-Link.
