import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI Coding Agents in Blockchain Repositories",
    type: "Research · MSR Mining Challenge 2026",
    image: "/projects/ai-agents-blockchain.webp",
    imageAlt: "Abstract network of code branches and blockchain repository nodes",
    description: "Co-authored an empirical study of 497 AI-agent pull requests across 162 blockchain repositories, isolating how autonomous coding tools contribute inside security-critical software ecosystems.",
    tags: ["Software mining", "AI agents", "Blockchain", "Research"],
    featured: true,
  },
  {
    title: "Network Security Labs",
    type: "Applied security · Jan–Apr 2026",
    image: "/projects/network-security-labs.webp",
    imageAlt: "Abstract secure cloud network with a contained vulnerability trace",
    description: "Built and secured a multi-tier billing system on Oracle Cloud, then analyzed CSRF, XSS, buffer overflows, return-to-libc, and ROP with GDB.",
    tags: ["Python", "FastAPI", "Oracle Cloud", "GDB"],
    featured: true,
  },
  {
    title: "Salahiyat",
    type: "HCI · Privacy literacy",
    image: "/projects/salahiyat.webp",
    imageAlt: "Salahiyat project identity mark",
    description: "Co-led research with older adults in Pakistan and translated interviews into a guided Figma prototype with voice assistance and safer digital-learning flows.",
    tags: ["Figma", "User research", "Accessibility"],
    imageClass: "project-image-contain",
  },
  {
    title: "Cabinets Web SPA",
    type: "Product engineering · Live client",
    image: "/projects/cabinets-spa.webp",
    imageAlt: "Cabinets web application interface",
    description: "Delivered a responsive React and TypeScript site with 20+ routes, modular layouts, lazy-loaded media, and conversion-focused contact paths.",
    tags: ["React", "TypeScript", "Responsive UI"],
    link: "https://cabinets-karmams.vercel.app/",
  },
  {
    title: "Cloud Security Policy Automation",
    type: "Cloud security · Prisma Cloud",
    image: "/projects/cloud-security.webp",
    imageAlt: "Connected cloud security infrastructure",
    description: "Automated JSON analysis and sandbox validation for 80+ AWS RQL policies, accelerating policy development by 40% and making onboarding materially faster.",
    tags: ["AWS", "Azure", "RQL", "Automation"],
  },
];

export const Projects = () => (
  <section className="section-pad projects-section" id="projects">
    <div className="wrap section-heading">
      <p className="eyebrow">Selected work</p>
      <h2>Proof over buzzwords.</h2>
      <p>Research, security engineering, and product work—each framed around the problem and the outcome.</p>
    </div>

    <div className="project-grid wrap">
      {projects.map((project, index) => (
        <article className={project.featured ? "project-card project-featured" : "project-card"} key={project.title}>
          <div className={`project-image ${project.imageClass || ""}`}>
            <img src={project.image} alt={project.imageAlt} loading={index > 1 ? "lazy" : "eager"} decoding="async" />
            <span>0{index + 1}</span>
          </div>
          <div className="project-copy">
            <p className="project-type">{project.type}</p>
            <div className="project-title-row">
              <h3>{project.title}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <ul aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>

    <div className="wrap projects-footer">
      <p>More experiments, coursework, and production code live on GitHub.</p>
      <a className="text-link" href="https://github.com/KarmaMS" target="_blank" rel="noreferrer">
        <Github size={18} /> Browse GitHub <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);
