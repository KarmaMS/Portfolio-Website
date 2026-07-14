import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutNav = () => (
  <header className="site-header">
    <Link className="wordmark" to="/" aria-label="Maaz Shahid home">MS<span>.</span></Link>
    <Link className="back-link" to="/"><ArrowLeft size={17} /> Back to portfolio</Link>
  </header>
);
