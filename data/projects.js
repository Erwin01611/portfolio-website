// Projects Data
// To add a new project, simply add a new object to this array
// All projects will automatically appear on the portfolio

export const projects = [
    {
        id: 1,
        title: "Electricity Price Forecasting Model",
        icon: "fa-bolt",
        description: "Bachelor's thesis: Built production-grade forecasting system analyzing 34,320 observations using LASSO AR-X model and advanced statistical techniques (ARIMA, SARIMA, GARCH). Engineered 168+ features capturing temporal patterns and calendar effects with automated validation and hyperparameter optimization using Python and R.",
        techStack: ["Python", "R", "LASSO AR-X", "Time Series"],
        metrics: [
            { icon: "fa-database", text: "34,320 observations" },
            { icon: "fa-graduation-cap", text: "Bachelor's Thesis" }
        ]
    },
    {
        id: 2,
        title: "Automated Data Extraction & Processing System",
        icon: "fa-robot",
        description: "Production data engineering: Developed end-to-end ETL pipeline processing multi-language documents (German/English), extracting structured data from unstructured sources. Built automated reconciliation system and compliance monitoring application. Reduced manual processing time by 95%+ while improving data accuracy.",
        techStack: ["Python", "Pandas", "Regex", "PDF Processing"],
        metrics: [
            { icon: "fa-clock", text: "14+ hours saved monthly" },
            { icon: "fa-check", text: "90%+ error reduction" }
        ]
    },
    {
        id: 3,
        title: "Credit Risk Prediction Model",
        icon: "fa-credit-card",
        description: "Built logistic regression model predicting client default risks in R. Optimized hyperparameters achieving 20% reduction in false positives, improving financial decision-making accuracy. Applied statistical techniques for model validation and performance evaluation.",
        techStack: ["R", "Logistic Regression", "Hyperparameter Tuning", "ML"],
        metrics: [
            { icon: "fa-percentage", text: "20% FP reduction" },
            { icon: "fa-chart-line", text: "Improved accuracy" }
        ]
    },
    {
        id: 4,
        title: "E-Commerce Database Optimization",
        icon: "fa-shopping-cart",
        description: "SQL performance engineering: Optimized database through normalization (1NF, 2NF, 3NF), identified query bottlenecks, implemented indexing strategies reducing latency by 40%. Validated improvements through systematic benchmarking.",
        techStack: ["SQL", "Database Design", "Query Optimization", "Indexing"],
        metrics: [
            { icon: "fa-tachometer-alt", text: "40% latency reduction" },
            { icon: "fa-database", text: "Optimized queries" }
        ]
    },
    {
        id: 5,
        title: "Sentiment Analysis & Visualization",
        icon: "fa-comment-dots",
        description: "Azure API + SQL integration: Implemented web scraping for product reviews, stored in SQL database, conducted sentiment analysis using Microsoft Azure Text Analytics API, created visualizations for actionable business insights.",
        techStack: ["Python", "SQL", "Azure API", "Web Scraping"],
        metrics: [
            { icon: "fa-comments", text: "Large-scale analysis" },
            { icon: "fa-brain", text: "Azure AI integration" }
        ]
    }
];
