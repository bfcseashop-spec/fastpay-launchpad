import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  Building2,
  Gift,
  ScanBarcode,
  Users,
  WifiOff,
} from "lucide-react";
import posImage from "@/assets/pos-hardware.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Cards";
import { TestimonialCarousel } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/pos-system")({
  head: () => ({
    meta: [
      { title: "Smart POS System for Retail & Restaurants | Fastpay IT Solution Ltd" },
      {
        name: "description",
        content:
          "Cloud POS with inventory, multi-branch reporting, offline mode and barcode scanning. Rent for ৳4,000/month or buy for ৳120,000.",
      },
      { property: "og:title", content: "Smart POS System | Fastpay IT Solution Ltd" },
      {
        property: "og:description",
        content:
          "Inventory, sales reporting, offline mode and staff management — POS built for retail, restaurants and pharmacies.",
      },
    ],
  }),
  component: PosSystem,
});

const FEATURES = [
  { icon: Boxes, title: "Inventory Management", description: "Live stock levels, low-stock alerts, purchase orders and supplier records across every location." },
  { icon: BarChart3, title: "Sales Reporting", description: "Daily, weekly and item-level reports with profit margins — viewable on your phone from anywhere." },
  { icon: Building2, title: "Multi-branch Support", description: "Run unlimited outlets from one account with per-branch pricing, stock and permissions." },
  { icon: WifiOff, title: "Offline Mode", description: "Keep selling when the internet drops. Everything syncs automatically the moment you reconnect." },
  { icon: ScanBarcode, title: "Barcode Scanning", description: "Scan to sell, scan to receive stock, and print your own barcode labels for unlabelled items." },
  { icon: Users, title: "Staff Management", description: "Individual logins, shift reports, discount limits and a full audit trail of every void and refund." },
  { icon: Gift, title: "Customer Loyalty", description: "Points, store credit and customer purchase history to bring your best buyers back more often." },
];

const USE_CASES = [
  {
    value: "retail",
    label: "Retail",
    title: "Retail stores",
    body: "Variant tracking for size and colour, quick barcode checkout, layaway and store credit. Perfect for fashion, electronics and general merchandise shops that need accurate stock counts every day.",
    points: ["Variant & SKU management", "Store credit and returns", "Supplier purchase orders"],
  },
  {
    value: "restaurant",
    label: "Restaurant",
    title: "Restaurants & cafés",
    body: "Table maps, split bills, kitchen order tickets and modifier options. Offline mode keeps service running even when the connection doesn't.",
    points: ["Table & order management", "Kitchen display / printer tickets", "Split and merge bills"],
  },
  {
    value: "pharmacy",
    label: "Pharmacy",
    title: "Pharmacies",
    body: "Batch and expiry tracking, generic substitute lookup and prescription notes on receipts — with reporting that keeps your regulator paperwork simple.",
    points: ["Batch & expiry alerts", "Generic substitute search", "Controlled item logging"],
  },
  {
    value: "supermarket",
    label: "Supermarket",
    title: "Supermarkets",
    body: "Multi-lane checkout, weighing-scale integration and fast promotional pricing for thousands of SKUs without slowing the queue.",
    points: ["Multi-lane, multi-cashier", "Scale & label integration", "Bulk price and promo updates"],
  },
];

function PosSystem() {
  return (
    <>
      <PageHero
        eyebrow="POS System"
        title="Smart POS System for Modern Retail & Restaurants"
        description="One cloud POS for inventory, sales, staff and customers — running online or offline, on any device, across every branch you operate."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">Request a Free Demo</Link>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={posImage}
            alt="Fastpay POS terminal with touchscreen and receipt printer"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl border border-border shadow-lift"
          />
          <div>
            <SectionHeading
              eyebrow="Hardware & Software"
              title="A complete counter setup, ready on day one"
              description="Touchscreen terminal, receipt printer, cash drawer and barcode scanner — supplied, configured and installed by our team. Or install the software on hardware you already own."
              align="left"
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>· Works on Android tablets, Windows terminals and web browsers</li>
              <li>· Free onboarding, product-catalogue import and staff training</li>
              <li>· Automatic updates with no downtime and daily encrypted backups</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Features" title="Feature highlights" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Use Cases"
          title="Configured for how your business sells"
        />
        <Tabs defaultValue="retail" className="mt-12">
          <TabsList className="mx-auto flex w-full max-w-xl flex-wrap justify-center">
            {USE_CASES.map((u) => (
              <TabsTrigger key={u.value} value={u.value}>
                {u.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {USE_CASES.map((u) => (
            <TabsContent key={u.value} value={u.value}>
              <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-card">
                <h3 className="text-xl font-bold">{u.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
                  {u.points.map((p) => (
                    <li key={p} className="rounded-xl bg-surface px-3 py-2 text-center font-medium">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Packages"
          title="Rent it monthly or own it outright"
          description="Both options include the full software, updates, backups and 24/7 support."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-lg font-bold">Rent</h3>
            <p className="mt-3 font-display text-4xl font-extrabold text-primary">৳4,000</p>
            <p className="text-sm text-muted-foreground">per month, per outlet</p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <li>· Full POS software licence</li>
              <li>· Free updates and cloud backups</li>
              <li>· 24/7 phone and WhatsApp support</li>
              <li>· Cancel or upgrade any month</li>
            </ul>
            <Button asChild variant="outlineBrand" size="lg" className="mt-7 w-full">
              <Link to="/contact">Start Renting</Link>
            </Button>
          </div>
          <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-glow">
            <h3 className="text-lg font-bold">Buy (One-time)</h3>
            <p className="mt-3 font-display text-4xl font-extrabold text-primary">৳120,000</p>
            <p className="text-sm text-muted-foreground">one-time purchase</p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <li>· Perpetual POS software licence</li>
              <li>· Installation, setup and staff training</li>
              <li>· First year of support included</li>
              <li>· Annual service/maintenance charge is negotiable</li>
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-7 w-full">
              <Link to="/contact">Buy Now</Link>
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Note: annual service/maintenance charge after the first year is negotiable — contact us for
          details.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Hardware"
          title="Tested hardware, supplied and installed"
          description="We only ship equipment we service ourselves, so a faulty printer or scanner is replaced — not debated."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HARDWARE.map((h) => (
            <div key={h.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-base font-bold">{h.name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-primary uppercase">
                {h.spec}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{h.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Case Study"
          title="Rina's Pharmacy: three branches, one stock ledger"
          description="Before Fastpay, each branch counted stock on paper and reconciled once a month. Six weeks after go-live the numbers looked very different."
          light
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASE_STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-navy-muted">
          Migration covered 6,200 products, 14 staff logins and two years of supplier history. Total
          downtime during cutover: one evening, after closing.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Integrations"
          title="Connects to what you already use"
          description="Your POS should not be an island. We sync sales, stock and payouts with the tools your accountant and your customers already rely on."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((i) => (
            <div
              key={i.name}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <Plug className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">{i.name}</span>
                <span className="block text-sm text-muted-foreground">{i.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions retailers ask us first" />
        <Faq items={POS_FAQS} />
      </Section>


      <Section>
        <SectionHeading eyebrow="Client Reviews" title="Retailers who switched to Fastpay POS" />
        <TestimonialCarousel />
      </Section>

      <CTABanner
        title="Request a free POS demo"
        description="We'll walk your team through a real store setup — products, staff logins, reports and offline mode — in about 30 minutes."
        primaryLabel="Request a Free Demo"
      />
    </>
  );
}
