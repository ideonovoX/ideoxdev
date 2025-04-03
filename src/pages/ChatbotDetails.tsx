
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, MessageSquare, Zap, Users, Lock, Settings } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureCard from '@/components/FeatureCard';
import SEO from '@/components/SEO';
import { generateServiceSchema } from '@/utils/schemaMarkup';

const features = [
  {
    title: "24/7 Customer Support",
    description: "Provide round-the-clock assistance to your customers without increasing staffing costs.",
    icon: MessageSquare
  },
  {
    title: "Personalized Conversations",
    description: "Create natural, context-aware conversations that adapt to each customer's unique needs.",
    icon: Users
  },
  {
    title: "Instant Response Times",
    description: "Eliminate wait times and deliver immediate answers to customer inquiries.",
    icon: Zap
  },
  {
    title: "Secure Communications",
    description: "Maintain the highest levels of data security and privacy compliance.",
    icon: Lock
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing systems including CRM, help desk, and e-commerce platforms.",
    icon: Settings
  },
  {
    title: "Continuous Learning",
    description: "Your chatbot improves over time through machine learning and ongoing analysis.",
    icon: Bot
  }
];

const ChatbotDetails = () => {
  const serviceSchema = generateServiceSchema({
    name: "AI-Powered Chatbot Solutions",
    description: "Transform your customer experience with intelligent, conversational AI that understands, learns, and delivers results.",
    url: "https://ideox.ai/chatbot",
    imageUrl: "https://ideox.ai/images/chatbot-service.jpg"
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI-Powered Chatbot Solutions | IdeoXai"
        description="Transform your customer experience with intelligent, conversational AI chatbots that understand, learn, and deliver exceptional support 24/7."
        canonicalUrl="https://ideox.ai/chatbot"
        schemaMarkup={serviceSchema}
      />
      <Navbar />
      <main>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                    AI-Powered Chatbot Solutions
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  Transform your customer experience with intelligent, conversational AI that understands, learns, and delivers results.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                    <Link to="/get-started">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-slack-blue text-slack-blue hover:bg-slack-blue/10">
                    <Link to="/chatbot-demo">
                      See Demo
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Why Choose Our AI Chatbots
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
                Our AI-powered chatbots help businesses enhance customer service, increase efficiency, and drive growth through intelligent automation.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 100}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    index={index}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                    How Our Chatbots Work
                  </span>
                </h2>
              </FadeIn>
              
              <div className="space-y-12 mt-12">
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Natural Language Processing</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our chatbots use advanced NLP to understand the context, intent, and sentiment behind user queries, enabling them to provide accurate and helpful responses.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <MessageSquare className="h-24 w-24 text-slack-purple" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        With each interaction, our chatbots learn and improve, adapting to your business needs and customer preferences to deliver increasingly personalized experiences.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <Bot className="h-24 w-24 text-slack-blue" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our chatbots integrate with your existing systems, including CRM, e-commerce, and help desk tools, creating a unified customer experience across all touchpoints.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <Settings className="h-24 w-24 text-slack-green" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Ready to Transform Your Customer Experience?
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                Join thousands of businesses that are leveraging AI to deliver exceptional customer experiences. Get started with IdeoxAI today.
              </p>
              <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white px-8 py-6 text-lg">
                <Link to="/get-started">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChatbotDetails;
