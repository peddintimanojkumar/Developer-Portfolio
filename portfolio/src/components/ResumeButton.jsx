import React from "react";

export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="button"
      style={{ display: "inline-block" }}
    >
      Download Resume
    </a>
  );
}
