
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/896a5952-96e3-424e-850b-44b3cb77b16d.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C#'],
    'Web Development': ['HTML', 'CSS', 'React.js', 'Node.js'],
    'Other': ['Cybersecurity', 'Networking', 'IT Infrastructure', 'Troubleshooting']
  };

  return (
    <section id="about" className="section-padding bg-portfolio-blue/30 backdrop-blur-sm relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-highlight/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left opacity-0 [animation-fill-mode:forwards]">
            <div className={`relative from-portfolio-highlight to-blue-400 rounded-lg p-1 image-frame glow-effect`}>
              <div className="w-full h-[350px] rounded-lg overflow-hidden">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center bg-portfolio-lightblue">
                    <span className="text-xl text-white">YP</span>
                  </div>
                ) : (
                  <img 
                    src="/lovable-uploads/896a5952-96e3-424e-850b-44b3cb77b16d.png" 
                    alt="Yug Patel" 
                    className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-portfolio-highlight rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="animate-slide-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
            <p className="text-lg text-portfolio-text mb-8 leading-relaxed">
              I am a final-year student studying computer systems technology, 
              and I have a deep love for system security, coding, and troubleshooting. 
              I have practical experience with software development, networking, and 
              IT infrastructure thanks to my coursework.
            </p>
            
            <h3 className="text-xl font-heading mb-6 text-portfolio-highlight inline-block relative">
              My Skills
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-highlight to-blue-400 rounded-full"></span>
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className={`opacity-0 animate-fade-in [animation-fill-mode:forwards]`} style={{animationDelay: `${0.4 + index * 0.2}s`}}>
                  <h4 className="text-white font-medium mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className="skill-badge"
                        style={{animationDelay: `${0.6 + skillIndex * 0.1}s`}}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
