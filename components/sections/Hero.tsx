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
    <section className="relative" style={{ backgroundColor: "#fafafa" }}>

      {/* ── MOBILE HERO (< lg) — illustration as background, content anchored to bottom ── */}
      <div className="lg:hidden">
        <div className="relative h-[82svh] min-h-[540px] bg-white">

          {/* Illustration — full bleed, object-contain so nothing crops */}
          <Image
            src="/images/hero-phone.png"
            alt="Rodinný dom so solárnymi panelmi a batériou"
            fill
            priority
            sizes="100vw"
            className="object-contain object-top"
          />

          {/* Soft white gradient at bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white via-white/85 to-transparent" />

          {/* Dotácia badge — floating top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 top-4"
          >
            <div
              className="rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(34,197,94,0.35)]"
              style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100">Štátna dotácia</p>
              <p className="font-display leading-none text-white" style={{ fontSize: "2rem", fontWeight: 900 }}>
                7 500 €
              </p>
              <p className="mt-0.5 text-[11px] font-semibold text-green-100">Zelená domácnostiam III</p>
            </div>
          </motion.div>

          {/* Text + CTA anchored to bottom */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2.5"
            >
              <h1 className="font-display text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-ink-900">
                Elektrina, ktorú si vyrábate sami.
              </h1>
              <p className="text-[15px] leading-relaxed text-ink-600">
                Znížte účet za elektrinu až o&nbsp;80 %. Certifikovaný tím, päťročná záruka.
              </p>
              <Link
                href="/kontakt"
                className="btn-primary mt-1 w-full justify-center py-3.5 text-[15px]"
              >
                Získať bezplatnú cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>
              <div className="flex items-center gap-2.5 rounded-xl border border-ink-900/10 bg-white/80 px-3.5 py-2.5 backdrop-blur-sm">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-700">
                  <ShieldIcon size={13} />
                </span>
                <p className="text-[12px] leading-snug text-ink-700">
                  <span className="font-semibold text-ink-900">5-ročná záruka</span>
                  <span> · oprávnenie §22/§23 · bezplatná konzultácia</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Below-fold: perks + brand strip */}
        <div className="px-5 py-8" style={{ backgroundColor: "#fafafa" }}>
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
                <div key={b} className="text-center font-display text-sm font-semibold tracking-[0.14em] text-ink-400">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (lg+) ── */}
      <div className="hidden lg:block pt-0 md:pt-2">
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

            {/* RIGHT — 3D illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Dotácia badge — top-right, inside visible area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-2 right-2 z-10"
              >
                <div
                  className="rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(34,197,94,0.35)]"
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100">Štátna dotácia</p>
                  <p className="font-display leading-none text-white" style={{ fontSize: "1.9rem", fontWeight: 900 }}>
                    7 500 €
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-green-100">Zelená domácnostiam III</p>
                </div>
              </motion.div>

              {/* Floating stat — outside bottom-left corner of card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="absolute -bottom-4 -left-4 z-10 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-lift"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Dokončených projektov
                </p>
                <p className="mt-1 font-display text-3xl font-semibold text-ink-900">103+</p>
              </motion.div>

              {/* Illustration — no wrapper, white blends with page */}
              <Image
                src="/images/hero-pc.png"
                alt="Rodinný dom so solárnymi panelmi, batériou a elektroinštaláciou"
                width={1323}
                height={1189}
                priority
                sizes="(max-width: 1280px) 50vw, 620px"
                className="w-full h-auto max-h-[520px] object-contain"
              />
            </motion.div>
          </div>

          {/* Logo strip */}
          <div className="mt-12 border-t border-ink-900/10 pt-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Certifikácie, partneri a výrobcovia
            </p>
            <div className="mt-5 grid grid-cols-6 items-center gap-6 opacity-80">
              {BRANDS.map((b) => (
                <div key={b} className="font-display text-center text-lg font-semibold tracking-[0.18em] text-ink-400">
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
