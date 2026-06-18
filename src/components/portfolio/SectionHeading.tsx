import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        <span className="h-px w-8 bg-accent/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
