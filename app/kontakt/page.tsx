import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/nav";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napíšte nám cez formulár alebo nás priamo kontaktujte telefonicky. Odpovedáme do 24 hodín."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-radial-fade" />
        <div className="container-lg relative">
          <Reveal>
            <span className="eyebrow">Kontakt</span>
            <h1 className="mt-5 max-w-3xl text-display-xl h-display text-balance">
              Radi si vypočujeme, čo plánujete.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance">
              Vyplňte formulár alebo nám priamo zavolajte. Do 24 hodín vám odpovie technik, nie
              call-centrum. Konzultácia a cenová ponuka sú nezáväzné a zdarma.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-lg grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink-900">Napíšte alebo zavolajte</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand-700">
                      <PhoneIcon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink-400">Telefón</p>
                      <a href={COMPANY.phoneHref} className="mt-1 block font-display text-lg font-semibold text-ink-900 hover:text-brand-700">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand-700">
                      <MailIcon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink-400">E-mail</p>
                      <a href={COMPANY.emailHref} className="mt-1 block font-display text-lg font-semibold text-ink-900 hover:text-brand-700">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand-700">
                      <PinIcon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink-400">Adresa</p>
                      <p className="mt-1 text-base text-ink-900">{COMPANY.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand-700">
                      <ClockIcon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink-400">Otváracie hodiny</p>
                      <p className="mt-1 text-base text-ink-900">{COMPANY.hours}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl bg-brand-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    Fakturačné údaje
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    MORAK s.r.o.<br />
                    IČO: {COMPANY.ico} &middot; DIČ: {COMPANY.dic}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft md:p-12">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                  Formulár cenovej ponuky
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  Čím presnejšie napíšete, aký objekt riešite a v akom stave, tým konkrétnejšiu
                  odpoveď dostanete.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
