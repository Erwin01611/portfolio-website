import { useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div 
        className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div 
        className="fixed bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(190 90% 50% / 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-emerald-500">$</span> echo "Built with precision"
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Farrukh Mirzaev. All systems operational.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
