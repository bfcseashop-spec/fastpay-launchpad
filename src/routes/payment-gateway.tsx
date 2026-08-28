import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Code2,
  CreditCard,
  Globe2,
  Landmark,
  ShieldCheck,
  Smartphone,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StepCard } from "@/components/site/Cards";
import { Faq } from "@/components/site/Faq";
import { CTABanner } from "@/components/site/CTABanner";
import { COMPANY } from "@/lib/site";

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
  { icon: Globe2, title: "Multi-currency Support", description: "Charge in KHR, USD, BDT and more, with transparent conversion and settlement in your chosen currency." },
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
