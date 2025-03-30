
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const features = [
  {
    title: "Natural Language Processing (NLP) and Understanding",
    description: "Enables chatbots to comprehend human language and respond naturally."
  },
  {
    title: "Machine Learning (ML) and Personalization",
    description: "Helps chatbots learn from interactions and tailor responses to individual users."
  },
  {
    title: "Integration with CRM and Other Systems",
    description: "Connects with your existing tools to provide context-aware support."
  },
  {
    title: "Multi-channel Support Capabilities",
    description: "Delivers consistent experiences across websites, apps, and messaging platforms."
  },
  {
    title: "Analytics and Performance Tracking",
    description: "Provides insights on customer interactions to continuously improve responses."
  },
  {
    title: "Customizable Conversation Flows",
    description: "Create branching dialogue paths for different customer scenarios."
  }
];

const colors = [
  "text-slack-purple",
  "text-slack-blue",
  "text-slack-green",
  "text-[#F59E0B]",
  "text-[#EC4899]",
  "text-[#0EA5E9]"
];

const ChatbotSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              AI Powered ChatBot
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Chatbot's primary role and functionality are to deliver seamless and intelligent interactions with users. 
            To provide personalized and efficient support, there is a set of components that work in tandem, making 
            chatbots a valuable asset.
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
                <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                  <Link to="/chatbot">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10">
                  <Link to="/checkout-demo">
                    Checkout Demo
                  </Link>
                </Button>
                <Button asChild className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white">
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
              <div className="bg-gradient-to-br from-slack-purple/20 to-slack-blue/20 backdrop-blur-sm rounded-xl p-1">
                <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Building%20AI-Powered%20Chatbots.png" 
                    alt="AI Powered Chatbot" 
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
