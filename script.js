/**
 * Transbirday - Company Rules Landing Page
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize all app functionalities
 */
function initializeApp() {
    updateDynamicDates();
    setupScrollAnimations();
    setupSmoothScrolling();
    addInteractiveEffects();
}

/**
 * Update dynamic dates in the footer
 */
function updateDynamicDates() {
    // Update current year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Update last updated date
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const formattedDate = new Date().toLocaleDateString('pt-BR', options);
        lastUpdatedElement.textContent = formattedDate;
    }
}

/**
 * Setup Intersection Observer for scroll animations
 */
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all rule cards
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe other sections
    const sections = document.querySelectorAll('.intro-section, .notice-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Add interactive effects to elements
 */
function addInteractiveEffects() {
    // Add ripple effect to rule cards
    const ruleCards = document.querySelectorAll('.rule-card');
    
    ruleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    // Add parallax effect to background decoration
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const bgDecoration = document.querySelector('.bg-decoration');
        
        if (bgDecoration) {
            bgDecoration.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add hover sound effect to important elements (optional)
    setupAccessibilityFeatures();
}

/**
 * Create ripple effect on click
 * @param {Event} event - Click event
 * @param {HTMLElement} element - Target element
 */
function createRipple(event, element) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    
    // Get click position relative to element
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add('ripple');
    
    // Add ripple styles
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.background = 'rgba(74, 144, 226, 0.3)';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple-animation 0.6s ease-out';
    circle.style.pointerEvents = 'none';
    
    // Ensure element has relative positioning
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    
    // Remove existing ripples
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    element.appendChild(circle);
    
    // Remove ripple after animation
    setTimeout(() => {
        circle.remove();
    }, 600);
}

/**
 * Setup accessibility features
 */
function setupAccessibilityFeatures() {
    // Add keyboard navigation for rule cards
    const ruleCards = document.querySelectorAll('.rule-card');
    
    ruleCards.forEach((card, index) => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Regra ${index + 1}`);
        
        // Add keyboard event listeners
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                createRipple(e, this);
            }
        });
    });
    
    // Add skip to content link for screen readers
    addSkipToContentLink();
}

/**
 * Add skip to content link for accessibility
 */
function addSkipToContentLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-to-content';
    
    // Add styles for skip link
    skipLink.style.position = 'absolute';
    skipLink.style.top = '-40px';
    skipLink.style.left = '0';
    skipLink.style.background = 'var(--color-primary)';
    skipLink.style.color = 'white';
    skipLink.style.padding = '8px';
    skipLink.style.textDecoration = 'none';
    skipLink.style.zIndex = '1000';
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ID to main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
}

/**
 * Add CSS animation for ripple effect
 */
(function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
})();

/**
 * Performance optimization: Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Add mobile-specific optimizations
 */
if (isMobileDevice()) {
    // Add mobile class to body
    document.body.classList.add('mobile-device');
    
    // Optimize animations for mobile
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        card.style.transition = 'all 0.2s ease-in-out';
    });
}

/**
 * Handle page visibility change
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden - pause animations if needed
        console.log('Page hidden');
    } else {
        // Page is visible - resume animations
        console.log('Page visible');
    }
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateDynamicDates,
        setupScrollAnimations,
        createRipple,
        debounce,
        isMobileDevice
    };
}
