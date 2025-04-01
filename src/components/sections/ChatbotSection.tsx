
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const features = [
  {
    title: "24/7 Customer Support",
    description: "Provide round-the-clock customer service without increasing staffing costs."
  },
  {
    title: "Natural Language Understanding",
    description: "AI that understands context, intent, and conversational nuances."
  },
  {
    title: "Multilingual Support",
    description: "Communicate with customers in multiple languages automatically."
  },
  {
    title: "Custom Knowledge Base",
    description: "Train your chatbot with your specific business knowledge and protocols."
  },
  {
    title: "Seamless Human Handoff",
    description: "Intelligent escalation to human agents when complex issues arise."
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights into customer queries, satisfaction, and chatbot performance."
  }
];

const colors = [
  "text-slack-purple",
  "text-slack-blue",
  "text-slack-green",
  "text-[#0EA5E9]",
  "text-[#F59E0B]",
  "text-[#EC4899]"
];

const ChatbotSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="chatbot-section">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              AI Powered Chat Bot for Your Business
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Transform your customer support with intelligent chatbots that understand context, solve problems, and scale with your business, all powered by advanced AI.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
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
                <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white" onClick={handleLinkClick}>
                  <Link to="/chatbot">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:text-white font-semibold" onClick={handleLinkClick}>
                  <Link to="/checkout-demo">
                    Checkout Demo →
                  </Link>
                </Button>
                <Button asChild className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white" onClick={handleLinkClick}>
                  <Link to="/get-started-form">
                    Try for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="rounded-xl overflow-hidden shadow-strong">
              <div className="bg-gradient-to-br from-slack-purple/20 to-slack-blue/20 backdrop-blur-sm rounded-xl p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="AI Chatbot" 
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

export default ChatbotSection;
