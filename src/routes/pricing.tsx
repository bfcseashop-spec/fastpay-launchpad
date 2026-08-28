import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarClock,
  Check,
  CreditCard,
  FileSignature,
  Mail,
  Minus,
  MonitorSmartphone,
  Phone,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
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

type Cell = boolean | string;

const COMPARE_PLANS = ["POS Rent", "POS Purchase", "Gateway", "Website"] as const;

const COMPARE_GROUPS: { group: string; rows: { feature: string; values: Cell[] }[] }[] = [
  {
    group: "Commercials",
    rows: [
      {
        feature: "Entry cost",
        values: ["৳4,000 / month", "৳120,000 one-time", "Negotiable", "Negotiable"],
      },
      { feature: "Minimum term", values: ["3 months", "None", "12 months", "Project based"] },
      { feature: "Annual payment discount", values: [true, false, true, true] },
      { feature: "Rental credited toward purchase", values: [true, false, false, false] },
    ],
  },
  {
    group: "Setup & onboarding",
    rows: [
      { feature: "Standard installation & configuration", values: [true, true, true, true] },
      { feature: "Staff training session", values: [true, true, "Developer handover", true] },
      { feature: "Data migration from old system", values: ["Quoted", "Quoted", "Quoted", true] },
      { feature: "Go-live support on site", values: [true, true, false, false] },
    ],
  },
  {
    group: "Platform & features",
    rows: [
      { feature: "Feature updates included", values: [true, "12 months", true, "Plan based"] },
      { feature: "Offline mode", values: [true, true, false, false] },
      { feature: "Multi-outlet / multi-store", values: ["Per outlet", "Per outlet", true, true] },
      { feature: "Payment gateway integration", values: [true, true, true, "Premium package"] },
      { feature: "Analytics & reporting dashboard", values: [true, true, true, "Standard+"] },
    ],
  },
  {
    group: "Support & assurance",
    rows: [
      { feature: "24/7 phone & WhatsApp support", values: [true, "Under AMC", true, false] },
      { feature: "Business-hours email support", values: [true, true, true, true] },
      { feature: "Daily encrypted cloud backups", values: [true, true, true, "Standard+"] },
      { feature: "Uptime commitment", values: ["99.9%", "99.9%", "99.95%", "99.9%"] },
      { feature: "Dedicated account manager", values: [false, true, true, false] },
    ],
  },
];

const TERMS = [
  {
    icon: FileSignature,
    title: "Contract & minimum term",
    description:
      "POS rentals run on a rolling three-month minimum, then month-to-month with 30 days' notice. Gateway merchant agreements run 12 months. Website projects are fixed-scope contracts with no lock-in.",
  },
  {
    icon: Receipt,
    title: "Billing & payment terms",
    description:
      "Rentals are invoiced monthly in advance; project work is 40% on signature, 40% at design sign-off and 20% on go-live. Bank transfer, card and mobile banking accepted. All prices exclude VAT.",
  },
  {
    icon: CalendarClock,
    title: "Implementation timeline",
    description:
      "POS goes live in 3–5 working days, hosted gateway checkout in 2–4 days, custom API integration in 1–3 weeks, and websites in 3–8 weeks depending on scope and content readiness.",
  },
  {
    icon: Wrench,
    title: "Maintenance & AMC",
    description:
      "Purchased POS systems include 12 months of updates; after that an annual maintenance contract covers updates, priority support and backups at a negotiable rate.",
  },
  {
    icon: ShieldCheck,
    title: "Data ownership & exit",
    description:
      "Your transaction, customer and product data is yours. On termination we provide a full CSV/SQL export within 7 days and retain nothing beyond legal requirements.",
  },
  {
    icon: RefreshCw,
    title: "Upgrades & changes",
    description:
      "Add outlets, terminals or pages at any time — new charges are pro-rated to your current billing cycle so you never pay twice for the same month.",
  },
];


function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Flexible Pricing for Every Business"
        description="Rent it monthly or own it outright. Where pricing depends on scope, we quote openly and quickly — usually within one business day."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">Request a Quote</Link>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">
            Talk to Sales on WhatsApp
          </a>
        </Button>
      </PageHero>


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
