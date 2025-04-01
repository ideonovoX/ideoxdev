
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const features = [
  {
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and processes with intelligent workflow automation."
  },
  {
    title: "Document Processing",
    description: "Extract and process data from documents using AI for faster, error-free operations."
  },
  {
    title: "Data Entry Automation",
    description: "Eliminate manual data entry with intelligent capture and validation."
  },
  {
    title: "Approval Process Optimization",
    description: "Accelerate approvals with automated routing and intelligent decision support."
  },
  {
    title: "CRM Integration",
    description: "Sync customer data across platforms and automate customer journey touchpoints."
  },
  {
    title: "Analytics & Reporting",
    description: "Gain actionable insights with automated data collection and report generation."
  }
];

const colors = [
  "text-slack-blue",
  "text-slack-green",
  "text-slack-purple",
  "text-[#0EA5E9]",
  "text-[#F59E0B]",
  "text-[#EC4899]"
];

const BusinessAutomationSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="business-automation-section">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              Automate Your Business with AI
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Transform your operations with intelligent automation that streamlines workflows, reduces errors, and frees your team to focus on strategic tasks that drive growth.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="rounded-xl overflow-hidden shadow-strong">
              <div className="bg-gradient-to-br from-slack-blue/20 to-slack-green/20 backdrop-blur-sm rounded-xl p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Business Automation" 
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
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-slack-blue hover:bg-slack-blue/90 text-white" onClick={handleLinkClick}>
                  <Link to="/business-automation">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 font-semibold" onClick={handleLinkClick}>
                  <Link to="/checkout-demo">
                    Checkout Demo
                  </Link>
                </Button>
                <Button asChild className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white" onClick={handleLinkClick}>
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
