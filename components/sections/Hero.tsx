"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, ShieldIcon } from "@/components/icons";

const BRANDS = [
  { name: "Fronius", domain: "fronius.com" },
  { name: "GoodWe", domain: "goodwe.com" },
  { name: "Huawei", domain: "huawei.com" },
  { name: "Daikin", domain: "daikin.com" },
  { name: "Hikvision", domain: "hikvision.com" },
  { name: "SMA", domain: "sma.de" },
];

function SealBadge({ size = 84, uid = "a" }: { size?: number; uid?: string }) {
  const gId = `sg-${uid}`;
  // 28 jemných zubov — plynulejší okraj pečate
  const teeth = 28;
  const pts: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const a = (i * Math.PI) / teeth - Math.PI / 2;
    const r = i % 2 === 0 ? 48 : 43;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  const gear = `M${pts.join("L")}Z`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#F0D060" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>

      {/* Zúbkovaný zlatý okraj */}
      <path d={gear} fill={`url(#${gId})`} />

      {/* Tmavý vnútorný kruh — navy/čierny */}
      <circle cx="50" cy="50" r="38" fill="#1a1a2e" />

      {/* Dekoratívne prstence */}
      <circle cx="50" cy="50" r="37"   fill="none" stroke="#D4AF37" strokeWidth="1"   />
      <circle cx="50" cy="50" r="33.5" fill="none" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />

      {/* Hviezdičky hore */}
      <text x="50" y="24" textAnchor="middle" fontSize="5" fill="#D4AF37">★  ★  ★</text>

      {/* CERTIFIKOVANÁ */}
      <text x="50" y="33" textAnchor="middle" fontSize="5.5" fontWeight="700"
            fill="#D4AF37" letterSpacing="0.6" fontFamily="system-ui,sans-serif">
        CERTIFIKOVANÁ
      </text>

      {/* Horný oddeľovač */}
      <line x1="26" y1="36.5" x2="74" y2="36.5" stroke="#D4AF37" strokeWidth="0.5" opacity="0.7" />

      {/* Veľká "5" */}
      <text x="50" y="56" textAnchor="middle" fontSize="20" fontWeight="900"
            fill="#F0D060" fontFamily="system-ui,sans-serif">
        5
      </text>

      {/* ROKOV */}
      <text x="50" y="65" textAnchor="middle" fontSize="7.5" fontWeight="700"
            fill="#D4AF37" letterSpacing="1.5" fontFamily="system-ui,sans-serif">
        ROKOV
      </text>

      {/* ZÁRUKA */}
      <text x="50" y="73.5" textAnchor="middle" fontSize="6.5" fontWeight="600"
            fill="#D4AF37" letterSpacing="1" fontFamily="system-ui,sans-serif">
        ZÁRUKA
      </text>

      {/* Dolný oddeľovač */}
      <line x1="26" y1="76.5" x2="74" y2="76.5" stroke="#D4AF37" strokeWidth="0.5" opacity="0.7" />

      {/* MORAK */}
      <text x="50" y="83" textAnchor="middle" fontSize="5.5" fontWeight="700"
            fill="#D4AF37" letterSpacing="2" fontFamily="system-ui,sans-serif">
        ✦ MORAK ✦
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative" style={{ backgroundColor: "#fafafa" }}>

      {/* ── MOBILE HERO (< lg) ── */}
      <div className="lg:hidden">
        <div className="relative bg-white" style={{ height: "calc(100svh - 64px)", minHeight: "540px" }}>

          <Image
            src="/images/hero-phone.png"
            alt="Rodinný dom so solárnymi panelmi a batériou"
            fill
            priority
            sizes="100vw"
            className="object-contain object-top"
          />

          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-white via-white/85 to-transparent" />

          {/* Dotácia badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 top-4"
          >
            <div
              className="rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(34,197,94,0.35)]"
              style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100">Štátna dotácia</p>
              <p className="font-display leading-none text-white" style={{ fontSize: "2rem", fontWeight: 900 }}>
                7 500 €
              </p>
              <p className="mt-0.5 text-[11px] font-semibold text-green-100">Zelená domácnostiam III</p>
            </div>
          </motion.div>

          {/* Certification seal — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-4 top-4"
            style={{ filter: "drop-shadow(0 6px 18px rgba(212,175,55,0.55))" }}
          >
            <SealBadge size={84} uid="mob" />
          </motion.div>

          {/* Text + CTA */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2.5"
            >
              <h1 className="font-display text-[3.1rem] font-semibold leading-[1.05] tracking-tight text-ink-900">
                Elektrina, ktorú si vyrábate sami.
              </h1>
              <p className="text-[20px] leading-relaxed text-ink-600">
                Znížte účet za elektrinu až o&nbsp;80 %. Realizácia na kľúč s päťročnou zárukou.
              </p>
              <Link
                href="/kontakt"
                className="btn-primary mt-1 w-full justify-center py-3.5 text-[15px]"
              >
                Získať bezplatnú cenovú ponuku
                <ArrowRightIcon size={16} />
              </Link>
              <div className="flex items-center gap-2.5 rounded-xl border border-ink-900/10 bg-white/80 px-3.5 py-2.5 backdrop-blur-sm">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-500">
                  <ShieldIcon size={13} />
                </span>
                <p className="text-[12px] leading-snug text-ink-700">
                  <span className="font-semibold text-ink-900">5-ročná záruka</span>
                  <span> · oprávnenie §22/§23 · bezplatná konzultácia</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Below-fold: brand strip */}
        <div className="px-5 py-8" style={{ backgroundColor: "#fafafa" }}>
          <div className="border-t border-ink-900/10 pt-5">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Certifikácie, partneri a výrobcovia
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 items-center">
              {BRANDS.map((b) => (
                <div key={b.name} className="flex items-center justify-center h-8">
                  <Image
                    src={`https://logo.clearbit.com/${b.domain}`}
                    alt={b.name}
                    width={80}
                    height={32}
                    className="h-6 w-auto object-contain opacity-60 grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span class="font-display text-xs font-semibold tracking-[0.12em] text-ink-400">${b.name.toUpperCase()}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (lg+) ── */}
      <div className="hidden lg:flex flex-col">
        <div className="container-lg relative flex flex-col justify-center pt-12 pb-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT — text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-display text-balance"
                style={{ fontSize: "clamp(2.8rem, 5.2vw, 4.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Elektrina, ktorú si vyrábate sami.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Dotácia až 7 500 €.</span>
                  <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-brand/40" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-lg text-xl leading-relaxed text-ink-500"
              >
                Znížte účet za elektrinu až o 80 %. Realizácia na kľúč s päťročnou zárukou.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <Link href="/kontakt" className="btn-primary">
                  Získať cenovú ponuku
                  <ArrowRightIcon size={16} />
                </Link>
                <Link href="#sluzby" className="btn-ghost">
                  Naše služby
                </Link>
              </motion.div>

            </div>

            {/* RIGHT — illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.045, y: -8 }}
              transition={{
                opacity: { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                x:       { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                scale:   { type: "spring", stiffness: 220, damping: 22 },
                y:       { type: "spring", stiffness: 220, damping: 22 },
              }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-8 right-2 z-10"
              >
                <div
                  className="rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(34,197,94,0.35)]"
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100">Štátna dotácia</p>
                  <p className="font-display leading-none text-white" style={{ fontSize: "1.9rem", fontWeight: 900 }}>
                    7 500 €
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-green-100">Zelená domácnostiam III</p>
                </div>
              </motion.div>

              {/* Certification seal — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 right-2 z-10"
                style={{ filter: "drop-shadow(0 8px 22px rgba(212,175,55,0.6))" }}
              >
                <SealBadge size={96} uid="dsk" />
              </motion.div>

              <Image
                src="/images/hero-pc.png"
                alt="Rodinný dom so solárnymi panelmi, batériou a elektroinštaláciou"
                width={1323}
                height={1189}
                priority
                sizes="(max-width: 1280px) 50vw, 620px"
                className="w-full h-auto max-h-[520px] object-contain"
              />
            </motion.div>
          </div>

          {/* Brand logo strip */}
          <div className="mt-6 border-t border-ink-900/10 pt-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Certifikácie, partneri a výrobcovia
            </p>
            <div className="mt-5 grid grid-cols-6 items-center gap-6">
              {BRANDS.map((b) => (
                <div key={b.name} className="flex items-center justify-center h-10">
                  <Image
                    src={`https://logo.clearbit.com/${b.domain}`}
                    alt={b.name}
                    width={120}
                    height={40}
                    className="h-7 w-auto object-contain opacity-50 grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span style="font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.16em;color:#9ca3af">${b.name.toUpperCase()}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
