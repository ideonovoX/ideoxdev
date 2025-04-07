
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const integrations = [
  { name: "Slack", letter: "S", color: "bg-green-500" },
  { name: "Microsoft Teams", letter: "M", color: "bg-blue-500" },
  { name: "Google Workspace", letter: "G", color: "bg-yellow-500" },
  { name: "Salesforce", letter: "S", color: "bg-indigo-500" },
  { name: "HubSpot", letter: "H", color: "bg-orange-500" },
  { name: "Shopify", letter: "S", color: "bg-teal-500" },
  { name: "Asana", letter: "A", color: "bg-pink-500" },
  { name: "Trello", letter: "T", color: "bg-cyan-500" },
  { name: "Jira", letter: "J", color: "bg-purple-500" },
  { name: "Airtable", letter: "A", color: "bg-red-500" },
  { name: "Notion", letter: "N", color: "bg-slate-500" },
  { name: "Zapier", letter: "Z", color: "bg-amber-500" }
];

const IntegrationsSection = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="integrations-section">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              We Connect Anything to Everything
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Seamlessly integrate with 35+ popular tools and platforms to automate workflows and data exchange without complex coding or setup.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-4 h-24 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className={`${integration.color} w-12 h-12 rounded-md flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{integration.letter}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 hover:text-white text-white font-semibold px-8 group" onClick={handleLinkClick}>
            <Link to="/integrations">
              View All Integrations <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
