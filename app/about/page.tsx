import Script from "next/script";

export const metadata = {
  title: "About | Hashim Naveed",
  description:
    "About Hashim Naveed — Senior Technology Consultant specializing in AI infrastructure, cloud architecture, DevOps, and enterprise transformation.",
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://hashimnaveed.com/about/#profile",
  url: "https://hashimnaveed.com/about",
  name: "About Hashim Naveed",
  mainEntity: {
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
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Technische Universität Darmstadt",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Bahria University",
      },
    ],
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
  },
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* INTRO */}
      <section className="section">
        <div className="eyebrow">About</div>
        <h1 className="page-title">Career Journey</h1>

        <p className="hero-subtitle">
          I design and deliver cloud infrastructure, AI platforms, and DevOps systems for
          enterprise environments across Europe.
        </p>

        <p className="hero-meta">
          13+ years of experience across Azure, AWS, and GCP — currently at Accenture in
          Hamburg, leading teams and building scalable hybrid cloud systems.
        </p>

        <p className="hero-meta">
          Selected architecture and DevOps work is available on GitHub, including enterprise
          system design case studies and infrastructure blueprints.
        </p>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Executive Summary</h2>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="feed-title">Current Scope</div>
            <div className="feed-excerpt">
              Leading engineering teams and delivering AI-ready infrastructure and cloud
              transformation initiatives across enterprise environments.
            </div>
          </div>

          <div className="card">
            <div className="feed-title">Focus Areas</div>
            <div className="feed-excerpt">
              Cloud Architecture · AI Infrastructure · MLOps · DevOps · ITSM · SAP S/4HANA ·
              Engineering Leadership
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Career Timeline</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-role">
              Senior Technology Consultant / Associate Manager — Accenture
            </div>
            <div className="timeline-meta">2025 – Present · Hamburg, Germany</div>
            <div className="timeline-text">
              Leading engineering teams, contributing to AI integration initiatives, and
              shaping hybrid cloud environments designed for enterprise scale, operational
              reliability, and long-term transformation.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">Technology Consultant — Accenture</div>
            <div className="timeline-meta">2023 – 2025 · Hamburg, Germany</div>
            <div className="timeline-text">
              Worked across infrastructure modernization, datacenter operations, and service
              delivery in complex enterprise environments, supporting technology change and
              cross-team execution.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">
              SW/App/Cloud Tech Support Sr Analyst — Accenture
            </div>
            <div className="timeline-meta">2020 – 2023 · Stuttgart, Germany</div>
            <div className="timeline-text">
              Contributed to centralized datacenter initiatives, storage operations,
              automation efforts, and cloud-aligned enterprise support systems across
              large-scale environments.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">IT Automation Engineer — Merck Group</div>
            <div className="timeline-meta">2019 – 2020 · Darmstadt, Germany</div>
            <div className="timeline-text">
              Supported ERP-related automation, SAP process workflows, reporting solutions,
              and engineering service operations with a focus on structured delivery and
              system support.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">
              Earlier Roles — Infrastructure, IT Operations, and Engineering Foundations
            </div>
            <div className="timeline-meta">2006 – 2018 · Pakistan / Germany</div>
            <div className="timeline-text">
              Built foundational experience across infrastructure operations, system
              support, automation, web systems, team coordination, and IT delivery —
              shaping the systems thinking and operational perspective that continue to
              define my work today.
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL WORK */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Technical Work</h2>
        </div>

        <div className="grid-2">
          <a
            href="https://github.com/hashimndl/enterprise-devops-blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="feed-title">Enterprise DevOps Blueprint</div>
            <div className="feed-excerpt">
              A structured DevOps repository covering CI/CD, infrastructure as code,
              observability, delivery systems, and operational runbooks.
            </div>
          </a>

          <a
            href="https://github.com/hashimndl/system-design-enterprise-case"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="feed-title">
              Enterprise AI Platform — System Design Case
            </div>
            <div className="feed-excerpt">
              A practical system design case study focused on architecture, tradeoffs,
              scalability, reliability, and enterprise constraints.
            </div>
          </a>
        </div>
      </section>

      {/* RESUME */}
      <section className="section">
        <h2 className="section-title">Resume</h2>

        <iframe
          src="/resume.pdf"
          className="resume-frame"
          title="Resume"
          loading="lazy"
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