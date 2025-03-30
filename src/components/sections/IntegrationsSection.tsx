
import React, { useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';

const integrationIcons = [
  {
    name: "Slack",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/slack.svg",
    color: "#4A154B"
  },
  {
    name: "Salesforce",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/salesforce.svg",
    color: "#00A1E0"
  },
  {
    name: "Google Drive",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/googledrive.svg",
    color: "#4285F4"
  },
  {
    name: "Dropbox",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/dropbox.svg",
    color: "#0061FF"
  },
  {
    name: "Asana",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/asana.svg",
    color: "#F06A6A"
  },
  {
    name: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/trello.svg",
    color: "#0079BF"
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/github.svg",
    color: "#181717"
  },
  {
    name: "Gmail",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/gmail.svg",
    color: "#EA4335"
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/notion.svg",
    color: "#000000"
  },
  {
    name: "Twitter",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/twitter.svg",
    color: "#1DA1F2"
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/linkedin.svg",
    color: "#0A66C2"
  },
  {
    name: "Airtable",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airtable.svg",
    color: "#18BFFF"
  },
  {
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/jira.svg",
    color: "#0052CC"
  },
  {
    name: "HubSpot",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/hubspot.svg",
    color: "#FF7A59"
  },
  {
    name: "Shopify",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/shopify.svg",
    color: "#7AB55C"
  }
];

const IntegrationsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
              We Connect Anything to Everything
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-16">
            Best app & software integrations to optimize your business. Seamlessly move and transform data between different apps with our powerful integration platform.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-16">
            {integrationIcons.map((integration, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-5 rounded-lg shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
                style={{ 
                  backgroundColor: `${integration.color}15`, 
                  borderTop: `3px solid ${integration.color}`
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <img 
                    src={integration.icon} 
                    alt={integration.name} 
                    className="w-8 h-8" 
                    style={{ 
                      filter: "none", 
                      fill: integration.color
                    }}
                    loading="lazy"
                  />
                </div>
                <span 
                  className="text-sm font-medium" 
                  style={{ color: integration.color }}
                >
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/integrations">
                View All Integrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="gap-2 bg-gradient-to-r from-slack-purple to-slack-blue text-white hover:opacity-90 transition-opacity">
              <Link to="/get-started-form">
                Try It Free
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntegrationsSection;
