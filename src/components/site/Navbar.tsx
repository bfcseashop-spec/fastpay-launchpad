import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SERVICE_LINKS, COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} home`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
        <Zap className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-extrabold tracking-tight",
            light ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Fastpay
        </span>
        <span
          className={cn(
            "block text-[10px] font-medium tracking-[0.16em] uppercase",
            light ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          IT Solution Ltd
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          <NavItem to="/">Home</NavItem>

          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              Services
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-80 pt-2">
                <div className="rounded-2xl border border-border bg-popover p-2 shadow-lift">
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="block text-sm font-semibold">{s.label}</span>
                      <span className="block text-xs text-muted-foreground">{s.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.filter((l) => l.to !== "/").map((l) => (
            <NavItem key={l.to} to={l.to}>
              {l.label}
            </NavItem>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <p className="mt-2 px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Services
            </p>
            {SERVICE_LINKS.map((s) => (
              <MobileLink key={s.to} to={s.to} onClick={() => setOpen(false)}>
                {s.label}
              </MobileLink>
            ))}
            <div className="my-2 h-px bg-border" />
            {NAV_LINKS.filter((l) => l.to !== "/").map((l) => (
              <MobileLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </MobileLink>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-primary bg-accent" }}
      className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-primary" }}
      className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
    >
      {children}
    </Link>
  );
}
