"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function OnlineTerminForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const o = dict.onlineTermin;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {o.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{o.lead}</p>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-8 shadow-soft" id="formular">
            <h2 className="text-xl font-semibold text-primary">{o.formTitle}</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="ot-name" className="block text-sm font-medium text-primary">
                  {o.name} *
                </label>
                <input
                  type="text"
                  id="ot-name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="ot-email" className="block text-sm font-medium text-primary">
                  {o.email} *
                </label>
                <input
                  type="email"
                  id="ot-email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="ot-phone" className="block text-sm font-medium text-primary">
                  {o.phone} *
                </label>
                <input
                  type="tel"
                  id="ot-phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-primary shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                />
              </div>
              <div>
                <label htmlFor="ot-message" className="block text-sm font-medium text-primary">
                  {o.message}
                </label>
                <textarea
                  id="ot-message"
                  name="message"
                  rows={4}
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
                {status === "sending" ? o.sending : o.submit}
              </button>
            </form>
          </div>

          <div className="rounded-xl bg-gray-50 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-primary">{o.contactHours}</h2>
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
        </div>
      </div>
    </div>
  );
}
