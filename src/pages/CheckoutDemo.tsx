import React from 'react';
import BasicPage from '@/components/BasicPage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';
import SEO from '@/components/SEO';
import { generateWebPageSchema } from '@/utils/schemaMarkup';

const demoCompanies = [
  {
    name: "IntelliChat",
    logo: "https://placehold.co/200x100/4F46E5/FFFFFF?text=IntelliChat",
    description: "A cutting-edge AI chatbot for customer service",
    website: "https://example.com/intellichat"
  },
  {
    name: "ChatGenius",
    logo: "https://placehold.co/200x100/10B981/FFFFFF?text=ChatGenius",
    description: "Smart solutions for e-commerce businesses",
    website: "https://example.com/chatgenius"
  },
  {
    name: "BotWizard",
    logo: "https://placehold.co/200x100/F59E0B/FFFFFF?text=BotWizard",
    description: "Conversational AI that learns from every interaction",
    website: "https://example.com/botwizard"
  },
  {
    name: "ResponseAI",
    logo: "https://placehold.co/200x100/EF4444/FFFFFF?text=ResponseAI",
    description: "24/7 support automation for global enterprises",
    website: "https://example.com/responseai"
  },
  {
    name: "TalkBot",
    logo: "https://placehold.co/200x100/8B5CF6/FFFFFF?text=TalkBot",
    description: "Multilingual chatbots for international businesses",
    website: "https://example.com/talkbot"
  },
  {
    name: "ConvoFlow",
    logo: "https://placehold.co/200x100/EC4899/FFFFFF?text=ConvoFlow",
    description: "Natural language processing for seamless conversations",
    website: "https://example.com/convoflow"
  }
];

const CheckoutDemo = () => {
  const demoSchema = generateWebPageSchema({
    title: "AI Solutions Demo Companies | IdeoXai",
    description: "Explore businesses that are successfully using IdeoXai's AI solutions to transform their customer experience and business operations.",
    url: "https://ideox.ai/checkout-demo"
  });

  return (
    <>
      <SEO 
        title="AI Solutions Demo Companies | IdeoXai"
        description="Explore businesses that are successfully using IdeoXai's AI solutions to transform their customer experience and business operations."
        canonicalUrl="https://ideox.ai/checkout-demo"
        schemaMarkup={demoSchema}
      />
      <BasicPage 
        title="AI Solutions Demo Companies"
        highlightedWord="Demo" 
        description="Explore these businesses that are successfully using our AI solutions to transform their customer experience and business operations."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoCompanies.map((company, index) => (
            <FadeIn key={company.name} delay={index * 100}>
              <Card className="h-full hover:shadow-medium transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="h-16 object-contain"
                    />
                  </div>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <FadeIn>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Ready to see how our AI solutions can transform your business?
            </p>
            <Button asChild className="bg-slack-purple hover:bg-slack-purple/90 text-white">
              <Link to="/get-started-form">
                Start Your Free Trial
              </Link>
            </Button>
          </FadeIn>
        </div>
      </BasicPage>
    </>
  );
};

export default CheckoutDemo;
