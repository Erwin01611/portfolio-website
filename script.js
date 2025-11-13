/* =================================
   INITIALIZATION
   ================================= */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    initScrollAnimations();
    initSkillBars();
    initSmoothScroll();
    initNavbarScroll();
});

/* =================================
   NAVIGATION MENU
   ================================= */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Highlight active section in navigation
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

/* =================================
   PARTICLE BACKGROUND
   ================================= */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(74, 144, 226, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();

            // Mouse repulsion effect
            if (mouse.x && mouse.y) {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = dx / distance;
                    const directionY = dy / distance;
                    particle.x -= directionX * force * 3;
                    particle.y -= directionY * force * 3;
                }
            }
        });

        // Draw connections
        particles.forEach((a, i) => {
            particles.slice(i + 1).forEach(b => {
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(74, 144, 226, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* =================================
   SCROLL ANIMATIONS
   ================================= */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger skill bar animation if it's a skill section
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBarsInCategory(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.glass-card, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');

        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* =================================
   SKILL BARS ANIMATION
   ================================= */
function initSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateSkillBarsInCategory(entry.target);
            }
        });
    }, observerOptions);

    skillCategories.forEach(category => observer.observe(category));
}

function animateSkillBarsInCategory(category) {
    const skillBars = category.querySelectorAll('.skill-progress');

    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress-width', `${progress}%`);
            bar.classList.add('animate');
        }, index * 100);
    });
}

/* =================================
   SMOOTH SCROLLING
   ================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =================================
   NAVBAR SCROLL EFFECT
   ================================= */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* =================================
   PROJECT CARDS INTERACTION
   ================================= */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

/* =================================
   TYPING EFFECT FOR ROTATING WORDS
   ================================= */
function initRotatingText() {
    const words = document.querySelectorAll('.rotating-words .word');
    let currentIndex = 0;

    function rotateWords() {
        words.forEach((word, index) => {
            word.classList.remove('active');
            if (index === currentIndex) {
                word.classList.add('active');
            }
        });

        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(rotateWords, 2000);
}

initRotatingText();

/* =================================
   SCROLL PROGRESS INDICATOR
   ================================= */
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #4a90e2, #50c878);
        z-index: 9999;
        transition: width 0.2s;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

/* =================================
   ACHIEVEMENT COUNTER ANIMATION
   ================================= */
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^0-9]/g, ''));

    if (isNaN(number)) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);
        if (text === 'Zero') {
            element.textContent = 'Zero';
        } else {
            element.textContent = displayValue + (hasPercent ? '%' : '') + (hasPlus ? '+' : '');
        }
    }, duration / steps);
}

animateCounters();

/* =================================
   DOWNLOAD CV BUTTON
   ================================= */
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Download CV')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Show a message that CV will be available
            alert('CV download will be available soon! For now, please contact via email: farruxmirzaev@outlook.com');
        });
    }
});

/* =================================
   LAZY LOADING OPTIMIZATION
   ================================= */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* =================================
   EASTER EGG - KONAMI CODE
   ================================= */
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);

    if (konamiCode.join('').includes(konamiPattern.join(''))) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add rainbow animation to the hero name
    const heroName = document.querySelector('.hero-name');
    heroName.style.animation = 'rainbow 2s linear infinite';

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Show notification
    const notification = document.createElement('div');
    notification.textContent = '🎉 Easter Egg Activated! 🎉';
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #4a90e2, #50c878);
        color: white;
        padding: 30px 60px;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        animation: fadeInScale 0.5s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOutScale 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

/* =================================
   PERFORMANCE MONITORING
   ================================= */
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
                console.warn('Long task detected:', entry.duration, 'ms');
            }
        }
    });

    try {
        observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
        // Long tasks API not supported
    }
}

/* =================================
   ACCESSIBILITY ENHANCEMENTS
   ================================= */
// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #4a90e2;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10001;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Announce page changes to screen readers
function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => announcement.remove(), 1000);
}

/* =================================
   CONSOLE GREETING
   ================================= */
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #4a90e2;');
console.log('%cThis portfolio was built with vanilla JavaScript, HTML, and CSS.', 'font-size: 14px; color: #50c878;');
console.log('%cInterested in working together? Contact: farruxmirzaev@outlook.com', 'font-size: 14px; color: #4a90e2;');
console.log('%cTry the Konami Code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 12px; color: #a1a1aa;');

/* =================================
   SERVICE WORKER REGISTRATION (PWA)
   ================================= */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added here for PWA functionality
        console.log('Service Worker support detected');
    });
}

/* =================================
   THEME PERSISTENCE
   ================================= */
// Save scroll position before page unload
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
});

// Restore scroll position on page load
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

/* =================================
   ANALYTICS PLACEHOLDER
   ================================= */
// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const scrollDepth = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = Math.round(scrollDepth);
        // Can be integrated with analytics service
        if (maxScrollDepth % 25 === 0) {
            console.log(`Scroll depth milestone: ${maxScrollDepth}%`);
        }
    }
});

/* =================================
   ERROR HANDLING
   ================================= */
window.addEventListener('error', (e) => {
    console.error('Error caught:', e.error);
    // Can be integrated with error tracking service
});

/* =================================
   FINAL INITIALIZATION
   ================================= */
console.log('Portfolio website loaded successfully! ✨');
