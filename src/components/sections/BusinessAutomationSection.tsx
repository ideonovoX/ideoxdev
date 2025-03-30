
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';
import { Card } from '@/components/ui/card';

const BusinessAutomationSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Automate Your Business with AI
            </span>
          </h2>
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
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Transform How You Work</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                AI-powered automation helps businesses streamline operations, reduce costs, and enhance productivity by handling repetitive tasks with precision and intelligence.
              </p>
              
              <Card className="p-4 border-l-4 border-l-slack-blue">
                <h4 className="font-semibold mb-1">Smart Workflow Automation</h4>
                <p className="text-slate-600 dark:text-slate-400">Automate complex processes with intelligent decision-making capabilities.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-green">
                <h4 className="font-semibold mb-1">Data-Driven Insights</h4>
                <p className="text-slate-600 dark:text-slate-400">Extract meaningful patterns and actionable intelligence from your business data.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-purple">
                <h4 className="font-semibold mb-1">Reduced Operational Costs</h4>
                <p className="text-slate-600 dark:text-slate-400">Cut expenses while improving accuracy and reducing human error.</p>
              </Card>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-slack-blue hover:bg-slack-blue/90 text-white">
                  <Link to="/business-automation">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                  <Link to="/automation-demo">
                    Checkout Demo
                  </Link>
                </Button>
                <Button asChild className="bg-slack-green hover:bg-slack-green/90 text-white">
                  <Link to="/get-started">
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
