import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Decorative floating rings, dot grids and orbs that parallax on mouse move. */
export function FloatingShapes({ parallax = true }: { parallax?: boolean }) {
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!parallax || reduced) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallax, reduced]);

  const shift = (depth: number) => ({
    x: pointer.x * depth,
    y: pointer.y * depth,
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={shift(26)}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute top-[12%] left-[6%] h-40 w-40 rounded-full border border-primary/30 animate-float will-change-transform"
      />
      <motion.div
        animate={shift(-18)}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute bottom-[16%] left-[18%] h-24 w-24 rotate-12 rounded-3xl border border-primary/20 animate-float-slow will-change-transform"
      />
      <motion.div
        animate={shift(34)}
        transition={{ type: "spring", stiffness: 35, damping: 18 }}
        className="absolute top-[22%] right-[10%] h-3 w-3 rounded-full bg-primary shadow-[0_0_28px_8px_var(--primary)] animate-float will-change-transform"
      />
      <motion.div
        animate={shift(-24)}
        transition={{ type: "spring", stiffness: 35, damping: 18 }}
        className="absolute bottom-[26%] right-[16%] h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_22px_6px_var(--primary-glow)] animate-float-slow will-change-transform"
      />
      <motion.div
        animate={shift(14)}
        transition={{ type: "spring", stiffness: 40, damping: 22 }}
        className="absolute top-[40%] left-[2%] hidden animate-float-slow md:block"
      >
        <DotGrid />
      </motion.div>
      <motion.div
        animate={shift(-14)}
        transition={{ type: "spring", stiffness: 40, damping: 22 }}
        className="absolute bottom-[10%] right-[4%] hidden animate-float md:block"
      >
        <DotGrid />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 animate-spin-slower" />
      <div className="absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/10 animate-spin-slow" />
    </div>
  );
}

function DotGrid() {
  return (
    <div className="grid grid-cols-5 gap-2.5 opacity-50">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-primary/70" />
      ))}
    </div>
  );
}