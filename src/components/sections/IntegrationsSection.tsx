
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const integrations = [
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-5.svg" },
  { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Google Workspace", logo: "https://cdn.worldvectorlogo.com/logos/google-workspace-icon-1.svg" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
  { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg" },
  { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-3.svg" },
  { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" }
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
          <Button asChild className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 hover:text-white text-white font-semibold px-8" onClick={handleLinkClick}>
            <Link to="/integrations">
              View All Integrations →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
