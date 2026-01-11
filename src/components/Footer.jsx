import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <Link to="/" className="logo footer-logo">
                            <Globe className="logo-icon" />
                            <span className="logo-text">Global<span>Visa</span></span>
                        </Link>
                        <p className="footer-desc">
                            Your trusted partner for worldwide visa and immigration services. We help students and professionals achieve their dreams.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/countries">Countries</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Visa Services</h3>
                        <ul>
                            <li><Link to="/services">Student Visa</Link></li>
                            <li><Link to="/services">Work Visa</Link></li>
                            <li><Link to="/services">Tourist Visa</Link></li>
                            <li><Link to="/services">Business Visa</Link></li>
                            <li><Link to="/services">Family Visa</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <MapPin size={20} className="contact-icon" />
                                <span>123 Business Avenue, Suite 100, City, Country</span>
                            </li>
                            <li>
                                <Phone size={20} className="contact-icon" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li>
                                <Mail size={20} className="contact-icon" />
                                <span>info@globalvisa.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GlobalVisa Consultancy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
