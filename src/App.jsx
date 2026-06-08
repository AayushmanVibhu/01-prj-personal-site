import { useEffect, useMemo, useState } from "react";
import { experience, highlightGroups, projects, skills } from "./data.js";
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
        <strong>Aayushman Vibhu</strong>
        <span>AI + Product Builder</span>
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
        <span>DUFFEL</span>
        <span>NEXT.JS</span>
        <span>SUPABASE</span>
      </div>
      <div className="data-stream stream-two">
        <span>RESEND</span>
        <span>MAPS</span>
        <span>SQL</span>
        <span>FLYTURE</span>
      </div>
    </div>
  );
}

function MotionLab() {
  return (
    <aside className="motion-lab" aria-label="Animated build system panel">
      <div className="lab-header">
        <span />
        <span />
        <span />
      </div>
      <div className="lab-stage">
        <div className="lab-node node-one">plan</div>
        <div className="lab-node node-two">search</div>
        <div className="lab-node node-three">route</div>
        <div className="lab-node node-four">notify</div>
        <div className="lab-core">
          <span>Flyture</span>
        </div>
        <svg className="lab-lines" viewBox="0 0 420 300" aria-hidden="true">
          <path d="M92 78 C150 38, 250 38, 322 78" />
          <path d="M86 216 C148 262, 260 262, 334 214" />
          <path d="M86 92 C130 146, 132 184, 86 210" />
          <path d="M334 88 C292 142, 294 184, 334 208" />
        </svg>
      </div>
      <div className="lab-footer">
        <span>Next.js</span>
        <span>Supabase</span>
        <span>Duffel</span>
        <span>Resend</span>
      </div>
    </aside>
  );
}

function ProjectMap({ project }) {
  const nodes = project.flow ?? [];

  return (
    <div className="project-map" aria-label={`${project.title} project flow`}>
      <div className="map-core">
        <span>{project.title}</span>
      </div>
      <div className="map-orbit">
        {nodes.map((node, index) => (
          <span key={`${project.title}-${node}`} className={`map-node node-${index + 1}`}>
            {node}
          </span>
        ))}
      </div>
      <svg className="map-lines" viewBox="0 0 520 260" aria-hidden="true">
        <path d="M92 72 C176 20, 330 20, 428 72" />
        <path d="M82 184 C172 244, 340 244, 438 184" />
        <path d="M104 88 C154 130, 154 160, 104 180" />
        <path d="M418 88 C366 130, 366 160, 418 180" />
      </svg>
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
        <h1>Building software with a little more patience, taste, and usefulness.</h1>
        <p>
          I am Aayushman, a CS student at ASU. I care about products that feel
          practical and personal: travel planning, health literacy, better search,
          and small systems that quietly make a day easier.
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
      <div className="hero-side">
        <div className="hero-card">
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
        <MotionLab />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section section-panel">
      <SectionHeading kicker="About" title="Builder first. Student always.">
        I am a Computer Science student at ASU, but most of my learning happens
        when I am trying to ship something that has to make sense to someone else.
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

function Highlights() {
  return (
    <section className="highlights-section" aria-label="Profile highlights">
      <div className="highlights-intro">
        <p className="kicker">Highlights</p>
        <h2>What I have been giving my time to.</h2>
        <p>
          A quick read on the different parts of my work: recognition at ASU,
          products I have shipped, the technical systems behind them, and the
          communities I am helping build.
        </p>
      </div>
      <div className="highlight-grid">
        {highlightGroups.map((group) => (
          <article key={group.title} className={`highlight-card ${group.accent}`}>
            <h3>{group.title}</h3>
            <div className="highlight-items">
              {group.items.map((item) => (
                <div key={`${group.title}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section section-panel alternate">
      <SectionHeading kicker="Skills" title="A modern AI/full-stack toolkit.">
        The practical stack behind the things I am actually building.
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
        A closer look at the products and systems I have spent real time with.
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
          <div className="project-copy">
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
          </div>
          <ProjectMap project={selected} />
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section section-panel compact-panel">
      <SectionHeading kicker="Experience" title="The work that is shaping how I build." />
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
        <h2>Say hello.</h2>
        <p>
          I am always happy to talk about AI products, travel tech, hackathon
          ideas, student communities, or interesting ways to make software feel
          more useful.
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
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
