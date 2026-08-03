import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Shoots Completed" },
  { value: 45, suffix: "+", label: "Brand Collabs" },
  { value: 8, suffix: "M+", label: "Content Views" },
  { value: 7, suffix: " yrs", label: "Dev Experience" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduced]);

  return (
    <span ref={ref} className="gold-text font-display text-5xl sm:text-6xl">
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-primary/12 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-night)] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[120px] animate-drift-slower"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-primary/15 bg-card/50 p-7 text-center backdrop-blur-sm transition-shadow duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-gold-soft)]"
          >
            <div className="animate-breathe will-change-transform">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}