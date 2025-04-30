
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-portfolio-darkblue/80 backdrop-blur-md py-3 shadow-lg border-b border-portfolio-lightblue/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className={`text-2xl font-heading font-bold text-white relative ${scrolled ? '' : 'animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]'}`}>
            YP
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-portfolio-highlight"></span>
          </span>
          <h1 className={`hidden sm:block text-lg font-heading font-semibold text-white ${scrolled ? '' : 'animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]'}`}>
            Yug Patel
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`navbar-link ${activeSection === link.id ? 'active' : ''} ${
                scrolled ? '' : 'animate-fade-in opacity-0 [animation-fill-mode:forwards]'
              }`}
              style={!scrolled ? { animationDelay: `${0.4 + index * 0.1}s` } : {}}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-portfolio-highlight/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-portfolio-darkblue/95 backdrop-blur-md z-40 flex flex-col items-center pt-10 animate-fade-in">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`navbar-link py-5 text-xl ${activeSection === link.id ? 'active' : ''} animate-fade-in opacity-0 [animation-fill-mode:forwards]`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
