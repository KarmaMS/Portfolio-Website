import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => (
  <section className="section-pad contact-section" id="contact">
    <div className="contact-card wrap">
      <p className="eyebrow">Let’s work together</p>
      <h2>Have a hard problem that sits between systems and people?</h2>
      <p className="contact-intro">I’m always interested in cloud security, applied research, thoughtful software, and teams that care about the details.</p>
      <a className="button button-light" href="mailto:27100445@lums.edu.pk">
        <Mail size={18} /> 27100445@lums.edu.pk <ArrowUpRight size={17} />
      </a>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/maaz-lums/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        <a href="https://github.com/KarmaMS" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        <Link to="/additional-info"><ArrowUpRight size={18} /> Beyond the résumé</Link>
      </div>
    </div>
  </section>
);
