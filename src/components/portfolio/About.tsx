import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import profileAsset from "@/assets/profile.jpg.asset.json";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About" title="Gameplay programmer with a passion for building scalable systems." />
          <Reveal delay={0.05}>
            <div className="mt-10 max-w-xs">
              <div className="relative overflow-hidden rounded-2xl border border-border-hairline bg-surface-1 shadow-[0_30px_80px_-40px_var(--accent)]">
                <img
                  src={profileAsset.url}
                  alt="Portrait of Aniket Raut"
                  className="aspect-square w-full object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Aniket Raut · <span className="text-accent">Pune, India</span>
              </p>
            </div>
          </Reveal>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-[17px] lg:col-span-7 lg:pt-12">
          <Reveal>
            <p>
              I build the connective tissue of games — AI behaviours, gameplay
              mechanics, camera and input systems, and the editor tooling that
              keeps designers moving. I'm happiest when an architecture starts to
              compose cleanly: small contracts, predictable lifetimes, and
              debuggers that tell you the truth.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              My focus is Unity and C#, with a working knowledge of Unreal and
              custom prototypes for when I want to understand a system from first
              principles. I care about performance because frame time is a budget
              that buys gameplay, and I treat tools as first-class deliverables.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
