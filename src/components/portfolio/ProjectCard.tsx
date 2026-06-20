import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "./data";

const gradients: Record<string, string> = {
  btree:
    "from-[oklch(0.30_0.05_200)] via-[oklch(0.20_0.03_220)] to-[oklch(0.16_0.005_240)]",
  re4:
    "from-[oklch(0.28_0.04_30)] via-[oklch(0.20_0.02_30)] to-[oklch(0.16_0.005_240)]",
  physics:
    "from-[oklch(0.30_0.06_260)] via-[oklch(0.20_0.03_260)] to-[oklch(0.16_0.005_240)]",
  horror:
    "from-[oklch(0.28_0.04_20)] via-[oklch(0.18_0.02_260)] to-[oklch(0.14_0.005_240)]",
  discharge:
    "from-[oklch(0.26_0.03_60)] via-[oklch(0.18_0.02_240)] to-[oklch(0.14_0.005_240)]",
  horror2d:
    "from-[oklch(0.22_0.02_280)] via-[oklch(0.16_0.01_260)] to-[oklch(0.12_0.005_240)]",
};

function PlaceholderArt({ id }: { id: string }) {
  // Stylised SVG placeholders so projects look intentional, not stocky.
  if (id === "btree") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1)" strokeWidth="1.2">
          <path d="M200 40 L120 110 M200 40 L280 110 M120 110 L80 180 M120 110 L160 180 M280 110 L240 180 M280 110 L320 180" />
        </g>
        {[
          [200, 40], [120, 110], [280, 110],
          [80, 180], [160, 180], [240, 180], [320, 180],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 22} y={y - 12} width="44" height="24" rx="6"
              fill="oklch(0.22 0.008 240)" stroke="var(--accent)" strokeOpacity="0.5" />
          </g>
        ))}
      </svg>
    );
  }
  if (id === "physics") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <g stroke="var(--accent)" strokeOpacity="0.5" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={60 + i * 40} cy={120 + Math.sin(i) * 30} r={10 + (i % 3) * 4} />
          ))}
          <path d="M20 200 L380 200" strokeOpacity="0.3" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full opacity-60">
      <defs>
        <pattern id={`p-${id}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 24 L24 0" stroke="white" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill={`url(#p-${id})`} />
      <circle cx="320" cy="60" r="80" fill="var(--accent)" fillOpacity="0.12" />
    </svg>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      void v.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };
  const span =
    project.span === "wide"
      ? "md:col-span-2"
      : project.span === "tall"
      ? "md:row-span-2"
      : "";

  return (
    <motion.a
      href={`#case-${project.slug}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
      onHoverStart={handleEnter}
      onHoverEnd={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border-hairline bg-surface-1 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--accent)_35%,transparent)] ${span}`}
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${gradients[project.thumbnail] ?? gradients.btree}`}
      >
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
          <PlaceholderArt id={project.thumbnail} />
        </div>
        {/* TODO: on hover, crossfade to <video autoPlay muted loop playsInline src="..." /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-md border border-border-hairline bg-background/60 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            {project.kind}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.year}
          </span>
        </div>
        <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-foreground/60 transition-all duration-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold leading-tight md:text-2xl">
            {project.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.role}
          </span>
          <span className="mx-1 text-muted-foreground/40">·</span>
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-hairline bg-surface-2 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
