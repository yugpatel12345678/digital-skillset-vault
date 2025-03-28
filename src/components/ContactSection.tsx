
import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-heading mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4">
                  <Mail className="text-portfolio-highlight" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:yugpatel9335@gmail.com" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                    yugpatel9335@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4">
                  <Linkedin className="text-portfolio-highlight" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/yug-patel-8a4ab2250/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                    Yug Patel
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4">
                  <Github className="text-portfolio-highlight" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a href="https://github.com/yugpatel12345678" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-highlight transition-colors">
                    yugpatel12345678
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-portfolio-blue border-none shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-portfolio-lightblue border-portfolio-lightblue text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-portfolio-lightblue border-portfolio-lightblue text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-portfolio-lightblue border-portfolio-lightblue text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="bg-portfolio-lightblue border-portfolio-lightblue text-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-highlight text-portfolio-darkblue hover:bg-portfolio-highlight/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
