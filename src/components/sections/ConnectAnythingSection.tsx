
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Cpu, Link as LinkIcon, Zap, Settings, Code, Database, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const integrations = [
  { 
    name: 'Slack', 
    icon: <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="w-8 h-8" />,
    color: 'bg-[#4A154B]'
  },
  { 
    name: 'Google Sheets', 
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png" alt="Google Sheets" className="w-8 h-8" />,
    color: 'bg-[#0F9D58]'
  },
  { 
    name: 'Zapier', 
    icon: <img src="https://cdn.worldvectorlogo.com/logos/zapier-1.svg" alt="Zapier" className="w-8 h-8" />,
    color: 'bg-[#FF4A00]'
  },
  {
    name: 'n8n',
    icon: <img src="https://n8n.io/favicon.ico" alt="n8n" className="w-8 h-8" />,
    color: 'bg-[#6A57D5]'
  },
  { 
    name: 'Make.com', 
    icon: <img src="https://images.ctfassets.net/qqlj6g4ee76j/74lAF3cx1tZBpCZMXrxEKM/e0ec6b6a2e3396a2b8661590f4122d4d/Make-logo.svg" alt="Make.com" className="w-8 h-8" />,
    color: 'bg-[#24B47E]'
  },
  { 
    name: 'Airtable', 
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Airtable_Logo.svg/1200px-Airtable_Logo.svg.png" alt="Airtable" className="w-8 h-8" />,
    color: 'bg-[#FCB400]'
  },
  { 
    name: 'Salesforce', 
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="Salesforce" className="w-8 h-8" />,
    color: 'bg-[#00A1E0]'
  },
  { 
    name: 'HubSpot', 
    icon: <img src="https://cdn.worldvectorlogo.com/logos/hubspot-2.svg" alt="HubSpot" className="w-8 h-8" />,
    color: 'bg-[#FF7A59]'
  }
];

const features = [
  {
    title: 'AI-Powered Workflows',
    description: 'Intelligent automation that adapts to your business needs and learns from your data',
    icon: <Cpu className="h-8 w-8 text-slack-blue" />,
  },
  {
    title: 'Universal Connectivity',
    description: 'Connect to any service with our extensive API integrations and custom connectors',
    icon: <LinkIcon className="h-8 w-8 text-slack-purple" />,
  },
  {
    title: 'Real-time Processing',
    description: 'Process data in real-time with low-latency connections between your systems',
    icon: <Zap className="h-8 w-8 text-slack-green" />,
  },
  {
    title: 'Customizable Rules',
    description: 'Create complex business rules and logic without writing a single line of code',
    icon: <Settings className="h-8 w-8 text-slack-yellow" />,
  }
];

const ConnectAnythingSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            We Connect <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">Anything to Everything</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Best app & software integrations. Optimize your business with these top software and API integrations. 
            Seamlessly move and transform data between different apps.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Card key={index} className="flex flex-col items-center p-4 hover:shadow-md transition-all">
              <div className={`${integration.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {integration.icon}
              </div>
              <span className="text-center font-medium">{integration.name}</span>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-all">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/integrations">
              Explore All Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConnectAnythingSection;
