
import React from 'react';
import { CircleCheck, ArrowRight, Link, Activity, BookOpen } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface StepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const HowItWorksSection = () => {
  const steps: StepProps[] = [
    {
      step: '01',
      title: 'Connect Your Apps',
      description: 'Easily integrate with your existing tools and platforms with our no-code connectors.',
      icon: <Link className="h-10 w-10 text-white" />,
      color: 'from-slack-purple to-slack-blue'
    },
    {
      step: '02',
      title: 'Create Workflows',
      description: 'Design intelligent workflows that automate your business processes end-to-end.',
      icon: <Activity className="h-10 w-10 text-white" />,
      color: 'from-slack-green to-teal-400'
    },
    {
      step: '03',
      title: 'Optimize & Scale',
      description: 'Let AI analyze and improve your automation while you scale across your organization.',
      icon: <BookOpen className="h-10 w-10 text-white" />,
      color: 'from-slack-yellow to-orange-400'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
              How IdeoxAI Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Get started in minutes with our simple three-step process
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Desktop background line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-1 top-1/2 -translate-y-1/2 w-[90%] bg-gradient-to-r from-slack-purple/10 via-slack-blue/20 to-slack-green/10 rounded-full hidden md:block" />
          
          {/* Mobile background line */}
          <div className="absolute top-0 bottom-0 left-[40px] w-1 bg-gradient-to-b from-slack-purple/20 via-slack-blue/20 to-slack-green/20 rounded-full md:hidden" />
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((item, index) => (
              <FadeIn key={item.step} delay={index * 150}>
                <div className="relative flex md:flex-col md:items-center">
                  {/* Step icon */}
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "w-20 h-20 rounded-full bg-gradient-to-br shadow-lg flex items-center justify-center relative z-20",
                      item.color
                    )}>
                      {item.icon}
                      
                      {/* Floating step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center">
                        <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-br from-slack-purple to-slack-blue">{item.step}</span>
                      </div>
                      
                      {/* Pulsing animation */}
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-br opacity-30 animate-ping-slow",
                        item.color
                      )} />
                    </div>
                    
                    {/* Connector arrow (only between items) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-4 transform translate-x-full">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 md:ml-0 md:mt-6 md:text-center">
                    <h3 className="text-xl font-semibold mb-2 text-slack-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 md:px-4">
                      {item.description}
                    </p>
                    
                    {/* Completion check mark for last step */}
                    {index === steps.length - 1 && (
                      <div className="flex justify-center mt-4">
                        <CircleCheck className="h-6 w-6 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* CTA button */}
          <FadeIn delay={450}>
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-slack-purple to-slack-blue text-white hover:opacity-90 transition-opacity">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
