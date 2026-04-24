"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export default function Calculator() {
  const [monthly, setMonthly] = useState(120);

  const annualBill = monthly * 12;
  const savings = Math.round(annualBill * 0.73);
  const systemCost = Math.round(monthly * 40 / 100) * 100;
  const payback = +(systemCost / savings).toFixed(1);

  return (
    <section className="section bg-white">
      <div className="container-lg">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <span className="eyebrow">Kalkulátor úspor</span>
              <h2 className="mt-4 text-display-lg h-display text-balance">
                Koľko by ste ušetrili?
              </h2>
              <p className="mt-3 text-base text-ink-500">
                Zadajte váš priemerný mesačný účet za elektrinu a ihneď uvidíte odhad úspor.
              </p>
            </div>

            <div className="rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft md:p-10">
              {/* Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-ink-700 uppercase tracking-[0.1em]">
                    Mesačný účet za elektrinu
                  </label>
                  <span className="font-display text-3xl font-bold text-ink-900">
                    {monthly} €
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={400}
                  step={5}
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #7FCC1F ${((monthly - 20) / 380) * 100}%, #e5e7eb ${((monthly - 20) / 380) * 100}%)`
                  }}
                />
                <div className="flex justify-between mt-1.5 text-xs text-ink-400">
                  <span>20 €</span>
                  <span>400 €</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-brand/10 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-brand-700 md:text-3xl">
                    {savings.toLocaleString("sk")} €
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                    úspora / rok
                  </p>
                </div>
                <div className="rounded-2xl bg-ink-50 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
                    {payback} r.
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                    návratnosť
                  </p>
                </div>
                <div className="rounded-2xl bg-ink-50 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
                    ~{systemCost.toLocaleString("sk")} €
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                    odhad nákladov
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-ink-400">
                Orientačný výpočet. Presná kalkulácia závisí od spotreby, orientácie strechy a typu systému.
              </p>

              <div className="mt-6 flex justify-center">
                <Link href="/kontakt" className="btn-primary">
                  Získať presnú kalkuláciu zadarmo
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
