import { fetchLinkedInRSS } from "@/lib/fetchLinkedInRSS";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Hashim Naveed | Senior Technology Consultant | AI Infrastructure · Cloud · DevOps",
  description:
    "Hashim Naveed is a Senior Technology Consultant in Hamburg specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hashimnaveed.com/#website",
  url: "https://hashimnaveed.com",
  name: "Hashim Naveed",
  description:
    "Personal portfolio and professional website of Hashim Naveed, Senior Technology Consultant.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hashimnaveed.com/#person",
  name: "Hashim Naveed",
  url: "https://hashimnaveed.com",
  image: "https://hashimnaveed.com/profile.jpg",
  jobTitle: "Senior Technology Consultant",
  description:
    "Senior Technology Consultant specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
  homeLocation: {
    "@type": "Place",
    name: "Hamburg, Germany",
  },
  worksFor: {
    "@type": "Organization",
    name: "Accenture",
  },
  sameAs: ["https://www.linkedin.com/in/hashimnaveed"],
  knowsAbout: [
    "AI Infrastructure",
    "Cloud Architecture",
    "Azure",
    "AWS",
    "GCP",
    "DevOps",
    "MLOps",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Enterprise Transformation",
  ],
};

export default async function Home() {
  const posts = await fetchLinkedInRSS();
  const featuredPosts = posts.slice(0, 4);

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="hero hero-compact">
        <div className="hero-copy">
          <div className="eyebrow">AI Infrastructure · Cloud Systems · Enterprise Transformation</div>

          <h1>Hashim Naveed</h1>

          <p className="hero-subtitle">
            I design and scale enterprise cloud and AI infrastructure systems that support
            operational excellence and long-term business impact.
          </p>

          <p className="hero-meta">
            Senior Technology Consultant based in Hamburg with 13+ years of experience across
            Azure, AWS, and GCP. I work across architecture, automation, platform reliability,
            and delivery leadership.
          </p>

          <div className="hero-actions">
            <Link href="/about" className="btn btn-primary">
              View Experience
            </Link>

            <Link href="/projects" className="btn btn-secondary">
              Selected Work
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Open Resume
            </a>
          </div>
        </div>

        <div className="hero-card profile">
          <Image
            src="/profile.jpg"
            alt="Hashim Naveed"
            width={200}
            height={200}
            priority
            className="profile-photo"
          />
          <div className="profile-name">Hashim Naveed</div>
          <div className="profile-role">
            Senior Technology Consultant <br />
            Accenture · Hamburg, Germany
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="section-header">
          <h2 className="section-title">Impact at Scale</h2>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="metric-value">13+</div>
            <div className="metric-label">Years Experience</div>
          </div>

          <div className="card">
            <div className="metric-value">30+</div>
            <div className="metric-label">Engineers Led</div>
          </div>

          <div className="card">
            <div className="metric-value">3</div>
            <div className="metric-label">Cloud Platforms</div>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
          </div>

          <div className="feed">
            {featuredPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="feed-card"
              >
                <div className="feed-title">{post.title}</div>
                <div className="feed-excerpt">{post.excerpt}</div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="cta">
          <h2 className="section-title">Open to meaningful opportunities</h2>
          <p>
            I’m open to senior consulting, cloud architecture, AI infrastructure, and
            engineering leadership opportunities across Europe.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}