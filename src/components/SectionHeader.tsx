import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className="rule" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2
        className="text-3xl md:text-5xl leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
