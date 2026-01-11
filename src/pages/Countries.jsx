import React, { useState } from 'react';
import { ArrowRight, Clock, Shield, Globe, Search } from 'lucide-react';
import './Countries.css';

const Countries = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const countriesData = [
        {
            name: 'Canada',
            image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['Study Permit', 'Express Entry', 'Visitor Visa', 'PGWP'],
            benefits: ['High quality of life', 'Permanent Residency path', 'Diverse culture'],
            processingTime: '8-12 Weeks'
        },
        {
            name: 'United Kingdom',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['Student Visa', 'Skilled Worker Visa', 'Standard Visitor'],
            benefits: ['World-class education', 'Strong economy', 'Rich history'],
            processingTime: '3-8 Weeks'
        },
        {
            name: 'Australia',
            image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['Subclass 500', 'Subclass 189/190', 'Tourist Visa'],
            benefits: ['Great weather', 'High wages', 'Outdoor lifestyle'],
            processingTime: '4-10 Weeks'
        },
        {
            name: 'Germany',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['Student Visa', 'Job Seeker Visa', 'Schengen Visa'],
            benefits: ['Free education (public)', 'Strong industry', 'Central Europe location'],
            processingTime: '6-12 Weeks'
        },
        {
            name: 'USA',
            image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['F1 Student Visa', 'H1-B Visa', 'B1/B2 Visitor'],
            benefits: ['Innovation hub', 'Top universidades', 'Global networking'],
            processingTime: 'Variable'
        },
        {
            name: 'United Arab Emirates',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
            visaOptions: ['Employment Visa', 'Golden Visa', 'Tourist Visa'],
            benefits: ['Tax-free income', 'Modern infrastructure', 'Safe environment'],
            processingTime: '1-3 Weeks'
        }
    ];

    const filteredCountries = countriesData.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="countries-page">
            <section className="page-header">
                <div className="container">
                    <h1>Browse Supported Countries</h1>
                    <p>Explore visa options for the world's most popular destinations.</p>
                    <div className="search-bar">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="grid grid-3">
                    {filteredCountries.map((country, index) => (
                        <div key={index} className="country-card">
                            <div className="country-img">
                                <img src={country.image} alt={country.name} />
                                <div className="country-badge">{country.name}</div>
                            </div>
                            <div className="country-content">
                                <h3>Visa Options</h3>
                                <div className="visa-tags">
                                    {country.visaOptions.map((v, i) => <span key={i} className="visa-tag">{v}</span>)}
                                </div>
                                <div className="country-details">
                                    <div className="detail-item">
                                        <Clock size={16} />
                                        <span><strong>Processing:</strong> {country.processingTime}</span>
                                    </div>
                                    <div className="detail-item">
                                        <Shield size={16} />
                                        <span><strong>Full Support Provided</strong></span>
                                    </div>
                                </div>
                                <div className="benefits-list">
                                    <h4>Benefits:</h4>
                                    <ul>
                                        {country.benefits.map((b, i) => <li key={i}>{b}</li>)}
                                    </ul>
                                </div>
                                <a href="https://wa.me/1234567890" className="btn btn-outline-primary w-full">Apply for {country.name}</a>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredCountries.length === 0 && (
                    <div className="no-results text-center">
                        <h3>No countries found matching "{searchTerm}"</h3>
                        <p>Please try a different search term or contact us for assistance.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Countries;
