import { canonical, seoMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  LayoutTemplate,
  LifeBuoy,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import webImage from "@/assets/web-dev.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard, StepCard } from "@/components/site/Cards";
import { Faq } from "@/components/site/Faq";
import { TestimonialCarousel } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import studioImage from "@/assets/photo-web-studio.jpg";
import responsiveImage from "@/assets/photo-web-responsive.jpg";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: seoMeta({
      title: "Website Design & Development | Fastpay IT Solution Ltd",
      description:
        "Custom business websites, e-commerce stores, landing pages and web apps built to load fast, rank well and convert. Free quote from Fastpay IT Solution Ltd.",
      ogTitle: "Custom Websites That Load Fast and Convert",
      ogDescription:
        "Business sites, e-commerce, landing pages, web apps, UI/UX, SEO and maintenance from one Dhaka-based team.",
      path: "/web-development",
      image: "/og-web-development.jpg",
      imageWidth: 1280,
      imageHeight: 860,
      imageAlt: "Responsive Fastpay website design shown on laptop and mobile",
    }),
    links: canonical("/web-development"),
  }),
  component: WebDevelopment,
});

const STACK = [
  {
    area: "Front-end",
    tools: "React, Next.js, Tailwind CSS",
    why: "Component-based builds that stay fast on mobile networks and are easy to extend later.",
  },
  {
    area: "Back-end",
    tools: "Node.js, Laravel, PostgreSQL",
    why: "Proven server stacks with structured data, background jobs and clean REST or GraphQL APIs.",
  },
  {
    area: "Commerce",
    tools: "WooCommerce, Shopify, custom carts",
    why: "Chosen to fit your catalogue size and margin, never forced into one platform we resell.",
  },
  {
    area: "Infrastructure",
    tools: "Cloudflare CDN, automated backups, SSL",
    why: "Global edge delivery, daily off-site backups and staging environments for every project.",
  },
];

const WEB_STATS = [
  { value: "1.2s", label: "Largest contentful paint on 4G" },
  { value: "+38%", label: "Mobile checkout completion" },
  { value: "4,000", label: "Products migrated with images" },
  { value: "6 weeks", label: "Brief to launch, including UAT" },
];

const STANDARDS = [
  "Responsive layouts tested on real phones, tablets and desktop widths",
  "Core Web Vitals in the green before we call a project finished",
  "Semantic, accessible markup aimed at WCAG 2.1 AA",
  "SSL, security headers and automated daily backups",
  "Sitemap, structured data and Google Search Console setup",
  "Analytics with conversion goals configured, not just a tracking tag",
  "Content management your own team can use without calling us",
  "Full source code and hosting credentials handed over at launch",
  "30-day post-launch bug fix window on every package",
];

const WEB_FAQS = [
  {
    q: "How long does a website take?",
    a: "A five-page business site typically takes two to three weeks. A standard site with a blog and custom design runs four to six weeks, and e-commerce or a custom web app usually lands between six and twelve weeks depending on catalogue size and integrations.",
  },
  {
    q: "Do we own the code and the hosting?",
    a: "Yes. At launch we hand over the full source repository, database and hosting credentials in your own accounts. There is no lock-in and no licence you have to keep paying us for.",
  },
  {
    q: "Can you work with our existing brand and content?",
    a: "Absolutely. If you have a brand guide we follow it exactly. If you don't, we'll produce a lightweight one — colours, type scale and component styles — as part of the design phase.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a 30-day bug-fix window. After that you can take a monthly maintenance plan covering updates, security patches, backups, uptime monitoring and a set number of content change hours.",
  },
  {
    q: "Can you integrate payments and our POS?",
    a: "That's the advantage of using us for all three. We connect the site to the Fastpay gateway for card and wallet checkout, and sync stock with your Fastpay POS so online and in-store inventory never drift apart.",
  },
];

const SERVICES = [
  { icon: Briefcase, title: "Business Websites", description: "Credible, fast corporate sites with clear service pages, lead capture and easy content editing." },
  { icon: ShoppingCart, title: "E-commerce Websites", description: "Full online stores with product management, payment gateway integration and order workflows." },
  { icon: LayoutTemplate, title: "Landing Pages", description: "High-conversion campaign pages built for ads, with A/B ready structure and analytics wired in." },
  { icon: Sparkles, title: "Web Applications", description: "Dashboards, booking systems and internal tools tailored precisely to your operations." },
  { icon: PenTool, title: "UI/UX Design", description: "Research, wireframes and polished interface design that makes your product obvious to use." },
  { icon: Search, title: "SEO Optimization", description: "Technical SEO, structured data, page-speed work and content structure that earns rankings." },
  { icon: LifeBuoy, title: "Maintenance & Support", description: "Updates, security patches, backups and monthly performance reports so nothing goes stale." },
];

const PORTFOLIO = [
  { title: "Bengal Mart Online", category: "E-commerce", blurb: "Grocery store with 4,000 SKUs, wallet checkout and same-day delivery slots." },
  { title: "Riverside Grill House", category: "Restaurant", blurb: "Menu, reservations and online ordering integrated with their Fastpay POS." },
  { title: "MediCare Plus", category: "Healthcare", blurb: "Multi-branch pharmacy site with prescription upload and stock availability lookup." },
  { title: "Tanvir Trading Co.", category: "Corporate", blurb: "Bilingual B2B catalogue and quote-request portal for an import/export group." },
  { title: "UrbanFit Studios", category: "Web App", blurb: "Class booking, membership billing and trainer scheduling in one dashboard." },
  { title: "Sunrise Logistics", category: "Landing Page", blurb: "Campaign page for a freight service, converting 11% of paid traffic." },
];

