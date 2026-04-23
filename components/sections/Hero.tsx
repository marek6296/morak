"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/icons";

const PERKS = [
  "Bezplatná konzultácia a cenový návrh",
  "Realizácia na kľúč certifikovaným tímom",
  "Päťročná záruka na vykonané práce"
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 md:pt-8">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-radial-fade" />

      <div className="container-lg relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-display-2xl h-display text-balance"
            >
              Elektrina, ktorú si vyrábate sami.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Dotácia až 7 500 €.</span>
                <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-brand/40" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance"
            >
              Znížte účet za elektrinu až o 80 % a štátnu dotáciu vybavíme za vás.
              Fotovoltika, klimatizácie, kamerové systémy a elektroinštalácie —
              realizácia na kľúč certifikovaným tímom s päťročnou zárukou.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/kontakt" className="btn-primary">
                Získať cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>
              <Link href="#sluzby" className="btn-ghost">
                Naše služby
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand-700">
                    <CheckIcon size={14} />
                  </span>
                  <span className="leading-snug">{p}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-800 shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop"
                alt="Moderná inštalácia fotovoltickej elektrárne"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />

              {/* Floating trust card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 backdrop-blur-md shadow-lift"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand-700">
                    <ShieldIcon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">5-ročná záruka na montáž</p>
                    <p className="text-xs text-ink-400">Písomná zmluva, žiadne skryté položky</p>
                  </div>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-600">
                  Certifikované oprávnenia §22 a §23, kompletná dokumentácia, revízia v cene
                  a záručný aj pozáručný servis po celom Slovensku.
                </p>
              </motion.div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute -left-6 top-10 hidden rounded-2xl border border-ink-900/10 bg-white p-4 shadow-lift sm:block"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                Dokončených projektov
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-ink-900">103+</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo strip */}
        <div className="mt-20 border-t border-ink-900/10 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
            Certifikácie, partneri a výrobcovia
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {["FRONIUS", "GOODWE", "HUAWEI", "DAIKIN", "HIKVISION", "SMA"].map((b) => (
              <div
                key={b}
                className="font-display text-center text-lg font-semibold tracking-[0.18em] text-ink-400"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
