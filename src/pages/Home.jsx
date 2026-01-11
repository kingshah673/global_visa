import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, GraduationCap, Briefcase, Plane, CheckCircle, Star, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Your Gateway to a <span>Global Future</span></h1>
                    <p>Expert Visa & Immigration Consultancy for Students, Professionals, and Travelers.</p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn btn-secondary">Get Free Consultation</Link>
                        <Link to="/services" className="btn btn-outline">Explore Services</Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section services-overview">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Premium Services</h2>
                        <p>We provide end-to-end support for all your visa requirements.</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="service-card">
                            <div className="service-icon"><GraduationCap size={40} /></div>
                            <h3>Student Visas</h3>
                            <p>Achieve your educational goals in top universities across the UK, Canada, Australia, and more.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Briefcase size={40} /></div>
                            <h3>Work Visas</h3>
                            <p>Find the best career opportunities abroad with our professional work permit assistance.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Plane size={40} /></div>
                            <h3>Visit Visas</h3>
                            <p>Explore the world with ease. We handle the paperwork while you plan your next adventure.</p>
                            <Link to="/services" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-light">
                <div className="container">
                    <div className="grid grid-2 items-center">
                        <div className="why-content">
                            <h2>Why Choose GlobalVisa?</h2>
                            <p className="mb-3">With over 10 years of experience, we have helped thousands of individuals achieve their dreams of moving abroad.</p>
                            <ul className="why-list">
                                <li><CheckCircle size={20} /> <span>100% Transparency & Legal Compliance</span></li>
                                <li><CheckCircle size={20} /> <span>High Success Rate in Visa Approvals</span></li>
                                <li><CheckCircle size={20} /> <span>Expert Legal & Documentation Support</span></li>
                                <li><CheckCircle size={20} /> <span>Personalized Counseling Sessions</span></li>
                            </ul>
                        </div>
                        <div className="why-stats grid grid-2">
                            <div className="stat-box">
                                <h3>10+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-box">
                                <h3>5000+</h3>
                                <p>Visas Approved</p>
                            </div>
                            <div className="stat-box">
                                <h3>50+</h3>
                                <p>Partner Universities</p>
                            </div>
                            <div className="stat-box">
                                <h3>15+</h3>
                                <p>Countries Supported</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Client Success Stories</h2>
                        <p>Hear from those who have successfully relocated with our help.</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p>"The team at GlobalVisa made my UK student visa process so smooth. I highly recommend their services!"</p>
                            <div className="client-info">
                                <strong>Ahmed Khan</strong>
                                <span>Student, Oxford University</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p>"Got my Canada work permit within 3 months. Professional and transparent throughout the process."</p>
                            <div className="client-info">
                                <strong>Sarah Johnson</strong>
                                <span>Software Engineer</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p>"Amazing experience for my family visit visa to UAE. Everything was handled perfectly."</p>
                            <div className="client-info">
                                <strong>Mohammad Ali</strong>
                                <span>Business Owner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
