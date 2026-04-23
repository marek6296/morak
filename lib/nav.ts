export const SERVICES = [
  {
    slug: "fotovoltika",
    title: "Fotovoltické elektrárne",
    short: "Fotovoltika",
    tagline: "Energetická nezávislosť s dotáciou až 7 500 €",
    summary:
      "Panely, meniče a batériové úložiská od overených výrobcov. Návrh, montáž, pripojenie do distribučnej sústavy a vybavenie dotácie na kľúč."
  },
  {
    slug: "klimatizacie",
    title: "Klimatizácie a tepelné čerpadlá",
    short: "Klimatizácie",
    tagline: "Tichá a efektívna klíma po celý rok",
    summary:
      "Split, multi-split a kanálové jednotky pre byty, rodinné domy aj prevádzky. Certifikovaná montáž, pravidelný servis a záruka výrobcu."
  },
  {
    slug: "kamerove-systemy",
    title: "Kamerové a zabezpečovacie systémy",
    short: "Kamerové systémy",
    tagline: "Vaša nehnuteľnosť pod kontrolou odkiaľkoľvek",
    summary:
      "IP kamerové systémy s nočným videním, 4K rozlíšením a inteligentnou detekciou. Vzdialený prístup z mobilu a profesionálna inštalácia kabeláže."
  },
  {
    slug: "elektroinstalacie",
    title: "Elektroinštalácie a revízie",
    short: "Elektroinštalácie",
    tagline: "Od novostavby po priemyselné rozvody",
    summary:
      "Kompletné silnoprúdové a slaboprúdové rozvody, rozvádzače, bleskozvody, domová automatizácia a odborné revízie s úradnou platnosťou."
  }
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const NAV_LINKS = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/#preco-morak", label: "Prečo MORAK" },
  { href: "/#realizacie", label: "Realizácie" },
  { href: "/#proces", label: "Proces" },
  { href: "/kontakt", label: "Kontakt" }
];

export const COMPANY = {
  name: "MORAK",
  tagline: "Energetické a elektro riešenia",
  phone: "+421 903 123 456",
  phoneHref: "tel:+421903123456",
  email: "info@morak.sk",
  emailHref: "mailto:info@morak.sk",
  address: "Prešov, Slovenská republika",
  hours: "Po – Pia  08:00 – 18:00",
  ico: "55 123 456",
  dic: "2123456789"
};
