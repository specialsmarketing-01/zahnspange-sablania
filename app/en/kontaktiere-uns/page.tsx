import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Dr. Manish Sablania",
  alternates: {
    canonical: `${SITE_URL}/en/contact`,
    languages: { de: `${SITE_URL}/kontakt`, en: `${SITE_URL}/en/contact` },
  },
};

export default function KontaktiereUnsEnPage() {
  // Old slug -> new English contact page
  redirect("/en/contact");
}

