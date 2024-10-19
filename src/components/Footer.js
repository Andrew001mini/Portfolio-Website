import React from 'react';

const Footer = ({ socialMedia }) => {
  return (
    <footer>
      <p>&copy; 2024 Andrews Immanuvel</p>
      <p>Passionate about web development and design. Always eager to learn more!</p>
      <p>Feel free to reach out for collaborations or just a chat!</p>
      <div className="social-media">
        {socialMedia.instagram && (
          <a href="https://www.instagram.com/andrews_immanuvel/profilecard/?igsh=Y2M5MWxvOHVtMXJh" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        )}
        {socialMedia.email && (
          <a href={`mailto:${socialMedia.email}`}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        )}
        {socialMedia.linkedin && (
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        )}
        {socialMedia.twitter && (
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
