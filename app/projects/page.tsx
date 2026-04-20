export const metadata = {
  title: "Selected Work | Hashim Naveed",
  description:
    "Selected technical work by Hashim Naveed across enterprise DevOps, system design, AI infrastructure, cloud architecture, and scalable delivery systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section">
        <div className="eyebrow">Selected Work</div>

        <h1 className="page-title">Technical work that reflects how I think, design, and deliver</h1>

        <p className="hero-subtitle">
          A curated set of technical artifacts demonstrating enterprise DevOps, system design,
          cloud architecture, and operational thinking.
        </p>

        <p className="hero-meta">
          These repositories are intentionally structured to reflect senior-level engineering
          and architecture work — focusing on system design, delivery maturity, tradeoffs,
          and production-oriented practices.
        </p>
      </section>

      <section className="section">
        <div className="card">
          <div className="section-header">
            <div>
              <h2 className="section-title">Enterprise DevOps Blueprint</h2>
              <p className="section-text">
                A production-oriented DevOps blueprint designed to demonstrate how delivery
                systems are structured in enterprise environments.
              </p>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="feed-title">What it covers</div>
              <div className="feed-excerpt">
                CI/CD pipelines, infrastructure as code, Kubernetes deployment patterns,
                observability, environment separation, and operational runbooks.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Why it matters</div>
              <div className="feed-excerpt">
                It demonstrates not just tooling, but how infrastructure, delivery, and
                operations are aligned for reliability and scale.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Signal</div>
              <div className="feed-excerpt">
                Shows systems thinking, operational maturity, and a structured approach to
                enterprise platform delivery.
              </div>
            </div>
          </div>

          <div className="pill-grid" style={{ marginTop: 20 }}>
            <div className="pill">CI/CD</div>
            <div className="pill">Terraform</div>
            <div className="pill">Kubernetes</div>
            <div className="pill">Helm</div>
            <div className="pill">Observability</div>
            <div className="pill">Runbooks</div>
            <div className="pill">Enterprise DevOps</div>
          </div>

          <div className="hero-actions">
            <a
              href="https://github.com/hashimndl/enterprise-devops-blueprint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="section-header">
            <div>
              <h2 className="section-title">Enterprise AI Platform — System Design Case</h2>
              <p className="section-text">
                A senior-level system design case study focused on enterprise AI platform
                architecture under real-world constraints.
              </p>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="feed-title">What it covers</div>
              <div className="feed-excerpt">
                Requirements framing, architecture design, tradeoff analysis, security,
                reliability, data considerations, and operational constraints.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Why it matters</div>
              <div className="feed-excerpt">
                It shows how enterprise systems are designed when security, compliance,
                scale, latency, and organizational realities all matter at once.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Signal</div>
              <div className="feed-excerpt">
                Shows architectural reasoning, structured tradeoff thinking, and the ability
                to frame complex systems for real-world adoption.
              </div>
            </div>
          </div>

          <div className="pill-grid" style={{ marginTop: 20 }}>
            <div className="pill">System Design</div>
            <div className="pill">Enterprise AI</div>
            <div className="pill">Scalability</div>
            <div className="pill">Security</div>
            <div className="pill">Reliability</div>
            <div className="pill">Tradeoffs</div>
            <div className="pill">Architecture</div>
          </div>

          <div className="hero-actions">
            <a
              href="https://github.com/hashimndl/system-design-enterprise-case"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="card">
            <div className="feed-title">Why these repositories exist</div>
            <div className="feed-excerpt">
              These are not random coding samples. They are structured artifacts designed to
              show how I think about enterprise delivery, architecture, infrastructure, and
              long-term operational sustainability.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">How to read them</div>
            <div className="feed-excerpt">
              Start with the README, review the diagrams, then move into tradeoffs,
              architecture decisions, and operational structure. That’s where the real value is.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <h2 className="section-title">Want to discuss the thinking behind them?</h2>

          <p>
            I’m happy to discuss architecture choices, tradeoffs, delivery patterns, and how
            these approaches map to real enterprise systems and transformation work.
          </p>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="/contact" className="btn btn-primary">
              Contact Me
            </a>
            <a
              href="https://github.com/hashimndl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}