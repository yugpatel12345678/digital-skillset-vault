
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-darkblue py-8 border-t border-portfolio-lightblue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-semibold text-white">Yug Patel</h3>
            <p className="text-gray-400">Computer Systems Technology Student</p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-portfolio-highlight transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-portfolio-highlight transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-portfolio-highlight transition-colors">Projects</a>
            <a href="#resume" className="text-gray-400 hover:text-portfolio-highlight transition-colors">Resume</a>
            <a href="#contact" className="text-gray-400 hover:text-portfolio-highlight transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/yugpatel12345678" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-lightblue flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/yug-patel-8a4ab2250/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-lightblue flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:yugpatel9335@gmail.com" className="w-10 h-10 rounded-full bg-portfolio-lightblue flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-lightblue/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Yug Patel. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-portfolio-lightblue flex items-center justify-center text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-darkblue transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
