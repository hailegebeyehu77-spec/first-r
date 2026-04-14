import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Assuming you will create a separate CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;