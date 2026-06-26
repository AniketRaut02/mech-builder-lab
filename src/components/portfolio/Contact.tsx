import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import resumeAsset from "@/assets/resume.pdf";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-raut02/" },
  { label: "GitHub", href: "https://github.com/AniketRaut02" },
  { label: "Instagram", href: "https://www.instagram.com/darkpixelgd?igsh=cGRqdTBrNWs2OGx6" },
  { label: "Resume", href: resumeAsset },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Contact</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold leading-[1] tracking-tight text-balance">
            Interested in gameplay systems, AI programming or tool development?
            <span className="text-muted-foreground"> Let's connect.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-border-hairline bg-surface-1 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <a
              href="mailto:anishuraut@gmail.com?subject=Let's%20Connect&body=Hi%20Aniket%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20to%20discuss%20gameplay%20systems%20and%20potential%20opportunities!"
              className="group inline-flex items-center gap-3 font-display text-2xl font-semibold md:text-3xl"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span className="border-b border-transparent transition-colors group-hover:border-accent">
                anishuraut@gmail.com
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:anishuraut@gmail.com?subject=Let's%20Connect&body=Hi%20Aniket%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20to%20discuss%20gameplay%20systems%20and%20potential%20opportunities!"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-[0_10px_40px_-10px_var(--accent)]"
            >
              Say hello
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={l.label === "Resume" ? "Aniket_Raut_Resume.pdf" : undefined}
                  className="group flex items-center justify-between rounded-xl border border-border-hairline bg-surface-1 px-4 py-3 text-sm transition-colors hover:bg-surface-2"
                >
                  <span>{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Aniket Raut. Built with love for games.</p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
