import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
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
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
