import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt | Dr. Manish Sablania",
  alternates: {
    canonical: `${SITE_URL}/kontakt`,
    languages: { de: `${SITE_URL}/kontakt`, en: `${SITE_URL}/en/contact` },
  },
};

export default function KontaktiereUnsPage() {
  // Old slug -> new contact page
  redirect("/kontakt");
}

