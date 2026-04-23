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

export default function ServicePage({ data }: { data: ServiceData }) {
  const [open, setOpen] = useState<number | null>(0);
  const Icon = data.icon;
  const others = SERVICES.filter((s) => s.slug !== data.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-radial-fade" />
        <div className="container-lg relative">
          <Reveal>
            <Link href="/#sluzby" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-ink-900">
              <ArrowUpRightIcon size={14} className="-rotate-[135deg]" />
              Späť na služby
            </Link>
          </Reveal>

          <div className="mt-8 grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">{data.eyebrow}</span>
                <h1 className="mt-5 text-display-xl h-display text-balance">{data.title}</h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance">{data.heroLead}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/kontakt" className="btn-primary">
                    Získať cenovú ponuku
                    <ArrowRightIcon size={16} />
                  </Link>
                  <a href="#co-zahrna" className="btn-ghost">
                    Čo obsahuje služba
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {data.highlights.map((h) => {
                    const I = h.icon;
                    return (
                      <div key={h.label} className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand-700">
                          <I size={20} />
                        </span>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                          {h.label}
                        </p>
                        <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink-900">{h.value}</p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-800 shadow-lift">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-ink-900 backdrop-blur">
                  <Icon size={28} />
                </div>
              </div>
            </motion.div>
          </div>
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
              const I = f.icon;
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
