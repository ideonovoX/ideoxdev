
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';
import { Card } from '@/components/ui/card';

const ChatbotSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              AI Powered ChatBot
            </span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Key components of AI-powered chatbots</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Chatbot's primary role and functionality are to deliver seamless and intelligent interactions with users. 
                To provide personalized and efficient support, there is a set of components that work in tandem, making 
                chatbots a valuable asset.
              </p>
              
              <Card className="p-4 border-l-4 border-l-slack-purple">
                <h4 className="font-semibold mb-1">Natural Language Processing (NLP) and Understanding</h4>
                <p className="text-slate-600 dark:text-slate-400">Enables chatbots to comprehend human language and respond naturally.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-blue">
                <h4 className="font-semibold mb-1">Machine Learning (ML) and Personalization</h4>
                <p className="text-slate-600 dark:text-slate-400">Helps chatbots learn from interactions and tailor responses to individual users.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-green">
                <h4 className="font-semibold mb-1">Integration with CRM and Other Systems</h4>
                <p className="text-slate-600 dark:text-slate-400">Connects with your existing tools to provide context-aware support.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-slack-yellow">
                <h4 className="font-semibold mb-1">Multi-channel Support Capabilities</h4>
                <p className="text-slate-600 dark:text-slate-400">Delivers consistent experiences across websites, apps, and messaging platforms.</p>
              </Card>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                  <Link to="/chatbot">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slack-blue text-slack-blue hover:bg-slack-blue/10">
                  <Link to="/chatbot-demo">
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
