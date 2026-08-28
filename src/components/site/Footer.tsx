import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import markAsset from "@/assets/fastpay-mark.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { COMPANY, NAV_LINKS, SERVICE_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={markAsset.url}
              alt={`${COMPANY.name} logo`}
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-xl object-cover"
            />

            <span className="font-display text-lg font-extrabold text-navy-foreground">
              Fastpay IT Solution Ltd
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {COMPANY.tagline}. We build and support payment gateways, POS systems and high-performing
            websites for growing businesses across Cambodia and beyond.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialIcon href={COMPANY.socials.facebook} label="Facebook">
              <Facebook className="size-4" />
            </SocialIcon>
            <SocialIcon href={COMPANY.socials.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialIcon>
            <SocialIcon href={COMPANY.whatsapp} label="WhatsApp">
              <MessageCircle className="size-4" />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-navy-foreground uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-navy-foreground uppercase">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-cyan">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="transition-colors hover:text-cyan">
                Other IT Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-navy-foreground uppercase">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-start gap-2.5 hover:text-cyan">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={COMPANY.emailHref} className="flex items-start gap-2.5 hover:text-cyan">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {COMPANY.address}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {COMPANY.hours}
            </li>
          </ul>

          <form
            className="mt-5 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              toast.success("You're subscribed to the Fastpay newsletter.");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground placeholder:text-navy-muted/60"
            />
            <Button type="submit" variant="hero">
              Join
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs sm:flex-row">
          <p>© 2026 Fastpay IT Solution Ltd. All rights reserved.</p>
          <p>Payment Gateway · POS Systems · Website Development</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 transition-colors hover:bg-gradient-brand hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}
