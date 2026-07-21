import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Orthodontist in Vienna | Dr. Manish Sablania",
    template: "%s | Zahnspange Sablania",
  },
  description:
    "Dr. Manish Sablania is a specialist orthodontist and general dentist in 1200 Vienna, offering braces and aligner treatments for children, teenagers and adults.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
