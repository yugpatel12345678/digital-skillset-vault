
import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      setIsSubmitted(true);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-portfolio-highlight/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-left opacity-0 [animation-fill-mode:forwards]">
            <h3 className="text-2xl font-heading mb-6 text-white">Get In Touch</h3>
            <p className="text-portfolio-text mb-8 leading-relaxed">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-portfolio-highlight group-hover:text-portfolio-darkblue">
                  <Mail className="text-portfolio-highlight group-hover:text-portfolio-darkblue transition-all duration-300" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a 
                    href="mailto:yugpatel9335@gmail.com" 
                    className="text-portfolio-accent hover:text-portfolio-highlight transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-highlight after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    yugpatel9335@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-portfolio-highlight group-hover:text-portfolio-darkblue">
                  <Linkedin className="text-portfolio-highlight group-hover:text-portfolio-darkblue transition-all duration-300" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/yug-patel-8a4ab2250/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-accent hover:text-portfolio-highlight transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-highlight after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    Yug Patel
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-portfolio-lightblue flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-portfolio-highlight group-hover:text-portfolio-darkblue">
                  <Github className="text-portfolio-highlight group-hover:text-portfolio-darkblue transition-all duration-300" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/yugpatel12345678" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-accent hover:text-portfolio-highlight transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-highlight after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    yugpatel12345678
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
            <Card className="glass-card border-portfolio-lightblue/20 shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-portfolio-highlight to-blue-400"></div>
              <CardContent className="pt-6">
                {!isSubmitted ? (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                          className="bg-portfolio-lightblue/50 backdrop-blur-sm border-portfolio-lightblue/20 text-white placeholder:text-white/50 focus:border-portfolio-highlight focus:ring-1 focus:ring-portfolio-highlight/50 transition-all duration-300"
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
                          className="bg-portfolio-lightblue/50 backdrop-blur-sm border-portfolio-lightblue/20 text-white placeholder:text-white/50 focus:border-portfolio-highlight focus:ring-1 focus:ring-portfolio-highlight/50 transition-all duration-300"
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
                        className="bg-portfolio-lightblue/50 backdrop-blur-sm border-portfolio-lightblue/20 text-white placeholder:text-white/50 focus:border-portfolio-highlight focus:ring-1 focus:ring-portfolio-highlight/50 transition-all duration-300"
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
                        className="bg-portfolio-lightblue/50 backdrop-blur-sm border-portfolio-lightblue/20 text-white placeholder:text-white/50 focus:border-portfolio-highlight focus:ring-1 focus:ring-portfolio-highlight/50 transition-all duration-300"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className={`w-full bg-portfolio-highlight text-portfolio-darkblue hover:bg-portfolio-highlight/90 transition-all duration-300 relative overflow-hidden group`}
                      disabled={isSubmitting}
                    >
                      <span className="flex items-center justify-center">
                        {isSubmitting ? "Sending..." : (
                          <>
                            <Send size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                            Send Message
                          </>
                        )}
                      </span>
                      {isSubmitting && (
                        <span className="absolute bottom-0 left-0 h-1 bg-portfolio-darkblue/50 animate-[shimmer_2s_infinite]" style={{width: '30%'}}></span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-portfolio-highlight/20 mb-4">
                      <CheckCircle size={32} className="text-portfolio-highlight" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                    <p className="text-portfolio-accent mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="bg-portfolio-highlight/20 text-portfolio-highlight hover:bg-portfolio-highlight/30"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
