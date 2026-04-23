"use client";

import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Nezáväzná konzultácia",
    text:
      "Spojíme sa telefonicky alebo online. Vypočujeme si potreby, preveríme technické možnosti objektu a dohodneme obhliadku."
  },
  {
    n: "02",
    title: "Obhliadka a technický návrh",
    text:
      "Náš projektant navrhne riešenie šité na mieru, vypočíta návratnosť a pripraví pevnú cenovú ponuku bez skrytých položiek."
  },
  {
    n: "03",
    title: "Montáž certifikovaným tímom",
    text:
      "Inštaláciu vedieme jeden zodpovedný projektový manažér. Pracujeme čisto, presne podľa harmonogramu a s dennou kontrolou kvality."
  },
  {
    n: "04",
    title: "Odovzdanie, revízia a servis",
    text:
      "Vystavíme protokol, revíznu správu a zaškolíme vás na obsluhu. V prípade potreby máme k dispozícii servisnú linku 24/7."
  }
];

export default function Process() {
  return (
    <section id="proces" className="section relative">
      <div className="container-lg">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow">Ako pracujeme</span>
            <h2 className="mt-4 max-w-2xl text-display-lg h-display text-balance">
              Jasný proces od prvého hovoru po odovzdanie.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-ink-500">
              Transparentnosť je pre nás základ. Presne viete, čo dostanete, kedy to dostanete a
              prečo to toľko stojí.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ink-900/15 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-900/10 bg-white font-display text-xl font-semibold text-ink-900 shadow-soft">
                    {s.n}
                    <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-brand" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
