import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-list">
        <div className="project-item">
          <h3>Task Manager App</h3>
          <p>A simple task management app to organize your day-to-day tasks.</p>
          <a href="https://github.com/nkatha1/task-manager" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Weather App</h3>
          <p>Weather app that shows real-time weather data for any city.</p>
          <a href="https://github.com/nkatha1/weather-app" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>
        <div className="project-item">
          <h3>Movie Recommendation App</h3>
          <p>An app that recommends movies based on user preferences and ratings.</p>
          <a href="https://github.com/nkatha1/movie-recommendation" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
