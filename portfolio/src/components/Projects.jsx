import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ paddingTop: "3rem" }}>
      <div className="section-title">Projects</div>
      <div className="section-sub">
        A selection of projects demonstrating full-stack and frontend/backend
        capabilities.
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        {projects.map((p) => (
          <div key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div style={{ marginBottom: "0.5rem" }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    marginRight: 6,
                    fontSize: "0.75rem",
                    padding: "4px 8px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 6,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="button" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                  GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="button" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
