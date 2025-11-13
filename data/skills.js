// Skills Data
// To update skills, modify the percentage or add new skills to any category
// To add a new category, add a new object with icon, title, and skills array

export const skillCategories = [
    {
        id: 1,
        icon: "fa-brain",
        title: "Data Science & Analytics",
        skills: [
            { name: "Python", level: 95 },
            { name: "R", level: 85 },
            { name: "Scikit-learn", level: 90 },
            { name: "Pandas", level: 95 },
            { name: "Statistical Analysis", level: 88 },
            { name: "Machine Learning", level: 87 }
        ]
    },
    {
        id: 2,
        icon: "fa-cogs",
        title: "Data Engineering",
        skills: [
            { name: "ETL Pipelines", level: 92 },
            { name: "PDF Processing", level: 90 },
            { name: "API Integration", level: 88 },
            { name: "Workflow Automation", level: 93 }
        ]
    },
    {
        id: 3,
        icon: "fa-chart-bar",
        title: "Business Intelligence",
        skills: [
            { name: "Power BI", level: 85 },
            { name: "Tableau", level: 80 },
            { name: "Data Visualization", level: 90 }
        ]
    },
    {
        id: 4,
        icon: "fa-code",
        title: "Programming & Tools",
        skills: [
            { name: "SQL", level: 90 },
            { name: "FastAPI", level: 82 },
            { name: "Django", level: 78 },
            { name: "Git", level: 88 }
        ]
    },
    {
        id: 5,
        icon: "fa-database",
        title: "Databases & Storage",
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "MongoDB", level: 75 },
            { name: "Redis", level: 70 }
        ]
    },
    {
        id: 6,
        icon: "fa-cloud",
        title: "Cloud & DevOps",
        skills: [
            { name: "Docker", level: 85 },
            { name: "Git/GitHub", level: 92 },
            { name: "AWS (S3, Lambda)", level: 75 },
            { name: "CI/CD Pipelines", level: 78 }
        ]
    }
];
