"use client";

import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const STATS = [
  { to: 540, suffix: "+", label: "realizovaných projektov" },
  { to: 12, suffix: "", label: "rokov v odbore" },
  { to: 4.9, suffix: " / 5", decimals: 1, label: "priemerné hodnotenie" },
  { to: 1250, suffix: " MWh", label: "ročný výkon inštalácií" }
];

export default function Stats() {
  return (
    <section className="border-y border-ink-900/8 bg-white">
      <div className="container-lg py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <p className="font-display text-[44px] font-semibold leading-none tracking-tight text-ink-900 md:text-[56px]">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
