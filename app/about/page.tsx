export const metadata = {
  title: "About",
  description:
    "About Hashim Naveed — Senior Technology Consultant with 13+ years of experience in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="eyebrow">About</div>
        <h1 className="page-title">Career Journey</h1>
        <p className="hero-subtitle">
          Senior Technology Consultant with 13+ years delivering cloud infrastructure,
          AI/ML platforms, DevOps systems, and enterprise transformation programs across
          Germany and Europe.
        </p>
        <p className="hero-meta">
          Currently at Accenture in Hamburg, leading cross-functional teams and designing
          hybrid cloud environments across Azure, AWS, and GCP.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Executive Summary</h2>
            <p className="section-text">
              I operate at the intersection of architecture, execution, and leadership —
              building resilient, scalable, AI-ready systems for enterprise environments.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="feed-title">Current Scope</div>
            <div className="feed-excerpt">
              Leading 30+ engineers, shaping AI infrastructure initiatives, and driving
              cloud modernization and operational excellence.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Focus Areas</div>
            <div className="feed-excerpt">
              Cloud Architecture · AI Infrastructure · MLOps · DevOps · ITSM · SAP S/4HANA · Engineering Leadership
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Career Timeline</h2>
            <p className="section-text">
              The roles and environments that shaped my systems thinking and leadership scope.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-role">Senior Technology Consultant / Associate Manager — Accenture</div>
            <div className="timeline-meta">2025 – Present · Hamburg, Germany</div>
            <div className="timeline-text">
              Leading diverse engineering teams, driving AI integration initiatives,
              operating hybrid infrastructure, and delivering enterprise transformation outcomes.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">Technology Consultant — Accenture</div>
            <div className="timeline-meta">2023 – 2025 · Hamburg, Germany</div>
            <div className="timeline-text">
              Managed datacenter infrastructure, implemented new technologies, supported
              services integration, and led technology center teams across complex environments.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">SW/App/Cloud Tech Support Sr Analyst — Accenture</div>
            <div className="timeline-meta">2020 – 2023 · Stuttgart, Germany</div>
            <div className="timeline-text">
              Worked across centralized datacenter projects, storage operations, cloud strategy,
              and automation systems supporting enterprise working environments.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">IT Automation Engineer — Merck Group</div>
            <div className="timeline-meta">2019 – 2020 · Darmstadt, Germany</div>
            <div className="timeline-text">
              Delivered ERP automation support, SAP-related process automation, training,
              reporting solutions, and technical documentation for engineering services.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">Earlier Roles — idatase, Sigma Engineering, Harbinger, Bahria University</div>
            <div className="timeline-meta">2006 – 2018 · Pakistan / Germany</div>
            <div className="timeline-text">
              Built the foundation in infrastructure, IT operations, people management,
              web systems, training, and enterprise support that shaped my long-term engineering perspective.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Languages & Certifications</h2>
            <p className="section-text">
              Multilingual communication and continuous learning have been central to my work across Europe.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="feed-title">Languages</div>
            <div className="feed-excerpt">
              Punjabi (Native) · Urdu (Native) · English (Full Professional) · German (Professional Working) · Spanish (Elementary)
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Selected Certifications</div>
            <div className="feed-excerpt">
              Google Workspace Tools Skill Badge · ITIL Problem Management · Windows 10 Administration · Learning PowerShell · People Leadership Credential
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Resume</h2>
            <p className="section-text">
              Full CV preview and downloadable PDF.
            </p>
          </div>
        </div>

        <iframe
          src="/resume.pdf"
          className="resume-frame"
          title="Resume"
        />

        <div className="hero-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open Resume
          </a>
        </div>
      </section>
    </>
  );
}