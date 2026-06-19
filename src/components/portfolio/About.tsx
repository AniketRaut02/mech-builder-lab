import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import profileAsset from "@/assets/profile.jpg.asset.json";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <SectionHeading eyebrow="About" title="Gameplay programmer with a passion for building scalable systems." />
            
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-[17px]">
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

          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center lg:pt-16">
            <Reveal delay={0.1}>
              <div className="relative group">
                {/* Subtle cybernetic glowing ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent/40 via-primary/20 to-accent/30 opacity-70 blur-md transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
                
                {/* Circular image container */}
                <div className="relative h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border border-border-hairline bg-surface-1 shadow-2xl">
                  <img
                    src={profileAsset.url}
                    alt="Portrait of Aniket Raut"
                    className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Small indicator representing "System Active" */}
                <span className="absolute bottom-2 right-2 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent border-2 border-background"></span>
                </span>
              </div>
              <div className="mt-5 text-center lg:text-right">
                <p className="text-sm font-medium text-foreground">Aniket Raut</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase mt-1">Pune, India</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
