
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedGradient from '@/components/AnimatedGradient';
import TextSlider from '@/components/TextSlider';

interface HeroSectionProps {
  sliderContent: Array<{
    title: string;
    description: string;
  }>;
}

const HeroSection = ({ sliderContent }: HeroSectionProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      <AnimatedGradient />
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 text-sm font-medium text-slack-purple mb-8">
            <span className="flex h-2 w-2 rounded-full bg-slack-green mr-2"></span>
            Now available for enterprise
          </div>
          
          <TextSlider 
            slides={sliderContent} 
            className="animate-fade-in" 
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mt-10" style={{ animationDelay: '300ms' }}>
            <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white h-12 px-8 text-base">
              <Link to="/checkout-demo">
                Checkout Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            No credit card required. Free 3-month trial.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-strong mt-16 mx-auto animate-fade-in" style={{ animationDelay: '500ms', maxWidth: '1000px' }}>
          <div className="bg-gradient-to-b from-slack-purple/10 to-slack-blue/10 backdrop-blur-sm rounded-xl p-1">
            <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-slack-red"></div>
                <div className="w-3 h-3 rounded-full bg-slack-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-slack-green"></div>
                <div className="ml-2 text-sm text-slate-600 dark:text-slate-400 font-mono">IdeoxAI Dashboard</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80" 
                alt="AI Automation Dashboard" 
                className="w-full object-cover"
                style={{ height: '600px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
