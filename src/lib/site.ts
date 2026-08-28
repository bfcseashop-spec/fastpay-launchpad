export const COMPANY = {
  name: "Fastpay IT Solution Ltd",
  short: "Fastpay",
  tagline: "Your Complete IT & Payment Partner",
  phone: "+855 078514425",
  phoneHref: "tel:+855078514425",
  whatsapp: "https://wa.me/855078514425",
  email: "fastpay.tech@gmail.com",
  emailHref: "mailto:fastpay.tech@gmail.com",
  address: "Level 4, Norodom Boulevard, Chamkarmon, Phnom Penh, Cambodia",
  hours: "Sun–Fri: 9:00 AM – 6:00 PM",
  socials: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICE_LINKS = [
  {
    label: "Payment Gateway",
    to: "/payment-gateway",
    description: "Cards, wallets and mobile banking in one API.",
  },
  {
    label: "POS System",
    to: "/pos-system",
    description: "Retail & restaurant point of sale, online or offline.",
  },
  {
    label: "Website Development",
    to: "/web-development",
    description: "Business sites, e-commerce and custom web apps.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "choosing-payment-gateway",
    title: "How to Choose the Right Payment Gateway for Your Business",
    excerpt:
      "Settlement speed, transaction fees, supported wallets and developer experience — the four things that actually decide whether a gateway fits your business.",
    date: "August 18, 2026",
    category: "Payments",
    readTime: "6 min read",
  },
  {
    slug: "pos-mistakes",
    title: "7 POS Mistakes That Quietly Cost Retailers Money Every Month",
    excerpt:
      "From untracked stock shrinkage to staff logins nobody audits, these small POS habits add up to a serious dent in yearly margin.",
    date: "August 04, 2026",
    category: "POS",
    readTime: "5 min read",
  },
  {
    slug: "website-speed-conversions",
    title: "Why a One-Second Delay Can Cut Your Online Sales by 7%",
    excerpt:
      "Page speed is a revenue metric. Here is how we build sites that load fast on mobile networks and keep checkout friction near zero.",
    date: "July 22, 2026",
    category: "Web Development",
    readTime: "4 min read",
  },
  {
    slug: "pci-dss-basics",
    title: "PCI DSS in Plain Language: What Merchants Actually Need to Do",
    excerpt:
      "Compliance sounds intimidating, but most merchants only need to understand four practical responsibilities. We break them down.",
    date: "July 09, 2026",
    category: "Security",
    readTime: "7 min read",
  },
  {
    slug: "restaurant-offline-mode",
    title: "Running a Restaurant When the Internet Drops: Offline POS Explained",
    excerpt:
      "Orders should never stop because the router did. Here is how offline-first sync keeps your floor moving and your reports accurate.",
    date: "June 27, 2026",
    category: "POS",
    readTime: "5 min read",
  },
  {
    slug: "ecommerce-checkout-checklist",
    title: "The 12-Point Checkout Checklist Before You Launch an Online Store",
    excerpt:
      "Everything we verify before a client's e-commerce site goes live — from wallet coverage to refund flows and receipt emails.",
    date: "June 12, 2026",
    category: "E-commerce",
    readTime: "8 min read",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Fastpay integrated our payment gateway in four days. Settlements now land the next morning and our failed-payment rate dropped by half.",
    name: "Sokha Chan",
    role: "Founder, Angkor Mart Online",
  },
  {
    quote:
      "We run three branches on their POS. Stock counts finally match reality and I can see daily sales from my phone before I leave home.",
    name: "Rina Hossain",
    role: "Owner, Rina's Pharmacy Chain",
  },
  {
    quote:
      "They rebuilt our website and it loads instantly on mobile. Enquiries went from a handful a week to more than twenty.",
    name: "Md. Tanvir Alam",
    role: "Director, Tanvir Trading Co.",
  },
  {
    quote:
      "Support is the difference. Someone answers at 10pm on a Friday when a terminal misbehaves. That is worth a lot in restaurant business.",
    name: "Chariya Pen",
    role: "Manager, Riverside Grill House",
  },
];
