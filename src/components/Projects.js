import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects({ projects, onAddClick }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Explore my latest work and projects</p>
          </div>
          {/* TODO: Uncomment button below when ready to add new projects
          <button className="btn btn-primary add-project-btn" onClick={onAddClick}>
            + Add Project
          </button>
          */}
        </div>
        
        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects yet. Click "Add Project" to showcase your work!</p>
          </div>
        )}
      </div>
    </section>
  );
}
