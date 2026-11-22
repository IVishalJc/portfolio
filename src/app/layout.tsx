import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal JC — AI Engineer",
  description:
    "AI Engineer building production AI systems: hybrid search, knowledge graphs, multi-agent orchestration, and evaluation frameworks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${grotesk.variable} ${jet.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-[#eaeaf5]">{children}</body>
    </html>
  );
}
