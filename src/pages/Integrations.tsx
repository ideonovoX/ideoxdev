import { useState, useMemo } from 'react';
import BasicPage from '@/components/BasicPage';
import IntegrationCard from '@/components/integrations/IntegrationCard';
import IntegrationCategories from '@/components/integrations/IntegrationCategories';
import IntegrationSearch from '@/components/integrations/IntegrationSearch';

// Updated integration data with more integrations and proper logo paths
const integrationData = [
  {
    name: 'Slack',
    description: 'Connect IdeoXAI with Slack for seamless communication and automation.',
    features: ['Automated notifications', 'Custom workflows', 'Chat commands', 'File sharing'],
    logo: '/integrations/slack.svg',
    categories: ['Communication', 'Popular']
  },
  {
    name: 'Microsoft Teams',
    description: 'Enhance Teams with IdeoXAI for better collaboration and workflow automation.',
    features: ['Meeting automation', 'Document processing', 'Notification management', 'Task distribution'],
    logo: '/integrations/ms-teams.svg',
    categories: ['Communication', 'Microsoft', 'Popular']
  },
  {
    name: 'Google Workspace',
    description: 'Integrate with Google Workspace to streamline document management and collaboration.',
    features: ['Gmail automation', 'Calendar management', 'Document processing', 'Form handling'],
    logo: '/integrations/google-workspace.svg',
    categories: ['Office', 'Google', 'Popular']
  },
  {
    name: 'Zapier',
    description: 'Connect with thousands of apps through Zapier for limitless automation possibilities.',
    features: ['3,000+ app connections', 'Custom zaps', 'Trigger-based automation', 'Multi-step workflows'],
    logo: '/integrations/zapier.svg',
    categories: ['Automation', 'Popular']
  },
  {
    name: 'Airtable',
    description: 'Integrate with Airtable to manage databases, spreadsheets, and more.',
    features: ['Database automation', 'Record creation', 'Field updates', 'View filtering'],
    logo: '/integrations/airtable.svg',
    categories: ['Database', 'Productivity']
  },
  {
    name: 'Salesforce',
    description: 'Connect to Salesforce to automate your sales, marketing, and customer service processes.',
    features: ['Lead management', 'Contact updates', 'Opportunity tracking', 'Custom object handling'],
    logo: '/integrations/salesforce.svg',
    categories: ['CRM', 'Enterprise', 'Popular']
  },
  {
    name: 'Notion',
    description: 'Integrate with Notion to automate your knowledge base and project management.',
    features: ['Page creation', 'Database updates', 'Task management', 'Template usage'],
    logo: '/integrations/notion.svg',
    categories: ['Productivity', 'Collaboration']
  },
  {
    name: 'Asana',
    description: 'Connect IdeoXAI with Asana for seamless project management automation.',
    features: ['Task creation', 'Project updates', 'Comment automation', 'Status tracking'],
    logo: '/integrations/asana.svg',
    categories: ['Project Management', 'Productivity']
  },
  {
    name: 'HubSpot',
    description: 'Integrate with HubSpot to streamline your marketing, sales, and service operations.',
    features: ['Contact management', 'Email automation', 'Deal tracking', 'Marketing campaign integration'],
    logo: '/integrations/hubspot.svg',
    categories: ['CRM', 'Marketing', 'Popular']
  },
  {
    name: 'Shopify',
    description: 'Connect to Shopify to automate your e-commerce operations and order processing.',
    features: ['Order management', 'Product updates', 'Customer data sync', 'Inventory control'],
    logo: '/integrations/shopify.svg',
    categories: ['E-commerce', 'Popular']
  },
  {
    name: 'Trello',
    description: 'Integrate with Trello to automate your kanban boards and task management.',
    features: ['Card creation', 'Board management', 'List automation', 'Member assignments'],
    logo: '/integrations/trello.svg',
    categories: ['Project Management', 'Collaboration']
  },
  {
    name: 'Jira',
    description: 'Connect to Jira to streamline your software development and issue tracking processes.',
    features: ['Issue creation', 'Workflow automation', 'Sprint management', 'Comment integration'],
    logo: '/integrations/jira.svg',
    categories: ['Development', 'Project Management', 'Atlassian']
  },
  {
    name: 'GitHub',
    description: 'Automate your development workflows with GitHub integration.',
    features: ['PR automation', 'Issue tracking', 'CI/CD integration', 'Code review workflows'],
    logo: '/integrations/github.svg',
    categories: ['Development', 'Popular']
  },
  {
    name: 'GitLab',
    description: 'Streamline your DevOps practices with GitLab integration.',
    features: ['Pipeline automation', 'Issue management', 'MR handling', 'Repository automation'],
    logo: '/integrations/gitlab.svg',
    categories: ['Development', 'DevOps']
  },
  {
    name: 'Bitbucket',
    description: 'Connect with Bitbucket to enhance your development workflows.',
    features: ['PR automation', 'Build triggers', 'Deployment automation', 'Repository webhooks'],
    logo: '/integrations/bitbucket.svg',
    categories: ['Development', 'Atlassian']
  },
  {
    name: 'AWS',
    description: 'Integrate with AWS services to automate your cloud infrastructure.',
    features: ['Lambda automation', 'S3 operations', 'EC2 management', 'CloudWatch alerts'],
    logo: '/integrations/aws.svg',
    categories: ['Cloud', 'Infrastructure', 'Popular']
  },
  {
    name: 'Azure',
    description: 'Connect with Microsoft Azure to streamline your cloud operations.',
    features: ['Function automation', 'Blob storage', 'Virtual machine management', 'Monitor alerts'],
    logo: '/integrations/azure.svg',
    categories: ['Cloud', 'Infrastructure', 'Microsoft']
  },
  {
    name: 'Google Cloud',
    description: 'Integrate with Google Cloud Platform for comprehensive cloud automation.',
    features: ['Cloud functions', 'Storage operations', 'Compute management', 'Monitoring integration'],
    logo: '/integrations/gcp.svg',
    categories: ['Cloud', 'Infrastructure', 'Google']
  },
  {
    name: 'Stripe',
    description: 'Automate your payment processing with Stripe integration.',
    features: ['Payment automation', 'Subscription management', 'Invoice handling', 'Customer operations'],
    logo: '/integrations/stripe.svg',
    categories: ['Finance', 'E-commerce', 'Popular']
  },
  {
    name: 'PayPal',
    description: 'Streamline your payment workflows with PayPal integration.',
    features: ['Transaction automation', 'Payment notifications', 'Refund processing', 'Payout handling'],
    logo: '/integrations/paypal.svg',
    categories: ['Finance', 'E-commerce']
  },
  {
    name: 'Zoom',
    description: 'Enhance your video conferencing workflows with Zoom integration.',
    features: ['Meeting automation', 'Webinar management', 'Recording handling', 'Participant automation'],
    logo: '/integrations/zoom.svg',
    categories: ['Communication', 'Productivity', 'Popular']
  },
  {
    name: 'Google Meet',
    description: 'Streamline your virtual meetings with Google Meet integration.',
    features: ['Meeting scheduling', 'Calendar integration', 'Participant management', 'Recording handling'],
    logo: '/integrations/google-meet.svg',
    categories: ['Communication', 'Google']
  },
  {
    name: 'LinkedIn',
    description: 'Automate your professional networking with LinkedIn integration.',
    features: ['Post automation', 'Profile updates', 'Connection management', 'Job posting'],
    logo: '/integrations/linkedin.svg',
    categories: ['Social Media', 'Marketing']
  },
  {
    name: 'Twitter',
    description: 'Streamline your social media presence with Twitter integration.',
    features: ['Tweet scheduling', 'Mention monitoring', 'DM automation', 'Analytics collection'],
    logo: '/integrations/twitter.svg',
    categories: ['Social Media', 'Marketing']
  },
  {
    name: 'Facebook',
    description: 'Enhance your social media marketing with Facebook integration.',
    features: ['Post scheduling', 'Comment management', 'Ad automation', 'Page analytics'],
    logo: '/integrations/facebook.svg',
    categories: ['Social Media', 'Marketing', 'Popular']
  },
  {
    name: 'Instagram',
    description: 'Automate your visual content strategy with Instagram integration.',
    features: ['Post scheduling', 'Story automation', 'Comment management', 'Analytics tracking'],
    logo: '/integrations/instagram.svg',
    categories: ['Social Media', 'Marketing']
  },
  {
    name: 'Mailchimp',
    description: 'Streamline your email marketing with Mailchimp integration.',
    features: ['Campaign automation', 'List management', 'Template handling', 'Analytics tracking'],
    logo: '/integrations/mailchimp.svg',
    categories: ['Marketing', 'Email']
  },
  {
    name: 'Zendesk',
    description: 'Enhance your customer support with Zendesk integration.',
    features: ['Ticket automation', 'Agent assignment', 'Customer data sync', 'Support metrics'],
    logo: '/integrations/zendesk.svg',
    categories: ['Customer Support', 'Enterprise']
  },
  {
    name: 'Intercom',
    description: 'Streamline your customer messaging with Intercom integration.',
    features: ['Conversation automation', 'Lead qualification', 'User onboarding', 'Support workflows'],
    logo: '/integrations/intercom.svg',
    categories: ['Customer Support', 'Marketing']
  },
  {
    name: 'Dropbox',
    description: 'Automate your file storage and sharing with Dropbox integration.',
    features: ['File automation', 'Folder management', 'Sharing controls', 'Document workflows'],
    logo: '/integrations/dropbox.svg',
    categories: ['Storage', 'Productivity']
  },
  {
    name: 'Box',
    description: 'Streamline your enterprise content management with Box integration.',
    features: ['Document automation', 'Folder structures', 'Permission management', 'Content workflows'],
    logo: '/integrations/box.svg',
    categories: ['Storage', 'Enterprise']
  },
  {
    name: 'OneDrive',
    description: 'Enhance your file management with Microsoft OneDrive integration.',
    features: ['File automation', 'Folder synchronization', 'Sharing permissions', 'Document workflows'],
    logo: '/integrations/onedrive.svg',
    categories: ['Storage', 'Microsoft']
  },
  {
    name: 'Google Drive',
    description: 'Streamline your document workflows with Google Drive integration.',
    features: ['File automation', 'Folder management', 'Permission controls', 'Document processing'],
    logo: '/integrations/google-drive.svg',
    categories: ['Storage', 'Google']
  },
  {
    name: 'Monday.com',
    description: 'Enhance your project management with Monday.com integration.',
    features: ['Board automation', 'Item tracking', 'Status updates', 'Workflow integration'],
    logo: '/integrations/monday.svg',
    categories: ['Project Management', 'Productivity']
  },
  {
    name: 'ClickUp',
    description: 'Streamline your team productivity with ClickUp integration.',
    features: ['Task automation', 'Status updates', 'Time tracking', 'Project management'],
    logo: '/integrations/clickup.svg',
    categories: ['Project Management', 'Productivity']
  },
  {
    name: 'WordPress',
    description: 'Automate your content publishing with WordPress integration.',
    features: ['Post scheduling', 'Comment management', 'User handling', 'Media automation'],
    logo: '/integrations/wordpress.svg',
    categories: ['CMS', 'Marketing', 'Popular']
  },
  {
    name: 'Webflow',
    description: 'Enhance your web design workflows with Webflow integration.',
    features: ['CMS automation', 'Form handling', 'Design updates', 'Collection management'],
    logo: '/integrations/webflow.svg',
    categories: ['CMS', 'Design']
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
