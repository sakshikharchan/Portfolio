import React from 'react';
import '../css/Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'kharchansakshi88@gmail.com',
            link: 'mailto:kharchansakshi88@gmail.com'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+91 7887392148',
            link: 'tel:+917887392148'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Connect',
            link: 'https://linkedin.com/in/sakshi-kharchan'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: 'Follow',
            link: 'https://github.com/sakshikharchan'
        }
    ];

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="section-subtitle">Let's Connect</div>
                <h2>Get In Touch</h2>
                <p>
                    I'm currently looking for new opportunities and would love to hear from you.
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="contact-grid">
                    {contactInfo.map((item, index) => (
                        <div className="contact-item" key={index}>
                            <div className="contact-icon">{item.icon}</div>
                            <div className="contact-label">{item.label}</div>
                            <div className="contact-value">
                                <a
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {item.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;