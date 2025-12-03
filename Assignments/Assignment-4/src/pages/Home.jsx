// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    
<section className="home">
            
      <div className="hero">
        <h1>Discover Your Future at My College</h1>
        <p>Empowering students through innovation, excellence, and community.</p>
        <div>
          <Link to="/departments" className="btn">Explore Departments</Link>
          <Link to="/about" className="btn btn-outline">Why This College?</Link>
        </div>
      </div>

      <div className="why">
        <h2>Why this college?</h2>
        <ul className="why-list">
          <li>Experienced Faculty</li>
          <li>Industry Partnerships</li>
          <li>Modern Labs & Facilities</li>
          <li>Strong Placement Support</li>
        </ul>
      </div>

      <div className="top-depts">
        <h2>Top Departments</h2>
        <div className="cards">
          <div className="mini-card"><h3>CSE</h3><p>Software, AI, and systems.</p></div>
          <div className="mini-card"><h3>ECE</h3><p>Circuits and communication.</p></div>
          <div className="mini-card"><h3>Mechanical</h3><p>Design and manufacturing.</p></div>
        </div>
      </div>
    </section>
  );
}

export default Home;