'use client';

import { useState } from "react";

const stats = [
  { label: "Musicians", value: "65" },
  { label: "Productions per year", value: "8" },
  { label: "World premieres in the upcoming season", value: "3" },
];

const seasonPrograms = [
  {
    title: "Overtures across times",
    details: "November 16 · DiMenna Center for Classical Music",
    description:
      "Chromas Ensemble opens its first season with music that bridges past and present: Mozart’s Haffner Symphony alongside Stravinsky’s Pulcinella Suite and Prokofiev’s Classical Symphony. ",
  }
];

type ModalVariant = "patron" | "preview" | "listening" | null;

export function MainLanding() {
  const [activeModal, setActiveModal] = useState<ModalVariant>(null);

  const closeModal = () => setActiveModal(null);

  const getModalContent = () => {
    switch (activeModal) {
      case "patron":
        return {
          eyebrow: "Support Chromas Ensemble",
          title: "Become a Patron",
          body: (
            <p>
              Thank you for your interest in sustaining our synesthetic programming.
              To pledge support or discuss partnership opportunities, please reach out
              to <strong>chromasensemble@gmail.com</strong> and we&apos;ll connect with you
              personally.
            </p>
          ),
          primaryLabel: "Close",
        };
      case "preview":
        return {
          eyebrow: "Preview a Performance",
          title: "Coming soon",
          body:
            "We\u2019re preparing curated performance footage and audio highlights. Coming soon! Contact us for more questions at chromasensemble@gmail.com.",
          primaryLabel: "Got it",
        };
      case "listening":
        return {
          eyebrow: "Listening Room",
          title: "Coming soon",
          body:
            "Coming soon. Contact us for more questions at chromasensemble@gmail.com.",
          primaryLabel: "Sounds good",
        };
      default:
        return null;
    }
  };

  const modalContent = getModalContent();

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="brand">
            <span className="brand-mark">Chromas</span>
            <span className="brand-sub">Ensemble</span>
          </div>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#season">Season</a>
            <a href="#listen">Listen</a>
            <a href="#connect">Connect</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow"> Join us in our premier concert on November 16th! </p>
              <h1>Experience the resonance of color and sound.</h1>
              <p className="lede">
                Chromas Ensemble reimagines the modern orchestra
              </p>
              <div className="cta-group">
                <a className="btn primary" href="#season">
                  Explore the Season
                </a>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => setActiveModal("preview")}
                >
                  Preview a Performance
                </button>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orb orb-sun" />
              <div className="orb orb-blue" />
              <div className="stroke stroke-one" />
              <div className="stroke stroke-two" />
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container split">
            <div>
              <h2>Led by students, driven by curiosity</h2>
              <p>
                Founded in September 2025, the Chromas Ensemble is a student-led, volunteer-based orchestra dedicated to creating large-scale, collaborative performances that bring together musicians and artists across disciplines. Our mission is to provide a space for free-form, organic music-making where students and emerging artists can experiment, perform major works often beyond the reach of student groups, and share in the joy of music as a communal experience.
              </p>
              <p>
                With a vision to collaborate with artists, students, and multi-media projects, we aim to be experimental. 
              </p>
            </div>
            {/* <div className="highlight-card">
              <h3>By the numbers</h3>
              <ul>
                {stats.map((item) => (
                  <li key={item.label}>
                    <span>{item.value}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </section>

        <section id="season" className="section season">
          <div className="container">
            <h2>2025-2026 Season: Impression in Motion</h2>
            <div className="season-grid">
              {seasonPrograms.map((program) => (
                <article className="season-card" key={program.title}>
                  <h3>{program.title}</h3>
                  <p className="details">{program.details}</p>
                  <p>{program.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="listen" className="section listen">
          <div className="container split">
            <div>
              <h2>Preview the palette</h2>
              <p>
                Dive into selections from our archives and upcoming collaborations. Each track is paired with visual art and filmmaker responses to the music.
              </p>
              <button
                type="button"
                className="btn secondary"
                onClick={() => setActiveModal("listening")}
              >
                Open the Listening Room
              </button>
            </div>
            <div className="media-card" role="presentation">
              <div className="media-wave" />
              <div className="media-info">
                <p className="label">Featured</p>
                <p className="track">Overtures Over Time: Mozart, Prokofiev, Stravinsky</p>
                <p className="composer">Kaleb Zhu, Pablo Molano · Chromas Ensemble</p>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="section connect">
          <div className="container split">
            <div>
              <h2>Join the Chromas circle</h2>
              <p>
                Subscribe for behind-the-scenes sessions, artist conversations, and early access to tickets across the season.
              </p>
              <div className="highlight-card">
                <h3>Stay in the loop</h3>
                <p>
                  For now, reach out directly and we&apos;ll keep you in the know about rehearsals, premieres, and collaborations.
                </p>
                <a className="btn primary" href="mailto:chromasensemble@gmail.com">
                  Contact us
                </a>
              </div>
            </div>
            <div className="support-card">
              <h3>Support the ensemble</h3>
              <p>
                Help us commission new works and bring our visions for collaboration to communities across the region.
              </p>
              <button
                type="button"
                className="btn ghost"
                onClick={() => setActiveModal("patron")}
              >
                Become a Patron
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Chromas Ensemble. Crafted in homage to Kandinsky&apos;s Impressions III.
          </p>
          <div className="footer-links">
            <a href="https://www.instagram.com/chromasensemble?igsh=bnphczJkcXRuYXB2&utm_source=qr">Instagram</a>
     
      
          </div>
        </div>
      </footer>
      {modalContent && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Close dialog"
              onClick={closeModal}
            >
              ×
            </button>
            <p className="modal-eyebrow">{modalContent.eyebrow}</p>
            <h3 id="modal-title">{modalContent.title}</h3>
            {typeof modalContent.body === "string" ? (
              <p>{modalContent.body}</p>
            ) : (
              modalContent.body
            )}
            <button
              type="button"
              className="btn primary"
              onClick={closeModal}
            >
              {modalContent.primaryLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
