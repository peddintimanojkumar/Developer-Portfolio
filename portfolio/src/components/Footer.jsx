import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 1rem",
        textAlign: "center",
        marginTop: "4rem",
        fontSize: "0.9rem"
      }}
    >
      <div className="glass" style={{ padding: "1rem", margin: "0 auto", maxWidth: 800 }}>
        <div>
          <div style={{ marginBottom: 8 }}>
            Built with ♥ by Peddinti Manoj Kumar.  
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/peddintimanojkumar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/peddintimanojkumar" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:manojpeddinti78@gmail.com">Email</a>
          </div>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            © {new Date().getFullYear()} Peddinti Manoj Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
