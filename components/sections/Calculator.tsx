"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

// ─── konfigurácia ────────────────────────────────────────────
const ORIENTATIONS = [
  { key: "juh",   label: "Juh",      factor: 1.00 },
  { key: "jv-jz", label: "JV / JZ",  factor: 0.90 },
  { key: "vz",    label: "V / Z",    factor: 0.75 },
];
const ROOFS = [
  { key: "sikma",   label: "Šikmá",   surcharge: 0 },
  { key: "sedlova", label: "Sedlová", surcharge: 80 },
  { key: "rovna",   label: "Rovná",   surcharge: 200 },
];

// tiered €/kWp — väčší systém = nižšia cena
function baseRate(kwp: number) {
  if (kwp < 3)   return 1300;
  if (kwp <= 6)  return 1100;
  if (kwp <= 10) return  950;
  return 800;
}

// ─── UI primitívy ────────────────────────────────────────────
function ToggleGroup({
  label, options, value, onChange,
}: {
  label: string;
  options: { key: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
        {label}
      </p>
      <div className="flex gap-1.5">
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            onClick={() => onChange(o.key)}
            className={`flex-1 rounded-xl py-2 text-[13px] font-semibold transition-colors duration-150 ${
              value === o.key
                ? "bg-ink-900 text-white"
                : "bg-ink-50 text-ink-600 hover:bg-ink-100"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SliderRow({
  label, value, display, min, max, step, pct, onChange, minLabel, maxLabel,
}: {
  label: string; value: number; display: string;
  min: number; max: number; step: number; pct: number;
  onChange: (v: number) => void; minLabel: string; maxLabel: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {label}
        </label>
        <span className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
          {display}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #7FCC1F ${pct}%, #e5e7eb ${pct}%)` }}
      />
      <div className="flex justify-between mt-1 text-[10px] text-ink-400">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function ResultCard({ value, label, accent = false }: {
  value: string; label: string; accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-ink-900/8 bg-ink-50 p-3 text-center sm:p-5">
      <p className={`whitespace-nowrap font-display text-[15px] font-bold leading-tight sm:text-xl md:text-2xl ${
        accent ? "text-brand-700" : "text-ink-900"
      }`}>
        {value}
      </p>
      <p className="mt-1.5 text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-ink-500 sm:text-[10px] sm:tracking-[0.1em]">
        {label}
      </p>
    </div>
  );
}

// ─── hlavný komponent ────────────────────────────────────────
export default function Calculator() {
  const [monthly,     setMonthly]     = useState(120);
  const [price,       setPrice]       = useState(0.18);
  const [orientation, setOrientation] = useState("juh");
  const [roof,        setRoof]        = useState("sikma");
  const [battery,     setBattery]     = useState("no");   // "no" | "yes"

  // ── výpočet ────────────────────────────────────────────────
  const hasBattery   = battery === "yes";
  const annualBill   = monthly * 12;
  const annualKwh    = annualBill / price;
  const orientFactor = ORIENTATIONS.find((o) => o.key === orientation)!.factor;
  const surcharge    = ROOFS.find((r) => r.key === roof)!.surcharge;

  const savingsFrac  = (hasBattery ? 0.78 : 0.60) * orientFactor;
  const annualSavings = Math.round(annualBill * savingsFrac);

  const rawKwp    = (annualKwh * (hasBattery ? 0.78 : 0.60)) / (950 * orientFactor);
  const systemKwp = Math.max(2, Math.round(rawKwp / 0.5) * 0.5);

  const pvCost      = Math.round(systemKwp * (baseRate(systemKwp) + surcharge) / 100) * 100;
  const batteryCost = hasBattery ? 6000 : 0;
  const totalCost   = pvCost + batteryCost;

  // dotácia: 1 500 €/kWp, max 7 500 €
  const subsidy  = Math.min(Math.round(1500 * systemKwp / 100) * 100, 7500);
  const netCost  = Math.max(0, totalCost - subsidy);

  // návratnosť = hrubá cena (bez dotácie) / ročná úspora
  const payback  = annualSavings > 0 ? +(totalCost / annualSavings).toFixed(1) : 0;

  return (
    <section id="kalkulator" className="section bg-white">
      <div className="container-lg">
        <Reveal>
          <div className="mx-auto max-w-4xl">

            <div className="text-center mb-10">
              <span className="eyebrow">Kalkulátor úspor</span>
              <h2 className="mt-4 text-display-lg h-display text-balance">
                Koľko by ste ušetrili?
              </h2>
              <p className="mt-3 text-base text-ink-500">
                Nastavte parametre vášho domu — okamžitý odhad bez záväzkov.
              </p>
            </div>

            <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-8 md:p-10">

              {/* ── Vstupy ─────────────────────────────────── */}
              <div className="grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-6">

                {/* Slidery */}
                <div className="space-y-6">
                  <SliderRow
                    label="Mesačný účet za elektrinu"
                    value={monthly} display={`${monthly} €`}
                    min={20} max={400} step={5}
                    pct={((monthly - 20) / 380) * 100}
                    onChange={setMonthly}
                    minLabel="20 €" maxLabel="400 €"
                  />
                  <SliderRow
                    label="Cena elektriny"
                    value={price} display={`${price.toFixed(2)} €/kWh`}
                    min={0.10} max={0.30} step={0.01}
                    pct={((price - 0.10) / 0.20) * 100}
                    onChange={setPrice}
                    minLabel="0.10 €" maxLabel="0.30 €"
                  />
                </div>

                {/* Prepínače */}
                <div className="space-y-4">
                  <ToggleGroup
                    label="Orientácia strechy"
                    options={ORIENTATIONS}
                    value={orientation}
                    onChange={setOrientation}
                  />
                  <ToggleGroup
                    label="Typ strechy"
                    options={ROOFS}
                    value={roof}
                    onChange={setRoof}
                  />
                  <ToggleGroup
                    label="Batériové úložisko"
                    options={[
                      { key: "no",  label: "Bez batérie" },
                      { key: "yes", label: "S batériou"  },
                    ]}
                    value={battery}
                    onChange={setBattery}
                  />
                </div>
              </div>

              {/* ── Výsledky ───────────────────────────────── */}
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                <ResultCard
                  value={`${annualSavings.toLocaleString("sk")} €`}
                  label="Úspora / rok"
                  accent
                />
                <ResultCard
                  value={payback > 0 ? `${payback} r.` : "< 1 r."}
                  label="Návratnosť"
                />
                <ResultCard
                  value={`${totalCost.toLocaleString("sk")} €`}
                  label="Odhad nákladov"
                />
                <ResultCard
                  value={`${systemKwp.toFixed(1)} kWp`}
                  label="Veľkosť systému"
                />
              </div>

              {/* Dotácia */}
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/5 px-4 py-3.5">
                <span className="mt-0.5 shrink-0 text-base">💡</span>
                <p className="text-[13px] leading-relaxed text-ink-600">
                  <span className="font-semibold text-ink-900">Zelená domácnostiam III</span>
                  {" "}— dotácia až{" "}
                  <span className="font-semibold text-ink-900">{subsidy.toLocaleString("sk")} €</span>.
                  {" "}Po odpočítaní zaplatíte:{" "}
                  <span className="font-semibold text-brand-700">
                    {netCost > 0
                      ? `${netCost.toLocaleString("sk")} €`
                      : "plne pokryté dotáciou"}
                  </span>.
                </p>
              </div>

              <p className="mt-3 text-center text-xs text-ink-400">
                Orientačný výpočet. Presná kalkulácia závisí od miestnych podmienok a technickej obhliadky.
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
