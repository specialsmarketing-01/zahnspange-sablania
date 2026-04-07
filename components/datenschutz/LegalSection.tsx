import type { ReactNode } from "react";

/** One anchored section in the legal document — no nested “card stack”; spacing via outer divider. */
export default function LegalSection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-b border-gray-200/80 py-8 first:pt-2 last:border-b-0 last:pb-0 sm:py-10 ${className}`}
    >
      {children}
    </section>
  );
}
