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
  sameAs: [
    "https://www.linkedin.com/in/hashimnaveed",
    "https://github.com/hashimndl",
  ],
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
            delivery leadership, and enterprise transformation.
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

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Selected Technical Work</h2>
            <p className="section-text">
              Public GitHub repositories that demonstrate how I think about delivery systems,
              enterprise architecture, and production-oriented technical design.
            </p>
          </div>

          <a
            href="https://github.com/hashimndl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub Profile
          </a>
        </div>

        <div className="grid-2">
          <a
            href="https://github.com/hashimndl/enterprise-devops-blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="eyebrow">DevOps · Delivery · Operations</div>
            <div className="feed-title" style={{ marginTop: 10 }}>
              Enterprise DevOps Blueprint
            </div>
            <div className="feed-excerpt">
              A production-oriented blueprint covering CI/CD pipelines, infrastructure as
              code, Kubernetes deployment patterns, observability, and operational runbooks.
            </div>

            <div className="pill-grid" style={{ marginTop: 18 }}>
              <div className="pill">CI/CD</div>
              <div className="pill">Terraform</div>
              <div className="pill">Kubernetes</div>
              <div className="pill">Helm</div>
            </div>

            <div
              className="hero-actions"
              style={{ marginTop: 20 }}
            >
              <span className="btn btn-primary">Open Repository</span>
            </div>
          </a>

          <a
            href="https://github.com/hashimndl/system-design-enterprise-case"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="eyebrow">Architecture · Tradeoffs · Scale</div>
            <div className="feed-title" style={{ marginTop: 10 }}>
              Enterprise AI Platform — System Design Case
            </div>
            <div className="feed-excerpt">
              A senior-level case study demonstrating requirements framing, architecture
              decisions, scalability planning, security thinking, and enterprise constraints.
            </div>

            <div className="pill-grid" style={{ marginTop: 18 }}>
              <div className="pill">System Design</div>
              <div className="pill">Scalability</div>
              <div className="pill">Security</div>
              <div className="pill">Reliability</div>
            </div>

            <div
              className="hero-actions"
              style={{ marginTop: 20 }}
            >
              <span className="btn btn-primary">Open Repository</span>
            </div>
          </a>
        </div>

        <div className="grid-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="feed-title">Why these matter</div>
            <div className="feed-excerpt">
              These repositories are not random coding samples. They are structured technical
              artifacts designed to show how I approach architecture, delivery maturity,
              operational clarity, and system-level decision-making.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">How to read them</div>
            <div className="feed-excerpt">
              Start with the README, review the architecture diagrams, then move into
              tradeoffs, decisions, and operational structure. That is where the strongest
              technical signal is.
            </div>
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
            <a
              href="https://github.com/hashimndl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}