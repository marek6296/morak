# MORAK — web

Oficiálna webstránka firmy MORAK — fotovoltika, klimatizácie, kamerové systémy
a elektroinštalácie.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + custom design system
- **Framer Motion** pre scroll a hover animácie
- **Space Grotesk** + **Inter Tight** fonty
- Vlastné SVG ikony (bez knižníc tretích strán)

## Skripty

```bash
npm install       # nainštaluje závislosti
npm run dev       # lokálny vývojový server na http://localhost:3000
npm run build     # produkčný build
npm start         # spustenie produkčnej verzie
```

## Štruktúra

```
app/
  layout.tsx           root layout, fonty, metadata
  page.tsx             domovská stránka
  fotovoltika/         detail služby
  klimatizacie/
  kamerove-systemy/
  elektroinstalacie/
  kontakt/             kontaktná stránka + formulár
  api/contact/         POST endpoint pre kontaktný formulár
components/
  Header.tsx, Footer.tsx, ContactForm.tsx, ...
  icons/index.tsx      všetky SVG ikony
  sections/            modulárne homepage sekcie
lib/
  nav.ts               navigácia, kontaktné údaje firmy
  services-data.ts     dáta pre detail stránky služieb
public/
  logo.png             logo MORAK
```

## Brand

- Primárna farba: `#7FCC1F` (MORAK zelená)
- Tmavá: `#0B1220`
- Pozadie: `#FAFAF7`

## Deploy

Projekt je optimalizovaný pre **Vercel**. Stačí pripojiť GitHub repo v paneli
Vercel a všetko sa nasadí automaticky.
