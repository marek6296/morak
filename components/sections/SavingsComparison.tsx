"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { ArrowRightIcon } from "@/components/icons";

const CARDS = [
  {
    eyebrow: "Rodinný dom",
    title: "Bez fotovoltiky",
    description: "Celú spotrebu nakupujete od distribútora za trhové ceny.",
    cost: 2000,
    barPercent: 100,
    barColor: "bg-red-400",
    textColor: "text-red-500",
    saving: null,
    badge: null,
    best: false,
  },
  {
    eyebrow: "Rodinný dom",
    title: "S fotovoltikou",
    description: "Vlastná výroba pokryje väčšinu dennej spotreby. Zvyšok dokupujete.",
    cost: 700,
    barPercent: 35,
    barColor: "bg-amber-400",
    textColor: "text-amber-600",
    saving: "Ušetríte ~1 300 € ročne",
    badge: null,
    best: false,
  },
  {
    eyebrow: "Rodinný dom",
    title: "Fotovoltika + batéria",
    description: "Energia z panelov aj večer. Až 85 % energetická sebestačnosť.",
    cost: 350,
    barPercent: 17.5,
    barColor: "bg-brand",
    textColor: "text-brand-700",
    saving: "Ušetríte ~1 650 € ročne",
    badge: "Najlepšia voľba",
    best: true,
  },
];

function CostBar({ percent, color, inView }: { percent: number; color: string; inView: boolean }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-900/8">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}

export default function SavingsComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="pt-14 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14 bg-ink-50/60">
      <div className="container-lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow mb-4">Reálna úspora</p>
          <h2 className="text-display-lg h-display">
            Koľko zaplatíte za elektrinu{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ročne?</span>
              <span className="absolute bottom-1.5 left-0 right-0 -z-0 h-2.5 bg-brand/40" />
            </span>
          </h2>
          <p className="mt-4 text-base text-ink-500 text-balance">
            Priemerná slovenská domácnosť minie za elektrinu ~2 000 € ročne.
            Správna inštalácia môže toto číslo znížiť až o 83 %.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-soft transition-all duration-300 ${
                card.best
                  ? "border-brand shadow-[0_0_0_1px_#7FCC1F,0_10px_40px_-10px_rgba(127,204,31,0.25)]"
                  : "border-ink-900/8 hover:border-ink-900/15 hover:shadow-lift"
              }`}
            >
              {/* Badge */}
              {card.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-semibold tracking-wide text-ink-900">
                  {card.badge}
                </span>
              )}

              {/* Eyebrow */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                {card.eyebrow}
              </p>

              {/* Title */}
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">{card.title}</h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{card.description}</p>

              {/* Bar */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-ink-400">
                  <span>Ročné náklady na elektrinu</span>
                  <span className="tabular-nums">{card.barPercent.toFixed(0)} %</span>
                </div>
                <CostBar percent={card.barPercent} color={card.barColor} inView={inView} />
              </div>

              {/* Cost number */}
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className={`font-display text-4xl font-bold tabular-nums ${card.textColor}`}>
                  {inView ? <CountUp to={card.cost} suffix=" €" duration={1.4} /> : "–"}
                </span>
                <span className="text-sm text-ink-400">/ rok</span>
              </div>

              {/* Saving badge */}
              {card.saving ? (
                <div className="mt-4 rounded-xl bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand-700">
                  {card.saving}
                </div>
              ) : (
                <div className="mt-4 rounded-xl bg-ink-900/4 px-4 py-2.5 text-sm text-ink-400">
                  Referenčný stav bez úspor
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-ink-500">
            Čísla sú orientačné pre priemernú domácnosť s ročnou spotrebou 3 500 kWh.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Zistiť úsporu pre môj dom
            <ArrowRightIcon size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
