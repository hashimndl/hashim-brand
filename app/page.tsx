import { fetchLinkedInRSS } from "@/lib/fetchLinkedInRSS";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Hashim Naveed | Senior Technology Consultant | AI Infrastructure · Cloud · DevOps",
  description:
    "Hashim Naveed is a Senior Technology Consultant in Hamburg specializing in AI infrastructure, cloud architecture, DevOps, enterprise transformation, and large-scale delivery.",
};

export default async function Home() {
  const posts = await fetchLinkedInRSS();
  const featuredPosts = posts.slice(0, 4);

  return (
    <>
      <section className="hero hero-compact">
        <div className="hero-copy">
          <div className="eyebrow">AI Infrastructure · Cloud Systems · Enterprise Transformation</div>

          <h1>Hashim Naveed</h1>

          <p className="hero-subtitle">
            I design and scale enterprise cloud and AI infrastructure systems that support
            operational excellence, modernization, and long-term business growth.
          </p>

          <p className="hero-meta">
            Senior Technology Consultant based in Hamburg with 13+ years of experience across
            Azure, AWS, and GCP. I work across architecture, automation, platform reliability,
            and delivery leadership — helping complex environments move from legacy constraints
            to scalable execution.
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
            alt="Portrait of Hashim Naveed"
            width={200}
            height={200}
            priority
            className="profile-photo"
          />
          <div className="profile-name">Hashim Naveed</div>
          <div className="profile-role">
            Senior Technology Consultant
            <br />
            Accenture · Hamburg, Germany
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="section-header">
          <div>
            <h2 className="section-title">Impact at Scale</h2>
            <p className="section-text">
              A career built around cloud infrastructure, enterprise systems, automation, and
              leadership in high-responsibility environments.
            </p>
          </div>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="metric-value">13+</div>
            <div className="metric-label">Years of experience</div>
          </div>

          <div className="card">
            <div className="metric-value">30+</div>
            <div className="metric-label">Engineers led across teams and delivery</div>
          </div>

          <div className="card">
            <div className="metric-value">3</div>
            <div className="metric-label">Cloud ecosystems: Azure, AWS, and GCP</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">What I Do</h2>
            <p className="section-text">
              Senior-level systems thinking across architecture, operations, modernization, and
              engineering execution.
            </p>
          </div>
        </div>

        <div className="pill-grid">
          {[
            "Cloud Architecture",
            "AI Infrastructure",
            "Hybrid Cloud",
            "DevOps & CI/CD",
            "Kubernetes",
            "Terraform / Ansible",
            "MLOps",
            "ServiceNow",
            "SAP / ITSM",
            "Engineering Leadership",
            "Enterprise Transformation",
            "Platform Reliability",
          ].map((skill) => (
            <div key={skill} className="pill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="card">
            <div className="feed-title">How I create value</div>
            <div className="feed-excerpt">
              I help organizations design AI-ready, cloud-enabled, and operationally resilient
              environments. My work spans hybrid infrastructure, automation, service delivery,
              and platform evolution in enterprise settings.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">What defines my approach</div>
            <div className="feed-excerpt">
              I combine technical depth with delivery ownership and people leadership — aligning
              systems, teams, and execution around outcomes that scale in the real world.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-text">
              Enterprise-focused work across AI infrastructure, cloud transformation, automation,
              and platform delivery.
            </p>
          </div>

          <Link href="/projects" className="btn btn-secondary">
            View all
          </Link>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="feed-title">AI Infrastructure Platforms</div>
            <div className="feed-excerpt">
              Building and operating AI-ready environments that support scalable enterprise
              workloads, automation, and platform maturity.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Hybrid Cloud Transformation</div>
            <div className="feed-excerpt">
              Helping organizations modernize infrastructure and evolve from legacy constraints
              toward more flexible and resilient cloud-aligned architectures.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Automation & Delivery Systems</div>
            <div className="feed-excerpt">
              Improving reliability, speed, and operational consistency through DevOps, CI/CD,
              and enterprise automation practices.
            </div>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Latest LinkedIn Insights</h2>
              <p className="section-text">
                Selected writing and professional insights pulled from LinkedIn.
              </p>
            </div>
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
            engineering leadership opportunities in Germany and across Europe.
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