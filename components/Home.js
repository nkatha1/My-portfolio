import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">Hello, I'm [Your Name]</h1>
        <p className="home-tagline">A passionate web developer focused on creating innovative and user-friendly applications.</p>
        <a href="#about" className="home-cta">Learn More</a>

        <div className="social-links">
          <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Home;