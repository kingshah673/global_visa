import React from 'react';
import { GraduationCap, Briefcase, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            id: 'student',
            title: 'Student Visa',
            icon: <GraduationCap size={40} />,
            description: 'We help you navigate the complex process of obtaining a student visa for top global destinations.',
            eligibility: ['Confirmed admission from a recognized institution', 'Proof of sufficient funds', 'English language proficiency (IELTS/TOEFL)', 'Clean medical record'],
            documents: ['Valid Passport', 'Letter of Acceptance', 'Financial Statements', 'Academic Transcripts', 'Passport-sized photographs'],
            process: ['Consultation & University Selection', 'Application Submission', 'Offer Letter Receipt', 'Visa Documentation', 'Interview Preparation', 'Visa Filing']
        },
        {
            id: 'work',
            title: 'Work Visa',
            icon: <Briefcase size={40} />,
            description: 'Professional assistance for skilled workers looking to advance their careers in international markets.',
            eligibility: ['A valid job offer from an overseas employer', 'Work experience in relevant field', 'Skills assessment (if required)', 'No criminal record'],
            documents: ['Job Offer Letter / Contract', 'Updated CV & Experience Certificates', 'Police Clearance Certificate', 'Medical Examination Report', 'Educational Credentials'],
            process: ['Initial Assessment', 'Job Search Support (Optional)', 'Liaising with Employer', 'Document Legalization', 'Visa Application Filing', 'Post-Landing Support']
        },
        {
            id: 'visit',
            title: 'Visit / Tourist Visa',
            icon: <Plane size={40} />,
            description: 'Quick and hassle-free processing for tourism, family visits, or short-term business trips.',
            eligibility: ['Clear purpose of visit', 'Sufficient funds for the duration of stay', 'Strong ties to home country (intent to return)', 'Valid travel health insurance'],
            documents: ['Passport valid for 6 months', 'Travel Itinerary', 'Bank Statements (6 months)', 'Employment Proof / NOC', 'Invitation Letter (if applicable)'],
            process: ['Category Selection', 'Checklist Preparation', 'Form Filling', 'Appointment Booking', 'Fee Payment', 'Document Submission']
        }
    ];

    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Visa Services</h1>
                    <p>Comprehensive solutions tailored to your individual migration needs.</p>
                </div>
            </section>

            <div className="container">
                {servicesData.map((service, index) => (
                    <section key={service.id} className={`service-detail ${index % 2 !== 0 ? 'reverse' : ''}`} id={service.id}>
                        <div className="service-info-box">
                            <div className="service-icon-large">{service.icon}</div>
                            <h2>{service.title}</h2>
                            <p className="description">{service.description}</p>

                            <div className="details-grid">
                                <div className="detail-col">
                                    <h3><CheckCircle size={18} /> Eligibility</h3>
                                    <ul>
                                        {service.eligibility.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="detail-col">
                                    <h3><CheckCircle size={18} /> Required Documents</h3>
                                    <ul>
                                        {service.documents.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            <div className="process-box">
                                <h3>Application Process</h3>
                                <div className="process-steps">
                                    {service.process.map((step, i) => (
                                        <div key={i} className="step">
                                            <span className="step-num">{i + 1}</span>
                                            <span className="step-text">{step}</span>
                                            {i < service.process.length - 1 && <ArrowRight className="step-arrow" size={16} />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a href="https://wa.me/1234567890" className="btn btn-primary">Apply for {service.title}</a>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Services;
