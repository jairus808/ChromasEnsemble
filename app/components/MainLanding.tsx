'use client';

import { useState } from "react";
import { SiteHeader } from "./SiteHeader";

const seasonPrograms = [
  {
    title: "Joyful Reflections",
    details: "November 16 · Cary Hall, DiMenna Center for Classical Music",
    description:
      "Chromas Ensemble opens its first season with music that bridges past and present: Mozart’s Haffner Symphony alongside Stravinsky’s Pulcinella Suite and Prokofiev’s Classical Symphony.",
    livestreamUrl: "https://www.youtube.com/watch?v=Iz9o3q14yvI",
  },
];

const latestNews = [
  {
    eyebrow: "Premier Concert",
    title: "Overtures across times",
    date: "Sunday, November 16 · 7:30 PM · Cary Hall, DiMenna Center",
    description:
      "Join us for our first concert featuring students and alumni of Juilliard, MSM, and Yale. Kaleb Zhu conducts Stravinsky’s Pulcinella Suite, Prokofiev’s Classical Symphony, and Mozart’s Haffner Symphony.",
  },
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
      <SiteHeader />
      <main>

        {/* home section */}
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Chromas Ensemble</h1>
              <p className="hero-tagline">
                A student-led, volunteer orchestra exploring intersectional performance. Concert today, November 16th, 2025 at Cary Hall, DiMenna Center.
                See below for details and live-streaming. 
              </p>
            </div>
          </div>
        </section>

        <section id="season" className="section season">
          <div className="container">
            <h2>Season &amp; Events</h2>
            <p className="lede">
              2025-2026 Season: Our Premier Concert! Join us at Cary Hall inside the DiMenna Center on November 16th for a
              night of music and community.
            </p>
            <div className="season-grid">
              {seasonPrograms.map((program, index) => (
                <article
                  className={`season-card${index === 0 ? " featured" : ""}`}
                  key={program.title}
                >
                  <h3>{program.title}</h3>
                  <p className="details">{program.details}</p>
                  <p>{program.description}</p>
                  {program.livestreamUrl && (
                    <div className="season-card-actions">
                      <a
                        className="btn secondary"
                        href={program.livestreamUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Livestream
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
            <div className="season-cta">
              <a className="btn primary" href="/season-events">
                View full season details
              </a>
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
                With a vision to collaborate with artists, students, and multi-media projects, we aim to set ourselves apart
                through exploring the ways music can be experienced. 
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

        <section id="news" className="section latest">
          <div className="container">
            <div className="latest-header">
              <p className="latest-eyebrow">Latest News &amp; Calls</p>
              <h2>Keep pace with Chromas</h2>
            </div>
            <div className="latest-grid">
              {latestNews.map((item) => (
                <article className="latest-card" key={item.title}>
                  <p className="latest-card-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p className="latest-card-date">{item.date}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
{/* 
        <section id="media" className="section media">
          <div className="container split">
            <div>
              <h2>Media</h2>
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
        </section> */}
{/* 
        <section id="join" className="section join">
          <div className="container split">
            <div>
              <h2>Join / Musicians</h2>
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
            <div className="highlight-card">
              <h3>For Musicians</h3>
              <p>
                We welcome performers, composers, and collaborators across disciplines. Share your background and availability, and we&apos;ll reach out about upcoming sessions.
              </p>
              <a className="btn ghost" href="mailto:chromasensemble@gmail.com?subject=Join%20Chromas%20Ensemble">
                Introduce Yourself
              </a>
            </div>
          </div>
        </section>

        <section id="support" className="section support">
          <div className="container split">
            <div>
              <h2>Support</h2>
              <p>
                Help us bring our visions for collaboration to communities across the region.
              </p>
              <p>
                
              </p>
            </div>
            <div className="support-card">
              <h3>Become a Patron</h3>
              <p>
                Ready to uplift the ensemble? Reach out and we&apos;ll tailor a giving opportunity that resonates with your goals.
              </p>
              <button
                type="button"
                className="btn ghost"
                onClick={() => setActiveModal("patron")}
              >
                Start the Conversation
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container split">
            <div>
              <h2>Contact</h2>
              <p>
                We&apos;d love to hear from you. Reach out with inquiries about collaborations, performances, or media.
              </p>
              <a className="btn secondary" href="mailto:chromasensemble@gmail.com">
                Email chromasensemble@gmail.com
              </a>
            </div>
            <div>
              <h3>Connect with us</h3>
              <p>Follow along for rehearsal clips, premieres, and announcements.</p>
              <a
                className="btn ghost"
                href="https://www.instagram.com/chromasensemble?igsh=bnphczJkcXRuYXB2&utm_source=qr"
              >
                Instagram
              </a>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="site-footer" id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <p className="footer-eyebrow">Stay in touch</p>
            <p className="footer-copy">
              Subscribe for Chromas news, rehearsal invites, and multimedia calls for collaborators.
            </p>
            <a
              className="footer-link primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzSFglaURsQXBVOI2JCaEqoTUpIO1ih5a0viYpbsggml5rzA/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
            >
              Join the newsletter
            </a>
          </div>
          <div className="footer-column">
            <p className="footer-eyebrow">Connect</p>
            <a
              className="footer-link"
              href="https://www.instagram.com/chromasensemble?igsh=bnphczJkcXRuYXB2&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a className="footer-link" href="mailto:chromasensemble@gmail.com">
              chromasensemble@gmail.com
            </a>
          </div>
          <div className="footer-column">
            <p className="footer-eyebrow">Support</p>
            <button
              type="button"
              className="footer-link ghost"
              onClick={() => setActiveModal("patron")}
            >
              Become a donor
            </button>
            <a className="footer-link" href="mailto:chromasensemble@gmail.com?subject=Donor%20Inquiry">
              Email our team
            </a>
          </div>
        </div>
        <div className="container footer-meta">
          <p>&copy; {new Date().getFullYear()} Chromas Ensemble. Website by Jairus Rhoades.</p>
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
