import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";

const upcomingConcert = {
  title: "Overtures across times",
  date: "November 16, 2025 · 7:30 PM",
  venue: "DiMenna Center for Classical Music, New York",
  photo: "/images/Kaleb_event.jpeg",
  summary:
    "Our inaugural concert traces musical color across eras. Conductor Kaleb Zhu leads Mozart’s Haffner Symphony, Stravinsky’s Pulcinella Suite, and Prokofiev’s Classical Symphony in a synesthetic program with projected visuals.",
  programNote:
    "We aim to make our mark with a small step that will hint at our big visions to feature interdisciplinary performances. ",
  issuuEmbed:
    "https://e.issuu.com/embed.html?d=chromas_11_16_program_placeholder&u=chromasensemble",
};

export default function SeasonEventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="events-layout">
        <section className="events-hero">
          <div className="container events-hero-inner">
            <div className="events-hero-copy">
              <p className="events-eyebrow">Upcoming Concert</p>
              <h1>{upcomingConcert.title}</h1>
              <p className="events-meta">{upcomingConcert.date}</p>
              <p className="events-meta">{upcomingConcert.venue}</p>
              <p className="events-summary">{upcomingConcert.summary}</p>
            </div>
            <div className="events-hero-visual">
              <Image
                src={upcomingConcert.photo}
                alt="Chromas Ensemble rehearsal"
                width={720}
                height={480}
                priority
              />
            </div>
          </div>
        </section>

        <section className="events-program">
          <div className="container events-program-grid">
            <article className="events-program-note">
              <p className="events-eyebrow">Program note</p>
              <h2>Why this concert matters</h2>
              <p>{upcomingConcert.programNote}</p>
            </article>
            <div className="events-program-embed">
              <iframe
                src={upcomingConcert.issuuEmbed}
                title="Chromas Ensemble program"
                allowFullScreen
                loading="lazy"
              />
              <p className="embed-hint">
                Replace the Issuu embed URL above when your program PDF is ready.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
