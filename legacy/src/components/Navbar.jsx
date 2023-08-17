
import { useState } from 'react';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="https://i.ibb.co/ch3V51s/Legacy-Logo.png" alt="Logo" />
        <h4>egacy Independent Services</h4>
      </div>

      {/* Main Menu */}
      <div className={`menu ${menuVisible ? 'mobile-menu-active' : ''}`}>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact-us">Contact Us</a>
      </div>

      {/* Hamburger Menu */}
      <i className="fa-solid fa-bars hamburger-menu" onClick={toggleMenu}></i>
      <div className={`hamburger-menu-container ${menuVisible ? 'active' : ''}`}>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;

