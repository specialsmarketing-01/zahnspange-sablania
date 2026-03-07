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
                <p>{locale === "de" ? "Forsthausgasse 16-20/ Stiege 3/ EG, 1200 Wien" : "Forsthausgasse 16-20/ Stiege 3/ EG, 1200 Vienna"}</p>
                <p className="mt-4">
                  <a href="tel:+4313306090" className="text-accent hover:underline">
                    +43 1 3306090
                  </a>
                </p>
                <p>
                  <a href="mailto:info@zahnspange-sablania.at" className="text-accent hover:underline">
                    info@zahnspange-sablania.at
                  </a>
                  <br />
                  <a href="mailto:info@wienzahnaerzte.at" className="text-accent hover:underline">
                    info@wienzahnaerzte.at
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.0122893559815!2d16.36961617626859!3d48.24489087125545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9e0f79d997f%3A0x167db0d57f7c7ddd!2sZahnarzt%20%2CKieferorthop%C3%A4die%20Wien%201200%20%7C%20Dr.%20Manish%20Sablania%20BDS%20M.Sc%20%7C%20Fachzahnarzt%20f%C3%BCr%20Kieferorthop%C3%A4die!5e0!3m2!1sen!2sat!4v1772887221462!5m2!1sen!2sat"
                title={locale === "de" ? "Standort Dr. Manish Sablania, Wien 1200" : "Location Dr. Manish Sablania, Vienna 1200"}
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
