"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    name: "Ján Kováč",
    city: "Prešov",
    service: "Fotovoltika 9,8 kWp",
    rating: 5,
    text: "Panely nám namontovali za 3 dni, aj keď sa počasie nevydarilo. Manželka bola prekvapená, ako rýchlo to celé prebehlo. Teraz platíme za elektrinu asi štvrtinu toho čo predtým.",
    initials: "JK"
  },
  {
    name: "Mária Horváthová",
    city: "Košice",
    service: "Klimatizácia multi-split",
    rating: 5,
    text: "Dali sme si klimatizáciu do obývačky aj spálne. Chlapci prišli načas, pracovali čisto a nechali podpísaný protokol. Ani raz sme nemuseli nič reklamovať — všetko funguje.",
    initials: "MH"
  },
  {
    name: "Miroslav Takáč",
    city: "Poprad",
    service: "Fotovoltika + batéria",
    rating: 5,
    text: "Bál som sa, či systém zvládne zimu v horách. Zvládol perfektne. Návratnosť vypočítali na cca 7 rokov, my sme spokojní už teraz — prvý mesiac sme zaplatili elektrickej 12 eur.",
    initials: "MT"
  },
  {
    name: "Eva Szabóová",
    city: "Banská Bystrica",
    service: "Kamerový systém",
    rating: 5,
    text: "Chceli sme kamery na firemný sklad. MORAK prišiel obzrieť miesto, na druhý deň mi poslali cenovú ponuku. Cena bola férová a všetko ovládam cez mobil odkiaľkoľvek.",
    initials: "ES"
  },
  {
    name: "Peter Novotný",
    city: "Žilina",
    service: "Elektroinštalácia",
    rating: 5,
    text: "Rekonštrukcia elektriky v dome zo 70-tych rokov — bolo toho dosť. MORAK to zvládol bez problémov a dokonca objavili chybu v starom rozvode, o ktorej sme ani nevedeli.",
    initials: "PN"
  },
  {
    name: "Zuzana Blahová",
    city: "Trnava",
    service: "Fotovoltika + dotácia",
    rating: 5,
    text: "Bála som sa papierovanie okolo dotácie, ale pomohli so všetkým — stačilo podpísať. Montáž hotová za 2 dni, dotácia schválená o 3 týždne. Nemám čo vytknúť.",
    initials: "ZB"
  }
];

export default function Reviews() {
  return (
    <section className="section" style={{ backgroundColor: "#f8f8f9" }}>
      <div className="container-lg">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-10 md:mb-14">
            <span className="eyebrow">Hodnotenia zákazníkov</span>
            <h2 className="mt-4 text-display-lg h-display text-balance">
              Čo hovoria ľudia, ktorým sme pomohli.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-3xl border border-ink-900/8 bg-white p-7 shadow-soft"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#7FCC1F">
                    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-ink-900/8 pt-5">
                <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 font-display text-sm font-bold text-ink-700">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{r.name}</p>
                  <p className="text-xs text-ink-400">{r.city} · {r.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
