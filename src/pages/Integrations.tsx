
import { useState, useMemo } from 'react';
import BasicPage from '@/components/BasicPage';
import IntegrationCard from '@/components/integrations/IntegrationCard';
import IntegrationCategories from '@/components/integrations/IntegrationCategories';
import IntegrationSearch from '@/components/integrations/IntegrationSearch';

// Updated integration data with logos from Make.com
const integrationData = [
  {
    name: 'Slack',
    description: 'Connect IdeoXAI with Slack for seamless communication and automation.',
    features: ['Automated notifications', 'Custom workflows', 'Chat commands', 'File sharing'],
    logo: 'https://www.make.com/_nuxt/img/slack.82652c8.svg',
    categories: ['Communication', 'Popular']
  },
  {
    name: 'Microsoft Teams',
    description: 'Enhance Teams with IdeoXAI for better collaboration and workflow automation.',
    features: ['Meeting automation', 'Document processing', 'Notification management', 'Task distribution'],
    logo: 'https://www.make.com/_nuxt/img/microsoft-teams.ba96efe.svg',
    categories: ['Communication', 'Microsoft', 'Popular']
  },
  {
    name: 'Google Workspace',
    description: 'Integrate with Google Workspace to streamline document management and collaboration.',
    features: ['Gmail automation', 'Calendar management', 'Document processing', 'Form handling'],
    logo: 'https://www.make.com/_nuxt/img/google-workspace.64bd0ad.svg',
    categories: ['Office', 'Google', 'Popular']
  },
  {
    name: 'Zapier',
    description: 'Connect with thousands of apps through Zapier for limitless automation possibilities.',
    features: ['3,000+ app connections', 'Custom zaps', 'Trigger-based automation', 'Multi-step workflows'],
    logo: 'https://www.make.com/_nuxt/img/zapier.cbcb28d.svg',
    categories: ['Automation', 'Popular']
  },
  {
    name: 'Airtable',
    description: 'Integrate with Airtable to manage databases, spreadsheets, and more.',
    features: ['Database automation', 'Record creation', 'Field updates', 'View filtering'],
    logo: 'https://www.make.com/_nuxt/img/airtable.fcf3476.svg',
    categories: ['Database', 'Productivity']
  },
  {
    name: 'Salesforce',
    description: 'Connect to Salesforce to automate your sales, marketing, and customer service processes.',
    features: ['Lead management', 'Contact updates', 'Opportunity tracking', 'Custom object handling'],
    logo: 'https://www.make.com/_nuxt/img/salesforce.1d38fcf.svg',
    categories: ['CRM', 'Enterprise', 'Popular']
  },
  {
    name: 'Notion',
    description: 'Integrate with Notion to automate your knowledge base and project management.',
    features: ['Page creation', 'Database updates', 'Task management', 'Template usage'],
    logo: 'https://www.make.com/_nuxt/img/notion.3f2a440.svg',
    categories: ['Productivity', 'Collaboration']
  },
  {
    name: 'Asana',
    description: 'Connect IdeoXAI with Asana for seamless project management automation.',
    features: ['Task creation', 'Project updates', 'Comment automation', 'Status tracking'],
    logo: 'https://www.make.com/_nuxt/img/asana.8902bd6.svg',
    categories: ['Project Management', 'Productivity']
  },
  {
    name: 'HubSpot',
    description: 'Integrate with HubSpot to streamline your marketing, sales, and service operations.',
    features: ['Contact management', 'Email automation', 'Deal tracking', 'Marketing campaign integration'],
    logo: 'https://www.make.com/_nuxt/img/hubspot.97add5f.svg',
    categories: ['CRM', 'Marketing', 'Popular']
  },
  {
    name: 'Shopify',
    description: 'Connect to Shopify to automate your e-commerce operations and order processing.',
    features: ['Order management', 'Product updates', 'Customer data sync', 'Inventory control'],
    logo: 'https://www.make.com/_nuxt/img/shopify.90ea409.svg',
    categories: ['E-commerce', 'Popular']
  },
  {
    name: 'Trello',
    description: 'Integrate with Trello to automate your kanban boards and task management.',
    features: ['Card creation', 'Board management', 'List automation', 'Member assignments'],
    logo: 'https://www.make.com/_nuxt/img/trello.1fad05a.svg',
    categories: ['Project Management', 'Collaboration']
  },
  {
    name: 'Jira',
    description: 'Connect to Jira to streamline your software development and issue tracking processes.',
    features: ['Issue creation', 'Workflow automation', 'Sprint management', 'Comment integration'],
    logo: 'https://www.make.com/_nuxt/img/jira.4174539.svg',
    categories: ['Development', 'Project Management', 'Atlassian']
  }
];

// All unique categories from the integration data
const allCategories = Array.from(
  new Set(integrationData.flatMap(integration => integration.categories))
);

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = useMemo(() => {
    return integrationData.filter(integration => {
      // Filter by category
      const categoryMatch = activeCategory === 'All' || integration.categories.includes(activeCategory);
      
      // Filter by search query
      const searchMatch = 
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        integration.description.toLowerCase().includes(searchQuery.toLowerCase());
        
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <BasicPage 
      title="Integrations" 
      description="Connect IdeoXAI with your favorite tools and platforms for seamless automation."
    >
      <div className="mb-12">
        <IntegrationSearch 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <IntegrationCategories 
          categories={['All', ...allCategories]}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration, index) => (
          <IntegrationCard 
            key={index}
            name={integration.name}
            description={integration.description}
            features={integration.features}
            logo={integration.logo}
          />
        ))}
      </div>

      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-slate-500">No integrations found matching your criteria.</p>
          <p className="text-slate-400 mt-2">Try adjusting your search or category filters.</p>
        </div>
      )}
    </BasicPage>
  );
};

export default Integrations;
