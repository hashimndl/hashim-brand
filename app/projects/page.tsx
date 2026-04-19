export const metadata = {
  title: "Projects",
  description:
    "Selected work by Hashim Naveed across AI infrastructure, hybrid cloud transformation, enterprise automation, and engineering systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section">
        <div className="eyebrow">Selected Work</div>

        <h1 className="page-title">
          Systems I’ve built & scaled
        </h1>

        <p className="hero-subtitle">
          A selection of enterprise systems, infrastructure platforms, and
          engineering work focused on scale, reliability, and real-world impact.
        </p>
      </section>

      <section className="section">
        <div className="card">
          <div className="section-header">
            <h2 className="section-title">
              AI Infrastructure Platform (Enterprise)
            </h2>
          </div>

          <p className="section-text">
            Designed and operated AI-ready infrastructure environments enabling
            machine learning workflows, automation, and scalable deployment across
            enterprise cloud systems.
          </p>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="feed-title">Scope</div>
              <div className="feed-excerpt">
                Multi-cloud architecture across Azure, AWS, and GCP supporting AI workloads.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">My Role</div>
              <div className="feed-excerpt">
                Architecture design, system ownership, and leadership of cross-functional teams.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Impact</div>
              <div className="feed-excerpt">
                Enabled production-ready AI systems and improved deployment scalability.
              </div>
            </div>
          </div>

          <div className="pill-grid" style={{ marginTop: 20 }}>
            <div className="pill">Azure</div>
            <div className="pill">AWS</div>
            <div className="pill">GCP</div>
            <div className="pill">MLOps</div>
            <div className="pill">Kubernetes</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="section-header">
            <h2 className="section-title">
              Hybrid Cloud Transformation Program
            </h2>
          </div>

          <p className="section-text">
            Led enterprise transformation initiatives focused on migrating and
            modernizing legacy infrastructure into hybrid cloud environments.
          </p>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="feed-title">Scope</div>
              <div className="feed-excerpt">
                Large-scale infrastructure modernization across datacenters and cloud.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">My Role</div>
              <div className="feed-excerpt">
                Led engineering teams (30+) and coordinated cross-team execution.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Impact</div>
              <div className="feed-excerpt">
                Improved system scalability, performance, and operational efficiency.
              </div>
            </div>
          </div>

          <div className="pill-grid" style={{ marginTop: 20 }}>
            <div className="pill">Cloud Architecture</div>
            <div className="pill">DevOps</div>
            <div className="pill">Terraform</div>
            <div className="pill">Automation</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="section-header">
            <h2 className="section-title">
              Enterprise Automation & CI/CD Systems
            </h2>
          </div>

          <p className="section-text">
            Built and optimized CI/CD pipelines and automation systems to support
            scalable deployments and improve development workflows.
          </p>

          <div className="grid-3" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="feed-title">Scope</div>
              <div className="feed-excerpt">
                CI/CD pipelines and infrastructure automation across enterprise environments.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">My Role</div>
              <div className="feed-excerpt">
                Designed pipeline architecture and implemented automation frameworks.
              </div>
            </div>

            <div className="card">
              <div className="feed-title">Impact</div>
              <div className="feed-excerpt">
                Reduced deployment time and improved reliability of releases.
              </div>
            </div>
          </div>

          <div className="pill-grid" style={{ marginTop: 20 }}>
            <div className="pill">CI/CD</div>
            <div className="pill">DevOps</div>
            <div className="pill">Ansible</div>
            <div className="pill">Automation</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <h2 className="section-title">
            Want to go deeper?
          </h2>

          <p>
            I can walk through system architecture, design decisions, and real-world
            tradeoffs behind these projects.
          </p>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="/contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}