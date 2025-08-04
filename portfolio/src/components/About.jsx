import React from "react";

export default function About() {
  return (
    <section id="about" className="container" style={{ paddingTop: "3rem" }}>
      <div className="section-title">About Me</div>
      <div className="section-sub">
        Full-stack developer with a focus on React and Java backend systems.
      </div>
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        <div className="glass">
          <p>
            I am Peddinti Manoj Kumar, a dedicated and results-driven software
            developer specializing in Java backend development and modern front-end
            frameworks like React.js. My journey in coding began with a strong foundation
            in Java and gradually expanded into full-stack development. I am passionate
            about crafting clean, efficient, and scalable solutions while keeping user
            experience at the forefront. With skills in SQL, MongoDB, Spring Boot, Node.js,
            and GitHub version control, I thrive in building robust applications that
            integrate seamlessly across different technologies. I believe in continuous
            learning, staying ahead of emerging trends, and contributing to impactful
            projects that solve real-world challenges.
          </p>
        </div>
        <div className="glass">
          <div>
            <h4>Core Skills</h4>
            <ul>
              <li>Java, JavaScript, HTML, CSS</li>
              <li>React.js, Spring Boot, Node.js</li>
              <li>SQL, MongoDB</li>
              <li>GitHub (Version Control)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
