"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon, ArrowUpRightIcon, PlusIcon, MinusIcon } from "@/components/icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/nav";
import type { ServiceData } from "@/lib/services-data";
import { ICON_MAP } from "@/components/icon-map";

export default function ServicePage({ data }: { data: ServiceData }) {
  const [open, setOpen] = useState<number | null>(0);
  const Icon = ICON_MAP[data.icon];
  const others = SERVICES.filter((s) => s.slug !== data.slug);

  return (
    <>
      {/* Hero — full screen */}
      <section
        className="relative overflow-hidden bg-ink-900"
        style={{ height: "calc(100svh - 64px)" }}
      >
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
        </div>

        <div className="container-lg relative flex h-full flex-col items-center justify-center text-center">
          <Reveal>
            <h1
              className="h-display text-white text-balance mx-auto"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: "820px" }}
            >
              {data.title}
            </h1>
            <p className="mt-6 mx-auto text-xl leading-relaxed text-ink-300" style={{ maxWidth: "600px" }}>
              {data.heroLead}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
              {data.highlights.map((h) => {
                const I = ICON_MAP[h.icon];
                return (
                  <div key={h.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm text-center">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand/30 text-brand-300">
                      <I size={18} />
                    </span>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                      {h.label}
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">{h.value}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn-primary">
                Získať cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>
              <a href="#co-zahrna" className="btn-ghost" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                Čo obsahuje služba
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container-lg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Čo ponúkame</span>
              <h2 className="mt-4 text-display-lg h-display text-balance">
                Komplexné riešenie pre každý typ objektu.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {data.features.map((f, i) => {
              const I = ICON_MAP[f.icon];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="group h-full rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-brand transition-colors group-hover:bg-brand group-hover:text-ink-900">
                      <I size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section id="co-zahrna" className="section bg-cream">
        <div className="container-lg grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Čo obsahuje služba</span>
              <h2 className="mt-4 text-display-lg h-display text-balance">
                Plný rozsah. Žiadne skryté položky.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
                V cenovej ponuke vždy uvidíte, čo je zahrnuté. Nenájdete v nej „malé písmenká&ldquo; ani
                dodatky pri odovzdaní.
              </p>
              <Link href="/kontakt" className="btn-dark mt-8">
                Vyžiadať cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {data.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-700">
                      <CheckIcon size={14} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-lg">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <span className="eyebrow">Naša práca</span>
                <h2 className="mt-4 text-display-lg h-display text-balance">Nedávne realizácie.</h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-900">
                  <Image
                    src={src}
                    alt={`${data.title} — realizácia ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-lg">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow">Časté otázky</span>
                <h2 className="mt-4 text-display-lg h-display text-balance">K tejto službe.</h2>
                <p className="mt-5 text-base leading-relaxed text-ink-500">
                  Nenašli ste odpoveď? Zavolajte nám alebo napíšte cez kontaktný formulár.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-ink-900/8 border-y border-ink-900/8">
                {data.faq.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-8 py-6 text-left"
                      >
                        <span className="font-display text-lg font-semibold tracking-tight text-ink-900 md:text-xl">
                          {item.q}
                        </span>
                        <span
                          className={`mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen ? "border-ink-900 bg-ink-900 text-white" : "border-ink-900/15 text-ink-900"
                          }`}
                        >
                          {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-7 pr-14 text-[15px] leading-relaxed text-ink-500">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA stripe */}
      <section className="bg-ink-900 text-white">
        <div className="container-lg py-16 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-4xl text-balance">
                Pripravení začať? Ozveme sa do 24 hodín.
              </h3>
              <p className="mt-2 max-w-xl text-ink-300">
                Konzultácia a cenový návrh sú u nás vždy zdarma a nezáväzné.
              </p>
            </div>
            <Link href="/kontakt" className="btn-primary">
              Získať cenovú ponuku
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container-lg">
          <Reveal>
            <span className="eyebrow">Ďalšie služby</span>
            <h2 className="mt-4 max-w-xl text-display-lg h-display text-balance">Čo ešte robíme.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="group rounded-3xl border border-ink-900/8 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
              >
                <p className="font-display text-xl font-semibold tracking-tight text-ink-900 md:text-2xl">
                  {o.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{o.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                  Viac o službe
                  <ArrowUpRightIcon size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
