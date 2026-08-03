import { motion } from "motion/react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/12 bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-gold)] font-display text-lg text-primary-foreground">
            SN
          </span>
          <p className="min-w-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shri Nidhi — Model, Creator &amp; Developer, Bangalore.
          </p>
        </div>
        <div className="flex gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 text-primary transition-shadow duration-500 hover:shadow-[0_0_28px_-6px_var(--primary)]"
            >
              <s.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}