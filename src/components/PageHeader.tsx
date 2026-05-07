import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
}) {
  return (
    <section className="border-b" style={{ borderColor: "var(--border)", background: "var(--sand)" }}>
      <div className="container-edge py-16 md:py-24 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="rule" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1
            className="text-4xl md:text-6xl leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>
          )}
        </div>
        {image && (
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)" }}>
              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
