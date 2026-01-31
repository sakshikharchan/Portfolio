import React from 'react';
import '../css/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Smart Equipment Sharing System',
            type: 'Full-Stack',
            description: 'An innovative GPS-enabled platform that helps farmers discover and rent nearby agricultural equipment. Features real-time location tracking, secure booking system, and role-based dashboards.',
            technologies: ['React.js', 'Spring Boot', 'MySQL', 'Geolocation API', 'GPS', 'Haversine Formula'],
            features: [
                'Integrated Geolocation API for real-time coordinate capture with high accuracy',
                'Implemented Haversine formula for precise distance calculation between users and equipment',
                'Built secure role-based dashboards with JWT authentication',
                'Developed comprehensive RESTful APIs for CRUD operations and booking management',
                'Engineered fallback mechanism ensuring 100% system accessibility'
            ]
        },
        {
            title: 'E-Commerce Platform',
            type: 'Full-Stack',
            description: 'A complete e-commerce solution with product management, shopping cart, order processing, and multi-role dashboards for seamless online shopping experience.',
            technologies: ['React.js', 'Spring Boot', 'MySQL', 'JDBC', 'Bootstrap', 'React Router'],
            features: [
                'Built full-stack application with product browsing, cart, and order management',
                'Created role-specific dashboards for Admin, Seller, and Buyer',
                'Implemented React state management using Context API and Hooks',
                'Designed normalized database schema with proper indexing and relationships'
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="section-header">
                <div className="section-subtitle">My Work</div>
                <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-content">
                            <div className="project-header">
                                <div>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>
                                <span className="project-type">{project.type}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span className="tech-tag" key={idx}>{tech}</span>
                                ))}
                            </div>
                            <ul className="project-features">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;