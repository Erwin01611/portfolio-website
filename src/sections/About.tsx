import { useEffect, useRef, useState } from 'react';
import { Brain, Code2, LineChart, Shield, Zap, Globe } from 'lucide-react';

const philosophyPoints = [
  {
    icon: Zap,
    title: 'Automation as Liberation',
    description: 'I eliminate manual work—99% efficiency gains by engineering systems that free humans for higher-order thinking.',
  },
  {
    icon: LineChart,
    title: 'Production Over Theory',
    description: 'Every model I build ships. From Streamlit deployments to Dockerized pipelines—impact is measured in production.',
  },
  {
    icon: Shield,
    title: 'Compliance as Architecture',
    description: 'German regulatory rigor meets ML systems. DATEV, Workday, SV-Meldeportal—I engineer compliance into the foundation.',
  },
  {
    icon: Brain,
    title: 'Quantitative Intuition',
    description: 'Finance domain expertise + AI engineering. I speak both the language of traders and the language of tensors.',
  },
  {
    icon: Code2,
    title: 'Systems Thinking',
    description: 'End-to-end pipelines, not isolated scripts. Data flows, models train, decisions execute—seamlessly.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Uzbek roots, Russian bilingual, German precision, international finance. Diversity of thought drives innovation.',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <span className="text-sm font-mono text-emerald-400">01. ABOUT</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Philosophy & <span className="gradient-text">Approach</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Story */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="code-block p-6 space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono">philosophy.md</span>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-emerald-400 font-mono">$</span> I started in finance—studying 
                  quantitative methods and banking at European University Viadrina. But I kept seeing the 
                  same problem: brilliant analysts spending hours on work that machines could do in seconds.
                </p>
                <p>
                  <span className="text-emerald-400 font-mono">$</span> So I learned to build the machines. 
                  Deep Reinforcement Learning inspired by AlphaGo. Automated payroll systems processing 
                  100-400 page PDFs. Time-series forecasting for energy markets with 168+ engineered features.
                </p>
                <p>
                  <span className="text-emerald-400 font-mono">$</span> Today, I sit at the intersection of 
                  <span className="text-foreground font-medium"> quantitative finance</span>,{' '}
                  <span className="text-foreground font-medium">production engineering</span>, and{' '}
                  <span className="text-foreground font-medium">autonomous AI systems</span>. 
                  I don't just write code—I architect solutions that think, decide, and execute.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <p className="text-2xl font-bold text-emerald-400">5+</p>
                <p className="text-sm text-muted-foreground">Years in Finance</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <p className="text-2xl font-bold text-cyan-400">4</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <p className="text-2xl font-bold text-emerald-400">Berlin</p>
                <p className="text-sm text-muted-foreground">Based In</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                <p className="text-2xl font-bold text-cyan-400">MSc</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </div>

          {/* Right column - Philosophy cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {philosophyPoints.map((point, index) => (
              <div
                key={point.title}
                className={`group p-5 rounded-xl bg-secondary/30 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground group-hover:text-emerald-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
