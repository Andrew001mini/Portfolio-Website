import React from 'react';

const portfolioData = [
  {
    title: 'YouTube Clone',
    description: 'This project is a YouTube clone that allows users to watch videos, search, and navigate like YouTube. It includes features like responsive design and real-time video updates.',
    link: 'https://andrew001mini.github.io/youtubeClone/', // Updated link
  },
  {
    title: 'Healthcare Services Manager',
    description: 'This React web application allows users to manage a list of healthcare services. Users can add, update, and delete services, with form validation for required fields.',
    link: 'https://andrew001mini.github.io/Healthcare-Services-Manager/',
  },
  // You can add more projects here
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="portfolio-grid">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
