import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Map, Receipt, Award, Key } from 'lucide-react';
import Reveal from './Reveal';

const TrustGrid = () => {
    const documents = [
        {
            title: "Deed of Assignment",
            description: "Legal transfer of ownership rights from the developer to the investor.",
            icon: <FileText size={24} />
        },
        {
            title: "Contract of Sales",
            description: "The formal binding agreement outlining terms, conditions, and pricing.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Provisional Survey",
            description: "Initial mapping and boundary definition for your specific plot.",
            icon: <Map size={24} />
        },
        {
            title: "Payment Receipt",
            description: "Immediate financial proof of your investment and cleared funds.",
            icon: <Receipt size={24} />
        },
        {
            title: "Acknowledgement Certificate",
            description: "Official recognition of your investment status within the estate.",
            icon: <Award size={24} />
        },
        {
            title: "Allocation Letter",
            description: "Specific plot assignment detailing the physical location of your land.",
            icon: <Key size={24} />
        }
    ];

    return (
        <section className="trust-section">
            <div className="container">
                <Reveal>
                    <div className="section-header centered">
                        <span className="subtitle">Secure Your Wealth</span>
                        <h2>The Six Pillars of Ownership</h2>
                        <p>At Eximp & Cloves, transparency is our foundation. Every property investment comes with full legal documentation delivered promptly.</p>
                    </div>
                </Reveal>

                <div className="trust-grid">
                    {documents.map((doc, idx) => (
                        <Reveal key={idx} delay={idx * 0.1}>
                            <div className="trust-card">
                                <div className="trust-icon">
                                    {doc.icon}
                                </div>
                                <h3>{doc.title}</h3>
                                <p>{doc.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustGrid;
