
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { cn } from '@/lib/utils';

const HowItWorksSection = () => {
  const steps = [
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
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
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
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slack-purple/30 to-slack-blue/30 hidden md:block" />
          
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 150}>
              <div className={cn(
                "relative mb-16 last:mb-0 md:grid md:grid-cols-7 md:gap-8 items-center",
                index % 2 === 1 ? "md:text-right" : ""
              )}>
                {/* Step number and connecting elements */}
                <div className={cn(
                  "hidden md:flex items-center justify-center col-span-1",
                  index % 2 === 1 ? "md:order-7" : ""
                )}>
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slack-purple to-slack-blue flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 rotate-90 text-slack-purple/70 h-8 w-8" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 relative z-10",
                  "border border-slate-200 dark:border-slate-700/50",
                  "md:col-span-6",
                  index % 2 === 1 ? "md:order-6" : ""
                )}>
                  {/* Mobile step indicator */}
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slack-purple to-slack-blue flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slack-black dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Desktop title */}
                  <h3 className="hidden md:block text-xl font-semibold mb-3 text-slack-black dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                  
                  {/* Only display CheckCircle for last step */}
                  {index === steps.length - 1 && (
                    <div className="absolute -right-3 -bottom-3 bg-white dark:bg-slate-800 p-1 rounded-full shadow-md">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
