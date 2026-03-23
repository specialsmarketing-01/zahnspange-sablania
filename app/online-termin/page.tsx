import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Online Termine",
  alternates: {
    canonical: `${SITE_URL}/online-termine`,
    languages: {
      de: `${SITE_URL}/online-termine`,
      en: `${SITE_URL}/en/book-appointment`,
    },
  },
};

export default function OnlineTerminPage() {
  redirect("/online-termine");
}
