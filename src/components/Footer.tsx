
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-blue/30 py-12 border-t border-portfolio-lightblue/30 relative">
      {/* Background blur */}
      <div className="absolute inset-0 backdrop-blur-md -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-heading font-semibold text-white">Yug Patel</h3>
            <p className="text-portfolio-accent mt-1">Computer Systems Technology Student</p>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-0 space-y-3 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item, i) => (
              <a 
                key={i}
                href={`#${item.toLowerCase()}`} 
                className="text-portfolio-accent hover:text-portfolio-highlight transition-colors block w-full md:w-auto text-center md:text-left"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yugpatel12345678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-portfolio-lightblue/50 flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yug-patel-8a4ab2250/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-portfolio-lightblue/50 flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:yugpatel9335@gmail.com" 
              className="w-10 h-10 rounded-full bg-portfolio-lightblue/50 flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-lightblue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-accent text-sm mb-4 md:mb-0">
            &copy; {currentYear} Yug Patel. All rights reserved.
          </p>
          
          <p className="text-portfolio-accent text-sm mb-4 md:mb-0 flex items-center">
            Built with <Heart size={14} className="mx-1 text-portfolio-highlight" /> and modern web technologies
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-portfolio-lightblue/50 flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-all duration-300 glow-effect"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
