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
      {/* Hook banner */}
      <section className="relative bg-brand/10 border-b border-brand/20">
        <div className="container-lg flex flex-col items-start gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-snug text-ink-900 md:text-[15px]">
            <span className="font-semibold">5-ročná záruka na montáž</span>
            <span className="mx-2 text-ink-400">•</span>
            <span className="text-ink-700">§22 / §23 oprávnenie a revízia v cene</span>
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink-900 hover:text-brand-700"
          >
            Získať cenovú ponuku
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </section>

      {/* Page hero */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-radial-fade" />
        <div className="container-lg relative">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Prečo MORAK</span>
                <h1 className="mt-4 text-display-xl h-display text-balance">
                  Projekty, ktoré fungujú aj po desiatich rokoch.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance">
                  MORAK vznikol z presvedčenia, že kvalitná technológia zaslúži kvalitnú
                  realizáciu. Staviame na presnosti, dokumentácii a dlhodobom vzťahu
                  s klientom — nie na cenovom dumpingu.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {VALUES.map((v) => (
                    <li key={v} className="flex items-start gap-3 text-[15px] text-ink-700">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-700">
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
                  <Link href="/realizacie" className="btn-ghost">
                    Pozrieť realizácie
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-800 shadow-lift">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80&auto=format&fit=crop"
                    alt="MORAK tím pri práci"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                </div>
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
