import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About" title="Gameplay programmer with a passion for building scalable systems." />
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
