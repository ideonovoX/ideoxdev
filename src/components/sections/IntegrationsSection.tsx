
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slack-black dark:text-white">
            We Connect <span className="text-slack-purple">Anything</span> to <span className="text-slack-blue">Everything</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Best app & software integrations to optimize your business. Seamlessly move and transform data between different apps with our powerful integration platform.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {integrationIcons.map((integration, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <img 
                  src={integration.icon} 
                  alt={integration.name} 
                  className="w-8 h-8" 
                  style={{ filter: "contrast(0.8)" }}
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{integration.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/integrations">
              View All Integrations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link to="/get-started">
              Try It Free
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
