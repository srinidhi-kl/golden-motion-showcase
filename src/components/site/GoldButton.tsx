import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

type GoldButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
};

/** Gradient CTA with magnetic cursor follow, gold glow and click ripple. */
export function GoldButton({
  children,
  href,
  variant = "solid",
  className,
  magnetic = true,
  onClick,
}: GoldButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.22,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.32,
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (ref.current && !reduced) {
      const rect = ref.current.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      setTimeout(() => setRipples((r) => r.filter((item) => item.id !== id)), 650);
    }
    onClick?.();
  };

  const Comp = motion[href ? "a" : "button"] as typeof motion.a;

  return (
    <Comp
      // @ts-expect-error polymorphic ref
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={handleClick}
      animate={offset}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-8 py-4 font-display text-lg tracking-[0.14em] uppercase transition-shadow duration-500",
        variant === "solid"
          ? "text-primary-foreground shadow-[0_10px_40px_-12px_var(--primary)] hover:shadow-[0_0_50px_-6px_var(--primary)]"
          : "border border-primary/40 text-primary hover:border-primary hover:shadow-[0_0_40px_-10px_var(--primary)]",
        className,
      )}
    >
      {variant === "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 bg-[image:var(--gradient-gold)] bg-[length:250%_100%] bg-left transition-[background-position] duration-700 ease-out group-hover:bg-right"
        />
      )}
      {variant === "outline" && (
        <span
          aria-hidden
          className="absolute inset-0 bg-[image:var(--gradient-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-15"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ left: r.x, top: r.y }}
          className="absolute z-20 -ml-12 -mt-12 h-24 w-24 rounded-full bg-background/50"
        />
      ))}
    </Comp>
  );
}