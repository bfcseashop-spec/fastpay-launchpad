import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Code2,
  Check,
  CreditCard,
  FileCheck2,
  Globe2,
  Landmark,
  Lock,
  ShieldCheck,
  Smartphone,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard, StepCard } from "@/components/site/Cards";
import { TestimonialCarousel } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CTABanner } from "@/components/site/CTABanner";
import { COMPANY } from "@/lib/site";
import caseImage from "@/assets/photo-payment-checkout.jpg";

export const Route = createFileRoute("/payment-gateway")({
  head: () => ({
    meta: [
      { title: "Payment Gateway Integration | Fastpay IT Solution Ltd" },
      {
        name: "description",
        content:
          "Accept cards, mobile banking and wallets with Fastpay's secure payment gateway. Easy API integration, fraud protection and next-day settlement.",
      },
      { property: "og:title", content: "Payment Gateway Integration | Fastpay IT Solution Ltd" },
      {
        property: "og:description",
        content:
          "Secure payment gateway with instant settlement, fraud protection and developer-friendly APIs.",
      },
    ],
  }),
  component: PaymentGateway,
});

const METHODS = [
  { icon: CreditCard, label: "Visa & Mastercard" },
  { icon: Smartphone, label: "bKash" },
  { icon: Smartphone, label: "Nagad" },
  { icon: Smartphone, label: "Rocket" },
  { icon: Landmark, label: "Bank Transfer" },
  { icon: Globe2, label: "International Cards" },
];

const FEATURES = [
  { icon: Timer, title: "Instant Settlement", description: "Next-business-day settlement as standard, with same-day options for high-volume merchants." },
  { icon: ShieldCheck, title: "Fraud Protection", description: "Rule-based screening, velocity checks and 3-D Secure to stop suspicious transactions before capture." },
  { icon: Code2, title: "Easy API Integration", description: "REST API, hosted checkout and ready-made plugins for WooCommerce, Shopify and custom stacks." },
  { icon: Globe2, title: "Multi-currency Support", description: "Charge in BDT, USD and more, with transparent conversion and settlement in your chosen currency." },
  { icon: BarChart3, title: "Real-time Dashboard", description: "Live transaction feed, refunds, payouts and downloadable reconciliation reports in one place." },
  { icon: BookOpen, title: "Developer-friendly Docs", description: "Clear reference docs, sandbox keys and sample code so your team can integrate without guesswork." },
];

const STEPS = [
  { title: "Sign Up", description: "Submit your business documents. Merchant accounts are typically approved within 2 business days." },
  { title: "Get API Key", description: "Receive sandbox and live keys plus your dashboard login the moment you're approved." },
  { title: "Integrate", description: "Drop in our SDK or hosted checkout. Our engineers join your test calls if you need a hand." },
  { title: "Start Accepting Payments", description: "Go live with monitoring, alerting and 24/7 support behind every transaction." },
];

const FEES = [
  { method: "Local debit & credit cards", fee: "Negotiable", settlement: "T+1 business day" },
  { method: "International cards", fee: "Negotiable", settlement: "T+2 business days" },
  { method: "Mobile banking (bKash, Nagad, Rocket)", fee: "Negotiable", settlement: "T+1 business day" },
  { method: "Direct bank transfer", fee: "Negotiable", settlement: "T+1 business day" },
  { method: "Setup & integration", fee: "Negotiable", settlement: "One-time" },
];

const COMPLIANCE = [
  {
    icon: Lock,
    title: "PCI DSS aligned handling",
    description:
      "Card details are captured on our hosted fields, so your servers stay out of scope for card storage.",
    points: ["Tokenised card vault", "TLS 1.2+ on every endpoint", "No raw PAN in your logs"],
  },
  {
    icon: ShieldCheck,
    title: "Fraud & risk controls",
    description:
      "Every authorisation passes velocity, geo and device rules before it reaches the acquirer.",
    points: ["3-D Secure step-up", "Blocklist & allowlist rules", "Chargeback alerts by email"],
  },
  {
    icon: FileCheck2,
    title: "Reconciliation you can audit",
    description:
      "Daily settlement files match your bank statement line by line, with exportable CSV and PDF.",
    points: ["Signed webhooks with retries", "Payout-level statements", "7-year transaction history"],
  },
];

const PLUGINS = [
  { name: "WooCommerce", type: "Plugin", detail: "Install, paste your keys, go live the same day." },
  { name: "Shopify", type: "App", detail: "Hosted checkout redirect with automatic order sync." },
  { name: "Laravel / PHP", type: "SDK", detail: "Composer package with sandbox and live drivers." },
  { name: "Node.js", type: "SDK", detail: "Typed client for payments, refunds and webhooks." },
  { name: "Flutter & React Native", type: "Mobile", detail: "Drop-in payment sheet for in-app checkout." },
  { name: "Custom ERP", type: "REST API", detail: "Direct API access with IP allowlisting." },
  { name: "Fastpay POS", type: "Native", detail: "In-store and online payments under one settlement." },
  { name: "Zapier / Sheets", type: "Automation", detail: "Push settled payments into your reporting sheet." },
];

const STATS = [
  { value: "99.95%", label: "Gateway uptime (90-day average)" },
  { value: "1.2s", label: "Median authorisation response" },
  { value: "T+1", label: "Standard settlement to your bank" },
  { value: "24/7", label: "Merchant support coverage" },
];

