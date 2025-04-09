
import React from 'react';
import { Github } from 'lucide-react';
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
    description: 'A platform designed to simplify content creation, sharing, and quiz-making for educators.',
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
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-portfolio-highlight mb-2">Key Features</h4>
                <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h4 className="font-medium text-portfolio-highlight mb-2">Challenges & Solutions</h4>
                <p className="text-gray-300 mb-4">{project.challenge}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild variant="outline" size="sm" className="border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10">
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
