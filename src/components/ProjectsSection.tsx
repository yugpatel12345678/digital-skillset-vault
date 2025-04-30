
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Movie Review Web App',
    description: 'A web application for users to submit and view movie reviews.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    features: [
      'User authentication using Google login',
      'Review submission and rating system',
      'Recent activity tracking and display'
    ],
    challenge: 'Implemented authentication securely while ensuring a smooth user experience.',
    github: 'https://github.com/yugpatel12345678',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS']
  },
  {
    id: 2,
    title: 'EduShare Educational Platform',
    description: 'A platform designed to simplify content creation, sharing, and test-making for educators.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    features: [
      'AI-powered question generation',
      'Content sharing and collaboration',
      'Secure user authentication for teachers and students'
    ],
    challenge: 'Ensured efficient content organization and seamless user access control.',
    github: 'https://github.com/yugpatel12345678/capstone',
    technologies: ['Node.js', 'MongoDB', 'Express', 'React']
  },
  {
    id: 3,
    title: 'Meditation Android App',
    description: 'A mobile application designed to help users practice meditation and mindfulness.',
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=800&q=80',
    features: [
      'Guided meditation sessions with soothing audio',
      'Daily meditation reminders and progress tracking',
      'Customizable meditation durations and themes'
    ],
    challenge: 'Optimized app performance to run smoothly on various Android devices.',
    github: 'https://github.com/yugpatel12345678',
    technologies: ['Java', 'Android SDK', 'Firebase', 'Room Database']
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/5 w-64 h-64 bg-portfolio-highlight/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`project-card opacity-0 animate-fade-in [animation-fill-mode:forwards] transition-all duration-500 hover:-translate-y-2`}
              style={{animationDelay: `${0.2 + index * 0.2}s`}}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-darkblue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10 backdrop-blur-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github size={16} className="mr-2" />
                    View Project
                  </Button>
                </div>
                <div className="absolute top-0 left-0 m-3 px-2 py-1 bg-portfolio-highlight/90 text-portfolio-darkblue rounded text-xs font-medium">
                  Project {project.id}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  {project.title}
                  {hoveredProject === project.id && (
                    <ExternalLink size={16} className="ml-2 text-portfolio-highlight" />
                  )}
                </CardTitle>
                <CardDescription className="text-portfolio-accent">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-medium text-portfolio-highlight mb-2 flex items-center">
                  <span className="w-1 h-4 bg-portfolio-highlight mr-2 rounded-full"></span>
                  Key Features
                </h4>
                <ul className="list-none pl-3 mb-4 text-portfolio-text space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-portfolio-highlight mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-portfolio-highlight mb-2 flex items-center">
                  <span className="w-1 h-4 bg-portfolio-highlight mr-2 rounded-full"></span>
                  Challenges & Solutions
                </h4>
                <p className="text-portfolio-text mb-4">{project.challenge}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center">
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10 transition-all duration-300"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
