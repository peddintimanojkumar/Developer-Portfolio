import React from "react";
import blogs from "../data/blogs";

export default function BlogList() {
  return (
    <section id="blog" className="container" style={{ paddingTop: "3rem" }}>
      <div className="section-title">Blog</div>
      <div className="section-sub">
        Technical write-ups, tutorials, and thoughts.
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {blogs.map((b) => (
          <div key={b.slug} className="card">
            <h3>{b.title}</h3>
            <p>{b.excerpt}</p>
            <div style={{ fontSize: "0.75rem", marginBottom: 8 }}>
              {b.date}
            </div>
            <a href={`/blog/${b.slug}`} className="button" style={{ fontSize: "0.75rem" }}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
