// Animation Functions
// All animation logic separated for better organization

// ====================================
// PARTICLE BACKGROUND ANIMATION
// ====================================
export function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

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
            this.parallaxX = 0;
            this.parallaxY = 0;
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
            const drawX = this.x + (this.parallaxX || 0);
            const drawY = this.y + (this.parallaxY || 0);

            ctx.fillStyle = `rgba(74, 144, 226, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(drawX, drawY, this.size, 0, Math.PI * 2);
            ctx.fill();

            // Add glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(74, 144, 226, ${this.opacity * 0.5})`;
        }
    }

    // Create particles
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Mouse interaction with parallax
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };

    let scrollOffset = 0;

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;

        // Parallax effect for particles based on mouse position
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const deltaX = (e.x - centerX) / centerX;
        const deltaY = (e.y - centerY) / centerY;

        particles.forEach(particle => {
            particle.parallaxX = deltaX * 20;
            particle.parallaxY = deltaY * 20;
        });
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;

        // Reset parallax
        particles.forEach(particle => {
            particle.parallaxX = 0;
            particle.parallaxY = 0;
        });
    });

    // Scroll-based parallax
    window.addEventListener('scroll', () => {
        scrollOffset = window.pageYOffset * 0.5;
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

// ====================================
// SCROLL ANIMATIONS
// ====================================
export function initScrollAnimations() {
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

// ====================================
// SKILL BARS ANIMATION
// ====================================
export function initSkillBars() {
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

// ====================================
// MICRO-INTERACTIONS
// ====================================
export function initMicroInteractions() {
    // Button press effect
    const buttons = document.querySelectorAll('.btn, .tech-tag, .tag');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Smooth card entrance animations
    const cards = document.querySelectorAll('.glass-card, .project-card, .education-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Icon hover animations
    const icons = document.querySelectorAll('.category-header i, .project-icon, .achievement-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg) scale(1.2)';
            this.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    // Add ripple effect to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ====================================
// ACHIEVEMENT COUNTER ANIMATION
// ====================================
export function animateCounters() {
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
