"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    name: "Ján Kováč",
    city: "Prešov",
    service: "Fotovoltika 9 kWp",
    rating: 5,
    text: "nehanbim sa povedat ze som bol 2 roky skeptik a manzelka ma tlacila do toho skoro kazdy mesiac. no a teraz mi pri kazdej faktúre pripomina ze mala pravdu 😄 ucet nam klesol z 230 na 38 eur, v lete sme mali dokonca preplatky. chlapci to dali dohromady za 2 dni a po sebe upratali",
    initials: "JK"
  },
  {
    name: "Mária Horváthová",
    city: "Košice",
    service: "Klimatizácia multi-split",
    rating: 4,
    text: "super klimatizacia drahsie ako som cakala ale v lete zachranila zivot 👍 montaz prebehla v pohode",
    initials: "MH"
  },
  {
    name: "Miroslav Takáč",
    city: "Poprad",
    service: "Fotovoltika + batéria",
    rating: 5,
    text: "Veľmi spokojný s celou realizáciou. V januári som platil skoro 300 € za elektriku, väčšinu mesiacov teraz platím nulu alebo veľmi málo. Batéria sa zdala drahá investícia, no bez nej by to v zime nestálo za toľko. Sused mal s inou firmou samé problémy so zárukou, u mňa všetko bez komplikácií. Odporúčam.",
    initials: "MT"
  },
  {
    name: "Eva Szabóová",
    city: "Banská Bystrica",
    service: "Kamerový systém",
    rating: 4,
    text: "Kamery na firemný sklad fungujú dobre, appka tiež. Raz odpovedali na mail dosť neskoro, inak bez problémov.",
    initials: "ES"
  },
  {
    name: "Peter Novotný",
    city: "Žilina",
    service: "Elektroinštalácia",
    rating: 5,
    text: "Starý rodinný dom z 80-tych rokov, elektrika bola fakt v hroznom stave. MORAK to celé prerobil, nový rozvádzač aj rozvody, a pri práci objavili chybu v pôvodnej inštalácii o ktorej sme vôbec netušili — vraj mohlo byť nebezpečné. Práce trvali trochu dlhšie ako hovorili na začiatku ale výsledok je na 100%. Chalani fakt vedeli čo robia a vysvetlili nám každý krok.",
    initials: "PN"
  },
  {
    name: "Zuzana Blahová",
    city: "Trnava",
    service: "Fotovoltika + dotácia",
    rating: 4,
    text: "s dotaciou Zelena domacnostiam som sa bala ze bude kopec papirovania ale v realite som len podpisala co mi predlozili a oni to vybavili za mna. System bezi od aprila a faktury su este nizsie ako som cakala. Pred montazou bola komunikacia trochu pomalsia ale inak v poriadku, celkovo som rada ze sme to spravili.",
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
