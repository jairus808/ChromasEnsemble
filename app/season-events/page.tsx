import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { ZeffyEmbed } from "../components/ZeffyEmbed";
import { InstagramReels } from "../components/InstagramReels";

type SeasonId = "2026-2027" | "2025-2026";

type SeasonInfo = {
  id: SeasonId;
  heading: string;
  subtitle: string;
};

type ConcertInfo = {
  season: SeasonId;
  number: string;
  slug: string;
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
  /** Zeffy ticketing form path, e.g. "/embed/ticketing/..." */
  zeffyFormPath?: string;
  /** Large benefit/cause callout rendered below the concert entry */
  benefit?: {
    eyebrow: string;
    heading: string;
    text: string;
  };
  /** Instagram reel permalinks shown below the benefit banner */
  reelUrls?: string[];
  canvaEmbedUrl?: string;
  canvaViewUrl?: string;
};

// Seasons render in this order; each concert below is grouped under its season.
const seasons: SeasonInfo[] = [
  {
    id: "2026-2027",
    heading: "2026–27 Season",
    subtitle:
      "Get ready for a new year of Chromas, with more concerts, more collaborations, and more musicians!",
  },
  {
    id: "2025-2026",
    heading: "2025–26 Season",
    subtitle: "Two concerts. One inaugural season.",
  },
];

