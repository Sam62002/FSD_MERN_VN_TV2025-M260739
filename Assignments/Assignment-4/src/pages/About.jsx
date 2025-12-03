// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="about">
      <h1>About Our College</h1>

      <div className="section">
        <h2>History</h2>
        <p>
          Founded in 2005, My College has grown into a center of excellence recognized for
          research, innovation, and societal impact.
        </p>
      </div>

      <div className="section">
        <h2>Mission & Vision</h2>
        <p><strong>Mission:</strong> Nurture competent professionals and responsible leaders.</p>
        <p><strong>Vision:</strong> Be a global hub for transformative education and research.</p>
      </div>

      <div className="section">
        <h2>Achievements</h2>
        <div className="timeline">
          <div className="card"><h3>2020</h3><p>AI Lab inaugurated.</p></div>
          <div className="card"><h3>2022</h3><p>Top 100 National Ranking.</p></div>
          <div className="card"><h3>2024</h3><p>Industry-academia center launched.</p></div>
        </div>
      </div>
    </section>
  );
}

export default About;