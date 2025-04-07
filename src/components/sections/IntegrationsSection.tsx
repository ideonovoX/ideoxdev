
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const integrations = [
  { name: "Slack", logo: "https://www.make.com/_nuxt/img/slack.82652c8.svg" },
  { name: "Microsoft Teams", logo: "https://www.make.com/_nuxt/img/microsoft-teams.ba96efe.svg" },
  { name: "Google Workspace", logo: "https://www.make.com/_nuxt/img/google-workspace.64bd0ad.svg" },
  { name: "Salesforce", logo: "https://www.make.com/_nuxt/img/salesforce.1d38fcf.svg" },
  { name: "HubSpot", logo: "https://www.make.com/_nuxt/img/hubspot.97add5f.svg" },
  { name: "Shopify", logo: "https://www.make.com/_nuxt/img/shopify.90ea409.svg" },
  { name: "Asana", logo: "https://www.make.com/_nuxt/img/asana.8902bd6.svg" },
  { name: "Trello", logo: "https://www.make.com/_nuxt/img/trello.1fad05a.svg" },
  { name: "Jira", logo: "https://www.make.com/_nuxt/img/jira.4174539.svg" },
  { name: "Airtable", logo: "https://www.make.com/_nuxt/img/airtable.fcf3476.svg" },
  { name: "Notion", logo: "https://www.make.com/_nuxt/img/notion.3f2a440.svg" },
  { name: "Zapier", logo: "https://www.make.com/_nuxt/img/zapier.cbcb28d.svg" }
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
            Seamlessly integrate with your favorite tools and platforms to automate workflows and data exchange without complex coding or setup.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-800 shadow-md rounded-xl p-4 h-24 flex items-center justify-center hover:shadow-lg transition-shadow">
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="max-h-10 max-w-[80%] object-contain" 
                  loading="lazy"
                />
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
