import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with real number
    const message = encodeURIComponent('Hello! I would like to inquire about visa services.');

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">Chat with us</span>
        </a>
    );
};

export default FloatingWhatsApp;
