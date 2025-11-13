// Experience Data
// To add new experience, add an object to the array
// Achievements are automatically rendered as bullet points

export const experiences = [
    {
        id: 1,
        title: "Payroll Operations Automation (Part-Time)",
        company: "Navan",
        period: "November 2024 - November 2025",
        description: "Built automated data processing systems and analytical tools that eliminated 14+ hours of monthly manual work and reduced processing errors by 90%+:",
        achievements: [
            "Led quality assurance for critical Workday migration: Designed and executed comprehensive end-to-end testing protocols for document migration (DATEV → Workday) from test to production → achieved zero critical issues at go-live",
            "Identified and eliminated manual mapping bottleneck: Developed Python solution that reads filenames and PDF content to automatically map files to employee IDs and generate Workday-ready CSV manifests → reduced preparation time from ~14 hours to seconds",
            "Created multi-country reconciliation solution: Built regex-based extraction tool to parse 100-400 page documents across EN/DE formats into structured employee-level data tables → enabled reconciliation processes and saved ~6 hours monthly",
            "Streamlined compliance monitoring: Built semi-automated Python application to process reports, calculate FTE-adjusted thresholds, and generate action lists → reduced monthly processing from ~1 hour to seconds"
        ],
        tags: ["Python", "ETL", "Process Automation", "Workday", "Data Validation"]
    },
    {
        id: 2,
        title: "Research Assistant",
        company: "ESCP Business School",
        period: "April 2024 - August 2024",
        description: "Supported AI research and curriculum development:",
        achievements: [
            "Conducted data collection and analysis for AI research project using qualitative research methods",
            "Contributed to curriculum development for 'Responsible Management of AI' course focusing on ethical AI applications"
        ],
        tags: ["AI Research", "Qualitative Methods", "Curriculum Development", "Ethics"]
    }
];
