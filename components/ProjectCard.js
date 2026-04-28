import React from 'react';
import { Github, Play } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        {/* In a real project, use next/image. Here we use an img tag with placeholder */}
        <img 
          src={project.image || "/api/placeholder/400/200"} 
          alt={project.title} 
          className="project-image" 
        />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-genre">{project.genre}</span>
        </div>
        
        <div className="project-info">
          <p><strong>기간:</strong> {project.duration}</p>
          <p><strong>인원:</strong> {project.teamSize}</p>
        </div>
        
        <p className="project-role">
          <strong>핵심 구현 사항:</strong><br />
          {project.role}
        </p>
        
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={18} /> GitHub
            </a>
          )}
          {project.playLink && (
            <a href={project.playLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <Play size={18} /> Play
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
