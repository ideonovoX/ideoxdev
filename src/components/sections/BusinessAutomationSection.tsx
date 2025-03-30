
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const features = [
  {
    title: "Smart Workflow Automation",
    description: "Automate complex processes with intelligent decision-making capabilities."
  },
  {
    title: "Data-Driven Insights",
    description: "Extract meaningful patterns and actionable intelligence from your business data."
  },
  {
    title: "Reduced Operational Costs",
    description: "Cut expenses while improving accuracy and reducing human error."
  },
  {
    title: "Process Optimization",
    description: "Identify and eliminate bottlenecks in your workflows for maximum efficiency."
  },
  {
    title: "Seamless Integration",
    description: "Connects with your existing software ecosystem with minimal disruption."
  },
  {
    title: "Scalable Solutions",
    description: "Grows with your business needs from simple tasks to complex operations."
  }
];

const colors = [
  "text-slack-blue",
  "text-slack-green",
  "text-slack-purple",
  "text-[#EC4899]",
  "text-[#F59E0B]",
  "text-[#0EA5E9]"
];

const BusinessAutomationSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Automate Your Business with AI
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            AI-powered automation helps businesses streamline operations, reduce costs, and enhance productivity by handling repetitive tasks with precision and intelligence.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-strong">
              <div className="bg-gradient-to-br from-slack-blue/20 to-slack-green/20 backdrop-blur-sm rounded-xl p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://j3h5t9f5.delivery.rocketcdn.me/wp-content/uploads/Blog-1-Image--scaled.jpeg.webp" 
                    alt="Business Automation with AI" 
                    className="w-full object-cover rounded-lg"
                    style={{ height: '500px' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-6 w-6 mt-1 ${colors[index % colors.length]}`} />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-slack-blue hover:bg-slack-blue/90 text-white">
                  <Link to="/business-automation">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                  <Link to="/checkout-demo">
                    Checkout Demo
                  </Link>
                </Button>
                <Button asChild className="bg-slack-green hover:bg-slack-green/90 text-white">
                  <Link to="/get-started-form">
                    Try for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomationSection;
