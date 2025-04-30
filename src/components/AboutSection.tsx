
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/a1519e56-541e-4aa1-a8a8-0d6e5164730b.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C#'],
    'Web Development': ['HTML', 'CSS', 'React.js', 'Node.js'],
    'Other': ['Cybersecurity', 'Networking', 'IT Infrastructure', 'Troubleshooting']
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-portfolio-darkblue to-portfolio-blue/70 backdrop-blur-sm relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-portfolio-highlight/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-portfolio-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-portfolio-highlight">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left opacity-0 [animation-fill-mode:forwards]">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-cyan to-portfolio-purple rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition duration-700"></div>
              <div className="relative rounded-xl overflow-hidden aspect-square shadow-xl border-2 border-white/10">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center bg-portfolio-blue text-4xl font-bold text-white">
                    YP
                  </div>
                ) : (
                  <img 
                    src="/lovable-uploads/a1519e56-541e-4aa1-a8a8-0d6e5164730b.png" 
                    alt="Yug Patel" 
                    className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} hover:scale-105 transition-transform duration-500`}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
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
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-highlight to-portfolio-purple rounded-full"></span>
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className={`opacity-0 animate-fade-in [animation-fill-mode:forwards]`} style={{animationDelay: `${0.4 + index * 0.2}s`}}>
                  <h4 className="text-white font-medium mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className="bg-white/10 backdrop-blur-sm text-portfolio-highlight px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border border-white/5 hover:bg-portfolio-highlight hover:text-portfolio-darkblue"
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
