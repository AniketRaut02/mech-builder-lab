import { skillGroups } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit shaped by shipping systems."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border-hairline bg-surface-1 p-6 transition-colors hover:bg-surface-2/70">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-sm bg-accent shadow-[0_0_10px_2px_var(--accent)]" />
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border-hairline bg-surface-2 px-2.5 py-1 text-[12.5px] text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
