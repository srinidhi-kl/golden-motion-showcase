import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Shot = { src: string; category: string; label: string; span: string };

const shots: Shot[] = [
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    category: "Fashion",
    label: "Studio Editorial",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=900&q=80",
    category: "Casual",
    label: "Street Series",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    category: "Lifestyle",
    label: "Golden Hour",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    category: "Fashion",
    label: "Monochrome",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80",
    category: "Traditional",
    label: "Heritage Shoot",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    category: "Casual",
    label: "Denim Story",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=80",
    category: "Lifestyle",
    label: "City Light",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&w=900&q=80",
    category: "Traditional",
    label: "Festive Frame",
    span: "",
  },
];

const filters = ["All", "Fashion", "Casual", "Traditional", "Lifestyle"] as const;

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = active === "All" ? shots : shots.filter((s) => s.category === active);

  const step = (dir: number) =>
    setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length));

  return (
    <section id="portfolio" className="relative overflow-hidden py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[150px] animate-drift-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Gallery" title="My Modeling" accent="Portfolio" align="center" />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-primary/20 bg-card/60 p-1.5 backdrop-blur-sm">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative rounded-full px-5 py-2.5 text-xs tracking-[0.22em] uppercase transition-colors duration-300 ${
                  active === f ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-[image:var(--gradient-gold)]"
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[16rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((shot, i) => (
              <motion.button
                key={shot.src}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-primary/20 text-left transition-shadow duration-500 hover:border-primary/60 hover:shadow-[var(--shadow-gold-strong)] ${shot.span}`}
              >
                <img
                  src={shot.src}
                  alt={`${shot.label} — ${shot.category} modeling shot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 translate-y-4 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                <div className="absolute inset-x-5 bottom-5 flex translate-y-6 items-end justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] text-primary uppercase">
                      {shot.category}
                    </p>
                    <p className="font-display text-2xl">{shot.label}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && visible[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/85 p-5 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-primary/40 shadow-[var(--shadow-gold-strong)]"
            >
              <img
                src={visible[lightbox].src}
                alt={visible[lightbox].label}
                className="max-h-[78vh] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background to-transparent p-6">
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] text-primary uppercase">
                    {visible[lightbox].category}
                  </p>
                  <p className="font-display text-2xl">{visible[lightbox].label}</p>
                </div>
              </div>
            </motion.div>

            <button
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary transition-transform duration-300 hover:rotate-90"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-primary/40 text-primary transition-transform duration-300 hover:-translate-x-1 hover:bg-primary/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-primary/40 text-primary transition-transform duration-300 hover:translate-x-1 hover:bg-primary/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}