import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="site-footer wrap">
    <p>© {new Date().getFullYear()} Maaz Shahid</p>
    <a className="back-to-top" href="#top">
      <span>Back to top</span>
      <span className="back-to-top-icon" aria-hidden="true"><ArrowUp size={17} strokeWidth={3} /></span>
    </a>
  </footer>
);
