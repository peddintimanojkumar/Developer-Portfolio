import React, { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 100; // offset for highlighting
      const sections = navItems.map((n) => {
        const id = n.href.replace("#", "") || "hero";
        return document.getElementById(id.toLowerCase()) || null;
      });

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollY) {
          setActive(navItems[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "0.5rem 1rem",
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        borderRadius: "0 0 16px 16px",
        margin: "0 1rem"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: "700", fontSize: "1.25rem" }}>
          Peddinti Manoj Kumar
        </div>
        <div className="hide-on-mobile" style={{ display: "flex", gap: 16 }}>
          {navItems.map((n) => (
            <a
              key={n.name}
              href={n.href}
              style={{
                position: "relative",
                padding: "6px 8px",
                textDecoration: "none",
                color: active === n.name ? "#6c63ff" : "var(--text)",
                fontWeight: active === n.name ? 600 : 500,
                transition: "color .25s",
              }}
              onClick={() => setOpen(false)}
            >
              {n.name}
              {active === n.name && (
                <div
                  style={{
                    height: 3,
                    width: "100%",
                    background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
                    borderRadius: 2,
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="socials" style={{ display: "none" }}></div>
        <div className="download-resume hide-on-mobile">
          <a href="/resume.pdf" download className="button" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
            Resume
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{
            width: "100%",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "1rem",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 12,
          }}
        >
          {navItems.map((n) => (
            <a
              key={n.name}
              href={n.href}
              style={{
                textDecoration: "none",
                color: active === n.name ? "#6c63ff" : "var(--text)",
                fontWeight: 600,
                padding: "6px 0",
              }}
              onClick={() => setOpen(false)}
            >
              {n.name}
            </a>
          ))}
          <a href="/resume.pdf" download className="button" style={{ width: "fit-content" }}>
            Resume
          </a>
          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <a href="https://github.com/peddintimanojkumar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/peddintimanojkumar" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
