import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { AmbientBackdrop } from "./AmbientBackdrop";
import { FloatingShapes } from "./FloatingShapes";
import { GoldButton } from "./GoldButton";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "hello@shrinidhi.co", href: "mailto:hello@shrinidhi.co" },
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Bangalore, India", href: "#contact" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <AmbientBackdrop intensity="bold" />
      <FloatingShapes />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs tracking-[0.42em] text-primary uppercase">Get In Touch</p>
          <h2 className="text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
            Ready to shoot, create <span className="gold-text">or build?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about the campaign, the concept or the product. I reply to every serious
            enquiry within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GoldButton href="mailto:hello@shrinidhi.co">Start A Project</GoldButton>
            <GoldButton href="#portfolio" variant="outline">
              See Portfolio
            </GoldButton>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {details.map((d) => (
              <motion.a
                key={d.label}
                href={d.href}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-primary/15 bg-card/60 px-5 py-5 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50"
              >
                <d.icon className="h-5 w-5 shrink-0 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                <span className="min-w-0 truncate text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {d.label}
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}