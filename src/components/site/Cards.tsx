import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 text-center backdrop-blur-sm">
      <p className="font-display text-3xl font-extrabold text-navy-foreground md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-navy-muted">{label}</p>
    </div>
  );
}

export function StepCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
      <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
        {step}
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{name}</span>
          <span className="block text-xs text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
