import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurbo Kumar | AI Researcher, Mathematics Trainer & Engineering Student",
  description:
    "Personal portfolio of Apurbo Kumar featuring research in artificial intelligence, machine learning, computer vision and engineering, along with international academic involvement and leadership activities.",
  keywords: [
    "Apurbo Kumar",
    "AI Researcher",
    "Machine Learning",
    "Computer Vision",
    "Mathematics",
    "Engineering",
    "Research Portfolio",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
