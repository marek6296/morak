import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Prečo MORAK — certifikovaný tím, päťročná záruka, jasná dokumentácia",
  description:
    "Certifikovaný tím s oprávneniami §22 a §23, päťročná záruka na montážne práce, servis s reakciou do 24 hodín a jasná dokumentácia bez skrytých položiek."
};

const VALUES = [
  "Certifikovaný tím s oprávneniami §22 a §23",
  "Päťročná záruka na montážne práce",
  "Reakcia na dopyt do 24 hodín",
  "Kompletná dokumentácia a revízia v cene",
  "Záručný aj pozáručný servis po celom Slovensku",
  "Písomná zmluva bez skrytých položiek"
];

export default function PrecoMorakPage() {
  return (
    <>
      {/* ── FULL-SCREEN HERO ── */}
      <section
        className="relative overflow-hidden bg-ink-900"
        style={{ height: "calc(100svh - 64px)" }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop"
          alt="Inštalácia solárnych panelov na rodinnom dome"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink-900/65" />
        {/* Green glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
        </div>

        {/* Content */}
        <div className="container-lg relative flex h-full flex-col justify-center">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow !text-brand-300">Prečo MORAK</span>
              <h1
                className="mt-4 h-display text-white text-balance"
                style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Projekty, ktoré fungujú aj po desiatich rokoch.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-300">
                MORAK vznikol z presvedčenia, že kvalitná technológia zaslúži kvalitnú realizáciu.
                Staviame na presnosti, dokumentácii a dlhodobom vzťahu s klientom.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-[15px] text-white/80">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/30 text-brand-300">
                      <CheckIcon size={12} />
                    </span>
                    <span className="leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn-primary">
                  Získať cenovú ponuku
                  <ArrowRightIcon size={16} />
                </Link>
                <Link href="/realizacie" className="btn-ghost" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                  Pozrieť realizácie
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />
      <WhyUs />
      <Process />
    </>
  );
}
