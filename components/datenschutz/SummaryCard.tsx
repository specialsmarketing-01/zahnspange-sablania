import type { ReactNode } from "react";

export default function SummaryCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] p-5 shadow-soft sm:p-6">
      <div className="flex gap-4">
        {icon ? (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/80 text-primary shadow-soft">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-primary sm:text-lg">{title}</h3>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
