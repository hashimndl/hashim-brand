export const metadata = {
  title: "Contact | Hashim Naveed",
  description:
    "Contact Hashim Naveed for senior consulting, cloud architecture, AI infrastructure, and engineering leadership opportunities in Germany and Europe.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="eyebrow">Contact</div>
        <h1 className="page-title">Let’s connect</h1>
        <p className="hero-subtitle">
          Open to senior consulting, cloud architecture, AI infrastructure, and engineering
          leadership opportunities in Germany and across Europe.
        </p>
        <p className="hero-meta">
          Whether you’re hiring for a senior role, exploring transformation initiatives, or
          looking for someone who can bridge engineering, operations, and execution, I’d be
          glad to connect.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="card">
            <div className="feed-title">Direct Contact</div>
            <div className="contact-list" style={{ marginTop: 18 }}>
              <div>📍 Hamburg, Germany</div>
              <div>📞 +49 176 8807 8239</div>
              <div>
                📧 <a href="mailto:hashimndl@gmail.com">hashimndl@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Professional Profiles</div>
            <div className="contact-list" style={{ marginTop: 18 }}>
              <a
                href="https://www.linkedin.com/in/hashimnaveed"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/hashimndl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>

              <div style={{ color: "var(--muted)" }}>
                LinkedIn provides professional context. GitHub highlights selected technical
                architecture and DevOps work.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="feed-title">What I’m open to</div>
          <div className="contact-list" style={{ marginTop: 18 }}>
            <div>✔ Senior Technology Consultant roles</div>
            <div>✔ Cloud / AI Architecture positions</div>
            <div>✔ Engineering leadership opportunities</div>
            <div>✔ Enterprise transformation programs</div>
            <div>✔ Strategic consulting and collaboration</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <h2 className="section-title">Ready to talk?</h2>
          <p>Email is fastest. LinkedIn and GitHub provide additional professional context.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="mailto:hashimndl@gmail.com" className="btn btn-primary">
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/hashimnaveed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
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