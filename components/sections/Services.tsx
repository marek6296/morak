"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/nav";
import {
  SolarIcon,
  ClimateIcon,
  CameraIcon,
  ElectricIcon,
  ArrowUpRightIcon
} from "@/components/icons";

const ICONS = {
  fotovoltika: SolarIcon,
  klimatizacie: ClimateIcon,
  "kamerove-systemy": CameraIcon,
  elektroinstalacie: ElectricIcon
};

const DETAILS: Record<string, string[]> = {
  fotovoltika: [
    "Návrh a dimenzovanie on-grid aj hybridných zostáv",
    "Montáž panelov, meničov a batériových úložísk",
    "Vybavenie dotácie Zelená domácnostiam III"
  ],
  klimatizacie: [
    "Tiché nástenné, kanálové a multi-split jednotky",
    "Tepelné čerpadlá vzduch-vzduch a vzduch-voda",
    "Ročný servis a čistenie s osvedčením F-plynov"
  ],
  "kamerove-systemy": [
    "4K IP kamery s nočným videním a detekciou pohybu",
    "NVR rekordéry, cloudové zálohovanie, vzdialený prístup",
    "Alarmy, elektronické zámky a prístupové systémy"
  ],
  elektroinstalacie: [
    "Silnoprúd, slaboprúd, rozvádzače a bleskozvody",
    "Nabíjacie stanice pre elektromobily (wallboxy)",
    "Odborné prehliadky a úradné revízie"
  ]
};

export default function Services() {
  return (
    <section id="sluzby" className="section relative">
      <div className="container-lg">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="eyebrow">Čo pre vás robíme</span>
            <h2 className="mt-4 max-w-2xl text-display-lg h-display text-balance">
              Štyri špecializácie, jeden certifikovaný tím.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-ink-500">
              Navrhujeme a realizujeme technológie, ktoré znižujú náklady na energie, zvyšujú
              komfort a bezpečnosť vašej nehnuteľnosti. Všetko pod jednou strechou.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/${s.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift md:p-10"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl transition-all duration-700 group-hover:bg-brand/20" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-brand transition-all duration-500 group-hover:scale-105 group-hover:bg-brand group-hover:text-ink-900">
                      <Icon size={28} />
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition-all duration-500 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white">
                      <ArrowUpRightIcon size={18} />
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-ink-900 md:text-[26px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{s.summary}</p>

                  <ul className="mt-6 space-y-2 border-t border-ink-900/8 pt-5">
                    {DETAILS[s.slug].map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                    Viac o službe
                    <ArrowUpRightIcon size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
