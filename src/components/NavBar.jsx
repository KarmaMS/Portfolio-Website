import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Toolkit", "#toolkit"],
  ["Contact", "#contact"],
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Maaz Shahid, back to top">MS<span>.</span></a>

      <nav className={isOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
        ))}
        <Link className="nav-beyond" to="/additional-info" onClick={() => setIsOpen(false)}>Meet Maazy</Link>
        <a className="nav-resume" href="/Maaz Shahid - Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
      </nav>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
};
