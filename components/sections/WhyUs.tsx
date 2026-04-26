"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  ShieldIcon,
  CertifiedIcon,
  ToolsIcon,
  ChatIcon
} from "@/components/icons";

const REASONS = [
  {
    icon: CertifiedIcon,
    title: "Certifikovaný tím",
    text: "Technici s oprávneniami §22 a §23, osvedčenia SOI, certifikáty pre F-plyny a práca vo výškach."
  },
  {
    icon: ShieldIcon,
    title: "5-ročná záruka",
    text: "Plnú záruku na montážne práce a plnú výrobcovskú záruku na všetky použité komponenty."
  },
  {
    icon: ToolsIcon,
    title: "Servis 24/7",
    text: "Pohotovostná linka a výjazd technika na celom Slovensku. Priemerná reakčná doba do 6 hodín."
  },
  {
    icon: ChatIcon,
    title: "Jasná komunikácia",
    text: "Každý krok v písomnej dokumentácii. Žiadne skryté položky, žiadne nečakané prekvapenia na konci."
  }
];

export default function WhyUs() {
  return (
    <section id="preco-morak" className="section relative bg-ink-900 text-ink-100 noise overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
      </div>

      <div className="container-lg relative">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col h-full">
            <Reveal>
              <span className="eyebrow !text-brand-300">Prečo s nami</span>
              <h2 className="mt-4 text-display-lg h-display !text-white text-balance">
                Projekty, ktoré fungujú aj po desiatich rokoch.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-300">
                Staviame na presnosti a dlhodobom vzťahu s klientom — nie na cenovom dumpingu.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex-1 mt-10">
              <div className="overflow-hidden rounded-3xl border border-white/10 h-full" style={{ minHeight: "280px" }}>
                <div className="relative h-full" style={{ minHeight: "280px" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop"
                    alt="Inštalácia solárnych panelov na streche rodinného domu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={i * 0.08}>
                    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-brand/40 hover:bg-white/10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/70 transition-colors group-hover:bg-brand group-hover:text-ink-900">
                        <Icon size={24} />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{r.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {[
                  { k: "103+", v: "dokončených realizácií" },
                  { k: "5 r.", v: "záruka na montáž" },
                  { k: "§22/§23", v: "certifikované oprávnenia" }
                ].map((s) => (
                  <div key={s.v} className="p-6 text-center">
                    <p className="font-display text-3xl font-semibold text-white md:text-4xl">{s.k}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-300">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
