import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, LoaderCircle, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticLink } from "./MagneticLink";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.website) {
      setForm(initialForm);
      setStatus("success");
      setFeedback("Thanks, your message is on its way.");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setFeedback("The form is temporarily unavailable. Please email me directly below.");
      return;
    }

    setStatus("sending");
    setFeedback("Sending your message…");

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            name: form.name,
            email: form.email,
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            message: form.message,
            time: new Date().toLocaleString(),
            page_url: window.location.href,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("EmailJS rejected the request");
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Message sent. I’ll get back to you soon.");
    } catch {
      setStatus("error");
      setFeedback("That didn’t send. Please try once more or email me directly below.");
    }
  };

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="contact-card wrap">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Got a problem worth talking through?</h2>
            <p className="contact-intro">Whether it is cloud security, a product idea, or a tricky system, send a note. I enjoy thoughtful conversations that lead somewhere useful.</p>
            <MagneticLink className="button button-light" href="mailto:maazshahid1@outlook.com">
              <Mail size={18} /> Send me a note <ArrowUpRight size={17} />
            </MagneticLink>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">What are you thinking about?</label>
              <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>

            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={form.website} onChange={handleChange} />
            </div>

            <button className="button button-light contact-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? <LoaderCircle className="contact-spinner" size={18} /> : <Send size={18} />}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p className={`form-feedback${status === "error" ? " form-feedback-error" : ""}`} aria-live="polite">
              {feedback}
            </p>
          </form>
        </div>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/maaz-shahid1/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://github.com/KarmaMS" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <Link to="/additional-info"><ArrowUpRight size={18} /> Beyond the résumé</Link>
        </div>
      </div>
    </section>
  );
};
