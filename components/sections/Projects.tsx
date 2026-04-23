"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type Project = {
  title: string;
  location: string;
  category: "Fotovoltika" | "Klimatizácie" | "Kamery" | "Elektro";
  year: string;
  image: string;
  size?: "lg" | "md" | "sm";
};

const PROJECTS: Project[] = [
  {
    title: "Rodinný dom 9,8 kWp s batériou",
    location: "Prešov",
    category: "Fotovoltika",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1400&q=80&auto=format&fit=crop",
    size: "lg"
  },
  {
    title: "Multi-split klíma pre ordináciu",
    location: "Košice",
    category: "Klimatizácie",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1631545308456-1e3cc78eb37d?w=1200&q=80&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "IP kamerový systém skladového areálu",
    location: "Bardejov",
    category: "Kamery",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "Priemyselný rozvádzač výrobnej haly",
    location: "Poprad",
    category: "Elektro",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "Hybridná FV 14 kWp + wallbox",
    location: "Humenné",
    category: "Fotovoltika",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80&auto=format&fit=crop",
    size: "md"
  },
  {
    title: "Kanálová klimatizácia showroomu",
    location: "Michalovce",
    category: "Klimatizácie",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80&auto=format&fit=crop",
    size: "lg"
  }
];

const FILTERS = ["Všetky", "Fotovoltika", "Klimatizácie", "Kamery", "Elektro"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Všetky");
  const list = active === "Všetky" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="realizacie" className="section bg-cream">
      <div className="container-lg">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow">Vybrané realizácie</span>
            <h2 className="mt-4 max-w-xl text-display-lg h-display text-balance">
              Projekty, ktoré hovoria za nás.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                    active === f
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-900/15 bg-white text-ink-700 hover:border-ink-900/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[360px] gap-5 md:grid-cols-6 md:auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl bg-ink-900 shadow-soft ${
                  p.size === "lg" ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-900 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-200">
                    {p.location} • {p.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <span className="absolute right-5 top-5 inline-flex h-10 w-10 translate-x-2 items-center justify-center rounded-full bg-white/95 text-ink-900 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRightIcon size={18} />
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/kontakt" className="btn-dark">
            Chcem podobnú realizáciu
          </Link>
        </div>
      </div>
    </section>
  );
}
