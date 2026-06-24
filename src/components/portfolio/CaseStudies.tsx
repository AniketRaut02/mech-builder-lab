import { Github, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudies } from "./data";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Technical Case Studies"
          title="How the systems are built."
          description="Architecture notes, trade-offs and the technical execution of each project."
        />

        <Accordion type="single" collapsible className="mt-14 space-y-4">
          {caseStudies.map((cs) => (
            <AccordionItem
              key={cs.id}
              value={cs.id}
              id={`case-${cs.id}`}
              className="overflow-hidden rounded-2xl border border-border-hairline bg-surface-1 data-[state=open]:bg-surface-2/60"
            >
              <AccordionTrigger className="px-6 py-6 text-left hover:no-underline md:px-8">
                <div className="flex w-full flex-col gap-1 pr-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-accent">
                    Case Study
                  </span>
                  <span className="font-display text-2xl font-semibold md:text-3xl">
                    {cs.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{cs.tagline}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-8 md:px-8">
                <div className="grid gap-10 lg:grid-cols-3">
                  <div className="space-y-8 lg:col-span-2">
                    <Block label="Overview">{cs.overview}</Block>
                    <Block label="Problem">{cs.problem}</Block>
                    <div>
                      <Label>Architecture</Label>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {cs.architecture.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="mt-2 h-px w-4 flex-none bg-accent/60" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Block label="Challenges">{cs.challenges}</Block>
                    <Block label="Solutions">{cs.solutions}</Block>
                    <Block label="Performance">{cs.performance}</Block>

                  </div>

                  <aside className="space-y-6">
                    <div className="rounded-xl border border-border-hairline bg-surface-1 p-5">
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-[oklch(0.22_0.02_240)] to-[oklch(0.14_0.005_240)] grain">
                        {cs.mediaImage && (
                          <img
                            src={cs.mediaImage}
                            alt={`${cs.title} media`}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {cs.mediaImage ? "Media · reference" : "Media · placeholder"}
                      </p>
                    </div>
                    <div>
                      <Label>Tech stack</Label>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cs.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-border-hairline bg-surface-2 px-2 py-1 text-[11px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    {cs.github && (
                      <a
                        href={cs.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-surface-1 px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
                      >
                        {cs.github.includes("github.com") ? (
                          <>
                            <Github className="h-4 w-4" />
                            View on GitHub
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            View on Asset Store
                          </>
                        )}
                      </a>
                    )}
                  </aside>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </p>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {children}
      </p>
    </div>
  );
}
