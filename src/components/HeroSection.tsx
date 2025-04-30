
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-highlight/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-portfolio-purple/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-portfolio-teal/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-portfolio-highlight mb-3 font-medium tracking-wider animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              HELLO, MY NAME IS
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-highlight to-portfolio-purple">
                Yug Patel
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-portfolio-accent font-medium mb-6 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              Computer Systems Technology Student
            </h2>
            
            <p className="text-portfolio-text text-lg mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              Welcome to my digital portfolio! I specialize in web development and cybersecurity. 
              This portfolio showcases my technical skills, projects, and experience as I prepare 
              for a career in IT and software development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
              <Button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-portfolio-highlight hover:text-portfolio-highlight/80 transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
