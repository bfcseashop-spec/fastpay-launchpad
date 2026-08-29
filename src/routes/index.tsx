import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clock3,
  Code2,
  CreditCard,
  Globe,
  Headphones,
  Layers,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Store,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BLOG_POSTS, COMPANY, TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

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

const PARTNERS = [
  "NorthBay Retail",
  "Bengal Mart",
  "Riverside Grill",
  "Tanvir Trading",
  "MediCare Plus",
  "UrbanFit Studios",
];

const SERVICES = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description:
      "Accept cards, mobile banking and wallets through one secure API, with next-day settlement and a real-time merchant dashboard.",
    to: "/payment-gateway",
    bronze: false,
  },
  {
    icon: Store,
    title: "POS System",
    description:
      "Cloud POS for retail, restaurants and pharmacies — inventory, multi-branch reporting, barcode scanning and full offline mode.",
    to: "/pos-system",
    bronze: true,
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    description:
      "Business sites, e-commerce stores, landing pages and web apps built to load fast, rank well and convert visitors into customers.",
    to: "/web-development",
    bronze: false,
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

const OFFERINGS = [
  {
    icon: ShoppingCart,
    title: "POS (Point of Sale) System",
    bangla: "সহজ, স্মার্ট ও নির্ভরযোগ্য বিক্রয় ব্যবস্থাপনা",
    description:
      "সম্পূর্ণ কাস্টমাইজড POS সলিউশন — সেলস, ইনভেন্টরি, স্টক ও কাস্টমার ম্যানেজমেন্ট এক জায়গায়। রিয়েল-টাইম রিপোর্টিং, মাল্টি-ব্র্যাঞ্চ সাপোর্ট ও ইউজার-ফ্রেন্ডলি ইন্টারফেস।",
    to: "/pos-system",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    bangla: "নিরাপদ ও দ্রুত পেমেন্ট সলিউশন",
    description:
      "আপনার ওয়েবসাইট বা অ্যাপে bKash, Nagad, Rocket, Visa, Mastercard, SSLCommerz-সহ সব জনপ্রিয় গেটওয়ে — এনক্রিপশন ও ফ্রড প্রোটেকশনসহ সম্পূর্ণ নিরাপদ।",
    to: "/payment-gateway",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    bangla: "যা দেখতে সুন্দর, ব্যবহার করতেও সহজ",
    description:
      "মডার্ন, রেসপনসিভ ও ইউজার-ফ্রেন্ডলি ডিজাইন — ওয়্যারফ্রেম থেকে ফাইনাল প্রোটোটাইপ পর্যন্ত প্রতিটি ধাপে ইউজার এক্সপেরিয়েন্স-কেন্দ্রিক চিন্তা, যা ভিজিটরকে কাস্টমারে রূপান্তরিত করে।",
    to: "/web-development",
  },
  {
    icon: Search,
    title: "SEO Optimized Website",
    bangla: "গুগলে আপনার বিজনেসকে সবার আগে নিয়ে আসুন",
    description:
      "SEO ফ্রেন্ডলি স্ট্রাকচার, ফাস্ট লোডিং স্পিড, প্রপার মেটা ট্যাগ, কিওয়ার্ড অপ্টিমাইজেশন ও মোবাইল ফ্রেন্ডলি ডিজাইন — গুগল সার্চে র‍্যাঙ্ক ও অর্গানিক ট্রাফিক বাড়বে।",
    to: "/web-development",
  },
  {
    icon: Globe,
    title: "Custom Website Development",
    bangla: "আপনার বিজনেসের জন্য একদম নিজস্ব ডিজাইনে ওয়েবসাইট",
    description:
      "টেমপ্লেট নয় — আপনার ব্র্যান্ড ও চাহিদা অনুযায়ী সম্পূর্ণ কাস্টম ওয়েবসাইট। ই-কমার্স, পোর্টফোলিও, কর্পোরেট, বুকিং সিস্টেম — ডিজাইন থেকে ডেভেলপমেন্ট পর্যন্ত সব।",
    to: "/web-development",
  },
  {
    icon: Megaphone,
    title: "Full Marketing Support",
    bangla: "শুধু ওয়েবসাইট নয়, ব্র্যান্ডিং ও প্রচারেও পূর্ণ সহযোগিতা",
    description:
      "সোশ্যাল মিডিয়া মার্কেটিং, ফেসবুক/গুগল অ্যাড ক্যাম্পেইন, কন্টেন্ট স্ট্র্যাটেজি ও ব্র্যান্ডিং — আপনার বিজনেস মানুষের কাছে পৌঁছাবে ও চেনা হয়ে উঠবে।",
    to: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Increase Sales — Smart Ideas",
    bangla: "শুধু ওয়েবসাইট নয়, বিক্রি বাড়ানোর স্ট্র্যাটেজিও দেই",
    description:
      "আপনার বিজনেস মডেল বিশ্লেষণ করে কার্যকর আইডিয়া ও স্ট্র্যাটেজি — কনভার্শন অপ্টিমাইজেশন থেকে কাস্টমার রিটেনশন পর্যন্ত, আপনার গ্রোথ ইঞ্জিন হিসেবে।",
    to: "/contact",
  },
  {
    icon: Code2,
    title: "Development (Web & App)",
    bangla: "শক্তিশালী ও স্কেলেবল প্রযুক্তি দিয়ে তৈরি",
    description:
      "আধুনিক টেকনোলজিতে ফাস্ট, সিকিউর ও স্কেলেবল ওয়েব ও অ্যাপ সলিউশন — ফ্রন্টএন্ড থেকে ব্যাকএন্ড, ডাটাবেজ থেকে সার্ভার ম্যানেজমেন্ট পর্যন্ত সব এক্সপার্ট হাতে।",
    to: "/web-development",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    bangla: "ডেটা দেখে সিদ্ধান্ত নিন, অনুমানে নয়",
    description:
      "ভিজিটর, সেলস ও কাস্টমার বিহেভিয়ারের বিস্তারিত অ্যানালিটিক্স ড্যাশবোর্ড — কোথায় কী কাজ করছে বুঝে নিন সঠিক সিদ্ধান্ত।",
    to: "/contact",
  },
];

const WHY_US_BN = [
  "৩৬০° সম্পূর্ণ ডিজিটাল সলিউশন — এক জায়গায় সবকিছু",
  "অভিজ্ঞ ও দক্ষ টিম",
  "আধুনিক প্রযুক্তি ও ট্রেন্ড অনুসরণ",
  "পোস্ট-লঞ্চ সাপোর্ট ও মেইনটেনেন্স",
  "আপনার বিজনেস গ্রোথই আমাদের লক্ষ্য",
];

const STATS = [
  { value: "70+", label: "Businesses served" },
  { value: "10,000+", label: "Transactions processed daily" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Support coverage" },
];

const OG_IMAGE =
  "https://id-preview--a9763442-ff49-4098-9ed1-d969e3ae1267.lovable.app/og-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastpay IT Solution Ltd | Payment Gateway, POS & Websites" },
      {
        name: "description",
        content:
          "Payment gateway integration, smart POS systems and custom website development from Fastpay IT Solution Ltd. Secure, fast to launch and supported 24/7.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fastpay IT Solution Ltd" },
      { property: "og:title", content: "Fastpay IT Solution Ltd | Your Complete IT & Payment Partner" },
      {
        property: "og:description",
        content:
          "Payment gateway, POS systems and website development for growing businesses. Talk to Fastpay today.",
      },
      { property: "og:image", content: `${OG_IMAGE}` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "Fastpay payment dashboard on a laptop with mobile payment app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fastpay IT Solution Ltd | Your Complete IT & Payment Partner" },
      {
        name: "twitter:description",
        content:
          "Payment gateway, POS systems and website development for growing businesses. Talk to Fastpay today.",
      },
      { name: "twitter:image", content: `${OG_IMAGE}` },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-mesh-8 text-navy-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-10 text-center md:pt-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-glow-cyan" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-emerald/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -right-24 size-[24rem] rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl reveal">
          <p className="font-serif text-2xl text-navy-muted italic md:text-3xl">
            — Professional —
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl">
            <span className="text-gradient-gold">IT &amp; Payment</span>
            <br />
            Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">
            Payment gateway integration, smart POS systems and custom website development —
            one modern platform for startups and growing companies across Bangladesh.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="xl" className="bg-gradient-emerald font-bold text-navy-deep shadow-glow-emerald hover:opacity-90">
              <Link to="/contact">
                Get Started <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-navy-foreground/20 bg-transparent font-bold text-navy-foreground hover:bg-navy-foreground/5 hover:text-navy-foreground"
            >
              <Link to="/pricing">Explore Services</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-navy-muted">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald" aria-hidden="true" /> PCI DSS aligned
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 text-emerald" aria-hidden="true" /> Live in under a week
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="size-4 text-emerald" aria-hidden="true" /> 24/7 support
            </span>
          </div>
        </div>

        {/* Hero visual with floating service cards */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-0 rounded-[2rem] bg-emerald/10 blur-3xl"
          />
          <div className="relative rounded-[2rem] border border-navy-foreground/10 bg-navy/40 p-2 shadow-lift backdrop-blur-xl">
            <img
              src={heroImage}
              alt="Fastpay payment dashboard on a laptop with mobile payment app on a modern office desk"
              width={1600}
              height={1024}
              className="w-full rounded-3xl"
            />
          </div>
          <div className="relative z-10 mx-auto -mt-16 grid max-w-4xl grid-cols-2 gap-4 px-4 lg:grid-cols-4">
            {[
              { icon: CreditCard, label: "Payment Gateway", to: "/payment-gateway" },
              { icon: Store, label: "POS System", to: "/pos-system" },
              { icon: MonitorSmartphone, label: "Website Design", to: "/web-development" },
              { icon: Headphones, label: "24/7 Support", to: "/contact" },
            ].map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group rounded-2xl border border-navy-foreground/10 bg-navy/70 p-4 text-center shadow-lift backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40"
              >
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-emerald/15 text-emerald transition-colors group-hover:bg-emerald group-hover:text-navy-deep">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-3 block text-sm font-semibold text-navy-foreground">
                  {c.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-navy-foreground/10 bg-navy/60 px-8 py-6 shadow-lift backdrop-blur-xl sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-emerald">70+</p>
                <p className="text-xs tracking-wide text-navy-muted uppercase">Businesses Served</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-bronze">98%</p>
                <p className="text-xs tracking-wide text-navy-muted uppercase">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-cyan">24/7</p>
                <p className="text-xs tracking-wide text-navy-muted uppercase">Support</p>
              </div>
            </div>
            <Button asChild className="bg-gradient-emerald font-bold text-navy-deep shadow-glow-emerald hover:opacity-90">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm font-medium tracking-[0.25em] text-navy-muted/80 uppercase">
            Modern • Fast • Secure • Scalable
          </p>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-navy-foreground/5 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-medium tracking-[0.2em] text-navy-muted/70 uppercase">
            Trusted by 70+ businesses across retail, food and e-commerce
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 py-3 text-center font-display text-sm font-bold text-navy-muted transition-colors hover:border-cyan/40 hover:text-navy-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core services */}
      <DarkSection>
        <DarkHeading
          eyebrow="Our Core Services"
          title="Everything your business needs to sell and get paid"
          description="Three flagship services, plus the wider IT support that keeps them running smoothly."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.to}
              className={cn(
                "group rounded-3xl border border-navy-foreground/10 bg-navy/50 p-8 transition-all duration-500 hover:-translate-y-2",
                s.bronze ? "hover:border-bronze/50" : "hover:border-cyan/50",
              )}
            >
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-2xl border",
                  s.bronze
                    ? "border-bronze/30 bg-gradient-to-br from-bronze/20 to-bronze/5 text-bronze"
                    : "border-cyan/30 bg-gradient-to-br from-cyan/20 to-cyan/5 text-cyan",
                )}
              >
                <s.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy-foreground">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-muted">{s.description}</p>
              <Link
                to={s.to}
                className={cn(
                  "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5",
                  s.bronze ? "text-bronze" : "text-cyan",
                )}
              >
                Learn More <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Why choose */}
      <DarkSection className="border-t border-navy-foreground/5">
        <DarkHeading
          eyebrow="Why Choose Fastpay"
          title="Built for businesses that can't afford downtime"
          description="We combine fintech-grade reliability with the responsiveness of a local partner."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-navy-deep">
                <b.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{b.description}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Stats */}
      <section className="border-y border-navy-foreground/5 bg-navy/40 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-extrabold text-gradient-cyan-bronze md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-navy-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <DarkSection>
        <DarkHeading
          eyebrow="How It Works"
          title="From first call to going live in four clear steps"
          description="No surprises, no hidden phases — you always know exactly where your project stands."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-navy-foreground/10 bg-navy/50 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Testimonials */}
      <DarkSection className="border-t border-navy-foreground/5">
        <DarkHeading
          eyebrow="Client Reviews"
          title="What our clients say"
          description="Retailers, restaurants and online sellers who run their daily operations on Fastpay."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-navy-foreground/10 bg-navy/50 p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-navy-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-foreground/10 pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy-foreground">{t.name}</span>
                  <span className="block text-xs text-navy-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </DarkSection>

      {/* Pricing preview */}
      <DarkSection>
        <div className="rounded-[2.5rem] border border-navy-foreground/5 bg-navy/30 p-8 shadow-lift md:p-12">
          <DarkHeading
            eyebrow="Pricing"
            title="Straightforward pricing, flexible terms"
            description="Rent or buy — whichever fits your cash flow. Custom quotes available for every service."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricePreview
              icon={CreditCard}
              title="Payment Gateway"
              price="Negotiable"
              note="Rent or one-time purchase, priced on transaction volume and integration scope."
              points={["Cards, wallets & mobile banking", "Next-day settlement", "Real-time dashboard"]}
            />
            <PricePreview
              icon={Store}
              title="POS System"
              price="৳4,000"
              suffix="/ month"
              secondary="or ৳120,000 one-time"
              note="Software, updates and support included. Annual service charge negotiable."
              points={["Hardware + cloud software", "Offline mode included", "Multi-branch reporting"]}
              featured
            />
            <PricePreview
              icon={MonitorSmartphone}
              title="Website Development"
              price="Negotiable"
              note="Priced on website type, number of pages and the features you need."
              points={["Business sites & e-commerce", "SEO-ready, fast loading", "1 year support included"]}
            />
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cyan/40 bg-transparent font-semibold text-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              <Link to="/pricing">
                View Full Pricing <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </DarkSection>

      {/* Blog preview */}
      <DarkSection className="border-t border-navy-foreground/5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <DarkHeading
            align="left"
            eyebrow="Insights"
            title="Latest from the Fastpay blog"
            description="Practical guidance on payments, retail operations and building for the web."
          />
          <Link
            to="/blog"
            className="shrink-0 border-b border-cyan/30 pb-1 text-sm font-semibold text-cyan transition-colors hover:border-cyan"
          >
            View All Posts
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <article key={post.slug} className="group cursor-pointer">
              <div
                className={cn(
                  "mb-6 aspect-[16/9] overflow-hidden rounded-2xl border border-navy-foreground/10",
                  i === 1 ? "bg-gradient-to-br from-navy to-bronze/20" : "bg-gradient-to-br from-navy to-cyan/20",
                )}
              >
                <div className="size-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase">
                <span className={i === 1 ? "text-bronze" : "text-cyan"}>{post.category}</span>
                <span className="size-1 rounded-full bg-navy-foreground/20" aria-hidden="true" />
                <span className="text-navy-muted/70">{post.readTime}</span>
              </div>
              <h3
                className={cn(
                  "mt-3 text-xl leading-tight font-bold text-navy-foreground transition-colors",
                  i === 1 ? "group-hover:text-bronze" : "group-hover:text-cyan",
                )}
              >
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-navy-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </DarkSection>

      {/* Industries */}
      <DarkSection className="border-t border-navy-foreground/5">
        <DarkHeading
          eyebrow="Industries"
          title="Who we work with every day"
          description="Different counters, different rules. We configure the same platform around how each sector actually trades."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <div
              key={i.name}
              className="rounded-2xl border border-navy-foreground/10 bg-navy/50 p-6 transition-colors hover:border-cyan/40"
            >
              <h3 className="text-base font-bold text-navy-foreground">{i.name}</h3>
              <p className="mt-2 text-sm text-navy-muted">{i.detail}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Assurances */}
      <DarkSection className="border-t border-navy-foreground/5">
        <DarkHeading
          eyebrow="Assurance"
          title="Commitments we put in writing"
          description="Every engagement is covered by a signed service agreement — these are the terms inside it."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ASSURANCES.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6"
            >
              <p className="font-display text-2xl font-extrabold text-cyan">{a.metric}</p>
              <h3 className="mt-2 text-base font-bold text-navy-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-navy-muted">{a.detail}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* FAQ */}
      <DarkSection className="border-t border-navy-foreground/5">
        <DarkHeading eyebrow="FAQ" title="Common questions" />
        <Accordion type="single" collapsible className="mx-auto mt-10 w-full max-w-3xl">
          {HOME_FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="mb-3 rounded-2xl border border-navy-foreground/10 bg-navy/50 px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-navy-muted">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DarkSection>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan/20 bg-gradient-hero px-8 py-14 text-center shadow-lift md:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-glow-cyan" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to grow your business with Fastpay?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy-muted">
              Talk to our team today about payment gateway integration, a POS rollout, or a new
              website. We reply within one business day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl" className="bg-cyan font-bold text-navy-deep shadow-glow-cyan hover:bg-navy-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-navy-foreground/20 bg-transparent font-bold text-navy-foreground hover:bg-navy-foreground/5 hover:text-navy-foreground"
              >
                <a href={COMPANY.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-navy-foreground/20 bg-transparent font-bold text-navy-foreground hover:bg-navy-foreground/5 hover:text-navy-foreground"
              >
                <a href={COMPANY.emailHref}>
                  <Mail className="size-4" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </Button>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-navy-muted">
              <BadgeCheck className="size-3.5 text-cyan" aria-hidden="true" />
              Free 30-minute consultation — no obligation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function DarkSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-6 py-20 md:py-24", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function DarkHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-foreground md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-navy-muted">{description}</p>}
    </div>
  );
}

