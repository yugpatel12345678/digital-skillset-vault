
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C#'],
    'Web Development': ['HTML', 'CSS', 'React.js', 'Node.js'],
    'Other': ['Cybersecurity', 'Networking', 'IT Infrastructure', 'Troubleshooting']
  };

  return (
    <section id="about" className="section-padding bg-portfolio-blue">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[350px] rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/896a5952-96e3-424e-850b-44b3cb77b16d.png" 
                  alt="Yug Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-portfolio-highlight rounded-lg -z-10"></div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-300 mb-6">
              I am a final-year student studying computer systems technology, 
              and I have a deep love for system security, coding, and troubleshooting. 
              I have practical experience with software development, networking, and 
              IT infrastructure thanks to my coursework.
            </p>
            
            <h3 className="text-xl font-heading mb-4 text-portfolio-highlight">My Skills</h3>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-white font-medium mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span key={skill} className="skill-badge">
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
