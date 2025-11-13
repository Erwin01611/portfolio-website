// Projects Data
// To add a new project, simply add a new object to this array
// All projects will automatically appear on the portfolio

export const projects = [
    {
        id: 1,
        title: "Electricity Price Forecasting",
        icon: "fa-bolt",
        description: "Built production-grade time series forecasting system using LASSO AR-X model with 168 features. Analyzed 34,320 observations with rolling window validation and advanced feature engineering.",
        techStack: ["Python", "Scikit-learn", "Time Series", "LASSO AR-X"],
        metrics: [
            { icon: "fa-database", text: "34,320 observations" },
            { icon: "fa-cogs", text: "Production-grade system" }
        ]
    },
    {
        id: 2,
        title: "Automated Data Processing Pipeline",
        icon: "fa-robot",
        description: "Developed comprehensive ETL pipeline with PDF extraction, data validation, and automated reporting. Achieved 95% reduction in processing time with robust error handling.",
        techStack: ["Python", "Pandas", "PDF Processing", "ETL"],
        metrics: [
            { icon: "fa-clock", text: "95% time reduction" },
            { icon: "fa-check", text: "90% error reduction" }
        ]
    },
    {
        id: 3,
        title: "Credit Risk Prediction Model",
        icon: "fa-credit-card",
        description: "Implemented logistic regression model for credit default prediction with feature selection and regularization. Reduced false positive rate by 20% while maintaining high recall.",
        techStack: ["Python", "Logistic Regression", "Feature Engineering", "ML"],
        metrics: [
            { icon: "fa-percentage", text: "20% FP reduction" },
            { icon: "fa-balance-scale", text: "Maintained high recall" }
        ]
    },
    {
        id: 4,
        title: "E-Commerce Database Optimization",
        icon: "fa-shopping-cart",
        description: "Designed and optimized relational database for e-commerce platform with complex queries, indexing strategies, and performance tuning. Reduced query latency by 40%.",
        techStack: ["SQL", "Database Design", "Query Optimization", "PostgreSQL"],
        metrics: [
            { icon: "fa-tachometer-alt", text: "40% latency reduction" },
            { icon: "fa-database", text: "Optimized queries" }
        ]
    },
    {
        id: 5,
        title: "Sentiment Analysis Pipeline",
        icon: "fa-comment-dots",
        description: "Built sentiment analysis system using Azure Cognitive Services API with web scraping capabilities. Processed and analyzed customer feedback for actionable insights.",
        techStack: ["Python", "Azure API", "Web Scraping", "NLP"],
        metrics: [
            { icon: "fa-comments", text: "Large-scale analysis" },
            { icon: "fa-brain", text: "Azure AI integration" }
        ]
    }
];
