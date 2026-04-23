"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const SERVICE_OPTIONS = [
  "Fotovoltická elektráreň",
  "Klimatizácia / tepelné čerpadlo",
  "Kamerový systém",
  "Elektroinštalácia / revízia",
  "Iné / kombinácia"
];

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const fieldBase =
    variant === "dark"
      ? "w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all focus:border-brand focus:bg-white/10"
      : "w-full rounded-2xl border border-ink-900/10 bg-white px-5 py-4 text-ink-900 placeholder:text-ink-400 outline-none transition-all focus:border-brand-400 focus:bg-brand-50/30";
  const labelBase =
    variant === "dark"
      ? "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/70"
      : "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-500";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Niečo sa pokazilo, skúste to prosím znova.");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Skúste to prosím znova.");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-start gap-4 rounded-3xl p-10 ${
              variant === "dark" ? "bg-white/5 border border-white/10" : "bg-brand-50 border border-brand-200"
            }`}
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-ink-900">
              <CheckIcon size={28} />
            </span>
            <div>
              <h3 className={`font-display text-2xl font-semibold tracking-tight ${variant === "dark" ? "text-white" : "text-ink-900"}`}>
                Správa úspešne odoslaná
              </h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${variant === "dark" ? "text-white/70" : "text-ink-500"}`}>
                Ďakujeme. Ozveme sa vám najneskôr do jedného pracovného dňa na uvedené telefónne
                číslo alebo email.
              </p>
            </div>
            <button
              onClick={() => setState("idle")}
              className={`mt-2 text-sm font-semibold ${variant === "dark" ? "text-brand-300 hover:text-brand" : "text-brand-700 hover:text-brand-600"}`}
            >
              Odoslať ďalšiu správu
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelBase} htmlFor="name">Meno a priezvisko</label>
                <input id="name" name="name" required minLength={2} className={fieldBase} placeholder="Ján Novák" />
              </div>
              <div>
                <label className={labelBase} htmlFor="phone">Telefón</label>
                <input id="phone" name="phone" required type="tel" className={fieldBase} placeholder="+421 903 ..." />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelBase} htmlFor="email">E-mail</label>
                <input id="email" name="email" required type="email" className={fieldBase} placeholder="jan@novak.sk" />
              </div>
              <div>
                <label className={labelBase} htmlFor="service">Mám záujem o</label>
                <select id="service" name="service" required className={fieldBase} defaultValue="">
                  <option value="" disabled>Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelBase} htmlFor="message">Správa</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={fieldBase}
                placeholder="Stručne nám napíšte, s čím vám môžeme pomôcť — typ objektu, rozsah, prípadné termíny."
              />
            </div>

            <label className={`flex items-start gap-3 text-[13px] leading-relaxed ${variant === "dark" ? "text-white/70" : "text-ink-500"}`}>
              <input type="checkbox" name="gdpr" required className="mt-1 h-4 w-4 rounded border-ink-900/20 text-brand focus:ring-brand" />
              <span>
                Súhlasím so spracovaním osobných údajov pre účely spracovania dopytu v súlade s GDPR.
              </span>
            </label>

            {state === "error" && (
              <p className="text-sm font-medium text-red-500">{errorMsg}</p>
            )}

            <div className="mt-2 flex items-center justify-between gap-4">
              <p className={`text-[12px] ${variant === "dark" ? "text-white/50" : "text-ink-400"}`}>
                Odpovedáme najneskôr do 24 hodín
              </p>
              <button
                type="submit"
                disabled={state === "loading"}
                className="btn-primary disabled:opacity-60"
              >
                {state === "loading" ? "Odosielam…" : "Odoslať správu"}
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
