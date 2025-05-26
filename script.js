// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                    otherItem.querySelector('.faq-icon').textContent = '+';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.classList.remove('active');
                icon.textContent = '+';
            } else {
                item.classList.add('active');
                answer.classList.add('active');
                icon.textContent = '−';
            }
        });
    });
    
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
    
    // Button click tracking (for analytics)
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            // Here you would typically send analytics data
            // Example: gtag('event', 'click', { 'button_text': buttonText });
            
            // For demo purposes, show an alert
            if (buttonText.includes('Beta') || buttonText.includes('Demo')) {
                alert(`Thank you for your interest! This would normally redirect to a signup/booking form.`);
            }
        });
    });
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Reset first section to be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// Form validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add keyboard navigation for FAQ
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('faq-question')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Performance optimization: Lazy load images when they're added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages(); 