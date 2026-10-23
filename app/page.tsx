import Image from "next/image"
import { PointerParallax } from "@/components/pointer-parallax"
import { projects, site } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  birthDate: "2004",
  jobTitle: "Architecture Student",
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Technology, Iraq" },
  address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
  sameAs: site.social.map((s) => s.href),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PointerParallax />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="grid-overlay" aria-hidden="true" />

      <nav aria-label="Primary">
        <a href="#top" className="nav-logo">
          {site.name}
        </a>
        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#atelier">Atelier</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-copyright" aria-hidden="true">
          ©26
        </div>
      </nav>

      <div className="container" id="top">
        <main id="main">
          {/* Hero */}
          <header className="hero">
            <div className="geometric-accent-1" aria-hidden="true" />
            <h1 className="hero-title">
              <span>About</span>
              <span>Me</span>
            </h1>
            <p className="hero-subtitle">
              I am a senior architecture student at the University of Technology and an active member of the Archi
              Youth Community. Driven by a highly creative approach to spatial design, my work explores the
              intersection of futuristic aesthetics and functional environments.
            </p>
            <div className="hero-rule" aria-hidden="true" />
          </header>

          {/* Portfolio */}
          <section className="portfolio-section" id="projects" aria-labelledby="projects-label">
            <h2 className="section-label" id="projects-label">
              Selected Works
            </h2>

            <div className="diagonal-grid">
              {projects.map((project) => (
                <article className="project-card" id={project.slug} key={project.slug}>
                  <div className="project-image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      className="project-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 600px"
                    />
                  </div>
                  <div className="project-info">
                    <p className="project-category">
                      {project.category} / <time dateTime={String(project.year)}>{project.year}</time>
                    </p>
                    <h3 className="project-title" data-text={project.title}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="line-accent" aria-hidden="true" />
                </article>
              ))}
            </div>
          </section>

          {/* Atelier */}
          <section className="atelier" id="atelier" aria-labelledby="atelier-label">
            <h2 className="section-label" id="atelier-label">
              Atelier
            </h2>
            <div className="atelier-body">
              <h3 className="atelier-title">My Practice</h3>
              <p className="atelier-text">
                I operate at the crossroads of architecture, design, and art. I embrace experimentation as a
                methodology, crafting visuals that challenge conventions and push the boundaries of contemporary
                design.
              </p>
            </div>
          </section>
        </main>

        {/* Contact */}
        <footer id="contact">
          <div className="footer-grid">
            <div>
              <a href={`mailto:${site.email}`} className="footer-cta">
                Let&apos;s blur the lines
              </a>
            </div>
            <ul className="social-list">
              {site.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <address className="footer-meta">
              Located in Baghdad
              <br />
              Born 2004
            </address>
          </div>
        </footer>
      </div>

      <div className="background-accents" aria-hidden="true">
        <span className="background-accent-vertical" />
        <span className="background-accent-horizontal" />
      </div>
    </>
  )
}
