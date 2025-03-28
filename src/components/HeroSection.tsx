
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-portfolio-highlight mb-3 font-medium tracking-wider">HELLO, MY NAME IS</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-white">
            Yug Patel
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
            Computer Systems Technology Student
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Welcome to my digital portfolio! I specialize in web development and cybersecurity. 
            This portfolio showcases my technical skills, projects, and experience as I prepare 
            for a career in IT and software development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="default" className="bg-portfolio-highlight text-portfolio-darkblue hover:bg-portfolio-highlight/90">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild variant="outline" className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <a href="#about" className="text-portfolio-highlight">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
