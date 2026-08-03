import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GoldButton } from "./GoldButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Collab", href: "#collab" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduced ? { opacity: 0 } : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/15 bg-background/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-gold)] font-display text-xl text-primary-foreground transition-transform duration-500 group-hover:rotate-[8deg]">
            SN
          </span>
          <span className="truncate font-display text-xl tracking-[0.24em] uppercase">
            Shri Nidhi
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-[image:var(--gradient-gold)] transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <GoldButton href="#contact" className="px-6 py-2.5 text-sm">
            Hire Me
          </GoldButton>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 text-primary transition-colors hover:bg-primary/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden md:hidden"
      >
        <div className="mx-5 mt-4 flex flex-col gap-1 rounded-2xl border border-primary/15 bg-card/90 p-4 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm tracking-[0.18em] uppercase transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}