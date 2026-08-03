import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png.asset.json";
import { AmbientBackdrop } from "./AmbientBackdrop";
import { FloatingShapes } from "./FloatingShapes";
import { GoldButton } from "./GoldButton";

const roles = ["Model & Actor", "Content Creator", "Senior Web Developer"];

export function Hero() {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + (i % 3),
        duration: 9 + (i % 7) * 2,
        delay: (i % 5) * 1.2,
      })),
    [],
  );

  const handleTilt = (e: React.MouseEvent) => {
    if (reduced || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 12, ry: px * 14 });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <AmbientBackdrop intensity="bold" />
      <FloatingShapes />

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-primary/70"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 14px 4px var(--primary)",
            }}
            animate={reduced ? {} : { y: [0, -60, 0], opacity: [0, 0.9, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs tracking-[0.32em] text-primary uppercase backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            Bangalore, India
          </motion.p>

          <h1 className="text-[4rem] leading-[0.85] sm:text-[6rem] lg:text-[7.5rem]">
            {"Shri".split("").map((c, i) => (
              <motion.span
                key={`s${i}`}
                initial={{ opacity: 0, y: 60, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <span className="gold-text">
              {"Nidhi".split("").map((c, i) => (
                <motion.span
                  key={`n${i}`}
                  initial={{ opacity: 0, y: 60, rotate: 8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>

          <div className="mt-6 flex h-10 items-center gap-3 overflow-hidden">
            <span className="h-px w-12 bg-primary" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl tracking-[0.2em] text-primary uppercase sm:text-3xl"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I live between the lens and the codebase — shooting fashion campaigns, creating
            content that travels, and engineering premium web experiences for brands that care
            about craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GoldButton href="#portfolio">View My Work</GoldButton>
            <GoldButton href="#contact" variant="outline">
              Let&apos;s Connect
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          ref={frameRef}
          onMouseMove={handleTilt}
          onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xl [perspective:1200px]"
        >
          <motion.div
            animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
            className="relative rounded-[2rem] p-[1.5px] [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[image:var(--gradient-gold)] bg-[length:250%_100%] opacity-80 blur-[1px] animate-shimmer" />
            <div className="relative overflow-hidden rounded-[2rem] bg-card">
              <img
                src={heroPortrait.url}
                alt="Shri Nidhi, model and actor, in a black shirt against a gold-lit backdrop"
                className="h-full w-full object-cover animate-breathe will-change-transform"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 font-script text-3xl text-primary drop-shadow-[0_0_18px_var(--primary)]">
                Shri Nidhi
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -top-6 -right-6 h-24 w-24 rounded-tr-[2rem] border-t-2 border-r-2 border-primary/70"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-bl-[2rem] border-b-2 border-l-2 border-primary/70"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary"
      >
        <span className="flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.35em] uppercase">
          Scroll
          <ArrowDown className="h-5 w-5 animate-bounce-soft" />
        </span>
      </motion.a>
    </section>
  );
}