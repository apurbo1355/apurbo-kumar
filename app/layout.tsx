import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://apurbo-kumar.vercel.app";
const siteTitle = "Apurbo Kumar | AI Researcher, Mathematics Trainer & Engineering Student";
const siteDescription =
  "Personal portfolio of Apurbo Kumar featuring research in artificial intelligence, machine learning, computer vision and engineering, along with international academic involvement and leadership activities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Apurbo Kumar",
    "AI Researcher",
    "Machine Learning",
    "Computer Vision",
    "Mathematics",
    "Engineering",
    "Research Portfolio",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Apurbo Kumar",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Apurbo Kumar" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
