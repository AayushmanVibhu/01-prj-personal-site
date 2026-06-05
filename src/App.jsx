import { useEffect, useMemo, useState } from "react";
import { experience, projects, skills, stats } from "./data.js";
import profileImage from "../img/Aayushman Vibhu image.jpeg";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function Header() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Aayushman Vibhu home">
        <span>AV</span>
        <strong>Aayushman Vibhu</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={active === item.id ? "active" : ""}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden="true">
      <div className="mesh mesh-one" />
      <div className="mesh mesh-two" />
      <div className="mesh mesh-three" />
      <div className="grid-layer" />
      <div className="scan-line" />
      <div className="data-stream stream-one">
        <span>RAG</span>
        <span>OPENAI</span>
        <span>NEXT.JS</span>
        <span>VECTOR</span>
      </div>
      <div className="data-stream stream-two">
        <span>SUPABASE</span>
        <span>ROUTES</span>
        <span>AI</span>
        <span>TRAVEL</span>
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="kicker">Computer Science at Arizona State University</p>
        <h1>AI products, retrieval systems, and full-stack tools with real-world traction.</h1>
        <p>
          I build software that moves people from messy questions to useful action:
          travel discovery, health literacy, business intelligence, AI assistants,
          and the systems underneath them.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore Projects
          </a>
          <a className="button secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-card">
        <div className="orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="signal-stack" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <img src={profileImage} alt="Aayushman Vibhu" />
        <div>
          <p className="kicker">Currently</p>
          <h2>Building Flyture and AI workflows at Global Chamber.</h2>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section">
      <SectionHeading kicker="About" title="Builder first. Student always.">
        I am a Computer Science student at ASU focused on AI-assisted products,
        retrieval systems, and full-stack engineering.
      </SectionHeading>
      <div className="about-grid">
        <article className="story-card large">
          <h3>How I work</h3>
          <p>
            I like building systems that make complex decisions easier to understand.
            My current work sits around AI orchestration, RAG, semantic search,
            structured outputs, production web apps, and product flows that feel
            human instead of mechanical.
          </p>
        </article>
        <article className="story-card">
          <h3>Education</h3>
          <p>BS Computer Science, Arizona State University. Expected May 2028.</p>
          <p>GPA 3.87. Dean's List: Fall 2024, Spring 2025, Fall 2025, Spring 2026.</p>
        </article>
        <article className="story-card">
          <h3>Beyond code</h3>
          <p>
            Co-founder of Brain Computing Club @ ASU, keyboard performer and singer
            with SurDevils Band, and active ASU event volunteer.
          </p>
        </article>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="stats-band" aria-label="Profile highlights">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section">
      <SectionHeading kicker="Skills" title="A modern AI/full-stack toolkit.">
        Languages, frameworks, platforms, and AI patterns I use to ship working
        products.
      </SectionHeading>
      <div className="skills-grid">
        {skills.map((group) => (
          <article
            key={group.title}
            className={`skill-card ${group.featured ? "featured" : ""}`}
          >
            <h3>{group.title}</h3>
            <div className="pill-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section id="projects" className="content-section">
      <SectionHeading kicker="Projects" title="Recent builds worth opening.">
        From production travel software to hackathon-winning AI health navigation
        and systems programming.
      </SectionHeading>
      <div className="project-workbench">
        <div className="project-tabs" role="tablist" aria-label="Projects">
          {projects.map((project) => (
            <button
              key={project.title}
              className={selected.title === project.title ? "active" : ""}
              onClick={() => setSelected(project)}
              type="button"
              role="tab"
              aria-selected={selected.title === project.title}
            >
              <span>{project.title}</span>
              <small>{project.eyebrow}</small>
            </button>
          ))}
        </div>
        <article className="project-detail">
          <p className="kicker">{selected.eyebrow}</p>
          <h3>{selected.title}</h3>
          <p>{selected.summary}</p>
          <div className="pill-row">
            {selected.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <ul>
            {selected.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {selected.link && (
            <a className="text-link" href={selected.link} target="_blank" rel="noreferrer">
              Visit {selected.title}
            </a>
          )}
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section">
      <SectionHeading kicker="Experience" title="Where the work is happening now." />
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.role}-${item.org}`}>
            <div className="timeline-dot" />
            <div>
              <p className="kicker">{item.date}</p>
              <h3>{item.role}</h3>
              <strong>{item.org}</strong>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="kicker">Contact</p>
        <h2>Let us build something useful.</h2>
        <p>
          I am open to AI engineering, full-stack, product, and startup-oriented
          conversations.
        </p>
      </div>
      <div className="contact-grid">
        <a href="mailto:anola293@asu.edu">anola293@asu.edu</a>
        <a href="tel:+16027259991">+1 602-725-9991</a>
        <a href="https://github.com/AayushmanVibhu" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aayushman-vibhu-723b99282"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <TechBackdrop />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
