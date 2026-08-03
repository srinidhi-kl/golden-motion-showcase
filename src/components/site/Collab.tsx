import { motion } from "motion/react";
import { Handshake, Megaphone, MonitorSmartphone, Video } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const offers = [
  {
    icon: Megaphone,
    title: "Brand Campaigns",
    copy: "Print, digital and OOH campaigns — from concept boards to final delivery.",
  },
  {
    icon: Video,
    title: "Ad Films & Reels",
    copy: "On-camera talent plus scripting and edit direction for short-form content.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Experiences",
    copy: "Animated, high-performance brand sites and landing pages built end to end.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    copy: "Ambassador roles and retained creative work with consistent brand voice.",
  },
];

export function Collab() {
  return (
    <section id="collab" className="relative overflow-hidden py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-deep/20 blur-[140px] animate-drift-slower" />
        <div className="absolute right-[6%] top-[12%] h-20 w-20 rounded-full border border-primary/25 animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Collaborate" title="Let's Create" accent="Together" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative h-full rounded-2xl bg-card/70 p-7 backdrop-blur-sm shimmer-border transition-shadow duration-500 hover:shadow-[var(--shadow-gold-strong)]"
              >
                <motion.span
                  whileHover={{ rotate: -12, scale: 1.18 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary"
                >
                  <o.icon className="h-6 w-6" />
                </motion.span>
                <h3 className="text-2xl">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}