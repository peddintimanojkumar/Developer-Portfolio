import React from "react";

export default function Hero() {
  return (
    <section className="container" style={{ paddingTop: "5rem" }}>
      <div className="glass" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div style={{ flex: "1 1 400px" }}>
          <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
            Peddinti Manoj Kumar
          </h1>
          <p style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>
            React Developer | Java Backend Enthusiast
          </p>
          <p>
            A passionate developer skilled in building dynamic web applications
            with Java, React.js, and modern tech stacks. Always eager to innovate,
            learn, and create impactful digital experiences.
          </p>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <a href="#projects" className="button">
              View Projects
            </a>
          </div>
        </div>
        <div style={{ flex: "0 0 180px" }}>
          {/* Placeholder for avatar or tech-themed illustration */}
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#6c63ff,#00d4ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
  style={{
    width: 160,
    height: 160,
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#6c63ff,#00d4ff)"
  }}
>
  <img
    src="/image.jpg"
    alt="Peddinti Manoj Kumar"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }}
    loading="lazy"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
