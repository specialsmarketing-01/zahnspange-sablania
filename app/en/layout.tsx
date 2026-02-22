import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Zahnspange Sablania | Orthodontics & Braces Vienna",
    template: "%s | Zahnspange Sablania",
  },
  description:
    "Your specialists for modern braces in Vienna. Individual consultation, modern technology and excellent results for children, teenagers and adults.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
