import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="mb-3 flex items-center gap-3 text-xs tracking-[0.42em] text-primary uppercase">
        {align === "center" && <span className="h-px w-10 bg-primary/50" />}
        {eyebrow}
        <span className="h-px w-10 bg-primary/50" />
      </p>
      <h2 className="text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
        {title} {accent && <span className="gold-text">{accent}</span>}
      </h2>
    </Reveal>
  );
}