
import BasicPage from '@/components/BasicPage';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

const integrations = [
  {
    name: 'Slack',
    description: 'Connect IdeoxAI with Slack for seamless communication and automation.',
    features: ['Automated notifications', 'Custom workflows', 'Chat commands', 'File sharing']
  },
  {
    name: 'Microsoft Teams',
    description: 'Enhance Teams with IdeoxAI for better collaboration and workflow automation.',
    features: ['Meeting automation', 'Document processing', 'Notification management', 'Task distribution']
  },
  {
    name: 'Google Workspace',
    description: 'Integrate with Google Workspace to streamline document management and collaboration.',
    features: ['Gmail automation', 'Calendar management', 'Document processing', 'Form handling']
  },
  {
    name: 'Zapier',
    description: 'Connect with thousands of apps through Zapier for limitless automation possibilities.',
    features: ['3,000+ app connections', 'Custom zaps', 'Trigger-based automation', 'Multi-step workflows']
  },
  {
    name: 'n8n',
    description: 'Open-source workflow automation with n8n for flexible integration scenarios.',
    features: ['Self-hosted option', 'Visual workflow builder', 'Advanced data transformations', 'Webhook support']
  },
  {
    name: 'Make.com',
    description: 'Create complex automations with Make.com\'s powerful no-code platform.',
    features: ['Visual scenario builder', 'Real-time execution', 'Error handling', 'Conditional logic']
  }
];

const Integrations = () => {
  return (
    <BasicPage 
      title="Integrations" 
      description="Connect IdeoxAI with your favorite tools and platforms for seamless automation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {integrations.map((integration, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{integration.description}</p>
            <ul className="space-y-2">
              {integration.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </BasicPage>
  );
};

export default Integrations;
