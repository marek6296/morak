import type { Metadata } from "next";
import Link from "next/link";
import Projects from "@/components/sections/Projects";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Realizácie — fotovoltika, klimatizácie, kamery, elektro",
  description:
    "Vybrané realizácie MORAK — rodinné domy, firmy aj priemysel. Fotovoltické elektrárne, klimatizácie, kamerové systémy a elektroinštalácie po celom východnom Slovensku."
};

export default function RealizaciePage() {
  return (
    <>
      {/* Hook banner */}
      <section className="relative bg-brand/10 border-b border-brand/20">
        <div className="container-lg flex flex-col items-start gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-snug text-ink-900 md:text-[15px]">
            <span className="font-semibold">103+ dokončených realizácií</span>
            <span className="mx-2 text-ink-400">•</span>
            <span className="text-ink-700">rodinné domy, firmy aj priemyselné objekty</span>
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink-900 hover:text-brand-700"
          >
            Chcem podobnú realizáciu
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </section>

      {/* Page hero */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-10">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-fade" />
        <div className="container-lg relative">
          <Reveal>
            <span className="eyebrow">Portfólio</span>
            <h1 className="mt-4 max-w-3xl text-display-xl h-display text-balance">
              Nedávne realizácie naprieč Slovenskom.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance">
              Pozrite si vybrané projekty z posledných rokov — od malých domácich
              fotovoltických elektrární až po priemyselné rozvody a kamerové systémy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <Projects />
    </>
  );
}
