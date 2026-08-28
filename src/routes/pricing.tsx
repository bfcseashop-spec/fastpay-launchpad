import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Mail, MonitorSmartphone, Phone, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Faq } from "@/components/site/Faq";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Fastpay IT Solution Ltd" },
      {
        name: "description",
        content:
          "Transparent pricing from Fastpay IT Solution Ltd: POS rent ৳4,000/month or buy ৳120,000, plus negotiable payment gateway and website development quotes.",
      },
      { property: "og:title", content: "Simple, Flexible Pricing | Fastpay IT Solution Ltd" },
      {
        property: "og:description",
        content:
          "Rent or buy options for POS, and tailored quotes for payment gateway and website projects.",
      },
    ],
  }),
  component: Pricing,
});

const FAQS = [
  {
    q: "Why are some prices negotiable?",
    a: "Pricing varies based on your business size, transaction volume, and specific requirements. Contact our team for a quote tailored to you.",
  },
  {
    q: "What's included in the POS rental?",
    a: "The ৳4,000 monthly rental covers the full POS software licence for one outlet, all feature updates, daily encrypted cloud backups, staff onboarding and 24/7 phone, WhatsApp and email support. Hardware can be bundled or you can use your own devices.",
  },
  {
    q: "Is there a setup fee?",
    a: "Standard POS installations and hosted gateway checkouts include setup at no extra charge. Custom API integrations, data migration from another system or bespoke hardware configuration are quoted separately and agreed before work begins.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes. Paying POS rental yearly in advance attracts a discount, and yearly service/maintenance charges on purchased systems are negotiable. Tell us your expected term and we'll put a number on it.",
  },
  {
    q: "Can I switch from renting to buying later?",
    a: "You can. We credit a portion of the rental you've already paid toward the one-time purchase price — the exact amount depends on how long you've been renting.",
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Flexible Pricing for Every Business"
        description="Rent it monthly or own it outright. Where pricing depends on scope, we quote openly and quickly — usually within one business day."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <PriceCard
            icon={CreditCard}
            title="Payment Gateway"
            rows={[
              { label: "Rent", value: "Negotiable" },
              { label: "Sell (One-time Purchase)", value: "Negotiable" },
            ]}
            note="Pricing depends on transaction volume, integration scope, and business type — talk to our team for a tailored plan."
            cta="Contact Us for a Custom Quote"
          />
          <PriceCard
            icon={Store}
            title="POS System"
            featured
            rows={[
              { label: "Rent", value: "৳4,000 / month" },
              { label: "Sell (One-time Purchase)", value: "৳120,000 one-time" },
            ]}
            note="Annual maintenance/service charge is negotiable — contact us for details."
            cta="Get Started with POS"
          />
          <PriceCard
            icon={MonitorSmartphone}
            title="Website Development"
            rows={[
              { label: "Business / E-commerce / Landing / Web App", value: "Negotiable" },
              { label: "Maintenance & Support", value: "Negotiable" },
            ]}
            note="Final price depends on website type, number of pages, and features required."
            cta="Get a Free Custom Quote"
          />
        </div>
      </Section>

      <section className="px-6 pb-6">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-hero px-8 py-12 text-center text-navy-foreground shadow-lift md:px-16">
          <h2 className="text-2xl font-extrabold md:text-3xl">Need a Custom Package?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy-muted">
            Bundling a gateway, POS and website together usually costs less than buying them
            separately. Call or email us and we'll build a package around your business.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
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

      <Section tone="soft">
        <SectionHeading eyebrow="FAQ" title="Pricing questions, answered" />
        <Faq items={FAQS} />
      </Section>
    </>
  );
}

function PriceCard({
  icon: Icon,
  title,
  rows,
  note,
  cta,
  featured = false,
}: {
  icon: typeof CreditCard;
  title: string;
  rows: { label: string; value: string }[];
  note: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "flex flex-col rounded-2xl border-2 border-primary bg-card p-8 shadow-glow"
          : "flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card"
      }
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <dl className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="rounded-xl bg-surface p-4">
            <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {r.label}
            </dt>
            <dd className="mt-1 font-display text-2xl font-extrabold text-primary">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 flex-1 text-sm text-muted-foreground">{note}</p>
      <Button asChild variant={featured ? "hero" : "outlineBrand"} size="lg" className="mt-7 w-full">
        <Link to="/contact">{cta}</Link>
      </Button>
    </div>
  );
}
