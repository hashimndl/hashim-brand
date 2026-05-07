import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hashimnaveed.com"),
  title: {
    default: "Hashim Naveed",
    template: "%s | Hashim Naveed",
  },
  description:
    "Hashim Naveed is a Senior Technology Consultant in Hamburg specializing in AI infrastructure, cloud architecture, DevOps, enterprise transformation, and large-scale delivery across Europe.",
  keywords: [
    "Hashim Naveed",
    "Senior Technology Consultant",
    "AI Infrastructure",
    "Cloud Architecture",
    "DevOps",
    "Azure",
    "AWS",
    "GCP",
    "Enterprise Transformation",
    "Hamburg",
    "Germany",
    "System Design",
    "Enterprise DevOps",
  ],
  authors: [{ name: "Hashim Naveed" }],
  creator: "Hashim Naveed",
  publisher: "Hashim Naveed",
  alternates: {
    canonical: "https://hashimnaveed.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Hashim Naveed",
    description:
      "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
    url: "https://hashimnaveed.com",
    siteName: "Hashim Naveed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim Naveed",
    description:
      "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-222SKFEZ91"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-222SKFEZ91');
          `}
        </Script>

        <header className="topbar">
          <div className="topbar-inner">
            <Link href="/" className="brand">
              Hashim Naveed
            </Link>

            <nav className="nav" aria-label="Primary navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Selected Work</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="page-shell">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="page-shell site-footer-inner">
            <p>© {new Date().getFullYear()} Hashim Naveed. All rights reserved.</p>

            <div className="site-footer-links">
              <a
                href="https://www.linkedin.com/in/hashimnaveed"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hashimndl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="mailto:hashimndl@gmail.com">Email</a>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}