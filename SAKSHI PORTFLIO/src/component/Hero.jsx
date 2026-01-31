import React, { useState, useEffect } from 'react';
import '../css/Hero.css';

const Hero = () => {
    // Hero data configuration - easy to update
    const heroData = {
        greeting: "HI THERE, I'M",
        name: "Sakshi Kharchan",
        roles: ["Software Developer", "Full Stack Developer", "Backend Specialist"],
        description: "I build innovative web applications using modern technologies like Spring Boot, React.js, and MySQL. Passionate about creating efficient, scalable solutions that solve real-world problems.",
        buttons: [
            { text: "View My Work", href: "#projects", primary: true },
            { text: "Get In Touch", href: "#contact", primary: false }
        ]
    };

    // Code window data - centralized configuration
    const codeData = {
        className: "SoftwareDeveloper",
        properties: {
            name: "Sakshi Kharchan",
            role: "Software Developer",
            location: "Pune, India"
        },
        skills: ["Spring Boot", "React.js", "MySQL", "RESTful APIs"]
    };

    // Typing animation state
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        const currentRole = heroData.roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseDuration = 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && displayedText === currentRole) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayedText === '') {
                // Move to next role
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % heroData.roles.length);
            } else {
                // Type or delete character
                setDisplayedText(
                    isDeleting
                        ? currentRole.substring(0, displayedText.length - 1)
                        : currentRole.substring(0, displayedText.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex, heroData.roles]);

    // Code line component for cleaner rendering
    const CodeLine = ({ children, indent = 0 }) => (
        <span className="code-line" style={{ paddingLeft: `${indent * 1}rem` }}>
            {children}
        </span>
    );

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                {/* Hero Text Section */}
                <div className="hero-text fade-in">
                    <h1>{heroData.greeting}</h1>
                    <h2>{heroData.name}</h2>
                    <h3 className="typing-animation">
                        {displayedText}
                        <span className="cursor">|</span>
                    </h3>
                    <p>{heroData.description}</p>
                    <div className="hero-buttons">
                        {heroData.buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={`btn ${button.primary ? 'btn-primary' : 'btn-secondary'}`}
                                aria-label={button.text}
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Code Window Section */}
                <div className="hero-image fade-in">
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dot dot-red" aria-hidden="true"></div>
                            <div className="window-dot dot-yellow" aria-hidden="true"></div>
                            <div className="window-dot dot-green" aria-hidden="true"></div>
                        </div>
                        <div className="code-content">
                            <CodeLine>
                                <span className="keyword">class</span>{' '}
                                <span className="function">{codeData.className}</span> {'{'}
                            </CodeLine>

                            <CodeLine indent={1}>
                                <span className="keyword">constructor</span>() {'{'}
                            </CodeLine>

                            {Object.entries(codeData.properties).map(([key, value]) => (
                                <CodeLine key={key} indent={2}>
                                    <span className="keyword">this</span>.{key} ={' '}
                                    <span className="string">"{value}"</span>;
                                </CodeLine>
                            ))}

                            <CodeLine indent={1}>{'}'}</CodeLine>
                            <CodeLine></CodeLine>

                            <CodeLine indent={1}>
                                <span className="function">getSkills</span>() {'{'}
                            </CodeLine>

                            <CodeLine indent={2}>
                                <span className="keyword">return</span> [
                            </CodeLine>

                            {codeData.skills.map((skill, index) => (
                                <CodeLine key={skill} indent={3}>
                                    <span className="string">"{skill}"</span>
                                    {index < codeData.skills.length - 1 ? ',' : ''}
                                </CodeLine>
                            ))}

                            <CodeLine indent={2}>];</CodeLine>
                            <CodeLine indent={1}>{'}'}</CodeLine>
                            <CodeLine>{'}'}</CodeLine>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;