const PROCESS = [
  { title: "Discovery", description: "We define audience, goals and scope, then agree a fixed feature list and timeline." },
  { title: "Design", description: "Wireframes then full visual design, reviewed with you before a line of code is written." },
  { title: "Development", description: "Responsive, accessible build with weekly demo links so you see progress continuously." },
  { title: "Launch", description: "Testing, SEO checks, analytics and a controlled go-live with zero-downtime deployment." },
  { title: "Support", description: "Ongoing maintenance, content updates and performance monitoring on a monthly plan." },
];

const PACKAGES = [
  {
    name: "Basic",
    tagline: "Small business presence",
    price: "Negotiable",
    items: ["Up to 5 pages", "Mobile responsive design", "Contact form & maps", "Basic on-page SEO", "1 month free support"],
  },
  {
    name: "Standard",
    tagline: "Growing companies",
    price: "Negotiable",
    featured: true,
    items: ["Up to 15 pages", "Custom UI/UX design", "Blog & content manager", "Advanced SEO setup", "Analytics dashboard", "3 months free support"],
  },
  {
    name: "Premium",
    tagline: "E-commerce & web apps",
    price: "Negotiable",
    items: ["Unlimited pages", "E-commerce or custom app", "Payment gateway integration", "Multi-language support", "Performance & security hardening", "12 months support"],
  },
];

function WebDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Website Development"
        title="Custom Websites That Convert"
        description="Design, development and ongoing support for business websites, online stores and web applications — built by a team that also handles your payments."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">Get a Free Quote</Link>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <Link to="/pricing">See Packages</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What We Build"
              title="Websites engineered for speed, search and sales"
              description="Every project ships with responsive layouts, semantic accessible markup, analytics and a content setup your team can actually manage."
              align="left"
            />
          </div>
          <img
            src={webImage}
            alt="Laptop displaying a modern website design with floating interface elements"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl border border-border shadow-lift"
          />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={responsiveImage}
            alt="An e-commerce website built by Fastpay shown on a laptop and mobile phone"
            width={1280}
            height={860}
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-lift"
          />
          <div>
            <SectionHeading
              eyebrow="What you receive"
              title="A site that works as hard on mobile as it does on desktop"
              description="Every project ships responsive, fast and search-ready — with payment gateway and POS integration available from day one."
              align="left"
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>· Business website from ৳25,000 · e-commerce store from ৳60,000</li>
              <li>· Free domain, 1 year hosting and SSL included with every package</li>
              <li>· Full source code and admin access handed over — you own everything</li>
              <li>· Delivery in 7–21 working days depending on package and page count</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="soft">

        <SectionHeading
          eyebrow="Portfolio"
          title="Recent work"
          description="A snapshot of sites and applications we've delivered for clients across Bangladesh."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-40 bg-gradient-hero" aria-hidden="true" />
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How a Fastpay web project runs" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <StepCard key={s.title} step={i + 1} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Packages"
          title="Website packages"
          description="Final price depends on website type, number of pages and features required — every quote is free."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "rounded-2xl border-2 border-primary bg-card p-8 shadow-glow"
                  : "rounded-2xl border border-border bg-card p-8 shadow-card"
              }
            >
              {p.featured && (
                <span className="mb-3 inline-block rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
              <p className="mt-4 font-display text-3xl font-extrabold text-primary">{p.price}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {p.items.map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.featured ? "hero" : "outlineBrand"}
                size="lg"
                className="mt-7 w-full"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technology"
          title="The stack we build on"
          description="No page builders, no rented templates. Everything ships as clean code you own, hosted on infrastructure that scales with your traffic."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STACK.map((s) => (
            <div key={s.area} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-xs font-semibold tracking-wider text-primary uppercase">
                {s.area}
              </h3>
              <p className="mt-2 text-base font-bold">{s.tools}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.why}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Case Study"
          title="Bengal Mart Online: 4,000 SKUs, rebuilt in six weeks"
          description="A grocery retailer whose old store lost most of its mobile traffic before checkout. We rebuilt the catalogue, checkout and delivery-slot flow end to end."
          light
        />
        <img src={studioImage} alt="Designer reviewing a responsive e-commerce website on desktop and mobile" className="mt-10 w-full rounded-2xl border border-border/40 object-cover shadow-card" loading="lazy" width={1200} height={800} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WEB_STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-navy-muted">
          Delivered with wallet checkout through the Fastpay gateway, same-day delivery slots and a
          stock feed synced to their in-store POS — one team, one accountable contract.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Standards"
          title="What every site ships with"
          description="These are not upsells. Every project, on every package, goes live meeting the same baseline."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((s) => (
            <div
              key={s}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm shadow-card"
            >
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Client Reviews" title="What clients say about working with us" />
        <TestimonialCarousel />
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="FAQ" title="Before you brief us" />
        <Faq items={WEB_FAQS} />
      </Section>


      <CTABanner
        title="Get a free quote for your website"
        description="Send us your requirements and we'll come back with scope, timeline and a fixed price within one business day."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
