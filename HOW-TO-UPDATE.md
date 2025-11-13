# How to Update Your Portfolio - Quick Guide

Your portfolio is now **data-driven and modular**! 🎉

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML (mostly structure, minimal content)
├── styles.css              # All your beautiful styling
├── data/                   # 📊 ALL YOUR CONTENT IS HERE!
│   ├── projects.js         # Your projects
│   ├── skills.js           # Your skills & categories
│   ├── experience.js       # Work experience
│   ├── education.js        # Education background
│   └── personal.js         # About, contact, achievements
└── scripts/
    ├── main.js             # Initializes everything
    ├── components.js       # Renders content from data
    └── animations.js       # All animations

```

---

## ✨ How to Update Content

### 1. **Add a New Project** (Takes 30 seconds!)

Open `data/projects.js` and add a new object:

```javascript
{
    id: 6,  // Just increment the ID
    title: "Your New Project",
    icon: "fa-rocket",  // Font Awesome icon
    description: "What your project does...",
    techStack: ["Python", "React", "Docker"],
    metrics: [
        { icon: "fa-database", text: "1M records processed" },
        { icon: "fa-clock", text: "50% faster" }
    ]
}
```

**That's it!** Refresh your browser - the new project appears automatically! 🚀

---

### 2. **Update Skills** (Change percentages or add new skills)

Open `data/skills.js`:

```javascript
// To update existing skill:
{ name: "Python", level: 98 },  // Changed from 95 to 98

// To add new skill to a category:
{ name: "Kubernetes", level: 80 }
```

---

### 3. **Add New Experience**

Open `data/experience.js`:

```javascript
{
    id: 3,
    title: "Senior Data Scientist",
    company: "New Company",
    period: "January 2026 - Present",
    description: "Leading data science initiatives...",
    achievements: [
        "Built ML pipeline that increased accuracy by 25%",
        "Mentored team of 5 junior data scientists"
    ],
    tags: ["Python", "ML", "Leadership"]
}
```

---

### 4. **Update Personal Info**

Open `data/personal.js` to update:
- Name & title
- About section text
- Achievements
- Contact information
- Languages

---

## 🎨 How to Customize Design

### Change Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-dark: #1a1f36;
    --accent-blue: #4a90e2;  /* Change this! */
    --accent-green: #50c878; /* Or this! */
}
```

### Modify Card Templates

Open `scripts/components.js` and edit the render functions:

```javascript
// Example: Change project card HTML
export function renderProjectCard(project) {
    return `
        <div class="project-card glass-card">
            <!-- Edit the HTML structure here -->
            <h3>${project.title}</h3>
            <!-- Add new elements, remove old ones -->
        </div>
    `;
}
```

---

## 🔄 Common Updates

### Reorder Projects
Just drag/drop objects in `data/projects.js` array - first item appears first!

### Change Achievement Metrics
Edit `data/personal.js`:
```javascript
achievements: [
    {
        icon: "fa-rocket",
        number: "100+",  // Change this
        label: "Projects",  // Or this
        description: "Completed"
    }
]
```

### Add New Skill Category
In `data/skills.js`:
```javascript
{
    id: 7,
    icon: "fa-mobile",
    title: "Mobile Development",
    skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 }
    ]
}
```

---

## 🚀 Next Steps

### Want to Add GSAP Animations?

```bash
npm install gsap
```

Then in `scripts/animations.js`:
```javascript
import gsap from 'gsap';

// Awesome scroll animations
gsap.from(".project-card", {
    scrollTrigger: ".projects-grid",
    y: 100,
    opacity: 0,
    stagger: 0.2
});
```

### Want to Use Build Tools (Vite)?

```bash
npm create vite@latest . -- --template vanilla
npm install
npm run dev
```

---

## 💡 Pro Tips

1. **Always test locally** - Just open `index.html` in your browser
2. **Check browser console** for any errors (F12)
3. **Keep backups** of your data files before major changes
4. **Use Git** to track changes: `git add . && git commit -m "Updated projects"`

---

## 🐛 Troubleshooting

**Nothing shows up?**
- Check browser console (F12) for errors
- Make sure you're using a modern browser (Chrome, Firefox, Edge)
- If using `file://` protocol, you might need a local server

**Animations not working?**
- Clear browser cache (Ctrl+Shift+R)
- Check that `scripts/animations.js` is loaded

**Need help?**
Check the console - it logs each initialization step!

---

## 📚 What You Gained

✅ **Update projects in 30 seconds** (vs 5+ minutes of HTML editing)
✅ **No more copy-paste errors** - one template for all cards
✅ **Easy to maintain** - all content in one place
✅ **Ready for frameworks** - easy to migrate to React/Vue later
✅ **Professional structure** - separates data from presentation

---

**Questions? Check the code comments in each file - they explain everything!** 🎓
