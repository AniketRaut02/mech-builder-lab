import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import showreelAsset from "@/assets/showreel.mp4.asset.json";

const stats = [
  { value: "3+", label: "Years with Unity" },
  { value: "2", label: "Internships" },
  { value: "10+", label: "Prototypes Built" },
  { value: "Custom", label: "AI Frameworks" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* TODO: replace placeholder loop with real showreel <video src="/showreel.mp4" /> */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <video
          src={showreelAsset.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_0%,oklch(0.30_0.04_200/_0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_100%,oklch(0.25_0.02_220/_0.5),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute right-[-10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-accent/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-24 md:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        <div className="lg:col-span-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-surface-1/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-[0.95] tracking-tight text-balance">
              Aniket Raut.
              <br />
              <span className="text-muted-foreground">Gameplay Programmer.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Building modular gameplay systems, AI behaviours and mechanics-driven
              experiences in Unity — with the mindset of a systems programmer.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[0_10px_40px_-10px_var(--accent)]"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-surface-1/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface-2"
              >
                Contact Me
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Watch showreel
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:pt-6">
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Currently
              </p>
              <p className="mt-3 font-display text-lg leading-snug">
                Designing a hospital horror survival game prototype using unity .
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Unity", "C#", "AI", "Tools"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border-hairline bg-surface-2 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 border-t border-border-hairline bg-background/40 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border-hairline md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="px-6 py-6 md:px-10 md:py-8">
                <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
