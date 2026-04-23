import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  // Validate URLs - if they're empty, #, or invalid, disable the buttons
  const isValidUrl = (url) => {
    return url && url.trim() !== '' && url !== '#' && url.startsWith('http');
  };

  const liveUrl = isValidUrl(project.liveUrl) ? project.liveUrl : null;
  const githubUrl = isValidUrl(project.githubUrl) ? project.githubUrl : null;

  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          ) : (
            <button disabled className="btn btn-primary" title="Coming soon">
              Live Demo
            </button>
          )}
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Code
            </a>
          ) : (
            <button disabled className="btn btn-secondary" title="Coming soon">
              View Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
