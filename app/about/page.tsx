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

      <section className="section">
        <div className="eyebrow">About</div>
        <h1 className="page-title">Career Journey</h1>

        <p className="hero-subtitle">
          Senior Technology Consultant with 13+ years of experience delivering cloud
          infrastructure, AI platforms, DevOps systems, and enterprise transformation programs
          across Germany and Europe.
        </p>

        <p className="hero-meta">
          Currently at Accenture in Hamburg, leading teams and designing scalable hybrid cloud
          environments across Azure, AWS, and GCP.
        </p>
      </section>

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

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Career Timeline</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-role">Senior Technology Consultant — Accenture</div>
            <div className="timeline-meta">2025 – Present · Hamburg</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">Technology Consultant — Accenture</div>
            <div className="timeline-meta">2023 – 2025</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-role">IT Automation Engineer — Merck</div>
            <div className="timeline-meta">2019 – 2020</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Resume</h2>

        <iframe src="/resume.pdf" className="resume-frame" title="Resume" loading="lazy" />

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