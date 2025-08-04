import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder: integrate with email API or form backend
    setStatus("Message sent (placeholder).");
  };

  return (
    <section id="contact" className="container" style={{ paddingTop: "3rem" }}>
      <div className="section-title">Contact</div>
      <div className="section-sub">Let's build something together.</div>
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        <div className="glass">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: 8,
                  border: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: 8,
                  border: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Message</label>
              <textarea
                required
                placeholder="Say hi..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: 8,
                  border: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </div>
            <button type="submit" className="button">
              Send Message
            </button>
            {status && (
              <div style={{ marginTop: 8, color: "#8affc1" }}>{status}</div>
            )}
          </form>
        </div>
        <div className="glass">
          <div>
            <h4>Reach Out</h4>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:manojpeddinti78@gmail.com">
                manojpeddinti78@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/peddintimanojkumar"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/peddintimanojkumar
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/peddintimanojkumar"
                target="_blank"
                rel="noreferrer"
              >
                github.com/peddintimanojkumar
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