function PricePreview({
  icon: Icon,
  title,
  price,
  suffix,
  secondary,
  note,
  points,
  featured = false,
}: {
  icon: typeof CreditCard;
  title: string;
  price: string;
  suffix?: string;
  secondary?: string;
  note: string;
  points: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8",
        featured
          ? "border-2 border-cyan bg-gradient-to-b from-navy to-abyss shadow-glow-cyan"
          : "border border-navy-foreground/10 bg-navy-foreground/5",
      )}
    >
      {featured && (
        <span className="absolute top-0 right-0 rounded-bl-lg rounded-tr-xl bg-cyan px-4 py-1 text-[10px] font-bold tracking-tighter text-navy-deep uppercase">
          Popular
        </span>
      )}
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-xl",
          featured ? "bg-cyan text-navy-deep" : "bg-cyan/10 text-cyan",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy-foreground">{title}</h3>
      <p className="mt-3 font-display text-4xl font-extrabold text-navy-foreground">
        {price}
        {suffix && <span className="text-sm font-medium text-navy-muted"> {suffix}</span>}
      </p>
      {secondary && <p className="text-sm text-navy-muted">{secondary}</p>}
      <p className="mt-3 text-sm text-navy-muted">{note}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-sm text-navy-foreground/85">
            <Check className="size-4 shrink-0 text-cyan" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <Button
        asChild
        className={cn(
          "mt-8 w-full font-bold",
          featured
            ? "bg-cyan text-navy-deep hover:bg-navy-foreground"
            : "border border-navy-foreground/20 bg-transparent text-navy-foreground hover:bg-navy-foreground/10",
        )}
        variant={featured ? "default" : "outline"}
      >
        <Link to="/contact">{featured ? "Get the POS System" : "Request a Quote"}</Link>
      </Button>
    </div>
  );
}
