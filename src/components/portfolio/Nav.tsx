import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf";

const links = [
  { href: "#work", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border-hairline" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border-hairline bg-surface-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-accent shadow-[0_0_10px_2px_var(--accent)]" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Aniket Raut
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={resumeAsset}
            target="_blank"
            rel="noopener noreferrer"
            download="Aniket_Raut_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-hairline bg-surface-1 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-surface-2 hover:border-accent/50"
          >
            <FileDown className="h-3.5 w-3.5 text-accent" />
            Resume
          </a>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20 md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available
          </a>
        </div>
      </nav>
    </header>
  );
}
