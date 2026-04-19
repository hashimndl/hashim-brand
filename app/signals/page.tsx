import { fetchLinkedInRSS } from "@/lib/fetchLinkedInRSS";

export const metadata = {
  title: "Signals",
  description:
    "A combined professional credibility view of Hashim Naveed's LinkedIn thought leadership, GitHub execution, and engineering signal across cloud, AI, and enterprise systems.",
};

const githubProjects = [
  {
    name: "Personal Brand Website",
    description:
      "A modern portfolio platform built with Next.js, focused on personal branding, content visibility, and recruiter-friendly positioning.",
    stack: ["Next.js", "TypeScript", "CSS"],
    link: "https://github.com/",
  },
  {
    name: "Automation & Infra Scripts",
    description:
      "Reusable scripts and tooling patterns for automation, system operations, and infrastructure support workflows.",
    stack: ["PowerShell", "Bash", "Automation"],
    link: "https://github.com/",
  },
  {
    name: "Cloud / Platform Engineering Work",
    description:
      "Representative engineering work around cloud environments, platform thinking, and deployment-oriented systems.",
    stack: ["Cloud", "DevOps", "Infrastructure"],
    link: "https://github.com/",
  },
];

const signalThemes = [
  "AI Infrastructure",
  "Cloud Architecture",
  "Enterprise Systems",
  "DevOps & Automation",
  "Platform Thinking",
  "Engineering Leadership",
];

export default async function SignalsPage() {
  const posts = await fetchLinkedInRSS();

  return (
    <>
      <section className="section">
        <div className="eyebrow">Signals</div>
        <h1 className="page-title">Professional credibility, in one view</h1>
        <p className="hero-subtitle">
          A combined view of how I think, what I build, and the engineering
          themes I operate in across cloud, AI, and enterprise systems.
        </p>
        <p className="hero-meta">
          LinkedIn shows how I communicate and think about systems. GitHub shows
          how I build, structure, and execute. Together, they create a stronger
          signal than a resume alone.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Signal Summary</h2>
            <p className="section-text">
              The goal of this page is simple: make it easy for recruiters,
              hiring managers, and collaborators to understand my profile fast.
            </p>
          </div>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="feed-title">What I write about</div>
            <div className="feed-excerpt">
              AI infrastructure, cloud architecture, enterprise systems,
              engineering delivery, and practical technology leadership.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">What I build around</div>
            <div className="feed-excerpt">
              Platform thinking, automation, cloud tooling, and structured
              engineering systems that scale.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">What this signals</div>
            <div className="feed-excerpt">
              A senior profile that combines technical depth, systems thinking,
              and leadership across enterprise environments.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Signal Themes</h2>
            <p className="section-text">
              The recurring areas that define my public technical identity.
            </p>
          </div>
        </div>

        <div className="pill-grid">
          {signalThemes.map((theme) => (
            <div key={theme} className="pill">
              {theme}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">LinkedIn Intelligence</h2>
            <p className="section-text">
              Recent posts and insights that reflect how I think about cloud,
              AI, delivery, and engineering at scale.
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
        <div className="section-header">
          <div>
            <h2 className="section-title">GitHub Execution Layer</h2>
            <p className="section-text">
              A lightweight view of the kinds of projects, tooling, and systems
              I use to demonstrate technical execution outside of enterprise
              environments.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {githubProjects.map((project) => (
            <div key={project.name} className="card">
              <div className="feed-title">{project.name}</div>
              <div className="feed-excerpt">{project.description}</div>

              <div className="pill-grid" style={{ marginTop: 16 }}>
                {project.stack.map((item) => (
                  <div key={item} className="pill">
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18 }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Combined Readout</h2>
            <p className="section-text">
              This is the condensed interpretation of my public professional
              signal.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="feed-title">Thought Leadership Signal</div>
            <div className="feed-excerpt">
              Public writing focused on AI infrastructure, cloud architecture,
              enterprise delivery, and practical engineering decision-making.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Execution Signal</div>
            <div className="feed-excerpt">
              Technical work centered on systems, automation, engineering
              structure, and modern web/platform implementation.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Leadership Signal</div>
            <div className="feed-excerpt">
              Experience leading engineering teams, coordinating across
              functions, and delivering enterprise-scale outcomes.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Best-fit Roles</div>
            <div className="feed-excerpt">
              Senior Technology Consultant, Cloud Architect, Platform Engineer,
              AI Infrastructure Lead, Staff / Senior Staff engineering tracks.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <h2 className="section-title">Want the short version?</h2>
          <p>
            I help organizations design and scale reliable cloud and AI systems,
            and I communicate clearly about the decisions behind them.
          </p>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="/about" className="btn btn-primary">
              View Career Timeline
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}