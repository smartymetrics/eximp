import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/logo.svg" alt="Eximp & Cloves Logo" />
                        </Link>
                        <p>Nigeria's most trusted name in premium land banking and architectural infrastructure. RC 8311800</p>
                        <div className="social-links-footer">
                            <a href="https://facebook.com/eximp.cloves" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                            <a href="https://instagram.com/eximp.cloves" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                            <a href="https://x.com/eximp_cloves" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/company/eximp-cloves" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                            <a href="https://tiktok.com/@eximp.cloves" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Contact Support</h4>
                        <ul>
                            <li className="contact-item">
                                <Phone size={16} /> <span>+234 912 686 4383</span>
                            </li>
                            <li><Link to="/contact">Book Inspection</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Newsletter</h4>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Join our community for prime investment updates.</p>
                        <div className="footer-newsletter-embed">
                            <iframe
                                src="https://eximpcloves.substack.com/embed"
                                width="100%"
                                height="150"
                                style={{ border: '1px solid #EEE', background: 'white', borderRadius: '8px' }}
                                frameBorder="0"
                                scrolling="no"
                                title="Newsletter Subscribe"
                            ></iframe>
                        </div>
                        <div className="coinfield-link" style={{ marginTop: '1.5rem' }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Check out our Estate news:</p>
                            <a href="https://eximpcloves.substack.com" className="link-underlined">Read our Newsletter</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Office Location</h4>
                        <ul>
                            <li><MapPin size={16} /> 16 Adeola Hopewell St, Victoria Island, Lagos 106104, Lagos, Nigeria</li>
                            {/* <li><MapPin size={16} /> </li> */}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Eximp & Cloves Infrastructure Limited. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy </Link>
                        <Link to="/terms"> Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
