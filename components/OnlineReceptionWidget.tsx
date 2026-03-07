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
  const whatsappLabel = (c as Record<string, string>).onlineReceptionWhatsApp ?? "WhatsApp";
  const moreLabel = c.onlineReceptionMore;

  const digitalUrl =
    typeof h.digitalPracticeCtaUrl === "string" && h.digitalPracticeCtaUrl.length > 0
      ? (h.digitalPracticeCtaUrl as string)
      : undefined;

  const contactHref = getHref("/kontakt", locale);
  const appointmentHref = BOOKING_URL ?? getHref("/online-termin", locale);
  const prescriptionsHref = digitalUrl ?? getHref("/faqs", locale);
  const whatsappHref = "https://wa.me/4367764410301";
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
            <WidgetLink href={whatsappHref} external onClick={() => setOpen(false)}>
              <IconWhatsApp />
              <span>{whatsappLabel}</span>
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

function IconWhatsApp() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

