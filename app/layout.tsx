import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mylavaram Naga Sai | Infrastructure & Security Engineer",
  description: "Founder of CodeQuantum AI. Specialist in React.js architecture, Network Protocols, and Global Tunneling Solutions.",
  // NOTE: Change this URL to your actual Vercel link once you deploy!
  metadataBase: new URL("https://your-vercel-domain.vercel.app"), 
  openGraph: {
    title: "Mylavaram Naga Sai | Portfolio",
    description: "Explore my deployments, infrastructure architecture, and CodeQuantum AI.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Mylavaram Naga Sai Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // This points to the image you will drop in the app folder
        width: 1200,
        height: 630,
        alt: "Mylavaram Naga Sai Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}