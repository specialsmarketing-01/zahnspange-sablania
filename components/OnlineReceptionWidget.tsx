"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export default function OnlineReceptionWidget({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const c = dict.common as Record<string, string>;
  const h = dict.homepage as Record<string, unknown>;

  const label = c.onlineReceptionLabel;
  const intro = c.onlineReceptionIntro;
  const contactLabel = c.onlineReceptionContact;
  const appointmentLabel = c.onlineReceptionAppointments;
  const prescriptionsLabel = c.onlineReceptionPrescriptions;
  const moreLabel = c.onlineReceptionMore;

  const digitalUrl =
    typeof h.digitalPracticeCtaUrl === "string" && h.digitalPracticeCtaUrl.length > 0
      ? (h.digitalPracticeCtaUrl as string)
      : undefined;

  const contactHref = getHref("/kontakt", locale);
  const appointmentHref = BOOKING_URL ?? getHref("/online-termin", locale);
  const prescriptionsHref = digitalUrl ?? getHref("/faqs", locale);
  const moreHref = getHref("/leistungen", locale);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-64 rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <BubbleIcon className="h-7 w-7 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {intro}
                </p>
                <p className="text-sm font-semibold text-[#1e293b]">{label}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close online reception"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="py-2">
            <WidgetLink href={contactHref} onClick={() => setOpen(false)}>
              <IconMessage />
              <span>{contactLabel}</span>
            </WidgetLink>
            <WidgetLink href={appointmentHref} external onClick={() => setOpen(false)}>
              <IconCalendar />
              <span>{appointmentLabel}</span>
            </WidgetLink>
            <WidgetLink href={prescriptionsHref} external={!!digitalUrl} onClick={() => setOpen(false)}>
              <IconDocument />
              <span>{prescriptionsLabel}</span>
            </WidgetLink>
            <WidgetLink href={moreHref} onClick={() => setOpen(false)} last>
              <IconDots />
              <span>{moreLabel}</span>
            </WidgetLink>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg border border-gray-200 hover:shadow-xl hover:border-primary/40 transition-all duration-200"
        aria-expanded={open}
        aria-label={label}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <BubbleIcon className="h-6 w-6" />
        </span>
        <span className="hidden text-sm font-semibold text-[#1e293b] sm:inline">
          {label}
        </span>
      </button>
    </div>
  );
}

function WidgetLink({
  href,
  children,
  onClick,
  external,
  last,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
  last?: boolean;
}) {
  const className =
    "flex items-center gap-3 px-4 py-2.5 text-sm text-[#1f2933] hover:bg-gray-50 transition-colors" +
    (last ? " border-t border-gray-100 mt-1" : "");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function BubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="12" rx="4" />
      <path d="M8 20c2-1 2.5-2 3-4" />
      <circle cx="9" cy="10" r="0.9" />
      <circle cx="12" cy="10" r="0.9" />
      <circle cx="15" cy="10" r="0.9" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 6h16v9H7l-3 3V6z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M9 3v4M15 3v4M4 10h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDots() {
  return (
    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="5" cy="12" r="1.3" />
      <circle cx="12" cy="12" r="1.3" />
      <circle cx="19" cy="12" r="1.3" />
    </svg>
  );
}

