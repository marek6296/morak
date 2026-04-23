import Link from "next/link";
import Image from "next/image";
import { SERVICES, COMPANY } from "@/lib/nav";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-ink-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div className="container-lg relative py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="/logo.png" alt="MORAK" width={1039} height={163} className="h-8 w-auto brightness-0 invert-0" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Certifikovaný realizátor fotovoltických elektrární, klimatizácií, kamerových systémov
              a elektroinštalácií. Pracujeme na celom Slovensku.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-100 transition-all hover:border-brand hover:text-brand"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-100 transition-all hover:border-brand hover:text-brand"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">Služby</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-ink-100 transition-colors hover:text-brand">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">Spoločnosť</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/#preco-morak" className="hover:text-brand">O firme</Link></li>
              <li><Link href="/#realizacie" className="hover:text-brand">Realizácie</Link></li>
              <li><Link href="/#proces" className="hover:text-brand">Ako pracujeme</Link></li>
              <li><Link href="/#faq" className="hover:text-brand">Časté otázky</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">Kontakt</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <PhoneIcon size={18} className="mt-0.5 text-brand" />
                <a href={COMPANY.phoneHref} className="hover:text-brand">{COMPANY.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon size={18} className="mt-0.5 text-brand" />
                <a href={COMPANY.emailHref} className="hover:text-brand">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon size={18} className="mt-0.5 text-brand" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon size={18} className="mt-0.5 text-brand" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MORAK. Všetky práva vyhradené. IČO {COMPANY.ico} &middot; DIČ {COMPANY.dic}</p>
          <div className="flex gap-6">
            <Link href="/#faq" className="hover:text-brand">Reklamačný poriadok</Link>
            <Link href="/#faq" className="hover:text-brand">Ochrana osobných údajov</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
