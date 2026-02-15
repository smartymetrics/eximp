// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('mobile-active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('mobile-active');
        });
    });
}

// Testimonials Switching
const testimonials = [
    {
        quote: "Exactly What We Needed - Smooth & Stress-Free!",
        text: "Their team is top tier. Not only did they help us find our ideal plot at a great location, but they made sure we felt like part of the family. And now, we couldn't be happier with our investment!",
        name: "Samuel Nnamdi",
        title: "CEO, TechFlow"
    },
    {
        quote: "Professional Service, Amazing Results!",
        text: "Working with Eximp & Cloves was a game-changer for our investment portfolio. They guided us through every step and delivered beyond our expectations. Highly recommended!",
        name: "Adaeze Okoro",
        title: "Real Estate Investor"
    },
    {
        quote: "Trustworthy and Reliable Partners",
        text: "I was skeptical about land banking, but Eximp & Cloves made the entire process transparent and hassle-free. Their attention to detail and commitment to customer satisfaction is unmatched.",
        name: "Chinedu Okafor",
        title: "Business Owner"
    }
];

let currentTestimonial = 0;

const testimonialNav = document.querySelectorAll('.testimonial-nav .nav-arrow');
if (testimonialNav.length > 0) {
    const updateTestimonial = () => {
        const card = document.querySelector('.testimonial-card');
        if (card) {
            const h2 = card.querySelector('h2');
            const p = card.querySelector('p');
            const strong = card.querySelector('.testimonial-author strong');
            const span = card.querySelector('.testimonial-author span');

            if (h2) h2.textContent = testimonials[currentTestimonial].quote;
            if (p) p.textContent = testimonials[currentTestimonial].text;
            if (strong) strong.textContent = testimonials[currentTestimonial].name;
            if (span) span.textContent = testimonials[currentTestimonial].title;

            // Add fade animation
            card.style.animation = 'fadeIn 0.5s ease';
        }
    };

    // Previous button
    testimonialNav[0].addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    // Next button
    testimonialNav[1].addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });
}

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');

    // Create answer element if it doesn't exist
    if (!item.querySelector('.faq-answer')) {
        const answer = document.createElement('div');
        answer.className = 'faq-answer';
        answer.style.display = 'none';
        answer.style.paddingTop = '1rem';
        answer.style.color = 'var(--text-secondary)';
        answer.style.lineHeight = '1.7';

        // Set answer text based on question
        const questionText = question.querySelector('span').textContent;
        if (questionText.includes('How can I use')) {
            answer.textContent = 'You know the basic plan is free. You can have unlimited personal files use with a team kits and 2 editors. You can also have access to the Shine Library and can publish your scenes with a Shine logo.';
        } else if (questionText.includes('payment methods')) {
            answer.textContent = 'We accept various payment methods including bank transfers, card payments, and flexible installment plans. Contact us for more details on payment options.';
        }

        item.appendChild(answer);
    }

    question.addEventListener('click', function () {
        const answer = item.querySelector('.faq-answer');

        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherToggle = otherItem.querySelector('.faq-toggle');
                if (otherAnswer) {
                    otherAnswer.style.display = 'none';
                }
                if (otherToggle) {
                    otherToggle.textContent = '+';
                }
            }
        });

        // Toggle current FAQ
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '−';
        }
    });
});

// Newsletter form submission
document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing! We\'ll keep you updated.');
        this.reset();
    });
});

// Contact form submission via Resend (Vercel API)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Success! Your inspection booking has been sent.');
                this.reset();
            } else {
                throw new Error(result.error || 'Failed to send');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Property filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Get the location from data attribute
        const location = this.getAttribute('data-location');

        // If no data-location, skip (it's not a location filter)
        if (!location) return;

        // Get the parent section
        const section = this.closest('.featured-section');

        // Remove active class from all buttons in this section
        section.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        this.classList.add('active');

        // Hide all location properties in this section
        section.querySelectorAll('.location-properties').forEach(props => {
            props.classList.remove('active');
        });

        // Show the selected location properties
        const selectedProperties = section.querySelector(`.location-properties[data-location="${location}"]`);
        if (selectedProperties) {
            selectedProperties.classList.add('active');
        }
    });
});

// Price option selection (for property detail pages)
document.querySelectorAll('.price-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.price-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Enhanced Animation on scroll using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal, .property-card, .service-item, .testimonial-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Support for the old logic as well
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    // Set initial state if not already handled by CSS
    if (!el.classList.contains('reveal')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    }
    revealObserver.observe(el);
});

// Mobile menu toggle (if needed in the future)
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('mobile-menu-btn');
    menuBtn.innerHTML = '☰';
    menuBtn.style.display = 'none';

    if (window.innerWidth <= 768) {
        menuBtn.style.display = 'block';
    }

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(menuBtn, navLinks);
};

// Initialize mobile menu if on small screen
if (window.innerWidth <= 768) {
    // createMobileMenu();
}

window.addEventListener('resize', () => {
    // Responsive adjustments can go here
});

console.log('Extimp & Cloves website loaded successfully!');

// WhatsApp Lead Generation
const whatsappNumber = "2349126864383";

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// Redirect all relevant buttons to WhatsApp
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    // Only capture buttons that are meant for booking or contact
    if (btn.textContent.toLowerCase().includes('book') ||
        btn.textContent.toLowerCase().includes('inspection') ||
        btn.textContent.toLowerCase().includes('contact')) {

        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            // If it's a link to another page (like about, services, contact.html), don't block it
            if (href && href.endsWith('.html')) return;

            e.preventDefault();
            const propertyCard = btn.closest('.property-card');
            let message = "Hello Eximp & Cloves, I would like to book an inspection.";

            if (propertyCard) {
                const propertyName = propertyCard.querySelector('h3').textContent;
                message = `Hello Eximp & Cloves, I am interested in booking an inspection for the property: ${propertyName}.`;
            }

            openWhatsApp(message);
        });
    }
});

