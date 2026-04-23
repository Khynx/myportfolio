import React from 'react';
import './About.css';

export default function About({ bio }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
