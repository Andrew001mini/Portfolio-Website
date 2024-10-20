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
    title: 'Eco Trailz',
    description: 'A comprehensive platform for managing bookings, payments, and user engagement for eco-tourism expeditions.',
    link: 'https://andrew001mini.github.io/Eco-Trailz/',
  },
  {
    title: 'Better.com Clone',
    description: 'This project mimics the features of Better.com, providing users with mortgage solutions and services.',
    link: 'https://andrew001mini.github.io/Better/',
  },
  {
    title: 'Pokemon App',
    description: 'A fun application that allows users to browse and search for Pokemon data.',
    link: 'https://andrew001mini.github.io/pokemon-app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and contact information.',
    link: 'https://andrew001mini.github.io/Portfolio-Website/',
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
