"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function ContactSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const h = dict.homepage;
  const o = dict.onlineTermin;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  return (
    <section className="bg-white py-16 sm:py-24" id="kontakt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {h.contactTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {h.contactSub}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-xl bg-gray-50 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">
                {o.contactHours}
              </h3>
              <address className="mt-4 not-italic text-gray-600">
                <p className="font-medium text-primary">Zahnspange Sablania</p>
                <p>Forsthausgasse 16–20</p>
                <p>Stiege 3 / EG, 1200 Wien</p>
                <p className="mt-4">
                  <a href="tel:+4313306090" className="text-accent hover:underline">
                    +43 1 3306090
                  </a>
                </p>
                <p>
                  <a href="mailto:info@zahnspange-sablania.at" className="text-accent hover:underline">
                    info@zahnspange-sablania.at
                  </a>
                </p>
                <p className="mt-4 text-sm">
                  {o.hoursText}
                  <br />
                  {o.hoursNote}
                </p>
              </address>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEyJzI5LjUiTiAxNsKwMjIyJzM1LjciRQ!5e0!3m2!1sde!2sat!4v1"
                title={locale === "de" ? "Standort Zahnspange Sablania" : "Location Zahnspange Sablania"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-8 shadow-soft" id="formular">
            <h3 className="text-lg font-semibold text-primary">{o.formTitle}</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-primary">
                  {o.name} *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-primary">
                  {o.email} *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-primary">
                  {o.phone}
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary">
                  {o.message} *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              {status === "success" && (
                <p className="text-sm font-medium text-green-600">{o.success}</p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">{o.error}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-soft hover:bg-primary/90 disabled:opacity-70 transition-colors"
              >
                {status === "sending" ? o.sending : dict.common.contactRequest}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
