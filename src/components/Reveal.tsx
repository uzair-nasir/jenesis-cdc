import type { ReactNode } from "react";

// Animations intentionally removed — keep simple wrapper for layout compatibility.
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const Comp = Tag as any;
  return <Comp className={className}>{children}</Comp>;
}