// Within a season, concerts render in the order listed here.
const concerts: ConcertInfo[] = [
  {
    season: "2026-2027",
    number: "Concert III",
    slug: "in-search-of-enlightenment",
    status: "upcoming",
    title: "In Search of Enlightenment",
    date: "November 15, 2026 · 8:00 PM",
    venue: "Cary Hall at the DiMenna Center for Classical Music, New York",
    photo: "/images/enlightenment_banner.png",
    photoAlt:
      "In Search of Enlightenment — Christina Nam, violin; Andy Park, viola; Lucas Amory, conductor. Stravinsky, Haydn, and Mozart at Cary Hall, DiMenna Center for Classical Music.",
    summary:
      "Chromas opens its second season with a program in search of enlightenment directed by Lucas Amory and featuring Christina Nam, violin, and Andy Park, viola — with Stravinsky's Suites for Small Orchestra, Haydn's Symphony No. 102, and Mozart's Sinfonia Concertante.",
    programNote:
      "These works, each a product of restless curiosity and bold experimentation, embody the enlightenment spirit — and that same spirit inspired us to partner with the Stuyvesant Science Olympiad team for this concert. Just as the composers on this program pushed the boundaries of what music could be, these high-achieving high schoolers are pushing the boundaries of what they can discover. Your support matters: all ticket proceeds go directly to funding their journey to compete in competitions and develop their pre-college careers in STEM. Come for the music, and leave having invested in the next generation of curious minds.",
    zeffyFormPath: "/embed/ticketing/chromas-ensemble-enlightenment-concert",
    benefit: {
      eyebrow: "A concert for a cause",
      heading: "Every ticket funds young scientists",
      text: "100% of ticket sales from this concert go directly to the Stuyvesant High School Science Olympiad team. Your seat supports a New York public high school's brightest students as they travel to competitions, develop problem-solving skills, and build their pre-college careers in STEM.",
    },
    reelUrls: [
      "https://www.instagram.com/reel/DfqXPB0NkAV/",
      "https://www.instagram.com/reel/DfftfwOvsci/",
    ],
    // No canvaEmbedUrl yet — the page shows a "program coming soon" card
    // with links to previous programs until the new program is designed.
  },
  {
    season: "2025-2026",
    number: "Concert II",
    slug: "visualizing-temporal-expressivity",
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
    canvaEmbedUrl:
      "https://www.canva.com/design/DAHHpcAjD0Y/6FwCNELU3QEo-2Sd8rOiNg/view?embed",
    canvaViewUrl:
      "https://www.canva.com/design/DAHHpcAjD0Y/6FwCNELU3QEo-2Sd8rOiNg/view?utm_content=DAHHpcAjD0Y&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  },
  {
    season: "2025-2026",
    number: "Concert I",
    slug: "joyful-reflections",
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
        {seasons.map((season, seasonIndex) => {
          const seasonConcerts = concerts.filter(
            (concert) => concert.season === season.id
          );

          return (
            <div key={season.id} id={`season-${season.id}`}>
              <header className="season-page-header">
                <div className="container">
                  <p className="season-page-eyebrow">Chromas Ensemble</p>
                  <h1>{season.heading}</h1>
                  <p className="season-page-sub">{season.subtitle}</p>
                </div>
              </header>

              <div className="concerts-list">
                {seasonConcerts.map((concert, index) => (
                  <section
                    key={concert.slug}
                    id={concert.slug}
                    className={`concert-entry ${concert.status}${
                      concert.zeffyFormPath ? " has-tickets" : ""
                    }${index % 2 !== 0 ? " flipped" : ""}`}
                  >
                    <div className="container concert-entry-inner">
                      <div className="concert-entry-body">
                        <span className={`concert-badge ${concert.status}`}>
                          {concert.number} ·{" "}
                          {concert.status === "past" ? "Past" : "Upcoming"}
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
                          <>
                            {concert.zeffyFormPath && (
                              <div className="concert-actions">
                                <a
                                  className="btn primary"
                                  href={`https://www.zeffy.com${concert.zeffyFormPath.replace(
                                    "/embed/",
                                    "/"
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Get Tickets on Zeffy
                                </a>
                              </div>
                            )}
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
                          </>
                        )}
                      </div>

                      {concert.zeffyFormPath ? (
                        <div className="concert-entry-tickets">
                          <p className="events-eyebrow">Tickets</p>
                          <h3>Reserve your seats</h3>
                          <ZeffyEmbed
                            formPath={concert.zeffyFormPath}
                            title={`${concert.title} tickets — powered by Zeffy`}
                          />
                        </div>
                      ) : (
                        <div className="concert-entry-visual">
                          <Image
                            src={concert.photo}
                            alt={concert.photoAlt}
                            width={720}
                            height={540}
                            priority={seasonIndex === 0 && index === 0}
                          />
                        </div>
                      )}
                    </div>

                    {concert.benefit && (
                      <div className="concert-benefit">
                        <div className="container">
                          <div className="concert-benefit-inner">
                            <p className="events-eyebrow">
                              {concert.benefit.eyebrow}
                            </p>
                            <h3>{concert.benefit.heading}</h3>
                            <p className="concert-benefit-text">
                              {concert.benefit.text}
                            </p>
                            {concert.zeffyFormPath && (
                              <a
                                className="btn primary"
                                href={`https://www.zeffy.com${concert.zeffyFormPath.replace(
                                  "/embed/",
                                  "/"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Get Tickets on Zeffy
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {concert.reelUrls && concert.reelUrls.length > 0 && (
                      <div className="concert-reels">
                        <div className="container">
                          <div className="concert-reels-header">
                            <p className="events-eyebrow">
                              From our Instagram
                            </p>
                            <h3>See Chromas in motion</h3>
                          </div>
                          <InstagramReels reelUrls={concert.reelUrls} />
                          <p className="concert-reels-follow">
                            <a
                              href="https://www.instagram.com/chromasensemble"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Follow @chromasensemble on Instagram
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {concert.zeffyFormPath && (
                      <div className="concert-photo-full">
                        <Image
                          src={concert.photo}
                          alt={concert.photoAlt}
                          width={3076}
                          height={1081}
                          priority={seasonIndex === 0 && index === 0}
                        />
                      </div>
                    )}

                    {concert.programNote && (
                      <div className="concert-program">
                        <div
                          className={`container concert-program-inner${
                            index % 2 !== 0 ? " flipped" : ""
                          }`}
                        >
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
                                  boxShadow:
                                    "0 2px 8px 0 rgba(63,69,81,0.16)",
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
                          {!concert.canvaEmbedUrl &&
                            concert.status === "upcoming" && (
                              <aside className="events-program-soon">
                                <p className="events-eyebrow">
                                  Concert program
                                </p>
                                <h3>Online program coming soon</h3>
                                <p>
                                  We&apos;re putting the finishing touches on
                                  the program for this concert. In the
                                  meantime, take a look at our previous
                                  programs:
                                </p>
                                <ul>
                                  {concerts
                                    .filter(
                                      (previous) =>
                                        previous.canvaViewUrl &&
                                        previous.slug !== concert.slug
                                    )
                                    .map((previous) => (
                                      <li key={previous.slug}>
                                        <a
                                          className="btn ghost"
                                          href={previous.canvaViewUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {previous.title}
                                        </a>
                                      </li>
                                    ))}
                                </ul>
                              </aside>
                            )}
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
