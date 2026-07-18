import { ArrowLeft, ArrowRight, BriefcaseBusiness, CloudCog, GraduationCap, ShieldCheck } from "lucide-react";
import { createElement, useRef } from "react";

const experience = [
  {
    icon: BriefcaseBusiness,
    role: "Technical Consultant",
    company: "Johri Technologies",
    date: "Feb 2026 to present",
    summary: "Supporting an enterprise CloudGuard-to-Wiz migration through rule mapping, RBAC, Policy Factory, Terraform, GitLab, live-finding triage, and client-ready remediation work.",
  },
  {
    icon: GraduationCap,
    role: "Cloud Development TA",
    company: "LUMS",
    date: "Jan 2026 to May 2026",
    summary: "Managed Azure subscriptions, student roles, resource groups, and cloud access while evaluating secure deployments, hub-spoke VPNs, and storage pipelines.",
  },
  {
    icon: ShieldCheck,
    role: "SaaS Security Auditor",
    company: "Johri Technologies",
    date: "May 2024 to Aug 2024",
    summary: "Turned 40+ identity, encryption, incident-response, and compliance gaps into practical remediation plans that improved audit closure by 30%.",
  },
  {
    icon: CloudCog,
    role: "Cloud Security Associate",
    company: "Johri Technologies",
    date: "Oct 2023 to Apr 2024",
    summary: "Engineered and validated 80+ AWS and 33 Azure Prisma Cloud policies, built test environments, and cut team onboarding time in half.",
  },
];

export const About = () => {
  const timelineRef = useRef(null);

  const moveTimeline = (direction) => {
    timelineRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const moveSpotlight = ({ currentTarget, pointerType, clientX, clientY }) => {
    if (pointerType === "touch") return;

    const bounds = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--spotlight-x", `${clientX - bounds.left}px`);
    currentTarget.style.setProperty("--spotlight-y", `${clientY - bounds.top}px`);
  };

  const resetSpotlight = ({ currentTarget }) => {
    currentTarget.style.setProperty("--spotlight-x", "50%");
    currentTarget.style.setProperty("--spotlight-y", "0%");
  };

  return (
    <section className="section-pad experience-section" id="experience">
      <div className="wrap split-heading">
        <div>
          <p className="eyebrow">Experience · 2023 to now</p>
          <h2>A few chapters behind the work.</h2>
        </div>
        <div className="education-note">
          <GraduationCap size={20} />
          <p><strong>BS Computer Science, LUMS</strong><span>Expected May 2027 · Major GPA 3.52</span></p>
        </div>
      </div>

      <div className="timeline-shell wrap">
        <div className="timeline-controls" aria-label="Experience timeline controls">
          <span>Swipe through selected chapters</span>
          <div>
            <button type="button" onClick={() => moveTimeline(-1)} aria-label="Earlier timeline item"><ArrowLeft size={18} /></button>
            <button type="button" onClick={() => moveTimeline(1)} aria-label="Later timeline item"><ArrowRight size={18} /></button>
          </div>
        </div>
        <ol className="timeline-track" ref={timelineRef}>
          {experience.map(({ icon, role, company, date, summary }, index) => (
            <li className="timeline-item" key={role}>
              <div className="timeline-date"><span>0{index + 1}</span><time>{date}</time></div>
              <div className="timeline-node"><i /> <span /></div>
              <article className="timeline-card spotlight-card" onPointerMove={moveSpotlight} onPointerLeave={resetSpotlight}>
                <div className="experience-icon">{createElement(icon, { size: 20 })}</div>
                <p>{company}</p>
                <h3>{role}</h3>
                <p className="experience-summary">{summary}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
