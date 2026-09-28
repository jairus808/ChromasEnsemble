import { SiteHeader } from "../components/SiteHeader";

const contactEmail = "chromasensemble@gmail.com";
const newsletterUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdzSFglaURsQXBVOI2JCaEqoTUpIO1ih5a0viYpbsggml5rzA/viewform?usp=publish-editor";
const zeffyDonateUrl = "https://www.zeffy.com/en-US/donation-form/donate-to-young-artists";

const waysToGive = [
  "One-time or recurring donations",
  "Sponsor a concert or multimedia collaboration",
  "Corporate and foundation partnerships",
];

const galleryPlaceholders = Array.from({ length: 9 }, (_, index) => index + 1);

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="events-layout">
        <header className="season-page-header">
          <div className="container">
            <p className="season-page-eyebrow">Chromas Ensemble</p>
            <h1>Support the Ensemble</h1>
            <p className="season-page-sub">
              Help us bring interdisciplinary performances to more stages, more communities, and more collaborators.
            </p>
          </div>
        </header>

        <section className="section support-donate">
          <div className="container support-donate-inner">
            <div>
              <p className="latest-eyebrow">Give Online</p>
              <h2>Make a gift in minutes</h2>
              <p>
                Donate securely through Zeffy — 100% of your gift goes directly to Chromas
                Ensemble.
              </p>
            </div>
            <a
              className="btn primary support-donate-btn"
              href={zeffyDonateUrl}
              target="_blank"
              rel="noreferrer"
            >
              Donate via Zeffy
            </a>
          </div>
        </section>

        <section className="section support-intro">
          <div className="container split">
            <div>
              <h2>Why your support matters</h2>
              <p>
                Chromas Ensemble is a registered 501(c)(3) nonprofit organization run by students and
                volunteers. Every contribution helps cover venue costs, musician stipends, and the
                multimedia collaborations that set our performances apart.
              </p>
              <p>
                Whether you&apos;re a longtime patron or discovering us for the first time, your support
                keeps our programming free-form, ambitious, and accessible.
              </p>
              <div className="support-actions">
                <a
                  className="btn primary"
                  href={`mailto:${contactEmail}?subject=Become%20a%20Patron`}
                >
                  Become a Patron
                </a>
                <a
                  className="btn secondary"
                  href={newsletterUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the Newsletter
                </a>
                <a
                  className="btn ghost"
                  href={`mailto:${contactEmail}?subject=Donor%20Inquiry`}
                >
                  Email our Team
                </a>
              </div>
            </div>
            <div className="highlight-card">
              <h3>Ways to give</h3>
              <ul className="support-ways-list">
                {waysToGive.map((way) => (
                  <li key={way}>{way}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section support-gallery-section">
          <div className="container">
            <p className="latest-eyebrow">Moments from our season</p>
            <h2>Gallery</h2>
            <p className="lede">
              A growing collection of photos from rehearsals, performances, and collaborations.
              Check back as we add more.
            </p>
            <div className="support-gallery">
              {galleryPlaceholders.map((item) => (
                <div className="support-gallery-item" key={item}>
                  <span>Photo coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
