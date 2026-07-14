import { BriefcaseBusiness, CloudCog, GraduationCap, ShieldCheck } from "lucide-react";
import { createElement } from "react";

const experience = [
  {
    icon: BriefcaseBusiness,
    role: "Technical Consultant",
    company: "Johri Technologies",
    date: "Feb 2026 — Present",
    summary: "Supporting an enterprise CloudGuard-to-Wiz CNAPP migration through rule mapping, RBAC, Policy Factory, Terraform and GitLab workflows, live-finding triage, and client-ready remediation deliverables.",
  },
  {
    icon: GraduationCap,
    role: "Full-Time Teaching Assistant — Cloud Development",
    company: "LUMS",
    date: "Jan 2026 — May 2026",
    summary: "Managed Azure subscriptions, student roles, resource groups, and cloud access while resolving infrastructure issues and evaluating secure deployments, hub-spoke VPNs, and storage pipelines.",
  },
  {
    icon: ShieldCheck,
    role: "SaaS Security Auditor",
    company: "Johri Technologies",
    date: "May 2024 — Aug 2024",
    summary: "Led five vendor audits across identity, encryption, incident response, and compliance; classified 40+ control gaps and delivered remediation plans that improved closure rates by 30%.",
  },
  {
    icon: CloudCog,
    role: "Cloud Security Associate",
    company: "Johri Technologies",
    date: "Oct 2023 — Apr 2024",
    summary: "Engineered and validated 80+ AWS and 33 Azure Prisma Cloud policies, built test environments, and created onboarding documentation that cut ramp-up time in half.",
  },
];

export const About = () => (
  <section className="section-pad experience-section" id="experience">
    <div className="wrap split-heading">
      <div>
        <p className="eyebrow">Experience</p>
        <h2>From policy logic to production decisions.</h2>
      </div>
      <div className="education-note">
        <GraduationCap size={20} />
        <p><strong>BS Computer Science, LUMS</strong><span>Expected May 2027 · Major GPA 3.52</span></p>
      </div>
    </div>

    <div className="experience-list wrap">
      {experience.map(({ icon, role, company, date, summary }, index) => (
        <article className="experience-row" key={role}>
          <span className="experience-index">0{index + 1}</span>
          <div className="experience-icon">{createElement(icon, { size: 20 })}</div>
          <div className="experience-title"><h3>{role}</h3><p>{company}</p></div>
          <time>{date}</time>
          <p className="experience-summary">{summary}</p>
        </article>
      ))}
    </div>
  </section>
);
