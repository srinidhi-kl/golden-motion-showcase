import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const reels = [
  {
    src: "https://images.unsplash.com/photo-1533162507191-d90c625b2640?auto=format&fit=crop&w=800&q=80",
    title: "Behind The Lens",
    meta: "1.2M views",
  },
  {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
    title: "Fit Of The Day",
    meta: "860K views",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    title: "Studio Diaries",
    meta: "2.4M views",
  },
];

export function Reels() {
  return (
    <section id="reels" className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-night)] opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[130px] animate-drift-slow"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Reels" title="Content In" accent="Motion" align="center" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative aspect-[9/13] cursor-pointer overflow-hidden rounded-[1.5rem] border border-primary/20 transition-shadow duration-500 hover:border-primary/60 hover:shadow-[var(--shadow-gold-strong)]"
              >
                <img
                  src={r.src}
                  alt={`${r.title} reel thumbnail`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5" />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-primary animate-pulse-ring"
                  />
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-display text-2xl">{r.title}</p>
                  <p className="text-xs tracking-[0.24em] text-primary uppercase">{r.meta}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}