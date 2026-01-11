import React from 'react';
import { Target, Users, Award, ShieldCheck, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <h1>About GlobalVisa</h1>
                    <p>Your journey to a new beginning starts with us.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2 items-center">
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" alt="Our Professional Team" />
                        </div>
                        <div className="about-text">
                            <h2>Providing Trusted Visa Solutions Since 2015</h2>
                            <p>GlobalVisa Consultancy was founded with a single mission: to make the international migration process transparent, accessible, and successful for everyone.</p>
                            <p>We understand that moving to a new country is a life-changing decision. That's why we provide personalized attention to every case, ensuring that your documentation is perfect and your application stands the best chance of approval.</p>

                            <div className="values-grid">
                                <div className="value-item">
                                    <Target size={24} />
                                    <div>
                                        <h4>Our Mission</h4>
                                        <p>To empower global mobility through expert guidance and ethical practices.</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <ShieldCheck size={24} />
                                    <div>
                                        <h4>Our Ethics</h4>
                                        <p>100% transparency and legal compliance in every application we handle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Strength</h2>
                        <p>Why we are the preferred choice for thousands of applicants.</p>
                    </div>
                    <div className="grid grid-4">
                        <div className="feature-box">
                            <Users size={32} />
                            <h3>Expert Team</h3>
                            <p>Certified consultants with years of experience in immigration laws.</p>
                        </div>
                        <div className="feature-box">
                            <Award size={32} />
                            <h3>Proven Success</h3>
                            <p>Over 95% success rate across all visa categories and countries.</p>
                        </div>
                        <div className="feature-box">
                            <ShieldCheck size={32} />
                            <h3>Data Security</h3>
                            <p>Your personal documentation is handled with the highest level of privacy.</p>
                        </div>
                        <div className="feature-box">
                            <MapPin size={32} />
                            <h3>Global Reach</h3>
                            <p>Partnerships with universities and employers across 15+ countries.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
