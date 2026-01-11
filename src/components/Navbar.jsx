import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Globe className="logo-icon" />
          <span className="logo-text">Global<span>Visa</span></span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/countries" onClick={closeMenu}>Countries</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link to="/contact" className="nav-cta mobile-only" onClick={closeMenu}>Apply Now</Link>
        </div>

        <div className="nav-actions">
          <a href="tel:+1234567890" className="nav-phone hide-mobile">
            <Phone size={18} />
            <span>+1 234 567 890</span>
          </a>
          <Link to="/contact" className="nav-cta hide-mobile">Apply Now</Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
