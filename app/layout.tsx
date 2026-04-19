import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Hashim Naveed",
    template: "%s | Hashim Naveed",
  },
  description:
    "Senior Technology Consultant | AI Infrastructure · Cloud (Azure/AWS/GCP) · DevOps · Digital Transformation | Accenture · Hamburg, Germany",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Hashim Naveed",
    description:
      "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, and enterprise transformation.",
    url: "https://your-domain.com",
    siteName: "Hashim Naveed",
    type: "website",
  },

  metadataBase: new URL("https://hashimnaveed.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
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
      </body>
    </html>
  );
}