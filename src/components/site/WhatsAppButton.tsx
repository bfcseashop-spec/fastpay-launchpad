import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${COMPANY.name} on WhatsApp`}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
