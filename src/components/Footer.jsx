// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="bg-[black] text-white py-4 border-t-[0.5px]">
  <div className="container mx-auto text-center flex justify-between items-center">
    <div>
      <p>&copy; 2024 Elias Abashidze. All rights reserved.</p>
    </div>

    {/* Social network links with icons */}
    <div className="mt-4">
      <a href="https://github.com/Elias-TTT" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/elias-abashidze-7aab11235/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.instagram.com/p/Cpicobvp7LW/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  </div>
</footer>
  );
}

export default Footer;
