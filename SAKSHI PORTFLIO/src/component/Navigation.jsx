import React from 'react';
import '../css/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    Sakshi<span>Kharchan</span>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;