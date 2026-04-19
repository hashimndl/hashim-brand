import { fetchLinkedInRSS } from "@/lib/fetchLinkedInRSS";
import Link from "next/link";

export const metadata = {
  title: "Senior Technology Consultant | AI Infrastructure · Cloud · DevOps",
  description:
    "Hashim Naveed is a Senior Technology Consultant in Hamburg specializing in AI infrastructure, cloud architecture, DevOps, and enterprise-scale systems.",
};

export default async function Home() {
  const posts = await fetchLinkedInRSS();

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">AI Infrastructure · Cloud Systems · Enterprise Scale</div>

          <h1>Hashim Naveed</h1>

          <p className="hero-subtitle">
            I design and scale mission-critical AI and cloud infrastructure systems for enterprise environments.
          </p>

          <p className="hero-meta">
            13+ years of experience across Azure, AWS, and GCP. Leading 30+ engineers delivering production-grade
            platforms, automation systems, and AI-enabled infrastructure across Europe.
          </p>

          <div className="hero-actions">
            <Link href="/about" className="btn btn-primary">
              View Experience
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
          <img src="/profile.jpg" alt="Hashim Naveed" className="profile-photo" />
          <div className="profile-name">Hashim Naveed</div>
          <div className="profile-role">
            Senior Technology Consultant <br />
            Accenture · Hamburg, Germany
          </div>
        </div>
      </section>

      <section className="section">
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
            <div className="metric-value">3 Clouds</div>
            <div className="metric-label">Azure · AWS · GCP</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-text">
              Staff-level systems thinking across cloud architecture, platform reliability, automation, and AI-ready infrastructure.
            </p>
          </div>
        </div>

        <div className="pill-grid">
          {[
            "Cloud Architecture",
            "AI Infrastructure",
            "DevOps & CI/CD",
            "Kubernetes",
            "Terraform / Ansible",
            "MLOps",
            "ServiceNow",
            "SAP / ITSM",
            "Engineering Leadership",
          ].map((skill) => (
            <div key={skill} className="pill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Latest LinkedIn Insights</h2>
            <p className="section-text">
              A live stream of recent writing and perspectives pulled from LinkedIn.
            </p>
          </div>
        </div>

        <div className="feed">
          {posts.map((post) => (
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

      <section className="section">
        <div className="cta">
          <h2 className="section-title">Let’s build something impactful</h2>
          <p>
            Open to senior consulting, cloud architecture, AI infrastructure, and engineering leadership opportunities in Germany and across Europe.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/hashimnaveed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}