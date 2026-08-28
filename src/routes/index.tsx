import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  CreditCard,
  Globe,
  Headphones,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Store,
  Wallet,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard, StepCard } from "@/components/site/Cards";
import { TestimonialCarousel } from "@/components/site/Testimonials";
import { LogoStrip } from "@/components/site/LogoStrip";
import { CTABanner } from "@/components/site/CTABanner";
import { Faq } from "@/components/site/Faq";
import { BLOG_POSTS } from "@/lib/site";

const INDUSTRIES = [
  { name: "Retail & Fashion", detail: "Variant-level stock, seasonal pricing and store credit across every branch." },
  { name: "Restaurants & Cafés", detail: "Table plans, kitchen tickets, split bills and offline service when the line drops." },
  { name: "Pharmacies", detail: "Batch and expiry tracking, prescription records and controlled-item audit trails." },
  { name: "Supermarkets", detail: "Weighing-scale integration, fast lane checkout and supplier purchase orders." },
  { name: "E-commerce", detail: "Wallet and card checkout, stock sync with the shop floor and automated receipts." },
  { name: "Services & B2B", detail: "Invoice-style payment links, recurring billing and quote-to-payment workflows." },
];

const ASSURANCES = [
  { metric: "99.9%", title: "Platform uptime", detail: "Measured monthly across gateway and POS cloud services, with published incident reports." },
  { metric: "< 15 min", title: "Support response", detail: "First human response on critical issues, 24 hours a day, by phone or WhatsApp." },
  { metric: "T+1", title: "Settlement", detail: "Next-business-day payouts to your bank account, with a reconciliation file for every batch." },
  { metric: "0", title: "Lock-in clauses", detail: "Export your data and walk away at any time. Nothing we build is held hostage." },
];

const HOME_FAQS = [
  {
    q: "Do we have to buy all three services together?",
    a: "No. Most clients start with one — usually the POS or the gateway — and add the others later. When you do combine them, the systems share data and the bundled price is lower than buying each separately.",
  },
  {
    q: "How quickly can we start accepting payments?",
    a: "A hosted checkout can be live in two to four working days once your merchant documents are approved. Full custom API integrations typically take one to two weeks including testing on our sandbox.",
  },
  {
    q: "What does support actually cover?",
    a: "Configuration changes, transaction and settlement queries, hardware faults, staff training refreshers and software updates. It's included with every rental and with the first year of any purchase.",
  },
  {
    q: "Do you work outside Dhaka?",
    a: "Yes. We install and support clients across Bangladesh. Remote setup and training work well for most software-only deployments, and we travel for multi-branch hardware rollouts.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastpay IT Solution Ltd | Payment Gateway, POS & Websites" },
      {
        name: "description",
        content:
          "Payment gateway integration, smart POS systems and custom website development from Fastpay IT Solution Ltd. Secure, fast to launch and supported 24/7.",
      },
      { property: "og:title", content: "Fastpay IT Solution Ltd | Your Complete IT & Payment Partner" },
      {
        property: "og:description",
        content:
          "Payment gateway, POS systems and website development for growing businesses. Talk to Fastpay today.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description:
      "Accept cards, mobile banking and wallets through one secure API, with next-day settlement and a real-time merchant dashboard.",
    to: "/payment-gateway",
  },
  {
    icon: Store,
    title: "POS System",
    description:
      "Cloud POS for retail, restaurants and pharmacies — inventory, multi-branch reporting, barcode scanning and full offline mode.",
    to: "/pos-system",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    description:
      "Business sites, e-commerce stores, landing pages and web apps built to load fast, rank well and convert visitors into customers.",
    to: "/web-development",
  },
] as const;

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "256-bit encryption, tokenised card data and PCI DSS aligned processes on every deployment.",
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    description: "Phone, WhatsApp and email support with a real engineer on call — not a ticket queue.",
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Most gateway integrations go live in under a week; POS rollouts in as little as 48 hours.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent rent-or-buy options with negotiable plans that scale as your volume grows.",
  },
  {
    icon: Globe,
    title: "Local + International",
    description: "Multi-currency support and local payment rails, with settlement into your preferred bank.",
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    description: "ERP hooks, custom reports and bespoke integrations built around how your business actually runs.",
  },
];

