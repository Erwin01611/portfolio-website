// Main JavaScript Entry Point
// This file initializes everything when the page loads

import { renderAllContent } from './components.js';
import {
    initParticles,
    initScrollAnimations,
    initSkillBars,
    initMicroInteractions,
    animateCounters
} from './animations.js';

// ====================================
// PAGE LOADER
// ====================================
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    });
}

// ====================================
// NAVIGATION MENU
// ====================================
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

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

// ====================================
// SMOOTH SCROLLING
// ====================================
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

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

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

// ====================================
// ROTATING TEXT EFFECT
// ====================================
function initRotatingText() {
    const words = document.querySelectorAll('.rotating-words .word');
    if (words.length === 0) return;

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

// ====================================
// SCROLL PROGRESS INDICATOR
// ====================================
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

// ====================================
// DOWNLOAD CV BUTTON
// ====================================
function initCVDownload() {
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Download CV')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('CV download will be available soon! For now, please contact via email: farruxmirzaev@outlook.com');
            });
        }
    });
}

// ====================================
// PROJECT CARDS INTERACTION
// ====================================
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// ====================================
// CONSOLE GREETING
// ====================================
function showConsoleGreeting() {
    console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #4a90e2;');
    console.log('%cThis portfolio was built with vanilla JavaScript, HTML, and CSS.', 'font-size: 14px; color: #50c878;');
    console.log('%cInterested in working together? Contact: farruxmirzaev@outlook.com', 'font-size: 14px; color: #4a90e2;');
    console.log('%cTry the Konami Code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'font-size: 12px; color: #a1a1aa;');
}

// ====================================
// MAIN INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing portfolio...');

    // 1. Render all content from data files
    renderAllContent();

    // 2. Initialize page loader
    initPageLoader();

    // 3. Initialize navigation
    initNavigation();

    // 4. Initialize particles background
    initParticles();

    // 5. Initialize scroll animations
    initScrollAnimations();

    // 6. Initialize skill bars
    initSkillBars();

    // 7. Initialize smooth scroll
    initSmoothScroll();

    // 8. Initialize navbar scroll effect
    initNavbarScroll();

    // 9. Initialize micro-interactions
    initMicroInteractions();

    // 10. Initialize rotating text
    initRotatingText();

    // 11. Create scroll progress indicator
    createScrollProgress();

    // 12. Initialize CV download
    initCVDownload();

    // 13. Initialize project cards
    initProjectCards();

    // 14. Animate counters
    animateCounters();

    // 15. Show console greeting
    showConsoleGreeting();

    console.log('✨ Portfolio loaded successfully!');
});

// ====================================
// ERROR HANDLING
// ====================================
window.addEventListener('error', (e) => {
    console.error('Error caught:', e.error);
});

// ====================================
// SCROLL DEPTH TRACKING
// ====================================
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const scrollDepth = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = Math.round(scrollDepth);
        if (maxScrollDepth % 25 === 0) {
            console.log(`Scroll depth milestone: ${maxScrollDepth}%`);
        }
    }
});
