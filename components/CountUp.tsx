"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export default function CountUp({ to, duration = 1.8, suffix = "", prefix = "", decimals = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals).replace(".", ",")}${suffix}`);

  useEffect(() => {
    if (inView) {
      const ctrl = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return ctrl.stop;
    }
  }, [inView, mv, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
