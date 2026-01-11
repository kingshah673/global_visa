import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        visaType: 'Student',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send an email or API call
        const whatsappMsg = encodeURIComponent(`New Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nVisa: ${formData.visaType}\nMessage: ${formData.message}`);
        window.open(`https://wa.me/1234567890?text=${whatsappMsg}`, '_blank');
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>We are here to answer all your travel and visa queries.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="contact-form-container">
                            <h2>Send an Inquiry</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" required placeholder="+1 234 567 890" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Visa Type</label>
                                    <select name="visaType" onChange={handleChange}>
                                        <option value="Student">Student Visa</option>
                                        <option value="Work">Work Visa</option>
                                        <option value="Visit">Visit / Tourist Visa</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Additional Message</label>
                                    <textarea name="message" rows="4" placeholder="How can we help you?" onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full btn-with-icon">
                                    Submit via WhatsApp <MessageCircle size={20} />
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-container">
                            <h2>Contact Details</h2>
                            <div className="contact-methods">
                                <div className="method-card">
                                    <MapPin size={24} />
                                    <div>
                                        <h3>Office Address</h3>
                                        <p>123 Business Avenue, Suite 100, City, Country</p>
                                    </div>
                                </div>
                                <div className="method-card">
                                    <Phone size={24} />
                                    <div>
                                        <h3>Phone Number</h3>
                                        <p>+1 234 567 890</p>
                                    </div>
                                </div>
                                <div className="method-card">
                                    <Mail size={24} />
                                    <div>
                                        <h3>Email Address</h3>
                                        <p>info@globalvisa.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="map-container">
                                <iframe
                                    title="office-location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.28580226!2d67.042295!3d24.860163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM2LjYiTiA2N8KwMDInMzIuMyJF!5e0!3m2!1sen!2s!4v1580000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
