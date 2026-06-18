import { experience } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Where the systems shipped."
        />

        <ol className="mt-14 relative border-l border-border-hairline pl-8 md:pl-12">
          {experience.map((e, i) => (
            <li key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-2 grid h-3 w-3 place-items-center md:-left-[49px]">
                <span className="h-3 w-3 rounded-full border border-accent/60 bg-background" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--accent)]" />
              </span>
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">
                    {e.role}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent/90">{e.org}</p>
                <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2.5 h-px w-4 flex-none bg-accent/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
