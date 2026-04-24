"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    name: "Ján Kováč",
    city: "Prešov",
    service: "Fotovoltika 9 kWp",
    rating: 5,
    text: "nehanbim sa povedat ze som bol poriadny skeptik a manzelka ma tlacila do toho skoro 2 roky. no teraz mi kazdy mesiac pripomina ze mala pravdu 😄 ucet nam klesol z 230 na 38 eur v lete sme mali dokonca preplatky. chlapci to dali dohromady za 2 dni a po sebe upratali",
    initials: "JK"
  },
  {
    name: "Mária Horváthová",
    city: "Košice",
    service: "Klimatizácia multi-split",
    rating: 5,
    text: "Klimatizaciu sme si davali prvykrat a nevedeli sme co cakat. Monter prisiel nacas bol sikovy a vysvetlil nam ovladanie. Minule leto som nemohla spat od horcavy tento rok je pohoda aj v 35 stupnoch. Akurat nas trochu prekvapila konecna cena ale ked to funguje tak sa oplatilo",
    initials: "MH"
  },
  {
    name: "Miroslav Takáč",
    city: "Poprad",
    service: "Fotovoltika + batéria",
    rating: 5,
    text: "v januari som platil 290 eur za elektriku teraz je to vo vacsine mesiacov nula alebo skoro nula. sused riesil to iste s inou firmou a mal same problemy so zarukou ja som bol s morakom pohoda. bateria sa zdala draha ale bez nej by to v zime nestalo za tolko",
    initials: "MT"
  },
  {
    name: "Eva Szabóová",
    city: "Banská Bystrica",
    service: "Kamerový systém",
    rating: 4,
    text: "kamery som riesila pre firemny sklad. prisli pozreli si to a do tyzdna bolo hotovo. appka na telefone funguje fajn vidim zivy prenos aj ked som na druhom konci republiky 👍 jedine co by som vytkla je ze na jeden email odpovedali dost neskoro",
    initials: "ES"
  },
  {
    name: "Peter Novotný",
    city: "Žilina",
    service: "Elektroinštalácia",
    rating: 5,
    text: "stary dom z 80-tych rokov elektrika bola katastrofa. morak to cele prerobil novy rozvadac aj rozvody a pritom objavili chybu v povodnej instalacii o ktorej sme nevedeli vobec nic. vraj mohlo byt nebezpecne. prace trvali dlhsie ako povodne hovorili ale vysledok vidno. chalani vedeli co robia",
    initials: "PN"
  },
  {
    name: "Zuzana Blahová",
    city: "Trnava",
    service: "Fotovoltika + dotácia",
    rating: 5,
    text: "s tou dotaciou zelena domacnostiam som sa bala papirovania ale v realite som len podpisala co mi predlozili oni to vybavili. system bezi od aprila a faktury su smiesne nizke. pred montazou bola komunikacia trochu pomalsie ale samotna instalacia prebehla bez problemov. celkovo som rada ze sme to nakoniec spravili",
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
