import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import Reveal from '../components/Reveal';
import TrustGrid from '../components/TrustGrid';
import { propertiesArray } from '../data/propertiesData';

const Home = () => {
    // Show first 4 properties on home page
    const featuredProperties = propertiesArray.slice(0, 4);

    return (
        <div className="home-page">
            <section className="hero" style={{ backgroundImage: "url('/home_background.png')" }}>
                <div className="container">
                    <div className="hero-content">
                        <Reveal>
                            <div className="hero-text">
                                <h1>Jump on Premium Land Investments in Nigeria with Zero Stress</h1>
                                <p>Invest in Nigeria's fastest-growing locations with flexible payment plans. Join thousands of smart investors building generational wealth through verified land banking.</p>
                                <div className="hero-buttons">
                                    <Link to="/properties" className="btn-primary">Explore Properties</Link>
                                    <Link to="/contact" className="btn-secondary">Book for Inspection</Link>
                                </div>
                            </div>
                        </Reveal>

                        <div className="hero-cards">
                            <Reveal delay={0.1} y={50}>
                                <div className="stat-card">
                                    <div className="stat-icon">📍</div>
                                    <div className="stat-text">
                                        <span className="stat-label">Prime Locations </span>
                                        <span className="stat-value">in 3 States</span>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2} y={50}>
                                <div className="stat-card dark">
                                    <div className="stat-icon">⚡</div>
                                    <div className="stat-text">
                                        <span className="stat-label">Quick ROI </span>
                                        <span className="stat-value">6-12 Months</span>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.3} y={50}>
                                <div className="stat-card">
                                    <div className="stat-icon">👤</div>
                                    <div className="stat-text">
                                        <span className="stat-label">Happy Clients</span>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4} y={50}>
                                <div className="stat-card highlight">
                                    <div className="stat-number">5+</div>
                                    <div className="stat-text">Years in Nigeria</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <TrustGrid />

            {/* Featured Section */}
            <section className="featured-section" style={{ padding: "5rem 0" }}>
                <div className="container">
                    <Reveal>
                        <div className="section-header">
                            <h2>Featured Premium Properties</h2>
                            <p>Hand-picked, high-growth investment opportunities in Abuja, Lagos, and Ogun.</p>
                        </div>
                    </Reveal>

                    <div className="properties-carousel-wrapper">
                        <div className="properties-grid">
                            {featuredProperties.map((p, idx) => (
                                <Reveal key={p.id || idx} delay={idx * 0.2}>
                                    <PropertyCard {...p} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
