"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowRightIcon } from "@/components/icons";
import { COMPANY } from "@/lib/nav";

export default function ContactCTA() {
  return (
    <section id="kontakt" className="section bg-ink-900 text-white">
      <div className="container-lg">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow !text-brand-300">Kontaktujte nás</span>
              <h2 className="mt-4 text-display-lg h-display !text-white text-balance">
                Poviete, čo riešite. Povieme, ako to vyriešiť.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-300">
                Napíšte nám cez formulár alebo zavolajte priamo. Do 24 hodín dostanete konkrétnu
                odpoveď od technika, nie z call-centra.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                    <PhoneIcon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Telefón</p>
                    <a href={COMPANY.phoneHref} className="mt-1 block font-display text-xl font-semibold hover:text-brand">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                    <MailIcon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-300">E-mail</p>
                    <a href={COMPANY.emailHref} className="mt-1 block font-display text-xl font-semibold hover:text-brand">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                    <PinIcon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Pôsobnosť</p>
                    <p className="mt-1 text-base text-white">{COMPANY.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                    <ClockIcon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-300">Otváracie hodiny</p>
                    <p className="mt-1 text-base text-white">{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/kontakt" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white">
                Alebo si pozrite kompletnú kontaktnú stránku
                <ArrowRightIcon size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-10">
                <ContactForm variant="dark" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
