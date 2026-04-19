import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  metadataBase: new URL("https://hashimnaveed.com"), // replace after deploy
  title: {
    default: "Hashim Naveed",
    template: "%s | Hashim Naveed",
  },
  description:
    "Hashim Naveed is a Senior Technology Consultant in Hamburg, Germany specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
  keywords: [
    "Hashim Naveed",
    "Senior Technology Consultant",
    "AI Infrastructure",
    "Cloud Architecture",
    "DevOps",
    "Azure",
    "AWS",
    "GCP",
    "Kubernetes",
    "MLOps",
    "Hamburg",
    "Germany",
  ],
  authors: [{ name: "Hashim Naveed" }],
  creator: "Hashim Naveed",
  publisher: "Hashim Naveed",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Hashim Naveed",
    description:
      "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, and enterprise transformation.",
    url: "https://hashimnaveed.com",
    siteName: "Hashim Naveed",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Hashim Naveed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim Naveed",
    description:
      "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, and enterprise transformation.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hashim Naveed",
    url: "https://hashimnaveed.com",
    image: "https://hashimnaveed.com/profile.jpg",
    jobTitle: "Senior Technology Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Accenture",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamburg",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://www.linkedin.com/in/hashimnaveed",
    ],
    knowsAbout: [
      "AI Infrastructure",
      "Cloud Architecture",
      "DevOps",
      "Azure",
      "AWS",
      "GCP",
      "Kubernetes",
      "MLOps",
      "Enterprise Systems",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hashim Naveed",
    url: "https://hashimnaveed.com",
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <header className="topbar">
          <div className="topbar-inner">
            <Link href="/" className="brand">
              Hashim Naveed
            </Link>

            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              {/* <Link href="/signals">Signals</Link> */}
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="page-shell">{children}</div>
        </main>

        <div className="footer-space" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}