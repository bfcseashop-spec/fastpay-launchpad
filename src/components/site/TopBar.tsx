import { Facebook, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-navy-muted lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
        <div className="flex items-center gap-6">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-navy-foreground"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <a
            href={COMPANY.emailHref}
            className="flex items-center gap-2 transition-colors hover:text-navy-foreground"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {COMPANY.email}
          </a>
          <span className="text-navy-muted/70">{COMPANY.hours}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-navy-muted/70">{COMPANY.tagline}</span>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Fastpay on Facebook"
              className="transition-colors hover:text-cyan"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={COMPANY.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Fastpay on LinkedIn"
              className="transition-colors hover:text-cyan"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Fastpay on WhatsApp"
              className="transition-colors hover:text-cyan"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
