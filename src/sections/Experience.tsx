import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 'navan',
    type: 'work',
    title: 'Payroll Operations Automation Engineer',
    company: 'NAVAN',
    location: 'Berlin, Germany',
    period: 'Nov 2024 – Nov 2025',
    description: 'Part-time role engineering custom Python tools for payroll operations, eliminating 14+ hours of monthly manual work.',
    achievements: [
      'Built document processing system auto-generating Workday-ready CSV manifests from PDFs',
      'Developed regex parsing engine for 100-400 page payroll reports (EN/DE)',
      'Created compliance engine for FTE-adjusted sick leave thresholds (42-day rule)',
      'Led QA for DATEV-to-Workday migration with zero critical issues at go-live',
      'Reduced batch upload failures from ~3 to <1 through pre-flight validation',
    ],
    tech: ['Python', 'Pandas', 'Regex', 'Workday', 'DATEV', 'n8n'],
  },
  {
    id: 'escp',
    type: 'work',
    title: 'Research Assistant (AI & Corporate Strategy)',
    company: 'ESCP Business School',
    location: 'Berlin, Germany',
    period: 'Apr 2024 – Sep 2024',
    description: 'Research on "AI in Stakeholder Communication" analyzing AI adoption strategies across multinational corporations.',
    achievements: [
      'Analyzed AI adoption strategies across 50+ multinational corporations',
      'Conducted systematic data collection and qualitative analysis',
      'Mapped AI integration into sustainability reporting workflows',
    ],
    tech: ['Research', 'Data Analysis', 'AI Strategy', 'Sustainability'],
  },
];

const education = [
  {
    id: 'lewagon',
    type: 'education',
    degree: 'Data Science & AI Bootcamp',
    institution: 'Le Wagon',
    location: 'Berlin, Germany',
    period: 'Jan 2026 – Mar 2026',
    description: '11-week intensive (400+ hours) full-time bootcamp in Data Science, Machine Learning, and Deep Learning.',
    details: [
      'Built autonomous trading system using Deep RL (PPO) achieving 19.2% backtest returns',
      'Led 3-person team across data pipeline, model training, and deployment',
      'Stack: Python, SQL, BigQuery, TensorFlow, MLflow, Streamlit, GCP',
    ],
  },
  {
    id: 'msc',
    type: 'education',
    degree: 'M.Sc. International Business Administration',
    institution: 'European University Viadrina',
    location: 'Frankfurt (Oder), Germany',
    period: 'Apr 2025 – Present',
    description: 'Focus: Data Science & Decision Support (DSDS)',
    details: [
      'Key Coursework: Neural Networks in Finance, Data Storytelling in Finance',
      'Combining business administration with advanced data science methods',
    ],
  },
  {
    id: 'bsc',
    type: 'education',
    degree: 'B.Sc. International Business Administration',
    institution: 'European University Viadrina',
    location: 'Frankfurt (Oder), Germany',
    period: 'Oct 2017 – Jan 2025',
    description: 'Majors: Quantitative Methods, Banking & International Finance',
    details: [
      'Thesis: "Calendar Effects for Electricity Price Forecasts"',
      'Statistical analysis of energy markets with 34,000+ observations',
    ],
  },
  {
    id: 'erasmus',
    type: 'education',
    degree: 'Erasmus Exchange',
    institution: 'Karlstad University',
    location: 'Karlstad, Sweden',
    period: 'Aug 2019 – Jan 2020',
    description: 'Focus: Financial Markets, Risk & Insurance, Macroeconomics',
    details: [
      'International finance perspective from Swedish academic environment',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = activeTab === 'work' ? experiences : education;

  return (
    <section ref={sectionRef} id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <span className="text-sm font-mono text-cyan-400">04. EXPERIENCE</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Journey & <span className="gradient-text">Background</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'work'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-secondary/30 border border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'education'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-secondary/30 border border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full bg-emerald-500 border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                  <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-emerald-500/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                      <div className={`flex items-center gap-2 text-sm text-emerald-400 font-mono mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {'title' in item ? item.title : item.degree}
                      </h3>
                      <div className={`flex items-center gap-4 mt-1 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-sm text-muted-foreground">
                          {'company' in item ? item.company : item.institution}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                    {/* Achievements/Details */}
                    {'achievements' in item && (
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">›</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    {'details' in item && (
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">›</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech tags */}
                    {'tech' in item && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {item.tech.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
