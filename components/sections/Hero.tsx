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

const BRANDS = ["FRONIUS", "GOODWE", "HUAWEI", "DAIKIN", "HIKVISION", "SMA"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ── MOBILE HERO (< lg) — full-bleed image, content anchored to bottom ── */}
      <div className="lg:hidden">
        <div className="relative h-[78svh] min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=900&q=85&auto=format&fit=crop"
            alt="Solárne panely na streche rodinného domu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Gradient — lighter at top, heavy dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/45 to-transparent" />

          {/* Text + CTA anchored to bottom of image */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2.5"
            >
              {/* Eyebrow badge */}
              <span className="inline-flex w-fit items-center rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-200 backdrop-blur-sm">
                Zelená domácnostiam · Dotácia až 7 500 €
              </span>

              {/* Headline */}
              <h1 className="font-display text-[1.95rem] font-semibold leading-[1.12] tracking-tight text-white">
                Elektrina, ktorú si vyrábate sami.
              </h1>

              {/* Short subtext */}
              <p className="text-[14px] leading-relaxed text-ink-200">
                Znížte účet za elektrinu až o&nbsp;80 %. Certifikovaný tím, päťročná záruka.
              </p>

              {/* Primary CTA — full width, prominent */}
              <Link
                href="/kontakt"
                className="btn-primary mt-1 w-full justify-center py-3.5 text-[15px]"
              >
                Získať bezplatnú cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>

              {/* Trust strip — compact */}
              <div className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/8 px-3.5 py-2.5 backdrop-blur-md">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/25 text-brand-300">
                  <ShieldIcon size={13} />
                </span>
                <p className="text-[12px] leading-snug text-ink-100">
                  <span className="font-semibold text-white">5-ročná záruka</span>
                  <span className="text-ink-300"> · oprávnenie §22/§23 · bezplatná konzultácia</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Below-fold: perks + brand strip (mobile) */}
        <div className="bg-white px-5 py-8">
          <ul className="grid gap-3">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[14px] text-ink-700">
                <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-700">
                  <CheckIcon size={12} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-ink-900/10 pt-5">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Certifikácie, partneri a výrobcovia
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {BRANDS.map((b) => (
                <div
                  key={b}
                  className="text-center font-display text-sm font-semibold tracking-[0.14em] text-ink-400"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (lg+) — 2-column grid, unchanged ── */}
      <div className="hidden lg:block pt-0 md:pt-2">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-radial-fade" />

        <div className="container-lg relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT — text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-display-lg h-display text-balance"
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
                className="mt-4 max-w-lg text-base leading-relaxed text-ink-500 text-balance"
              >
                Znížte účet za elektrinu až o 80 % a štátnu dotáciu vybavíme za vás.
                Fotovoltika, klimatizácie, kamerové systémy a elektroinštalácie —
                realizácia na kľúč certifikovaným tímom s päťročnou zárukou.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-6 flex flex-wrap items-center gap-3"
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
                className="mt-7 grid gap-2.5 sm:grid-cols-3"
              >
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-700">
                      <CheckIcon size={14} />
                    </span>
                    <span className="leading-snug">{p}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* RIGHT — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-ink-800 shadow-lift">
                <Image
                  src="https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=1200&q=80&auto=format&fit=crop"
                  alt="Montáž solárnych panelov na streche rodinného domu"
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />

                {/* Floating trust card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur-md shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-700">
                      <ShieldIcon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">5-ročná záruka na montáž</p>
                      <p className="text-xs text-ink-400">Písomná zmluva, žiadne skryté položky</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-600">
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
                className="absolute -left-5 top-8 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-lift"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Dokončených projektov
                </p>
                <p className="mt-1 font-display text-3xl font-semibold text-ink-900">103+</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Logo strip */}
          <div className="mt-12 border-t border-ink-900/10 pt-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Certifikácie, partneri a výrobcovia
            </p>
            <div className="mt-5 grid grid-cols-6 items-center gap-6 opacity-80">
              {BRANDS.map((b) => (
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
      </div>

    </section>
  );
}
