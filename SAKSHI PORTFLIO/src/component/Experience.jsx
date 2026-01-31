import React from 'react';
import '../css/Experience.css';

const Experience = () => {
    const experience = {
        title: 'Software Developer Intern',
        company: 'GSOFT Solutions Pvt Ltd',
        date: 'December 2024 – May 2025',
        responsibilities: [
            'Developed RESTful APIs using Spring Boot and JDBC, achieving 40% faster data retrieval performance',
            'Built responsive user interfaces with React.js and Bootstrap, reducing page load time by 30%',
            'Implemented secure authentication and role-based authorization using Spring Security and JWT',
            'Optimized MySQL database queries through indexing and normalization, reducing execution time by 25%',
            'Collaborated in Agile environment with daily standups, sprint reviews, and code reviews',
            'Utilized GitHub for version control and Postman for comprehensive API testing'
        ]
    };

    return (
        <section id="experience">
            <div className="section-header">
                <div className="section-subtitle">Career Path</div>
                <h2 className="section-title">Professional Experience</h2>
            </div>
            <div className="experience-card">
                <div className="experience-header">
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="experience-company">{experience.company}</div>
                    <div className="experience-date">{experience.date}</div>
                </div>
                <ul className="experience-list">
                    {experience.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;