import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site";

export function CTABanner({
  title = "Ready to grow your business with Fastpay?",
  description = "Talk to our team today about payment gateway integration, a POS rollout, or a new website. We reply within one business day.",
  primaryLabel = "Contact Us",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-hero px-8 py-14 text-center text-navy-foreground shadow-lift md:px-16">
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-navy-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">{primaryLabel}</Link>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href={COMPANY.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href={COMPANY.emailHref}>
              <Mail className="size-4" aria-hidden="true" />
              {COMPANY.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
