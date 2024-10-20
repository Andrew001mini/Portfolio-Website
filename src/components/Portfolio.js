import React from 'react';

const portfolioData = [
  {
    title: 'YouTube Clone',
    description: 'This project is a YouTube clone that allows users to watch videos, search, and navigate like YouTube. It includes features like responsive design and real-time video updates.',
    link: 'https://andrew001mini.github.io/youtubeClone/',
  },
  {
    title: 'Healthcare Services Manager',
    description: 'This React web application allows users to manage a list of healthcare services. Users can add, update, and delete services, with form validation for required fields.',
    link: 'https://andrew001mini.github.io/Healthcare-Services-Manager/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, skills, and experiences, designed with a minimalistic approach.',
    link: 'https://andrew001mini.github.io/Portfolio-Website/',
  },
  {
    title: 'Eco-Trailz',
    description: 'A comprehensive platform for managing eco-tourism bookings, payments, and user engagement with dynamic features.',
    link: 'https://andrew001mini.github.io/Eco-Trailz/',
  },
  {
    title: 'Better',
    description: 'A web application that provides various services with a user-friendly interface and efficient functionality.',
    link: 'https://andrew001mini.github.io/Better/',
  },
  {
    title: 'Pokemon App',
    description: 'A fun project that allows users to browse and search for different Pokemon, displaying their details and stats.',
    link: 'https://andrew001mini.github.io/pokemon-app/',
  },
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
