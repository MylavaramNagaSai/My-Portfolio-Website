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
  description: "Founder of CodeQuantum AI. Specialist in secure infrastructure architecture, network protocols, and Next.js engineering.",
  metadataBase: new URL("https://mylavaramsai.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mylavaram Naga Sai | Infrastructure & Security Engineer",
    description: "Explore my infrastructure projects, security research, and the CodeQuantum AI benchmarking suite.",
    url: "https://mylavaramsai.me",
    siteName: "Mylavaram Naga Sai Portfolio",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Mylavaram Naga Sai Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mylavaram Naga Sai | Portfolio",
    description: "Infrastructure & Security Engineer | Founder of CodeQuantum AI",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* If you get a Google Verification tag, paste it exactly below this line */}
        {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
      </head>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-[var(--matrix-color)] selection:text-black">
        {children}
      </body>
    </html>
  );
}