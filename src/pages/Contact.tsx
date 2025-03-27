
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import FadeIn from '@/components/FadeIn';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slack-black">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Get in touch with our team for any questions or inquiries
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <FadeIn delay={100}>
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slack-black dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-slack-purple mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-slack-black dark:text-white">Address</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Sonabaria, Satkhira, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-slack-purple mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-slack-black dark:text-white">Phone</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        +8801311344747
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-slack-purple mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-slack-black dark:text-white">Email</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        ai@ideox.ai
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-slack-black dark:text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-slate-600 dark:text-slate-400">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Contact Form */}
            <FadeIn delay={200}>
              <div className="bg-white dark:bg-slack-black/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-soft">
                <h2 className="text-2xl font-bold text-slack-black dark:text-white mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-slack-purple hover:bg-slack-purple/90 text-white h-12">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
