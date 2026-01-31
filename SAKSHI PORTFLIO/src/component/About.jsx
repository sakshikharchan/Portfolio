import React from 'react';
import '../css/About.css';

const About = () => {
    const stats = [
        { number: '6+', label: 'Months Experience' },
        { number: '10+', label: 'Projects Completed' },
        { number: '15+', label: 'Technologies' },
        { number: '200+', label: 'GitHub Commits' }
    ];

    return (
        <section id="about">
            <div className="section-header">
                <div className="section-subtitle">Get To Know</div>
                <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Hello! I'm Sakshi Kharchan, a passionate <strong>Software Developer</strong> based in Pune,
                        Maharashtra. I specialize in building modern web applications using cutting-edge technologies.
                    </p>
                    <p>
                        With expertise in both frontend and backend development, I create seamless full-stack solutions.
                        My experience includes developing location-based systems, e-commerce platforms, and implementing
                        secure authentication mechanisms.
                    </p>
                    <p>
                        Currently, I'm completing an intensive internship at GSOFT Solutions, where I've worked on
                        production-grade applications, optimized database performance, and collaborated in Agile teams.
                    </p>
                    <p>
                        I graduated with a <strong>B.Tech in Computer Science and Engineering</strong> from Shreeyash
                        College of Engineering and Technology, affiliated with DBATU University.
                    </p>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;