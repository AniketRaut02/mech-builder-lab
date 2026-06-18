import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Frameworks, systems and prototypes."
          description="Each project is a study in architecture — chosen for the systems it taught me to build, not the screenshots it produced."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-fr lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
