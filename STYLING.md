# Styling System – Do Not Break

This project uses a **global Tailwind CSS** setup. Breaking these rules will destroy the site's CSS and layout.

---

## NEVER do the following

- **NEVER** remove `import "./globals.css"` from `app/layout.tsx`.
- **NEVER** remove or reorder the three lines `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` in `app/globals.css`.
- **NEVER** remove `<LocaleShell>{children}</LocaleShell>` from the root layout body, or change the structure to `<body>{children}</body>`.
- **NEVER** remove or shrink the `content` array in `tailwind.config.ts` (must include `./app/**/*`, `./components/**/*`, `./pages/**/*`).
- **NEVER** remove the `body` className in `app/layout.tsx` (e.g. `font-sans`, `min-h-screen`, `bg-white`, `text-primary`).
- **NEVER** delete the `:root` block in `app/globals.css` (design tokens).
- **NEVER** remove the `html, body { margin: 0; padding: 0; }` reset in `app/globals.css`.

---

## Required files

| File | Purpose |
|------|---------|
| `app/globals.css` | Must start with the three `@tailwind` directives and contain html/body reset and `:root` tokens. |
| `app/layout.tsx` | Must import `./globals.css` and render `<LocaleShell>{children}</LocaleShell>` inside `<body>`. |
| `tailwind.config.ts` | Must have `content` including app, components, pages. Do not clear `theme.extend`. |
| `postcss.config.js` | Must contain `tailwindcss` and `autoprefixer` plugins. |

---

## Component rules

- Use only Tailwind `className` for layout and colors (no inline `style` for those).
- Use design tokens: `primary`, `accent`, `primary-muted` from config and `:root`.
- Do not strip `className` from elements when editing.

---

## If the site looks broken

1. Check `app/globals.css`: first three lines must be `@tailwind base;` `@tailwind components;` `@tailwind utilities;`.
2. Check `app/layout.tsx`: must have `import "./globals.css"` and `<LocaleShell>{children}</LocaleShell>` in body.
3. Delete the `.next` folder and run `npm run dev` again.
