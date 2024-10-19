import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="profile">
        <img
          src="https://akns-images.eonline.com/eol_images/Entire_Site/2013712/rs_634x1024-130812180503-634.dude.ls.81213_copy.jpg"
          alt="Andrews Immanuvel"
          className="profile-image"
        />
        <div className="profile-info">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Andrews Immanuvel, a passionate front-end developer.</p>
        </div>
      </div>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I specialize in creating responsive and user-friendly web applications.
          My passion for coding started at a young age, and I've honed my skills
          through various projects and experiences.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript (React.js, Redux)</li>
          <li>Responsive Design</li>
          <li>Version Control (Git)</li>
          <li>APIs and AJAX</li>
        </ul>
      </section>

     

      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <p>Email: andrewsimmanuvel056@gmail.com</p>
      </section>
    </div>
  );
};

export default Home;
