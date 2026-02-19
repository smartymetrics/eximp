import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Reveal from '../components/Reveal';
import { propertiesArray } from '../data/propertiesData';

const Properties = () => {
    const [filter, setFilter] = useState('all');

    const filteredProperties = filter === 'all'
        ? propertiesArray
        : propertiesArray.filter(p =>
            (p.state && p.state.toLowerCase() === filter) ||
            (p.location && p.location.toLowerCase().includes(filter))
        );

    return (
        <div className="properties-page">
            <section className="property-hero" style={{ backgroundImage: "url('/second_services_hero_background.png')" }}>
                <div className="container">
                    <Reveal>
                        <div className="property-hero-content">
                            <h1>Our Verified Listings</h1>
                            <p>Explore prime land investments across Nigeria's most strategic states.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="properties-section" style={{ padding: "4rem 0" }}>
                <div className="container">
                    <Reveal y={20}>
                        <div className="property-filters">
                            {['all', 'abuja', 'lagos', 'ogun'].map(loc => (
                                <button
                                    key={loc}
                                    className={`filter-btn ${filter === loc ? 'active' : ''}`}
                                    onClick={() => setFilter(loc)}
                                >
                                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    <div className="properties-grid">
                        {filteredProperties.map((p, idx) => (
                            <Reveal key={p.id || idx} delay={idx * 0.1}>
                                <PropertyCard {...p} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Properties;
