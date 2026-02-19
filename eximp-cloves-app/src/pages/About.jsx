import React from 'react';
import Reveal from '../components/Reveal';
import TrustGrid from '../components/TrustGrid';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero" style={{ backgroundImage: "url('/about_hero_background.png')" }}>
                <div className="container">
                    <Reveal>
                        <div className="about-hero-content">
                            <h1>Building the Future of Nigeria Through Generational Wealth</h1>
                            <p>
                                Eximp & Cloves Infrastructure Limited is more than a real estate company.
                                We are architects of the new Nigerian dream, securing wealth through strategic land banking.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="vision-mission">
                <div className="container">
                    <div className="vm-grid">
                        <Reveal x={-50}>
                            <div className="vm-image">
                                <img src="/our_vision_image.png" alt="Our Vision" />
                            </div>
                        </Reveal>
                        <Reveal x={50}>
                            <div className="vm-content">
                                <div className="vm-item">
                                    <h2>Our Mission</h2>
                                    <p>To provide accessible, high-yield real estate investment opportunities for Nigerians locally and in the diaspora, ensuring that landed property is a tool for generational financial freedom.</p>
                                </div>
                                <div className="vm-item">
                                    <h2>Our Vision</h2>
                                    <p>To be the most trusted name in Nigerian infrastructure, known for transparency, verified land titles, and pioneering developments in emerging urban centers.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <TrustGrid />

            <section className="values-section">
                <div className="container">
                    <Reveal>
                        <div className="values-content">
                            <h2>Our Core Values</h2>
                            <p>Integrity, Vision, Community, and Excellence form the bedrock of every Eximp & Cloves development.</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
