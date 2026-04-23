"use client";

import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const STATS = [
  { to: 103, suffix: "+", label: "dokončených projektov" },
  { to: 5, suffix: " r.", label: "záruka na montážne práce" },
  { to: 24, suffix: " h", label: "priemerná reakčná doba" },
  { to: 4, suffix: "", label: "technické špecializácie" }
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
