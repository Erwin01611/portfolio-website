import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, TrendingUp, Database, Brain, BarChart3, FileText, Server } from 'lucide-react';

const projects = [
  {
    id: 'trading-agent',
    title: 'Autonomous Trading Agent',
    subtitle: 'Deep Reinforcement Learning',
    description: 'AlphaGo-inspired DRL trading system (DQN/PPO) trained on historical market data. Custom OpenAI Gym environment simulating trading constraints including transaction costs, slippage, and risk limits.',
    metrics: [
      { label: 'Total Returns', value: '19.2%', positive: true },
      { label: 'Alpha Generated', value: '10.7%', positive: true },
      { label: 'Sharpe Ratio', value: '1.4', positive: true },
      { label: 'vs Benchmark', value: '+8.5%', positive: true },
    ],
    tech: ['Python', 'TensorFlow', 'RLlib', 'Streamlit', 'OpenAI Gym', 'PPO'],
    links: {
      demo: '#',
      github: '#',
    },
    icon: Brain,
    featured: true,
  },
  {
    id: 'payroll-automation',
    title: 'Payroll Automation Engine',
    subtitle: 'Enterprise Data Pipeline',
    description: 'Engineered custom Python tools for Navan payroll operations, eliminating 14+ hours of monthly manual work. Document processing system auto-generates Workday-ready CSV manifests from PDFs.',
    metrics: [
      { label: 'Efficiency Gain', value: '99%', positive: true },
      { label: 'Error Reduction', value: '90%', positive: true },
      { label: 'Hours Saved', value: '14+/mo', positive: true },
      { label: 'Go-Live Issues', value: '0', positive: true },
    ],
    tech: ['Python', 'Pandas', 'Regex', 'Workday API', 'DATEV', 'n8n'],
    links: {
      demo: null,
      github: null,
    },
    icon: Database,
    featured: true,
  },
  {
    id: 'electricity-forecasting',
    title: 'Electricity Price Forecasting',
    subtitle: 'Time-Series Analysis',
    description: 'Bachelor thesis project analyzing 34,000+ market observations. Hybrid ensemble approach using LASSO AR-X, ARIMA, and GARCH models to capture volatility clustering in energy markets.',
    metrics: [
      { label: 'Observations', value: '34K+', positive: true },
      { label: 'Features', value: '168+', positive: true },
      { label: 'Models', value: '3', positive: true },
      { label: 'Validation', value: 'Rolling', positive: true },
    ],
    tech: ['Python', 'R', 'ARIMA', 'GARCH', 'LASSO', 'Time-Series'],
    links: {
      demo: null,
      github: '#',
    },
    icon: BarChart3,
    featured: false,
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Prediction',
    subtitle: 'Statistical Modeling',
    description: 'Logistic regression model to predict client default probabilities. Optimized thresholds to balance risk avoidance and opportunity cost, directly improving loan portfolio quality.',
    metrics: [
      { label: 'False Positives', value: '-20%', positive: true },
      { label: 'Model Type', value: 'LogReg', positive: true },
      { label: 'Language', value: 'R', positive: true },
      { label: 'Impact', value: 'Portfolio', positive: true },
    ],
    tech: ['R', 'Logistic Regression', 'Statistical Modeling', 'Risk Analysis'],
    links: {
      demo: null,
      github: '#',
    },
    icon: TrendingUp,
    featured: false,
  },
  {
    id: 'ecommerce-db',
    title: 'E-Commerce Database',
    subtitle: 'Performance Engineering',
    description: 'Refactored transactional database improving query performance and data integrity. Strategic indexing and schema normalization from 1NF to 3NF.',
    metrics: [
      { label: 'Latency Reduction', value: '40%', positive: true },
      { label: 'Normalization', value: '3NF', positive: true },
      { label: 'Focus', value: 'Indexing', positive: true },
      { label: 'Integrity', value: 'Enhanced', positive: true },
    ],
    tech: ['SQL', 'Database Design', 'Performance Tuning', 'Indexing'],
    links: {
      demo: null,
      github: '#',
    },
    icon: Server,
    featured: false,
  },
  {
    id: 'compliance-engine',
    title: 'German Compliance Engine',
    subtitle: 'Regulatory Automation',
    description: 'Logic-based application calculating FTE-adjusted sick leave thresholds (42-day rule) automatically. Ensures strict adherence to German labor regulations without manual calculation.',
    metrics: [
      { label: 'Compliance', value: '100%', positive: true },
      { label: 'Rule', value: '42-day', positive: true },
      { label: 'Portal', value: 'SV-Melde', positive: true },
      { label: 'Automation', value: 'Full', positive: true },
    ],
    tech: ['Python', 'German Compliance', 'Labor Law', 'Automation'],
    links: {
      demo: null,
      github: null,
    },
    icon: FileText,
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <span className="text-sm font-mono text-cyan-400">02. PROJECTS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Production-ready systems with measurable impact. Each project represents a problem solved, 
            a process automated, or an insight discovered.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden border border-border/50 hover:border-emerald-500/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Project info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <project.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-xl bg-secondary/50 border border-border/50 text-center"
                      >
                        <p className={`text-2xl font-bold ${metric.positive ? 'text-emerald-400' : 'text-foreground'}`}>
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group p-5 rounded-xl bg-secondary/30 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <project.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="font-medium text-foreground group-hover:text-emerald-400 transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground font-mono mb-3">{project.subtitle}</p>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
              
              {/* Key metric */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-emerald-400">{project.metrics[0].value}</span>
                <span className="text-xs text-muted-foreground">{project.metrics[0].label}</span>
              </div>
              
              {/* Tech tags */}
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
