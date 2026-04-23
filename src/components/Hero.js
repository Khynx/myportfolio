import React from 'react';
import './Hero.css';

export default function Hero({ name, jobTitle }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{name}</h1>
        <p>{jobTitle}</p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
}
