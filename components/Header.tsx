"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/nav";
import { MenuIcon, CloseIcon, ArrowRightIcon } from "@/components/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-ink-900/8 py-3"
          : "bg-white/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="container-lg flex items-center justify-between">
        <Link href="/" aria-label="MORAK domov" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MORAK"
            width={1039}
            height={163}
            className={`transition-all duration-500 ${scrolled ? "h-7" : "h-8"} w-auto`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium tracking-wide text-ink-700 transition-colors hover:text-ink-900 xl:text-sm"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/kontakt" className="btn-primary !py-2.5 !px-5 !text-[13px]">
            Cenová ponuka
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <button
          aria-label="Otvoriť menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/80 text-ink-900 backdrop-blur lg:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink-900 text-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-lg flex h-full flex-col">
              <div className="flex items-center justify-between py-5">
                <Image src="/logo.png" alt="MORAK" width={1039} height={163} className="h-7 w-auto" />
                <button
                  aria-label="Zavrieť menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-5">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      className="font-display text-4xl font-semibold tracking-tight"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pb-10">
                <Link href="/kontakt" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                  Cenová ponuka
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
