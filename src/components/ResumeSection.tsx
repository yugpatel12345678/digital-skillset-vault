
import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ResumeSection = () => {
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
    <section id="resume" className="section-padding bg-portfolio-blue">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="section-title">Resume</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="bg-portfolio-lightblue border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="pl-4 border-l-2 border-portfolio-highlight">
                    <h3 className="text-white font-medium">{edu.degree}</h3>
                    <p className="text-portfolio-highlight font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-300">{edu.duration}</p>
                    <p className="mt-2 text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-portfolio-lightblue border-none">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="pl-4 border-l-2 border-portfolio-highlight">
                    <h3 className="text-white font-medium">{exp.position}</h3>
                    <p className="text-portfolio-highlight font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-300">{exp.duration}</p>
                    <p className="mt-2 text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <Card className="bg-portfolio-lightblue border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white">
                <span className="bg-portfolio-highlight text-portfolio-darkblue p-2 rounded-full mr-3">
                  <FileText size={18} />
                </span>
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-medium mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
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
