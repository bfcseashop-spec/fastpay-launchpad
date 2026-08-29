import { canonical, seoMeta } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { BLOG_POSTS } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: seoMeta({
      title: "Blog & Insights | Fastpay IT Solution Ltd",
      description:
        "Practical articles on payment gateways, POS operations, e-commerce and web performance from the Fastpay IT Solution Ltd team.",
      ogTitle: "Payments, POS & Web Insights from Fastpay",
      ogDescription:
        "Guidance on payments, retail technology and building fast, high-converting websites — written for business owners.",
      path: "/blog",
      image: "/og-blog.jpg",
      imageWidth: 1200,
      imageHeight: 800,
      imageAlt: "Fastpay team working on web and payment projects in the studio",
    }),
    links: canonical("/blog"),
  }),
  component: Blog,
});

const CATEGORIES = ["Payments", "POS", "Web Development", "Security", "E-commerce"];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on payments, retail tech and the web"
        description="What we learn deploying gateways, POS systems and websites — written for business owners, not engineers."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="h-40 bg-gradient-hero" aria-hidden="true" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg leading-snug font-bold">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-sm font-semibold tracking-wider uppercase">Categories</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {CATEGORIES.map((c) => (
                  <li
                    key={c}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                  >
                    <span>{c}</span>
                    <span className="text-xs">
                      {BLOG_POSTS.filter((p) => p.category === c).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-sm font-semibold tracking-wider uppercase">Recent Posts</h2>
              <ul className="mt-4 space-y-4 text-sm">
                {BLOG_POSTS.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <p className="font-semibold leading-snug">{p.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-hero p-6 text-navy-foreground shadow-card">
              <h2 className="text-base font-bold">Need help implementing any of this?</h2>
              <p className="mt-2 text-sm text-navy-muted">
                Our team can audit your payments, POS or website at no cost.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-5 w-full">
                <Link to="/contact">Talk to Fastpay</Link>
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
