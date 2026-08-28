const PARTNERS = [
  "NorthBay Retail",
  "Bengal Mart",
  "Riverside Grill",
  "Tanvir Trading",
  "MediCare Plus",
  "UrbanFit Studios",
];

export function LogoStrip() {
  return (
    <div className="border-y border-border bg-surface px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Trusted by 70+ businesses across retail, food and e-commerce
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card py-3 text-center font-display text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
