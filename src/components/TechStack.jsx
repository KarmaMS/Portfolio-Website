const groups = [
  ["Build", ["Python", "C / C++", "TypeScript", "React", "FastAPI", "HTML / CSS"]],
  ["Secure", ["AWS", "Azure", "Oracle Cloud", "Wiz", "Prisma Cloud", "RQL", "CCSK"]],
  ["Investigate", ["GDB", "Linux", "Bash", "Network analysis", "Applied cryptography"]],
  ["Deliver", ["Terraform", "GitLab", "Git", "Docker", "Figma", "LaTeX", "Technical writing"]],
];

export const TechStack = () => (
  <section className="section-pad toolkit-section" id="toolkit">
    <div className="wrap toolkit-grid">
      <div className="section-heading">
        <p className="eyebrow">Working toolkit</p>
        <h2>Broad enough to connect the dots. Focused enough to ship.</h2>
        <p>I choose tools around the system and its risk, not around a fashionable stack.</p>
      </div>
      <div className="tool-groups">
        {groups.map(([title, items]) => (
          <div className="tool-group" key={title}>
            <h3>{title}</h3>
            <p>{items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
