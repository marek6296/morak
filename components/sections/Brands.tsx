"use client";

import Image from "next/image";

const BRANDS = [
  { name: "Fronius", domain: "fronius.com" },
  { name: "GoodWe", domain: "goodwe.com" },
  { name: "Huawei", domain: "huawei.com" },
  { name: "Daikin", domain: "daikin.com" },
  { name: "Hikvision", domain: "hikvision.com" },
  { name: "SMA", domain: "sma.de" },
];

export default function Brands() {
  return (
    <section style={{ backgroundColor: "#fafafa" }}>
      <div className="container-lg border-t border-ink-900/10 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
          Certifikácie, partneri a výrobcovia
        </p>
        <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6 items-center">
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
    </section>
  );
}
