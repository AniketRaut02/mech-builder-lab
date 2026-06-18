import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket Raut — Unity Gameplay Programmer" },
      {
        name: "description",
        content:
          "Unity gameplay programmer specialising in AI, systems, mechanics and technical architecture.",
      },
      { property: "og:title", content: "Aniket Raut — Unity Gameplay Programmer" },
      {
        property: "og:description",
        content:
          "Building modular gameplay systems, AI behaviours and mechanics-driven experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <FeaturedProjects />
      <CaseStudies />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
