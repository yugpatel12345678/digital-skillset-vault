
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Check if the image exists
    const img = new Image();
    img.src = "/lovable-uploads/896a5952-96e3-424e-850b-44b3cb77b16d.png";
    img.onload = () => setImageError(false);
    img.onerror = () => setImageError(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ 
          backgroundImage: !imageError 
            ? "url('/lovable-uploads/896a5952-96e3-424e-850b-44b3cb77b16d.png')" 
            : "linear-gradient(135deg, #0a192f 0%, #112240 100%)" 
        }}
      >
        <div className="absolute inset-0 bg-portfolio-darkblue/70 backdrop-filter backdrop-blur-sm"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-portfolio-highlight/10 via-transparent to-blue-500/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-portfolio-highlight mb-3 font-medium tracking-wider animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              HELLO, MY NAME IS
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 text-portfolio-text bg-clip-text bg-gradient-to-r from-white to-white/80 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              Yug Patel
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-portfolio-accent font-medium mb-6 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              Computer Systems Technology Student
            </h2>
            
            <p className="text-portfolio-accent text-lg mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              Welcome to my digital portfolio! I specialize in web development and cybersecurity. 
              This portfolio showcases my technical skills, projects, and experience as I prepare 
              for a career in IT and software development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
              <Button 
                variant="default" 
                className="bg-portfolio-highlight text-portfolio-darkblue hover:bg-portfolio-highlight/90 border border-portfolio-highlight font-medium px-6 py-5 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-highlight/20"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10 font-medium px-6 py-5 transition-all duration-300"
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
