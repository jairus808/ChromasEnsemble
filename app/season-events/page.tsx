import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";

type ConcertInfo = {
  title: string;
  date: string;
  venue: string;
  photo: string;
  summary: string;
  programNote: string;
  livestreamUrl?: string;
  eventbriteUrl?: string;
  canvaEmbedUrl: string;
  canvaViewUrl: string;
};

const upcomingConcert: ConcertInfo = {
  title: "Joyful Reflections",
  date: "November 16, 2025 · 7:30 PM",
  venue: "Cary Hall at the DiMenna Center for Classical Music, New York",
  photo: "/images/Chromas_group.png",
  summary:
    "Our inaugural concert traces musical color across eras. Conductor Kaleb Zhu leads Mozart’s Haffner Symphony, Stravinsky’s Pulcinella Suite, and Prokofiev’s Classical Symphony.",
  programNote:
    "It's our first concert! We appreciate your attention and time to check us out, and we hope to make lasting relationships with you, whether you be a supporter or musician that would like to join us! With this very first concert, we aim to make our mark with a small step that will hint at our big visions to feature interdisciplinary performances. ",
  livestreamUrl: "https://www.youtube.com/watch?v=Iz9o3q14yvI",
  eventbriteUrl: "https://www.eventbrite.com/e/joyful-reflections-chromas-ensembles-debut-concert-tickets-1966293576017",
  canvaEmbedUrl: "https://www.canva.com/design/DAG43hMeKP8/LnXqCpB28kHwnxf6czeMUg/view?embed",
  canvaViewUrl:
    "https://www.canva.com/design/DAG43hMeKP8/LnXqCpB28kHwnxf6czeMUg/view?utm_content=DAG43hMeKP8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
};

export default function SeasonEventsPage() {
  return (
    <>
      <SiteHeader />
      <main className="events-layout">
        <section className="events-hero">
          <div className="container events-hero-inner">
            <div className="events-hero-copy">
              <p className="events-eyebrow">Upcoming Concert: Today!</p>
              <h1>{upcomingConcert.title}</h1>
              <p className="events-meta">{upcomingConcert.date}</p>
              <p className="events-meta">{upcomingConcert.venue}</p>
              <p className="events-summary">{upcomingConcert.summary}</p>
              {(upcomingConcert.livestreamUrl || upcomingConcert.eventbriteUrl) && (
                <div className="events-hero-actions">
                  {upcomingConcert.livestreamUrl && (
                    <a
                      className="btn primary"
                      href={upcomingConcert.livestreamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Livestream
                    </a>
                  )}
                  {upcomingConcert.eventbriteUrl && (
                    <a
                      className="btn secondary"
                      href={upcomingConcert.eventbriteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Eventbrite
                    </a>
                  )}
                </div>
              )}
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
                  src={upcomingConcert.canvaEmbedUrl}
                  title="Chromas Ensemble program"
                  allowFullScreen
                />
              </div>
              <a
                href={upcomingConcert.canvaViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="events-program-credits"
              >
                Click the link above for to view our program online!
              </a>{" "}
            
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
