// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "NeoAmorfic™ — The Law of Thought",
  description:
    "Building the quantum entropy intelligence that governs energy, thought, and time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="site">{children}</body>
    </html>
  );
}
