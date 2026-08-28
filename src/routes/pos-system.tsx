import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  Building2,
  Gift,
  Plug,
  ScanBarcode,
  Users,
  WifiOff,
} from "lucide-react";
import posImage from "@/assets/pos-hardware.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard } from "@/components/site/Cards";
import { Faq } from "@/components/site/Faq";
import { TestimonialCarousel } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COMPANY } from "@/lib/site";
import storeImage from "@/assets/photo-pos-store.jpg";

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

const HARDWARE = [
  {
    name: "Touchscreen Terminal",
    spec: "15.6\" · Android 13 / Windows 11",
    note: "Spill-resistant capacitive screen, 8-hour battery backup and a dual-display option for customer-facing totals.",
  },
  {
    name: "Thermal Receipt Printer",
    spec: "80mm · 250mm/sec · auto-cutter",
    note: "USB, LAN and Bluetooth. Kitchen printers can be paired separately for restaurant order tickets.",
  },
  {
    name: "Barcode Scanner",
    spec: "1D & 2D · wired or wireless",
    note: "Reads damaged and phone-screen barcodes. Label printer available for unlabelled or loose stock.",
  },
  {
    name: "Cash Drawer",
    spec: "5 note / 8 coin · steel",
    note: "Opens automatically on cash sales and logs every manual open against the staff member who did it.",
  },
];

const CASE_STATS = [
  { value: "3", label: "Branches on one live stock ledger" },
  { value: "92%", label: "Drop in month-end reconciliation time" },
  { value: "৳48k", label: "Monthly shrinkage identified and stopped" },
  { value: "11 days", label: "From first call to all branches live" },
];

const INTEGRATIONS = [
  { name: "Fastpay Payment Gateway", detail: "Card and wallet payments settle straight into the same daily sales report." },
  { name: "bKash · Nagad · Rocket", detail: "QR and mobile-banking payments captured at the counter with automatic reconciliation." },
  { name: "WooCommerce & Shopify", detail: "Two-way stock sync so online orders reduce shelf inventory in real time." },
  { name: "Accounting exports", detail: "Tally, QuickBooks and CSV exports formatted the way your accountant expects." },
  { name: "SMS & email receipts", detail: "Digital receipts and loyalty point updates sent the moment a sale completes." },
  { name: "Kitchen display systems", detail: "Orders route to the right prep station with timing and course control." },
];

const POS_FAQS = [
  {
    q: "Can we keep using our existing hardware?",
    a: "In most cases yes. The software runs on Android tablets, Windows terminals and any modern browser. Send us the model numbers of your printer and scanner and we'll confirm compatibility before you commit to anything.",
  },
  {
    q: "How is our data migrated from the old system?",
    a: "You export your product list, prices and supplier records in any common format — Excel, CSV or a database dump — and our team cleans, maps and imports it. We run a parallel test day before cutover so you can compare totals against your current system.",
  },
  {
    q: "What actually happens when the internet goes down?",
    a: "Sales continue offline on the terminal, stored locally and encrypted. When the connection returns, every transaction syncs in order and your reports reflect the correct times. Card payments need connectivity, but cash and wallet-QR sales keep flowing.",
  },
  {
    q: "How long does installation take?",
    a: "A single outlet is usually live within two to three working days, including catalogue import and staff training. Multi-branch rollouts run branch by branch, typically one to two weeks in total.",
  },
  {
    q: "Who owns the data?",
    a: "You do. You can export your full sales, stock and customer history at any time, and we provide a complete dump within five working days if you ever decide to leave.",
  },
];

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
        <img src={storeImage} alt="Shop staff using a Fastpay touchscreen POS with receipt printer and scanner" className="mt-10 w-full rounded-2xl border border-border/40 object-cover shadow-card" loading="lazy" width={1200} height={800} />
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
