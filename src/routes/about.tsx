import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Handshake, MapPin, Target } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Cards";
import { CTABanner } from "@/components/site/CTABanner";
import { COMPANY } from "@/lib/site";
import officeImage from "@/assets/photo-team-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Fastpay IT Solution Ltd" },
      {
        name: "description",
        content:
          "Meet Fastpay IT Solution Ltd — the team behind payment gateway integrations, POS rollouts and websites for 500+ businesses since 2018.",
      },
      { property: "og:title", content: "About Fastpay IT Solution Ltd" },
      {
        property: "og:description",
        content:
          "Our story, mission, team and milestones — a local IT partner with fintech-grade standards.",
      },
    ],
  }),
  component: About,
});

const TEAM = [
  { name: "Sopheak Vann", role: "Founder & Managing Director", bio: "15 years in payments and merchant acquiring across Southeast Asia." },
  { name: "Nadia Rahman", role: "Head of Engineering", bio: "Leads gateway integrations, POS architecture and platform reliability." },
  { name: "Rathanak Kim", role: "POS Solutions Lead", bio: "Designs store workflows for retail, restaurant and pharmacy clients." },
  { name: "Imran Kabir", role: "Web & Design Lead", bio: "Runs UI/UX, front-end delivery and conversion optimisation." },
  { name: "Sreymom Chea", role: "Client Success Manager", bio: "Onboarding, training and the voice on the other end of your support call." },
  { name: "Arif Chowdhury", role: "Security & Compliance", bio: "Owns PCI alignment, audits and merchant risk reviews." },
];

const MILESTONES = [
  { year: "2018", title: "Fastpay founded", text: "Started as a two-person team building custom websites for local retailers." },
  { year: "2020", title: "POS platform launched", text: "Shipped our first cloud POS release; 40 stores onboarded within six months." },
  { year: "2022", title: "Payment gateway partnerships", text: "Signed acquiring and mobile-wallet partnerships enabling end-to-end merchant payments." },
  { year: "2024", title: "500 businesses served", text: "Crossed 500 active clients and opened a dedicated 24/7 support desk." },
  { year: "2026", title: "Regional expansion", text: "Serving merchants across Bangladesh with multi-currency settlement." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A local IT partner with fintech-grade standards"
        description="Since 2018 Fastpay IT Solution Ltd has helped businesses take payments, run their stores and show up properly online — with one accountable team behind all three."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Built by people who ran the counter" align="left" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Fastpay began when our founder spent a year troubleshooting a retailer's broken
                checkout — a website that couldn't take payments, a POS that lost stock counts, and
                three vendors each blaming the other two. It was obvious that small and mid-sized
                businesses needed one partner who owned the whole chain.
              </p>
              <p>
                Today we integrate payment gateways, deploy POS systems and build websites for more
                than 500 businesses. The same engineers who write the integration answer the phone
                when something needs attention, which is why our clients stay with us for years
                rather than months.
              </p>
              <p>
                We're deliberately practical: no jargon, no oversized retainers, and pricing you can
                negotiate to match the size of your business.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="Give every growing business access to the same payment, retail and web technology that large enterprises take for granted — at a price and pace they can handle."
            />
            <FeatureCard
              icon={Eye}
              title="Our Vision"
              description="To be the most trusted IT and payments partner in the region, judged not by how many clients we sign but by how many stay."
            />
            <FeatureCard
              icon={Handshake}
              title="Our Values"
              description="Straight answers, secure by default, and support that treats your downtime as our emergency."
            />
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind your project"
          description="A compact senior team — you work directly with the specialists, not an account layer."
        />
        <img src={officeImage} alt="Fastpay IT Solution engineers collaborating in the operations office" className="mt-10 w-full rounded-2xl border border-border/40 object-cover shadow-card" loading="lazy" width={1200} height={800} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-14 items-center justify-center rounded-full bg-gradient-brand font-display text-lg font-extrabold text-primary-foreground">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <h3 className="mt-4 text-base font-bold">{m.name}</h3>
              <p className="text-sm font-medium text-primary">{m.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="How we got here" />
        <ol className="mx-auto mt-12 max-w-3xl border-l border-border pl-6">
          {MILESTONES.map((m) => (
            <li key={m.year} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.9rem] mt-1 flex size-4 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-background" />
              <p className="font-display text-sm font-bold text-primary">{m.year}</p>
              <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit Us" title="Our office" align="left" />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3">
                <Compass className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {COMPANY.hours} · Appointments recommended
              </li>
            </ul>
          </div>
          <div className="flex h-64 items-center justify-center rounded-2xl border border-border bg-gradient-hero text-sm text-navy-muted shadow-card">
            Map placeholder — {COMPANY.address}
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
