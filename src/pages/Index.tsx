import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Zap, Workflow, Network, Server, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedGradient from '@/components/AnimatedGradient';
import FadeIn from '@/components/FadeIn';
import TextSlider from '@/components/TextSlider';

const Index = () => {
  const [email, setEmail] = useState('');

  const sliderContent = [
    {
      title: 'Intelligent Automation',
      description: 'Transform your business with smart automation that learns, adapts, and optimizes your workflows. Save time, reduce errors, and focus on what matters.'
    },
    {
      title: 'Automate Your Business',
      description: "Streamline operations and increase efficiency with our intelligent platform that handles repetitive tasks. Unlock your team's potential for innovation and growth."
    },
    {
      title: 'AI Powered Chat Bot',
      description: 'Provide instant 24/7 support and engage customers with our conversational AI that understands context and learns from interactions to deliver exceptional experiences.'
    },
    {
      title: 'fCommerce Automation',
      description: 'Revolutionize your social selling with AI-powered automation that manages product listings, pricing, and customer interactions across multiple social platforms.'
    }
  ];

  const features = [
    {
      title: 'AI Task Automation',
      description: 'Automate repetitive tasks with intelligent AI that learns from your workflow patterns.',
      icon: Bot
    },
    {
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intuitive workflow design tools.',
      icon: Workflow
    },
    {
      title: 'Instant Integrations',
      description: 'Connect with 1000+ apps and services with our no-code integration platform.',
      icon: Zap
    },
    {
      title: 'Intelligent Insights',
      description: 'Gain valuable insights from your automation data with advanced analytics.',
      icon: Lightbulb
    },
    {
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
      icon: Server
    },
    {
      title: 'Seamless Connectivity',
      description: 'Connect your entire tech stack with our robust API and webhook capabilities.',
      icon: Network
    }
  ];

  const testimonials = [
    {
      quote: "AutomateAI has completely transformed how our marketing team operates. We've saved countless hours on repetitive tasks and seen a 40% increase in campaign efficiency.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The intelligent workflow optimization has helped us identify bottlenecks we didn't even know existed. Our customer response time has improved by 65%.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Globex Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Setting up integrations used to take our dev team days. With AutomateAI, our business team can do it themselves in minutes. Game changer!",
      author: "James Wilson",
      role: "CTO",
      company: "Innovate Labs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const stats = [
    { value: '95%', label: 'Time Saved' },
    { value: '3x', label: 'Productivity Boost' },
    { value: '1000+', label: 'Integrations' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-sm font-medium text-slack-purple mb-4 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-slack-green mr-2"></span>
              Now available for enterprise
            </div>
            
            <TextSlider 
              slides={sliderContent} 
              className="animate-fade-in" 
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mt-6" style={{ animationDelay: '300ms' }}>
              <div className="flex-1 max-w-xs mx-auto sm:mx-0">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white h-12 px-6">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-3 animate-fade-in" style={{ animationDelay: '400ms' }}>
              No credit card required. Free 14-day trial.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-strong mt-8 mx-auto animate-fade-in" style={{ animationDelay: '500ms', maxWidth: '1000px' }}>
            <div className="bg-gradient-to-b from-slack-purple/10 to-slack-blue/10 backdrop-blur-sm rounded-xl p-1">
              <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-3">
                  <div className="w-3 h-3 rounded-full bg-slack-red"></div>
                  <div className="w-3 h-3 rounded-full bg-slack-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-slack-green"></div>
                  <div className="ml-2 text-sm text-slate-600 dark:text-slate-400 font-mono">AutomateAI Dashboard</div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80" 
                  alt="AI Automation Dashboard" 
                  className="w-full object-cover"
                  style={{ height: '500px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logos Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {['Microsoft', 'Google', 'Amazon', 'Slack', 'Adobe', 'Shopify'].map((company, index) => (
                <div 
                  key={company} 
                  className="text-xl font-bold text-slate-400 dark:text-slate-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slack-black">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
                Powerful Features to Transform Your Workflow
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Our platform streamlines your operations with intelligent automation and powerful integrations.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-slack-purple dark:bg-slack-purple/90 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
                How AutomateAI Works
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Get started in minutes with our simple three-step process
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Connect Your Apps',
                description: 'Easily integrate with your existing tools and platforms with our no-code connectors.'
              },
              {
                step: '02',
                title: 'Create Workflows',
                description: 'Design intelligent workflows that automate your business processes end-to-end.'
              },
              {
                step: '03',
                title: 'Optimize & Scale',
                description: 'Let AI analyze and improve your automation while you scale across your organization.'
              }
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 150}>
                <div className="relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slack-black/50 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="text-4xl font-bold text-slack-purple/20 dark:text-slack-purple/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slack-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slack-black">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Discover how AutomateAI is transforming businesses worldwide
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={index * 150}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  image={testimonial.image}
                  index={index}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <AnimatedGradient className="absolute inset-0 w-full h-full -z-10 opacity-30" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using AutomateAI to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white h-12 px-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10 h-12 px-6">
                  Schedule Demo
                </Button>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
                No credit card required. Free 14-day trial.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