const STEPS = [
  { title: "Consultation", description: "We map your payment flows, store operations and goals in a free 30-minute session." },
  { title: "Setup", description: "We configure your merchant account, POS hardware or project workspace and share a clear timeline." },
  { title: "Integration", description: "Our engineers integrate, test in sandbox and train your team before anything touches live money." },
  { title: "Go Live", description: "You launch with monitoring, documentation and 24/7 support from day one." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero px-6 py-20 text-navy-foreground md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-foreground/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan uppercase">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              Your Complete IT &amp; Payment Partner
            </span>
            <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold md:text-6xl">
              Complete IT &amp; Payment Solutions for Your Business
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-muted">
              Fastpay IT Solution Ltd delivers payment gateway integration, smart POS systems and
              custom website development — one partner, one team, from first consultation to
              long-term support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get Started <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/pricing">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-muted">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-cyan" aria-hidden="true" /> PCI DSS aligned
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="size-4 text-cyan" aria-hidden="true" /> Live in under a week
              </span>
              <span className="flex items-center gap-2">
                <Headphones className="size-4 text-cyan" aria-hidden="true" /> 24/7 support
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Fastpay payment dashboard, mobile checkout screen and POS terminal"
              width={1280}
              height={1024}
              className="w-full rounded-3xl border border-navy-foreground/10 shadow-lift"
            />
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* Core services */}
      <Section>
        <SectionHeading
          eyebrow="Our Core Services"
          title="Everything your business needs to sell and get paid"
          description="Three flagship services, plus the wider IT support that keeps them running smoothly."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.to} className="flex flex-col">
              <FeatureCard icon={s.icon} title={s.title} description={s.description} className="flex-1" />
              <Link
                to={s.to}
                className="mt-3 inline-flex items-center gap-1.5 px-1 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why choose */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Why Choose Fastpay"
          title="Built for businesses that can't afford downtime"
          description="We combine fintech-grade reliability with the responsiveness of a local partner."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section tone="navy">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="500+" label="Businesses served" />
          <StatCard value="10,000+" label="Transactions processed daily" />
          <StatCard value="99.9%" label="Platform uptime" />
          <StatCard value="24/7" label="Support coverage" />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to going live in four clear steps"
          description="No surprises, no hidden phases — you always know exactly where your project stands."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <StepCard key={s.title} step={i + 1} {...s} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What our clients say"
          description="Retailers, restaurants and online sellers who run their daily operations on Fastpay."
        />
        <TestimonialCarousel />
      </Section>

      {/* Pricing preview */}
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward pricing, flexible terms"
          description="Rent or buy — whichever fits your cash flow. Custom quotes available for every service."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PricePreview
            icon={CreditCard}
            title="Payment Gateway"
            price="Negotiable"
            note="Rent or one-time purchase, priced on transaction volume and integration scope."
          />
          <PricePreview
            icon={Store}
            title="POS System"
            price="৳4,000 / month"
            secondary="or ৳120,000 one-time"
            note="Software, updates and support included. Annual service charge negotiable."
            featured
          />
          <PricePreview
            icon={MonitorSmartphone}
            title="Website Development"
            price="Negotiable"
            note="Priced on website type, number of pages and the features you need."
          />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outlineBrand" size="lg">
            <Link to="/pricing">
              View Full Pricing <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Blog preview */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Insights"
          title="Latest from the Fastpay blog"
          description="Practical guidance on payments, retail operations and building for the web."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-36 bg-gradient-hero" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg leading-snug font-bold">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outlineBrand" size="lg">
            <Link to="/blog">Read the Blog</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Who we work with every day"
          description="Different counters, different rules. We configure the same platform around how each sector actually trades."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-base font-bold">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Assurance"
          title="Commitments we put in writing"
          description="Every engagement is covered by a signed service agreement — these are the terms inside it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ASSURANCES.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="font-display text-2xl font-extrabold text-primary">{a.metric}</p>
              <h3 className="mt-2 text-base font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <Faq items={HOME_FAQS} />
      </Section>


      <CTABanner />
    </>
  );
}

function PricePreview({
  icon: Icon,
  title,
  price,
  secondary,
  note,
  featured = false,
}: {
  icon: typeof CreditCard;
  title: string;
  price: string;
  secondary?: string;
  note: string;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "rounded-2xl border-2 border-primary bg-card p-7 shadow-glow"
          : "rounded-2xl border border-border bg-card p-7 shadow-card"
      }
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-3 font-display text-3xl font-extrabold text-primary">{price}</p>
      {secondary && <p className="text-sm text-muted-foreground">{secondary}</p>}
      <p className="mt-3 text-sm text-muted-foreground">{note}</p>
    </div>
  );
}
