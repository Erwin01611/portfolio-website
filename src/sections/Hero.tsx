import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, TrendingUp, Cpu, Database } from 'lucide-react';

// Animated background canvas with data particles
function DataCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160, 84%, 39%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(160, 84%, 39%, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

// Typing effect hook
function useTypingEffect(texts: string[], speed: number = 50, delay: number = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, delay]);

  return displayText;
}

export default function Hero() {
  const typingText = useTypingEffect(
    [
      'Deep Reinforcement Learning',
      'Algorithmic Trading Systems',
      'Finance Automation',
      'Production ML Engineering',
    ],
    60,
    2500
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <DataCanvas />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-emerald-400 font-mono">Open to opportunities</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Farrukh</span>
                <br />
                <span className="gradient-text">Mirzaev</span>
              </h1>
              
              <div className="h-8">
                <p className="text-lg sm:text-xl text-muted-foreground font-mono">
                  <span className="text-emerald-500">$</span> {typingText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Finance AI Engineer bridging German compliance complexities with autonomous ML systems. 
              I productionize algorithmic solutions — from AlphaGo-inspired trading agents to 
              payroll automation achieving <span className="text-emerald-400 font-medium">99% efficiency gains</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-background font-medium rounded-lg transition-all duration-200 hover:shadow-glow"
              >
                <TrendingUp className="w-4 h-4" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-all duration-200 hover:bg-emerald-500/5"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-400 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/farrukhmirzaev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-400 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:farruxmirzaev@outlook.com"
                className="p-2 rounded-lg bg-secondary hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-400 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right column - Stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Performance metrics */}
            <div className="metric-highlight rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-mono">Alpha Generated</span>
              </div>
              <p className="text-4xl font-bold text-foreground">10.7%</p>
              <p className="text-xs text-muted-foreground">vs buy-and-hold benchmark</p>
            </div>
            
            <div className="metric-highlight rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Cpu className="w-5 h-5" />
                <span className="text-sm font-mono">Efficiency Gain</span>
              </div>
              <p className="text-4xl font-bold text-foreground">99%</p>
              <p className="text-xs text-muted-foreground">payroll automation at Navan</p>
            </div>
            
            <div className="metric-highlight rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <Database className="w-5 h-5" />
                <span className="text-sm font-mono">Data Processed</span>
              </div>
              <p className="text-4xl font-bold text-foreground">34K+</p>
              <p className="text-xs text-muted-foreground">market observations analyzed</p>
            </div>
            
            <div className="metric-highlight rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-mono">Sharpe Ratio</span>
              </div>
              <p className="text-4xl font-bold text-foreground">1.4</p>
              <p className="text-xs text-muted-foreground">risk-adjusted returns</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">scroll to explore</span>
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full border border-border hover:border-emerald-500/50 text-muted-foreground hover:text-emerald-400 transition-all duration-200 animate-bounce"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
