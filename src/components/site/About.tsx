import { motion } from "motion/react";
import { Camera, Clapperboard, Code2 } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.png.asset.json";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const roles = [
  {
    icon: Clapperboard,
    title: "Model & Actor",
    copy: "Editorial, fashion and ad-film work — comfortable in front of stills and motion cameras.",
  },
  {
    icon: Camera,
    title: "Content Creator",
    copy: "Short-form reels and brand storytelling built to hold attention past the first second.",
  },
  {
    icon: Code2,
    title: "Senior Web Developer",
    copy: "Design-led front-end engineering: fast, animated, conversion-focused product sites.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[130px] animate-drift-slow" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-deep/15 blur-[120px] animate-drift-slower" />
        <div className="absolute top-1/4 right-[8%] h-28 w-28 rounded-full border border-primary/20 animate-float-slow" />
        <div className="absolute bottom-1/4 left-[46%] h-14 w-14 rotate-45 border border-primary/15 animate-float" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02, rotateZ: -1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="group relative rounded-[2rem] p-[1.5px] shimmer-border"
          >
            <div className="overflow-hidden rounded-[2rem] bg-card">
              <img
                src={aboutPortrait.url}
                alt="Shri Nidhi seated on a stool in a black outfit with a gold rim light"
                className="aspect-[4/5] w-full object-cover object-[18%_center] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </motion.div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About Me" title="Three crafts," accent="one obsession" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m Shri Nidhi — based in Bangalore, working across fashion sets, content
              studios and engineering teams. That mix is the point: I understand how a frame is
              composed, how an audience scrolls, and how to build the thing that ships. Brands get
              a collaborator who can model the campaign and then build the site it lives on.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {roles.map((role, i) => (
              <Reveal key={role.title} delay={0.15 + i * 0.12}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group h-full rounded-2xl border border-primary/15 bg-card/60 p-6 backdrop-blur-sm transition-shadow duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-gold-soft)]"
                >
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors duration-500 group-hover:bg-primary/20"
                  >
                    <role.icon className="h-6 w-6" />
                  </motion.span>
                  <h3 className="text-2xl">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.copy}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}