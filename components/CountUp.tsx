"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

// Cubic ease-out — identical feel to [0.22, 1, 0.36, 1]
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  to,
  duration = 1.8,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !ref.current) return;
    started.current = true;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const value = easeOut(progress) * to;

      if (ref.current) {
        ref.current.textContent =
          `${prefix}${value.toFixed(decimals).replace(".", ",")}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else if (ref.current) {
        // Guarantee exact final value — no rounding artifact
        ref.current.textContent =
          `${prefix}${to.toFixed(decimals).replace(".", ",")}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  }, [inView, to, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
