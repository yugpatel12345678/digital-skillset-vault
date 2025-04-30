
import React, { useEffect, useRef } from 'react';
import { FileText, Calendar, Building, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ResumeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate cards when they come into view
          const cards = document.querySelectorAll('.resume-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const resumeData = {
    education: [
      {
        degree: 'Diploma in Computer Systems Technology',
        institution: 'Saskatchewan Polytechnic',
        duration: '2023 - 2025 (Expected)',
        description: 'Specializing in web development and cybersecurity.'
      }
    ],
    experience: [
      {
        position: 'Sales Associate',
        company: 'The Home Depot',
        duration: '2022 - Present',
        description: 'Developed strong communication, teamwork, and leadership skills while assisting customers and managing inventory.'
      }
    ],
    skills: {
      technical: ['Programming', 'Troubleshooting', 'Database Management', 'Cloud Computing', 'Cybersecurity Best Practices'],
      soft: ['Communication', 'Problem-solving', 'Time Management', 'Teamwork', 'Adaptability']
    }
  };

  return (
    <section id="resume" ref={sectionRef} className="section-padding bg-gradient-to-b from-portfolio-blue/30 to-portfolio-darkblue relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-portfolio-highlight/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Resume</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="resume-card opacity-0 transition-all duration-500">
            <Card className="glass-card border-portfolio-lightblue/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-portfolio-highlight to-blue-400"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white space-x-3">
                  <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full">
                    <GraduationCap size={18} />
                  </span>
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="pl-4 border-l-2 border-portfolio-highlight hover:border-portfolio-highlight/80 transition-all duration-300 hover:pl-5"
                  >
                    <h3 className="text-white font-medium">{edu.degree}</h3>
                    <p className="text-portfolio-highlight font-medium">{edu.institution}</p>
                    <p className="text-sm text-portfolio-accent flex items-center mt-1">
                      <Calendar size={14} className="mr-1.5" /> {edu.duration}
                    </p>
                    <p className="mt-3 text-portfolio-accent">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="resume-card opacity-0 transition-all duration-500">
            <Card className="glass-card border-portfolio-lightblue/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-portfolio-highlight to-blue-400"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white space-x-3">
                  <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full">
                    <Building size={18} />
                  </span>
                  <span>Work Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="pl-4 border-l-2 border-portfolio-highlight hover:border-portfolio-highlight/80 transition-all duration-300 hover:pl-5"
                  >
                    <h3 className="text-white font-medium">{exp.position}</h3>
                    <p className="text-portfolio-highlight font-medium">{exp.company}</p>
                    <p className="text-sm text-portfolio-accent flex items-center mt-1">
                      <Calendar size={14} className="mr-1.5" /> {exp.duration}
                    </p>
                    <p className="mt-3 text-portfolio-accent">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8 resume-card opacity-0 transition-all duration-500">
          <Card className="glass-card border-portfolio-lightblue/20 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-portfolio-highlight to-blue-400"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white space-x-3">
                <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full">
                  <FileText size={18} />
                </span>
                <span>Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-medium mb-4 flex items-center">
                    <span className="w-1 h-4 bg-portfolio-highlight mr-2 rounded-full"></span>
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map((skill, index) => (
                      <span 
                        key={index} 
                        className="skill-badge"
                        style={{animationDelay: `${0.1 * index}s`}}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-4 flex items-center">
                    <span className="w-1 h-4 bg-portfolio-highlight mr-2 rounded-full"></span>
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill, index) => (
                      <span 
                        key={index} 
                        className="skill-badge"
                        style={{animationDelay: `${0.1 * index}s`}}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
