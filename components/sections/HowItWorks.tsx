"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#f8f8f9" }} className="py-14 md:py-20">
      <div className="container-lg">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center mb-8 md:mb-10"
        >
          <span className="eyebrow mb-4">Ako to funguje</span>
          <h2 className="mt-4 text-display-lg h-display text-balance">
            Inteligentná energia.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Udržateľná budúcnosť.</span>
              <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-brand/40" />
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 text-balance">
            Vaše solárne panely vyrábajú elektrinu, menič ju premieňa na použiteľnú energiu
            a batériové úložisko ju uchováva na neskôr. Prebytok ide do siete.
          </p>
        </motion.div>

        {/* Infographic — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
        >
          <Image
            src="/images/info-pc.png"
            alt="Schéma fungovania fotovoltického systému — solárne panely, menič, batéria, sieť"
            width={1672}
            height={941}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Infographic — mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden mx-auto max-w-sm"
        >
          <Image
            src="/images/info-phone.png"
            alt="Schéma fungovania fotovoltického systému — solárne panely, menič, batéria, sieť"
            width={1024}
            height={1536}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <Link href="/kontakt" className="btn-primary">
            Chcem takýto systém
            <ArrowRightIcon size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
