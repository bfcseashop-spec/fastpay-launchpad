import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "soft" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-20 md:py-24",
        tone === "soft" && "bg-surface",
        tone === "navy" && "bg-gradient-hero text-navy-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase",
            light ? "bg-navy-foreground/10 text-cyan" : "bg-accent text-primary",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold md:text-4xl",
          light ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base", light ? "text-navy-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero px-6 py-20 text-navy-foreground md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center reveal">
        <span className="inline-block rounded-full bg-navy-foreground/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg text-navy-muted">{description}</p>
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
