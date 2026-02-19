import React from 'react';
import Reveal from '../components/Reveal';

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-hero" style={{ backgroundImage: "url('/first_services_hero_background.png')" }}>
                <div className="container">
                    <Reveal>
                        <div className="services-hero-content">
                            <h1>Unmatched Expertise in Infrastructure</h1>
                            <p>From strategic land acquisition to master-planned development, we handle the complexity so you can enjoy the wealth.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="services-detail-section" style={{ padding: "5rem 0" }}>
                <div className="container">
                    <div className="services-main-grid">
                        <Reveal delay={0.1}>
                            <div className="service-feature-card">
                                <h3>Land Banking</h3>
                                <p>Strategically acquiring land in high-growth corridors to secure massive ROI for our clients.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="service-feature-card">
                                <h3>Urban Development</h3>
                                <p>Crafting master-planned communities with modern infrastructure, drainage, and security.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="service-feature-card">
                                <h3>Construction</h3>
                                <p>Expert building services adhering to the highest structural standards in the industry.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="service-feature-card">
                                <h3>Portfolio Advisory</h3>
                                <p>Data-driven insights to help you build a diversified real estate portfolio in Nigeria.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
