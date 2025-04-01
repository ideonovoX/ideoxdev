
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const features = [
  {
    title: "AI Content Generation",
    description: "Create engaging posts, captions, and responses tailored to your brand voice."
  },
  {
    title: "Smart Scheduling",
    description: "Post at optimal times when your audience is most active and engaged."
  },
  {
    title: "Automated Engagement",
    description: "Respond to comments and messages with intelligent, context-aware replies."
  },
  {
    title: "Analytics & Insights",
    description: "Track performance metrics and optimize your Facebook strategy."
  },
  {
    title: "Audience Targeting",
    description: "Reach your ideal customers with precision targeting capabilities."
  },
  {
    title: "Content Calendar",
    description: "Plan and visualize your content strategy with an intuitive calendar."
  }
];

const colors = [
  "text-slack-green",
  "text-slack-blue",
  "text-slack-purple",
  "text-[#0EA5E9]",
  "text-[#F59E0B]",
  "text-[#EC4899]"
];

const FacebookAutomationSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Facebook Business Page Automation with AI
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Take your Facebook business page to the next level with intelligent automation that handles content creation, scheduling, engagement, and analytics all powered by AI.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-6 w-6 mt-1 ${colors[index % colors.length]}`} />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white" onClick={handleLinkClick}>
                  <Link to="/facebook-automation">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 font-semibold" onClick={handleLinkClick}>
                  <Link to="/checkout-demo">
                    Checkout Demo
                  </Link>
                </Button>
                <Button asChild className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white" onClick={handleLinkClick}>
                  <Link to="/get-started-form">
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
