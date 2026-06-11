import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";

type ConcertInfo = {
  number: string;
  status: "past" | "upcoming";
  title: string;
  date: string;
  venue: string;
  photo: string;
  photoAlt: string;
  summary: string;
  programNote?: string;
  livestreamUrl?: string;
  eventbriteUrl?: string;
  canvaEmbedUrl?: string;
  canvaViewUrl?: string;
};

const concerts: ConcertInfo[] = [
  {
    number: "Concert II",
    status: "past",
    title: "Chromas: Visualizing Temporal Expressivity",
    date: "April 23, 2026 · 5:00 PM",
    venue: "Enormous Room, AFAM House, Yale University",
    photo: "/images/bigbig.jpeg",
    photoAlt: "Chromas Ensemble at Yale — Visualizing Temporal Expressivity",
    summary:
      "In collaboration with Jairus Rhoades' Senior thesis on visualizing temporal expressivity, conductor Lucas Amory leads a Chromas chamber ensemble through a program of Glass, Dvořák, and Britten — pairing live music with visuals that respond to temporal expression in real time.",
    programNote:
      "This performance marks Chromas Ensemble's first multimedia endeavor, premiering at Yale University. The concert explores how visuals can be generated and shaped by the expressive timing of live musicians, blurring the boundary between performance and installation.",
    canvaEmbedUrl: "https://www.canva.com/design/DAHHpcAjD0Y/6FwCNELU3QEo-2Sd8rOiNg/view?embed",
    canvaViewUrl: "https://www.canva.com/design/DAHHpcAjD0Y/6FwCNELU3QEo-2Sd8rOiNg/view?utm_content=DAHHpcAjD0Y&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  },
  {//can determine the order of the blocks through listing their order. 
    number: "Concert I",
    status: "past",
    title: "Joyful Reflections",
    date: "November 16, 2025 · 7:30 PM",
    venue: "Cary Hall at the DiMenna Center for Classical Music, New York",
    photo: "/images/Chromas_Hero.jpeg",
    photoAlt: "Chromas Ensemble at their inaugural concert",
    summary:
      "Our inaugural concert traced musical color across eras. Conductor Kaleb Zhu led Mozart's Haffner Symphony, Stravinsky's Pulcinella Suite, and Prokofiev's Classical Symphony.",
    programNote:
      "It's our first concert! We appreciate your attention and time to check us out, and we hope to make lasting relationships with you, whether you be a supporter or musician that would like to join us! With this very first concert, we aim to make our mark with a small step that will hint at our big visions to feature interdisciplinary performances.",
    livestreamUrl: "https://www.youtube.com/watch?v=Iz9o3q14yvI",
    eventbriteUrl:
      "https://www.eventbrite.com/e/joyful-reflections-chromas-ensembles-debut-concert-tickets-1966293576017",
    canvaEmbedUrl:
      "https://www.canva.com/design/DAG43hMeKP8/LnXqCpB28kHwnxf6czeMUg/view?embed",
    canvaViewUrl:
      "https://www.canva.com/design/DAG43hMeKP8/LnXqCpB28kHwnxf6czeMUg/view?utm_content=DAG43hMeKP8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  },
];

export default function SeasonEventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="events-layout">

        <header className="season-page-header">
          <div className="container">
            <p className="season-page-eyebrow">Chromas Ensemble</p>
            <h1>2025–26 Season</h1>
            <p className="season-page-sub">Two concerts. One inaugural season.</p>
          </div>
        </header>

        <div className="concerts-list">
          {concerts.map((concert, index) => (
            <section
              key={concert.number}
              className={`concert-entry ${concert.status}${index % 2 !== 0 ? " flipped" : ""}`}
            >
              <div className="container concert-entry-inner">
                <div className="concert-entry-body">
                  <span className={`concert-badge ${concert.status}`}>
                    {concert.number} · {concert.status === "past" ? "Past" : "Upcoming"}
                  </span>
                  <h2>{concert.title}</h2>
                  <p className="concert-date">{concert.date}</p>
                  <p className="concert-venue">{concert.venue}</p>
                  <p className="concert-summary">{concert.summary}</p>
                  {(concert.livestreamUrl || concert.eventbriteUrl) && (
                    <div className="concert-actions">
                      {concert.livestreamUrl && (
                        <a
                          className="btn primary"
                          href={concert.livestreamUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch Recording
                        </a>
                      )}
                      {concert.eventbriteUrl && (
                        <a
                          className="btn secondary"
                          href={concert.eventbriteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Eventbrite
                        </a>
                      )}
                    </div>
                  )}
                  {concert.status === "upcoming" && (
                    <div className="concert-actions">
                      <a
                        className="btn ghost"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdzSFglaURsQXBVOI2JCaEqoTUpIO1ih5a0viYpbsggml5rzA/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Newsletter for Updates
                      </a>
                    </div>
                  )}
                </div>

                <div className="concert-entry-visual">
                  <Image
                    src={concert.photo}
                    alt={concert.photoAlt}
                    width={720}
                    height={540}
                    priority={index === 0}
                  />
                </div>
              </div>

              {concert.programNote && (
                <div className="concert-program">
                  <div className={`container concert-program-inner${index % 2 !== 0 ? " flipped" : ""}`}>
                    <article className="concert-program-note">
                      <p className="events-eyebrow">Program note</p>
                      <h3>Why this concert matters</h3>
                      <p>{concert.programNote}</p>
                    </article>
                    {concert.canvaEmbedUrl && (
                      <div className="events-program-embed">
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: 0,
                            paddingTop: "77.2727%",
                            paddingBottom: 0,
                            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                            marginTop: "1.6em",
                            marginBottom: "0.9em",
                            overflow: "hidden",
                            borderRadius: "8px",
                            willChange: "transform",
                          }}
                        >
                          <iframe
                            loading="lazy"
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: 0,
                              left: 0,
                              border: "none",
                              padding: 0,
                              margin: 0,
                            }}
                            src={concert.canvaEmbedUrl}
                            title={`${concert.title} program`}
                            allowFullScreen
                          />
                        </div>
                        {concert.canvaViewUrl && (
                          <a
                            href={concert.canvaViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="events-program-credits"
                          >
                            Click here to view the full program online
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

      </main>
    </>
  );
}
