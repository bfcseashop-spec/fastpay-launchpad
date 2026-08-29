import { useState } from "react";
import { canonical, seoMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta({
      title: "Contact Us | Fastpay IT Solution Ltd",
      description:
        "Call +880 1785-514425, email fastpay.tech@gmail.com or send us a message. Fastpay IT Solution Ltd replies within one business day.",
      ogTitle: "Contact Fastpay IT Solution Ltd",
      ogDescription:
        "Talk to our Dhaka team about payment gateway, POS or website projects — phone, WhatsApp, email or the contact form.",
      path: "/contact",
      image: "/og-contact.jpg",
      imageWidth: 1280,
      imageHeight: 860,
      imageAlt: "Merchant completing a payment with Fastpay support",
    }),
    links: canonical("/contact"),
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? "") || null,
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please call or email us instead.");
      return;
    }

    toast.success("Thanks! We've received your message and will reply within one business day.");
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Payments, POS or a new website — tell us what you need and our team will come back to you within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and we'll be in touch. All fields marked with * are required.
            </p>
            <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+880 17XX-XXXXXX" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Payment gateway, POS, website..."
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us a little about your business and what you need."
                />
              </div>
              <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                <Send className="size-4" aria-hidden="true" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-5">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Call us
                </span>
                <span className="block font-display text-xl font-extrabold">{COMPANY.phone}</span>
              </span>
            </a>

            <a
              href={COMPANY.emailHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Email us
                </span>
                <span className="block truncate font-display text-lg font-extrabold">
                  {COMPANY.email}
                </span>
              </span>
            </a>

            <Button asChild variant="hero" size="xl" className="w-full">
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-bold">Office & hours</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {COMPANY.address}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {COMPANY.hours}
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  Facebook
                </a>
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Find Us" title="Our location" />
        <div className="mt-10 flex h-80 items-center justify-center rounded-3xl bg-gradient-hero text-sm text-navy-muted shadow-lift">
          Map placeholder — {COMPANY.address}
        </div>
      </Section>
    </>
  );
}
