import { MainLanding } from "./components/MainLanding";

const contactEmail = "chromasensemble@gmail.com";
const showCover = (process.env.NEXT_PUBLIC_ENABLE_COVER ?? "").trim().toLowerCase() === "true";

function ComingSoonCover() {
  return (
    <main className="cover">
      <div className="cover-backdrop" aria-hidden="true">
        <div className="cover-orb cover-orb--sun" />
        <div className="cover-orb cover-orb--blue" />
        <div className="cover-stroke cover-stroke--ember" />
        <div className="cover-stroke cover-stroke--forest" />
      </div>

      <section className="cover-card" role="presentation">
        <p className="cover-eyebrow">Chromas Ensemble</p>
        <h1 className="cover-title">Impressions in the making.</h1>
        <p className="cover-copy">
          We are orchestrating a synesthetic season inspired by Kandinsky&apos;s bold visions. Join the circle to be the first to experience the full site and season release.
        </p>
        <a
          className="btn primary"
          href={`mailto:${contactEmail}?subject=Chromas%20Ensemble%20Updates`}
        >
          Notify Me
        </a>
      </section>

      <footer className="cover-footer">
        <p>
          &copy; {new Date().getFullYear()} Chromas Ensemble · {contactEmail}
        </p>
      </footer>
    </main>
  );
}

export default function HomePage() {
  if (showCover) {
    return <ComingSoonCover />;
  }

  return <MainLanding />;
}
