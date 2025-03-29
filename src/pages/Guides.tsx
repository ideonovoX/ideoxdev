
import BasicPage from '@/components/BasicPage';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Workflow, ExternalLink, MessageSquare, FileText } from 'lucide-react';

const guides = [
  {
    title: 'Getting Started with AI Chatbots',
    description: 'Learn how to create, train, and deploy intelligent chatbots for customer service.',
    icon: Bot,
    category: 'Beginner',
    timeToRead: '15 min',
    link: '/guides/ai-chatbots'
  },
  {
    title: 'Building Automated Workflows',
    description: 'Create complex automation workflows that connect multiple systems and services.',
    icon: Workflow,
    category: 'Intermediate',
    timeToRead: '20 min',
    link: '/guides/automated-workflows'
  },
  {
    title: 'Integrating with External APIs',
    description: 'Connect your automations with third-party services using their REST APIs.',
    icon: ExternalLink,
    category: 'Advanced',
    timeToRead: '25 min',
    link: '/guides/external-apis'
  },
  {
    title: 'Natural Language Processing for Bots',
    description: 'Implement advanced NLP capabilities to make your bots more intelligent.',
    icon: MessageSquare,
    category: 'Advanced',
    timeToRead: '30 min',
    link: '/guides/nlp-for-bots'
  },
  {
    title: 'Automated Document Processing',
    description: 'Extract information from documents and automate document-based workflows.',
    icon: FileText,
    category: 'Intermediate',
    timeToRead: '22 min',
    link: '/guides/document-processing'
  },
  {
    title: 'Building eCommerce Automations',
    description: 'Automate product listings, inventory management, and customer interactions for online stores.',
    icon: Workflow,
    category: 'Intermediate',
    timeToRead: '28 min',
    link: '/guides/ecommerce-automations'
  }
];

const GuideCard = ({ guide }: { guide: typeof guides[0] }) => {
  const Icon = guide.icon;
  
  return (
    <Card className="p-6 hover:shadow-md transition-all">
      <Link to={guide.link} className="flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-3 flex items-center justify-center mr-4">
            <Icon className="h-6 w-6 text-slack-purple" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
                {guide.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500">
                {guide.timeToRead} read
              </span>
            </div>
            <h3 className="text-xl font-semibold">{guide.title}</h3>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
          {guide.description}
        </p>
        <div className="flex items-center text-slack-purple font-medium">
          <span>Read guide</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </Card>
  );
};

const Guides = () => {
  return (
    <BasicPage 
      title="Guides" 
      description="Step-by-step tutorials and guides to help you get the most out of IdeoxAI."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {guides.map((guide, index) => (
          <GuideCard key={index} guide={guide} />
        ))}
      </div>
    </BasicPage>
  );
};

export default Guides;
