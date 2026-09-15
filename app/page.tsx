"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Page() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    document.addEventListener("click", handleNavClick)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        const amount = 10
        const x = (e.clientX / window.innerWidth - 0.5) * amount
        const y = (e.clientY / window.innerHeight - 0.5) * amount

        document.querySelectorAll(".project-image").forEach((img) => {
          if ((img as HTMLElement).parentElement?.matches(":hover")) {
            ;(img as HTMLElement).style.transform = `scale(1.1) translate(${x}px, ${y}px)`
          }
        })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Add distortion class to titles on hover for more glitchy feel
    const titles = document.querySelectorAll(".project-title")
    titles.forEach((title) => {
      const handleEnter = () => title.classList.add("distort-active")
      const handleLeave = () => title.classList.remove("distort-active")

      title.addEventListener("mouseenter", handleEnter)
      title.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("resize", checkMobile)
      document.removeEventListener("click", handleNavClick)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="grid-overlay"></div>

      <nav>
        <div className="nav-logo">Mohammed Ali Yassin</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#atelier">Atelier</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-copyright">©25</div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <header>
          <div className="geometric-accent-1"></div>
          <h1 className="hero-title">
            <span>RADICAL</span>
            <span>DISORDER</span>
          </h1>
          <p className="hero-subtitle">
            An experimental design practice navigating the intersection of brutalist architecture and digital entropy.
            We build visual systems that challenge the status quo.
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: 0,
              width: "300px",
              height: "1px",
              background: "black",
            }}
          ></div>
        </header>

        {/* Portfolio Section */}
        <main className="portfolio-section" id="projects">
          <div className="section-label">Selected Works</div>

          <div className="diagonal-grid">
            {/* Project 1 */}
            <a href="#neo-monolith" className="project-card" id="neo-monolith">
              <div className="project-image-wrapper">
                <Image
                  src="/dramatic-brutalist-concrete-architecture-monolith-.jpg"
                  alt="Brutalist Architecture"
                  className="project-image"
                  width={1200}
                  height={600}
                  unoptimized
                />
              </div>
              <div className="project-info">
                <span className="project-category">Architecture / 2023</span>
                <h2 className="project-title" data-text="NEO-MONOLITH">
                  NEO-MONOLITH
                </h2>
              </div>
              <div className="line-accent" style={{ width: "100%", height: "1px", top: 0, left: "-50px" }}></div>
            </a>

            {/* Project 2 */}
            <a href="#silk-steel" className="project-card" id="silk-steel">
              <div className="project-image-wrapper" style={{ height: "450px" }}>
                <Image
                  src="/avant-garde-fashion-editorial-silk-steel-dramatic-.jpg"
                  alt="Avant-garde Fashion"
                  className="project-image"
                  width={1200}
                  height={450}
                  unoptimized
                />
              </div>
              <div className="project-info">
                <span className="project-category">Editorial / 2024</span>
                <h2 className="project-title" data-text="SILK &amp; STEEL">
                  SILK &amp; STEEL
                </h2>
              </div>
            </a>

            {/* Project 3 */}
            <a href="#chroma-null" className="project-card" id="chroma-null">
              <div className="project-image-wrapper" style={{ height: "700px" }}>
                <Image
                  src="/abstract-experimental-art-chroma-minimalist-geomet.jpg"
                  alt="Abstract Art"
                  className="project-image"
                  width={1200}
                  height={700}
                  unoptimized
                />
              </div>
              <div className="project-info">
                <span className="project-category">Experimental / 2023</span>
                <h2 className="project-title" data-text="CHROMA NULL">
                  CHROMA NULL
                </h2>
              </div>
            </a>

            {/* Project 4 */}
            <a href="#kinetic-form" className="project-card" id="kinetic-form">
              <div className="project-image-wrapper" style={{ height: "500px" }}>
                <Image
                  src="/kinetic-industrial-sculpture-metal-geometric-form-.jpg"
                  alt="Sculpture"
                  className="project-image"
                  width={1200}
                  height={500}
                  unoptimized
                />
              </div>
              <div className="project-info">
                <span className="project-category">Industrial / 2024</span>
                <h2 className="project-title" data-text="KINETIC FORM">
                  KINETIC FORM
                </h2>
              </div>
              <div
                className="line-accent"
                style={{ width: "200px", height: "1px", bottom: "-20px", right: "-40px", transform: "rotate(-45deg)" }}
              ></div>
            </a>
          </div>
        </main>

        {/* Atelier Section */}
        <section id="atelier" style={{ margin: "120px 0", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <div className="section-label">Atelier</div>
          <div style={{ marginTop: "40px", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "20px", fontFamily: "var(--font-syne)" }}>
              MY PRACTICE
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, opacity: 0.8 }}>
              I operate at the crossroads of architecture, editorial design, and experimental art. I embrace
              radical disorder as a methodology, crafting visual systems that challenge conventions and push the
              boundaries of contemporary design.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact">
          <div className="footer-grid">
            <div>
              <a href="mailto:hello@voidform.studio" className="footer-cta">
                LET&apos;S BLUR THE LINES
              </a>
            </div>
            <div>
              <ul className="social-list">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Are.na</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
              </ul>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                LOCATED IN THE ETHER
                <br />
                EST. 2024
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              paddingTop: "30px",
              borderTop: "1px solid rgba(0,0,0,0.1)",
              textAlign: "center",
              fontSize: "12px",
              opacity: 0.5,
            }}
          >
            <p>
              Designed by{" "}
              <a
                href="https://1ui.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                1UI.dev
              </a>
              {" · "}
              Built using{" "}
              <a
                href="https://v0.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                v0.app
              </a>
            </p>
          </div>
        </footer>
      </div>

      {/* Background Accents */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "2px",
            height: "80vh",
            background: "rgba(0,0,0,0.05)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100vw",
            height: "1px",
            background: "rgba(0,0,0,0.05)",
          }}
        ></div>
      </div>
    </>
  )
}
