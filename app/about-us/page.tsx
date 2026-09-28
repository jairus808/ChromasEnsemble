import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  photoAlt?: string;
  size: "sm" | "md" | "lg";
  align: "start" | "center" | "end";
  tint: "blue" | "yellow" | "green";
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const members: Member[] = [
  {
    name: "Pablo Molano",
    role: "Conductor",
    bio: "Conducted Chromas Ensemble's inaugural concert, Joyful Reflections, leading a program of Mozart's Haffner Symphony, Stravinsky's Pulcinella Suite, and Prokofiev's Classical Symphony.",
    size: "lg",
    align: "start",
    tint: "blue",
  },
  {
    name: "Lucas Amory",
    role: "Conductor",
    bio: "Conducts the Chromas chamber ensemble in Visualizing Temporal Expressivity, a multimedia collaboration at Yale featuring Glass, Dvořák, and Britten.",
    size: "sm",
    align: "end",
    tint: "yellow",
  },
  {
    name: "Jairus Rhoades",
    role: "Multimedia Collaborator",
    bio: "Paired live performance with generative visuals for his senior thesis on temporal expressivity, and builds the Chromas website.",
    size: "md",
    align: "center",
    tint: "green",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="events-layout">
        <header className="about-hero">
          <div className="about-hero-shapes" aria-hidden="true">
            <span className="about-shape circle blue" />
            <span className="about-shape circle yellow" />
            <span className="about-shape bar green" />
            <span className="about-shape circle small blue" />
            <span className="about-shape circle small yellow" />
          </div>
          <div className="container about-hero-content">
            <p className="season-page-eyebrow">Chromas Ensemble</p>
            <h1>Color, sound, and the space between them.</h1>
            <p className="season-page-sub">
              We&apos;re a New York City–based, student-led orchestra reimagining what a
              concert can be — one collaboration at a time.
            </p>
          </div>
        </header>

        <section className="section about">
          <div className="container split">
            <div>
              <h2>Led by students, driven by curiosity</h2>
              <p>
                Founded in September 2025, the Chromas Ensemble has been a student-led,
                volunteer-based orchestra dedicated to creating large-scale, collaborative
                performances that bring together musicians and artists across disciplines.
                Our mission is to provide a space for free-form, organic music-making where
                students and emerging artists can experiment, perform major works often
                beyond the reach of student groups, and share in the joy of music as a
                communal experience.
              </p>
              <p>
                With a vision to collaborate with artists, students, and multi-media
                projects, we aim to set ourselves apart through exploring the ways music
                can be experienced.
              </p>
              <p className="about-nonprofit">
                Chromas Ensemble is a registered 501(c)(3) nonprofit organization.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Where the name comes from</h3>
              <p>
                Chroma is a measure of color&apos;s purity and intensity — the quality that
                makes a hue vivid rather than washed out. We borrowed the word because it
                captures what we&apos;re after: performances with that same vividness, where
                sound, light, and movement sharpen each other instead of competing for
                attention.
              </p>
              <p>
                Our programming draws on synesthetic ideas in the spirit of Kandinsky, who
                treated color and music as expressions of the same underlying language.
                Each season, we look for a new way to put that in practice, from live
                orchestral concerts to real-time generative visuals.
              </p>
            </div>
          </div>
        </section>

        <section className="section about-team">
          <div className="container">
            <div className="latest-header">
              <p className="latest-eyebrow">Meet the People</p>
              <h2>The people behind Chromas</h2>
              <p className="about-team-sub">
                Conductors, collaborators, and musicians building our first seasons.
              </p>
            </div>
            <div className="bio-masonry">
              {members.map((member, index) => (
                <article className="bio-card" key={`${member.name}-${index}`}>
                  <div className={`bio-card-photo-wrap align-${member.align}`}>
                    <div
                      className={`bio-card-photo size-${member.size}${
                        member.photo ? "" : ` placeholder tint-${member.tint}`
                      }`}
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.photoAlt ?? member.name}
                          fill
                          sizes="(max-width: 560px) 60vw, (max-width: 900px) 34vw, 22vw"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <span>{getInitials(member.name)}</span>
                      )}
                    </div>
                  </div>
                  <div className="bio-card-body">
                    <h3 className="bio-name">{member.name}</h3>
                    <p className="bio-role">{member.role}</p>
                    <p className="bio-summary">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-cta">
          <div className="container about-cta-inner">
            <div>
              <h2>Want to be part of the next season?</h2>
              <p>
                We welcome performers, composers, and collaborators across disciplines.
                Reach out and we&apos;ll keep you posted about rehearsals, premieres, and
                open chairs.
              </p>
            </div>
            <div className="about-cta-actions">
              <a
                className="btn primary"
                href="mailto:chromasensemble@gmail.com?subject=Join%20Chromas%20Ensemble"
              >
                Introduce Yourself
              </a>
              <Link className="btn secondary" href="/season-events">
                See Our Season
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
