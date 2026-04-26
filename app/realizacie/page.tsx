import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Projects from "@/components/sections/Projects";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Realizácie — fotovoltika, klimatizácie, kamery, elektro",
  description:
    "Vybrané realizácie MORAK — rodinné domy, firmy aj priemysel. Fotovoltické elektrárne, klimatizácie, kamerové systémy a elektroinštalácie po celom východnom Slovensku."
};

const STATS = [
  { k: "103+", v: "dokončených realizácií" },
  { k: "8 r.", v: "skúseností na trhu" },
  { k: "100%", v: "zákazníkov odporúča" }
];

export default function RealizaciePage() {
  return (
    <>
      {/* Full-screen hero */}
      <section
        className="relative overflow-hidden bg-ink-900"
        style={{ height: "calc(100svh - 64px)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop"
          alt="Realizácie MORAK — inštalácia na rodinnom dome"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-900/65" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
        </div>

        <div className="container-lg relative flex h-full flex-col justify-center">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow !text-brand-300">Portfólio</span>
              <h1
                className="mt-4 h-display text-white text-balance"
                style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
              >
                Nedávne realizácie naprieč Slovenskom.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-300">
                Pozrite si vybrané projekty z posledných rokov — od malých domácich
                fotovoltických elektrární až po priemyselné rozvody a kamerové systémy.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl">
                {STATS.map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="font-display text-3xl font-semibold text-white">{s.k}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn-primary">
                  Chcem podobnú realizáciu
                  <ArrowRightIcon size={16} />
                </Link>
                <a href="#realizacie" className="btn-ghost" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                  Pozrieť projekty
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <div id="realizacie">
        <Projects />
      </div>
    </>
  );
}
