type AmbientBackdropProps = {
  intensity?: "soft" | "bold";
};

/** Slow drifting gold/black mesh gradient blobs. Purely decorative. */
export function AmbientBackdrop({ intensity = "soft" }: AmbientBackdropProps) {
  const opacity = intensity === "bold" ? "opacity-60" : "opacity-30";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px] ${opacity} animate-drift-slow will-change-transform`}
      />
      <div
        className={`absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-primary-deep/40 blur-[130px] ${opacity} animate-drift-slower will-change-transform`}
      />
      <div
        className={`absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full bg-primary-glow/15 blur-[140px] ${opacity} animate-breathe will-change-transform`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent,var(--background)_78%)]" />
    </div>
  );
}