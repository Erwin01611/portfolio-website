import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('farruxmirzaev@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <span className="text-sm font-mono text-emerald-400">05. CONTACT</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in Finance AI, Quantitative Engineering, and ML Systems. 
            Let's build something that thinks, decides, and executes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column - Contact info */}
          <div className={`space-y-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Terminal-style intro */}
            <div className="code-block p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono">contact.sh</span>
              </div>
              
              <div className="space-y-2 font-mono text-sm">
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-cyan-400">whoami</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  Farrukh Mirzaev - Finance AI Engineer
                </p>
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-cyan-400">location</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  Frankfurt (Oder), Germany
                </p>
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-cyan-400">status</span>
                </p>
                <p className="text-emerald-400 pl-4">
                  Available for opportunities
                </p>
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-cyan-400">_</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Get in Touch</h3>
              
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-emerald-500/30 transition-colors group">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">farruxmirzaev@outlook.com</p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-emerald-400 transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Frankfurt (Oder), Germany</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-muted-foreground hover:text-emerald-400 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/farrukhmirzaev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-muted-foreground hover:text-emerald-400 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
              <h3 className="text-lg font-medium text-foreground mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-medium text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-emerald-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-emerald-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-emerald-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-background font-medium rounded-lg transition-all duration-200 hover:shadow-glow disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
