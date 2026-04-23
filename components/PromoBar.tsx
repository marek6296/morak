"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function PromoBar() {
  return (
    <div className="relative z-[60] bg-ink-900 text-white">
      <div className="container-lg flex flex-col items-center justify-between gap-2 py-2.5 text-[13px] sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          <span className="font-medium">
            Dotácia Zelená domácnostiam III — <span className="text-brand">až 7 500 €</span> na fotovoltiku
          </span>
        </div>
        <Link
          href="/fotovoltika"
          className="inline-flex items-center gap-1.5 font-semibold text-brand transition-colors hover:text-white"
        >
          Zistiť viac
          <ArrowRightIcon size={12} />
        </Link>
      </div>
    </div>
  );
}
