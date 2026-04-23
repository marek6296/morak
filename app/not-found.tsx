import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center pt-28">
      <div className="container-lg text-center">
        <p className="font-display text-7xl font-semibold tracking-tight text-ink-900">404</p>
        <h1 className="mt-4 text-display-lg h-display">Stránka sa nenašla.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-500">
          Zdá sa, že URL adresa nie je správna alebo bola stránka presunutá. Skúste to cez menu
          alebo sa vráťte na úvod.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn-primary">
            Späť na úvod <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
