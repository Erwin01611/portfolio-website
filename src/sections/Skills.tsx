import { useEffect, useRef, useState } from 'react';
import { 
  Code2, Database, Brain, LineChart, Server, 
  GitBranch, Cloud, FileCode, BarChart3, Workflow,
  Terminal, Cpu, Shield, Layers
} from 'lucide-react';

const skillCategories = [
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      { name: 'Deep Reinforcement Learning', level: 95, tools: ['RLlib', 'Stable-Baselines3', 'PPO', 'DQN'] },
      { name: 'Neural Networks', level: 90, tools: ['TensorFlow', 'Keras', 'PyTorch'] },
      { name: 'Time-Series Forecasting', level: 88, tools: ['ARIMA', 'SARIMA', 'GARCH', 'LSTM'] },
      { name: 'Supervised Learning', level: 85, tools: ['Scikit-learn', 'XGBoost', 'Logistic Regression'] },
      { name: 'Feature Engineering', level: 90, tools: ['Pandas', 'NumPy', 'Feature Selection'] },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering & Automation',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95, tools: ['Pandas', 'NumPy', 'Selenium', 'Regex'] },
      { name: 'SQL', level: 90, tools: ['PostgreSQL', 'ETL Design', 'Window Functions', 'Query Optimization'] },
      { name: 'Workflow Automation', level: 92, tools: ['n8n', 'API Integration', 'Webhooks'] },
      { name: 'Version Control', level: 85, tools: ['Git', 'GitHub', 'CI/CD'] },
      { name: 'Data Processing', level: 93, tools: ['PDF Parsing', 'Data Pipeline', 'Unstructured Data'] },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Quantitative',
    icon: LineChart,
    skills: [
      { name: 'Algorithmic Trading', level: 90, tools: ['Backtesting', 'Risk Management', 'Portfolio Optimization'] },
      { name: 'German Compliance', level: 88, tools: ['DATEV', 'Workday', 'SV-Meldeportal', '42-day Rule'] },
      { name: 'Payroll Systems', level: 85, tools: ['Workday', 'ADP', 'Payroll Automation'] },
      { name: 'Statistical Modeling', level: 87, tools: ['R', 'Hypothesis Testing', 'Regression Analysis'] },
      { name: 'Risk Analysis', level: 82, tools: ['Credit Risk', 'VaR', 'Sharpe Ratio'] },
    ],
  },
  {
    id: 'deployment',
    title: 'MLOps & Deployment',
    icon: Server,
    skills: [
      { name: 'Cloud Platforms', level: 80, tools: ['Google Cloud Platform', 'Streamlit Cloud'] },
      { name: 'Containerization', level: 75, tools: ['Docker', 'Container Orchestration'] },
      { name: 'Experiment Tracking', level: 82, tools: ['MLflow', 'Model Versioning'] },
      { name: 'Web Deployment', level: 85, tools: ['Streamlit', 'FastAPI', 'REST APIs'] },
      { name: 'Monitoring', level: 78, tools: ['Logging', 'Performance Metrics'] },
    ],
  },
];

const techStack = [
  { name: 'Python', category: 'Language', icon: Code2 },
  { name: 'TensorFlow', category: 'ML', icon: Brain },
  { name: 'SQL', category: 'Data', icon: Database },
  { name: 'Git', category: 'DevOps', icon: GitBranch },
  { name: 'Docker', category: 'DevOps', icon: Layers },
  { name: 'GCP', category: 'Cloud', icon: Cloud },
  { name: 'Streamlit', category: 'Web', icon: BarChart3 },
  { name: 'Pandas', category: 'Data', icon: FileCode },
  { name: 'n8n', category: 'Automation', icon: Workflow },
  { name: 'R', category: 'Language', icon: Terminal },
  { name: 'MLflow', category: 'MLOps', icon: Cpu },
  { name: 'Compliance', category: 'Finance', icon: Shield },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ml-ai');

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

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <span className="text-sm font-mono text-emerald-400">03. SKILLS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            A hybrid skillset spanning finance domain expertise, ML/AI engineering, 
            and production deployment. Built for end-to-end solution architecture.
          </p>
        </div>

        {/* Tech stack cloud */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tech.icon className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm text-foreground group-hover:text-emerald-400 transition-colors">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills detail section */}
        <div className={`grid lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Category tabs */}
          <div className="lg:col-span-1 space-y-2">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-secondary/30 border border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills list */}
          <div className="lg:col-span-3">
            {activeSkills && (
              <div className="space-y-6">
                {activeSkills.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-secondary/30 border border-border/50 hover:border-emerald-500/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{skill.name}</h4>
                      <span className="text-sm font-mono text-emerald-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 rounded-full bg-secondary overflow-hidden mb-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                    
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-medium text-foreground mb-6 text-center">Certifications & Education</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Data Science & AI Bootcamp', org: 'Le Wagon', year: '2026' },
              { name: 'Google Data Analytics', org: 'Google', year: '2024' },
              { name: 'ADP Payroll Specialist', org: 'ADP', year: '2024' },
              { name: 'Python for Business Analytics', org: 'PwC', year: '2024' },
            ].map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-emerald-500/30 transition-colors"
              >
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.org} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
