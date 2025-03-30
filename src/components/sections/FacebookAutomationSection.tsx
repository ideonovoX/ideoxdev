
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';
import { Card } from '@/components/ui/card';

const FacebookAutomationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Facebook Business Page Automation with AI
            </span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Supercharge Your Social Media Presence</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Take your Facebook business page to the next level with intelligent automation that handles content creation, scheduling, engagement, and analytics all powered by AI.
              </p>
              
              <Card className="p-4 border-l-4 border-l-slack-green">
                <h4 className="font-semibold mb-1">AI Content Generation</h4>
                <p className="text-slate-600 dark:text-slate-400">Create engaging posts, captions, and responses tailored to your brand voice.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-blue">
                <h4 className="font-semibold mb-1">Smart Scheduling</h4>
                <p className="text-slate-600 dark:text-slate-400">Post at optimal times when your audience is most active and engaged.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-purple">
                <h4 className="font-semibold mb-1">Automated Engagement</h4>
                <p className="text-slate-600 dark:text-slate-400">Respond to comments and messages with intelligent, context-aware replies.</p>
              </Card>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                  <Link to="/facebook-automation">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10">
                  <Link to="/facebook-demo">
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
          
          <FadeIn direction="right" className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-strong">
              <div className="bg-gradient-to-br from-[#1877F2]/20 to-slack-blue/20 backdrop-blur-sm rounded-xl p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://www.postplanner.com/hubfs/AI%20Facebook%20Post%20Generator.png" 
                    alt="Facebook Business Automation" 
                    className="w-full object-cover rounded-lg"
                    style={{ height: '500px' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FacebookAutomationSection;
