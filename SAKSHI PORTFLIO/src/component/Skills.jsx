import React from 'react';
import '../css/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            icon: '⚙️',
            title: 'Backend Development',
            skills: ['Java', 'Spring Boot', 'Spring MVC', 'RESTful APIs', 'Microservices', 'JDBC', 'OOP']
        },
        {
            icon: '🎨',
            title: 'Frontend Development',
            skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React Hooks', 'Responsive Design']
        },
        {
            icon: '💾',
            title: 'Database & Tools',
            skills: ['MySQL', 'SQL', 'Database Design', 'Query Optimization', 'Git & GitHub', 'Postman']
        },
        {
            icon: '🚀',
            title: 'Other Technologies',
            skills: ['Geolocation API', 'GPS Integration', 'JWT Auth', 'Agile/Scrum', 'VS Code', 'Eclipse']
        }
    ];

    return (
        <section id="skills">
            <div className="section-header">
                <div className="section-subtitle">What I Know</div>
                <h2 className="section-title">Technical Skills</h2>
            </div>
            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h3>
                            <span className="skill-icon">{category.icon}</span>
                            {category.title}
                        </h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, idx) => (
                                <span className="skill-tag" key={idx}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;