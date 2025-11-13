// Component Render Functions
// These functions take data and return HTML
// Modify templates here to change how content is displayed

import { personalInfo } from '../data/personal.js';
import { projects } from '../data/projects.js';
import { skillCategories } from '../data/skills.js';
import { experiences } from '../data/experience.js';
import { education } from '../data/education.js';

// ====================================
// PROJECT CARD COMPONENT
// ====================================
export function renderProjectCard(project) {
    const techTags = project.techStack.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    const metrics = project.metrics.map(metric =>
        `<div class="metric">
            <i class="fas ${metric.icon}"></i>
            <span>${metric.text}</span>
        </div>`
    ).join('');

    return `
        <div class="project-card glass-card" data-project-id="${project.id}">
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-metrics">
                ${metrics}
            </div>
        </div>
    `;
}

// ====================================
// SKILL CATEGORY COMPONENT
// ====================================
export function renderSkillCategory(category) {
    const skillItems = category.skills.map(skill =>
        `<div class="skill-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-progress="${skill.level}"></div>
            </div>
        </div>`
    ).join('');

    return `
        <div class="skill-category glass-card" data-category-id="${category.id}">
            <div class="category-header">
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-items">
                ${skillItems}
            </div>
        </div>
    `;
}

// ====================================
// EXPERIENCE TIMELINE ITEM COMPONENT
// ====================================
export function renderExperienceItem(experience, index) {
    const achievements = experience.achievements.map(achievement =>
        `<li>
            <i class="fas fa-check-circle"></i>
            <span>${achievement}</span>
        </li>`
    ).join('');

    const tags = experience.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    return `
        <div class="timeline-item glass-card" data-experience-id="${experience.id}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${experience.title}</h3>
                    <span class="timeline-company">${experience.company}</span>
                </div>
                <p class="timeline-period">
                    <i class="fas fa-calendar-alt"></i> ${experience.period}
                </p>
                <div class="timeline-description">
                    <p>${experience.description}</p>
                    <ul class="timeline-achievements">
                        ${achievements}
                    </ul>
                </div>
                <div class="timeline-tags">
                    ${tags}
                </div>
            </div>
        </div>
    `;
}

// ====================================
// EDUCATION CARD COMPONENT
// ====================================
export function renderEducationCard(edu) {
    const highlights = edu.highlights.map(highlight =>
        `<span class="highlight-tag">
            <i class="fas fa-star"></i> ${highlight}
        </span>`
    ).join('');

    return `
        <div class="education-card glass-card" data-education-id="${edu.id}">
            <div class="education-icon">
                <i class="fas ${edu.icon}"></i>
            </div>
            <div class="education-content">
                <h3>${edu.degree}</h3>
                <p class="education-institution">${edu.institution}</p>
                <p class="education-period">${edu.period}</p>
                <p class="education-description">${edu.description}</p>
                <div class="education-highlights">
                    ${highlights}
                </div>
            </div>
        </div>
    `;
}

// ====================================
// ACHIEVEMENT CARD COMPONENT
// ====================================
export function renderAchievementCard(achievement) {
    return `
        <div class="achievement-card glass-card">
            <div class="achievement-icon">
                <i class="fas ${achievement.icon}"></i>
            </div>
            <div class="achievement-content">
                <h3 class="achievement-number">${achievement.number}</h3>
                <p class="achievement-label">${achievement.label}</p>
                <p class="achievement-desc">${achievement.description}</p>
            </div>
        </div>
    `;
}

// ====================================
// RENDER ALL PROJECTS
// ====================================
export function renderAllProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container) return;

    container.innerHTML = projects.map(project =>
        renderProjectCard(project)
    ).join('');
}

// ====================================
// RENDER ALL SKILLS
// ====================================
export function renderAllSkills() {
    const container = document.querySelector('.skills-grid');
    if (!container) return;

    container.innerHTML = skillCategories.map(category =>
        renderSkillCategory(category)
    ).join('');
}

// ====================================
// RENDER ALL EXPERIENCE
// ====================================
export function renderAllExperience() {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = experiences.map((exp, index) =>
        renderExperienceItem(exp, index)
    ).join('');
}

// ====================================
// RENDER ALL EDUCATION
// ====================================
export function renderAllEducation() {
    const container = document.querySelector('.education-grid');
    if (!container) return;

    container.innerHTML = education.map(edu =>
        renderEducationCard(edu)
    ).join('');
}

// ====================================
// RENDER HERO SECTION
// ====================================
export function renderHeroSection() {
    // Update name and title
    const heroName = document.querySelector('.hero-name');
    const heroTitle = document.querySelector('.hero-title');

    if (heroName) heroName.textContent = personalInfo.name;
    if (heroTitle) heroTitle.textContent = personalInfo.title;

    // Update rotating words
    const rotatingWords = document.querySelector('.rotating-words');
    if (rotatingWords && personalInfo.expertise) {
        rotatingWords.innerHTML = personalInfo.expertise.map((word, index) =>
            `<span class="word ${index === 0 ? 'active' : ''}">${word}</span>`
        ).join('');
    }
}

// ====================================
// RENDER ABOUT SECTION
// ====================================
export function renderAboutSection() {
    const aboutText = document.querySelector('.about-text');
    if (aboutText && personalInfo.about) {
        aboutText.innerHTML = `
            <p class="lead">${personalInfo.about.lead}</p>
            <p>${personalInfo.about.description}</p>
        `;
    }

    const achievementsContainer = document.querySelector('.achievements');
    if (achievementsContainer && personalInfo.achievements) {
        achievementsContainer.innerHTML = personalInfo.achievements.map(achievement =>
            renderAchievementCard(achievement)
        ).join('');
    }
}

// ====================================
// RENDER CONTACT SECTION
// ====================================
export function renderContactSection() {
    if (!personalInfo.contact) return;

    const contact = personalInfo.contact;

    // Update email
    const emailLinks = document.querySelectorAll('a[href^="mailto"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${contact.email}`;
        if (link.textContent.includes('@')) {
            link.textContent = contact.email;
        }
    });

    // Update location
    const locationText = document.querySelector('.contact-details p');
    if (locationText && !locationText.querySelector('a')) {
        locationText.textContent = contact.location;
    }

    // Update LinkedIn
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin"]');
    linkedinLinks.forEach(link => {
        link.href = contact.linkedin;
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Update GitHub
    const githubLinks = document.querySelectorAll('a[href*="github"]');
    githubLinks.forEach(link => {
        link.href = contact.github;
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// ====================================
// RENDER LANGUAGES
// ====================================
export function renderLanguages() {
    const languagesGrid = document.querySelector('.languages-grid');
    if (!languagesGrid || !personalInfo.languages) return;

    languagesGrid.innerHTML = personalInfo.languages.map(lang =>
        `<div class="language-item">
            <span class="language-name">${lang.name}</span>
            <span class="language-level">${lang.level}</span>
        </div>`
    ).join('');
}

// ====================================
// RENDER ALL CONTENT
// ====================================
export function renderAllContent() {
    renderHeroSection();
    renderAboutSection();
    renderAllSkills();
    renderAllExperience();
    renderAllProjects();
    renderAllEducation();
    renderContactSection();
    renderLanguages();
}
