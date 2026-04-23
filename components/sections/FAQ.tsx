"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PlusIcon, MinusIcon } from "@/components/icons";

const QA = [
  {
    q: "Ako prebieha cenová ponuka a je bezplatná?",
    a: "Áno, prvotná konzultácia aj cenová ponuka sú u nás vždy bezplatné a nezáväzné. Po telefonickej obhliadke a spresnení potrieb vám do 3 pracovných dní zašleme detailný návrh s pevnou cenou, technickým popisom a odhadom návratnosti."
  },
  {
    q: "Akú dlhú záruku poskytujete?",
    a: "Na montážne práce poskytujeme štandardne päťročnú záruku. Záruky na komponenty sa riadia výrobcami — pre fotovoltické panely je to typicky 25 rokov výkonu, pre meniče 10 až 12 rokov, pre klimatizácie 5 rokov a pre kamerové systémy 3 roky."
  },
  {
    q: "Vybavíte za nás dotáciu Zelená domácnostiam?",
    a: "Áno, celú administratívu dotácie vybavíme za vás — od registrácie, cez technické podklady, protokoly SIEA až po záverečné vyúčtovanie. Pracujeme s aktuálnymi podmienkami programu Zelená domácnostiam III."
  },
  {
    q: "Vykonávate servis aj pre zariadenia, ktoré inštaloval niekto iný?",
    a: "Áno. Po vstupnej technickej obhliadke vieme prevziať do servisu fotovoltické elektrárne, klimatizácie aj kamerové systémy inštalované inou firmou. Pripravíme zmluvu o údržbe s pravidelnými prehliadkami aj pohotovostným výjazdom."
  },
  {
    q: "Ako dlho trvá realizácia?",
    a: "Inštalácia typickej fotovoltickej elektrárne pre rodinný dom trvá 1 – 2 dni. Klimatizácia sa montuje počas jedného dňa. Kamerové systémy v závislosti od rozsahu 1 – 3 dni. Väčšie elektroinštalácie pri novostavbách bývajú naplánované podľa harmonogramu stavby."
  },
  {
    q: "Ako je zabezpečená ochrana osobných údajov pri kamerových systémoch?",
    a: "Kamerové systémy navrhujeme v súlade s GDPR a Nariadením Úradu na ochranu osobných údajov. Pripravíme pre vás informačnú tabuľu, záznamový list a v prípade firemných prevádzok aj posúdenie vplyvu na ochranu údajov (DPIA)."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-lg">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Časté otázky</span>
              <h2 className="mt-4 text-display-lg h-display text-balance">
                Čo sa naši klienti pýtajú najčastejšie.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">
                Nenašli ste odpoveď na vašu otázku? Napíšte nám alebo zavolajte, radi vás
                prevedieme celým procesom.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink-900/8 border-y border-ink-900/8">
              {QA.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.div key={item.q} layout>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-8 py-6 text-left"
                    >
                      <span className="font-display text-lg font-semibold tracking-tight text-ink-900 md:text-xl">
                        {item.q}
                      </span>
                      <span
                        className={`mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? "border-ink-900 bg-ink-900 text-white" : "border-ink-900/15 text-ink-900"
                        }`}
                      >
                        {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 pr-14 text-[15px] leading-relaxed text-ink-500">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