const CASE_STUDY = [
  {
    heading: "The problem",
    body: "Bengal Mart Online lost roughly one in five mobile checkouts. Their old gateway timed out on slow networks and offered no wallet options, so customers abandoned at the payment step.",
  },
  {
    heading: "What we did",
    body: "We migrated them to Fastpay hosted checkout with saved cards, bKash and Nagad enabled, added retry-on-timeout logic and moved settlement reporting into their finance sheet automatically.",
  },
  {
    heading: "The result",
    body: "Failed checkouts fell 41% within two months, average payment time dropped to 1.4 seconds, and their finance team stopped reconciling payouts by hand entirely.",
  },
];

const FAQS = [
  { q: "How long does integration take?", a: "Most merchants using our hosted checkout are live within 3–5 business days. A fully custom API integration typically takes one to two weeks depending on your platform." },
  { q: "Do you support recurring billing?", a: "Yes. Tokenised card storage lets you charge subscriptions and installments without holding card data yourself." },
  { q: "What documents do I need to open a merchant account?", a: "Business registration, tax identification, owner ID and a bank account in the company name. We review and confirm within two business days." },
  { q: "Is there a monthly minimum?", a: "No fixed minimum. Pricing is agreed based on your expected volume — contact us for a tailored plan." },
  { q: "Can I test before going live?", a: "Absolutely. Every merchant gets sandbox keys and test cards so you can validate the full checkout and refund flow before launch." },
];

function PaymentGateway() {
  return (
    <>
      <PageHero
        eyebrow="Payment Gateway"
        title="Accept Payments Anywhere, Anytime"
        description="One secure integration for cards, mobile banking and wallets — with real-time reporting, fraud protection and settlement you can plan around."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">Request API Access</Link>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <a href={COMPANY.phoneHref}>Talk to Sales</a>
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Supported Methods"
          title="Every way your customers want to pay"
          description="Cards, mobile financial services and bank transfers — all through a single Fastpay account."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {METHODS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-transform hover:-translate-y-1"
            >
              <m.icon className="size-7 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">{m.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Features"
          title="Everything a modern merchant expects"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Integration" title="Four steps to your first live payment" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <StepCard key={s.title} step={i + 1} {...s} />
          ))}
        </div>
      </Section>

      {/* Code preview */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Developer Experience"
              title="A checkout in a dozen lines of code"
              description="Create a payment session server-side, redirect the customer, and receive a signed webhook when the payment settles. That's the whole flow."
              align="left"
              light
            />
            <div className="mt-8">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get Sandbox Keys</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-deep/80 shadow-lift">
            <div className="flex items-center gap-2 border-b border-navy-foreground/10 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-4/70" />
              <span className="size-3 rounded-full bg-cyan/70" />
              <span className="ml-2 text-xs text-navy-muted">create-payment.js</span>
            </div>
            <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-navy-muted">
              <code>{`const res = await fetch("https://api.fastpay.dev/v1/payments", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + FASTPAY_SECRET_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 4500,
    currency: "USD",
    reference: "ORDER-10294",
    customer: { name: "Sokha Chan", email: "sokha@example.com" },
    success_url: "https://yourstore.com/thank-you",
    cancel_url: "https://yourstore.com/cart",
  }),
});

const { checkout_url } = await res.json();
return Response.redirect(checkout_url, 303);`}</code>
            </pre>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Transaction Fees"
          title="Pricing built around your volume"
          description="Rates are agreed per merchant based on volume, risk profile and settlement speed."
        />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Payment method</th>
                <th scope="col" className="px-6 py-4 font-semibold">Transaction fee</th>
                <th scope="col" className="px-6 py-4 font-semibold">Settlement</th>
              </tr>
            </thead>
            <tbody>
              {FEES.map((row) => (
                <tr key={row.method} className="border-t border-border bg-card">
                  <td className="px-6 py-4">{row.method}</td>
                  <td className="px-6 py-4 font-semibold text-primary">{row.fee}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.settlement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Pricing depends on transaction volume, integration scope and business type — talk to our
          team for a tailored plan.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Built to bank-grade standards"
          description="Card data never touches your servers. Every transaction is tokenised, encrypted in transit and screened before capture."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {COMPLIANCE.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <c.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <ul className="mt-4 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Platform Integrations"
          title="Already works with the tools you run"
          description="Official plugins and SDKs keep your existing stack in place — no re-platforming required."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLUGINS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-bold">{p.name}</h3>
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                  {p.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Platform Performance"
          title="Numbers our merchants see every month"
          description="Figures from our production gateway across the last 90 days of merchant traffic."
          light
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Case Study"
          title="Bengal Mart Online: 41% fewer failed checkouts"
          align="left"
        />
        <img src={caseImage} alt="Customer paying by card on a payment terminal at a retail checkout" className="mt-10 w-full rounded-2xl border border-border/40 object-cover shadow-card" loading="lazy" width={1200} height={800} />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {CASE_STUDY.map((c) => (
            <div key={c.heading} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {c.heading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Merchant Feedback" title="Trusted by teams processing daily" />
        <TestimonialCarousel />
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Payment gateway questions, answered" />
        <Faq items={FAQS} />
      </Section>

      <CTABanner
        title="Request a payment gateway demo"
        description="See the merchant dashboard, checkout flow and reporting in a live 20-minute walkthrough."
        primaryLabel="Request Demo"
      />
    </>
  );
}
