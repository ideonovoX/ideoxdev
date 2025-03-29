import BasicPage from '@/components/BasicPage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
  {
    name: 'Technology Partners',
    description: 'Join forces with IdeoxAI to integrate our AI automation into your technology stack.',
    benefits: [
      'Access to IdeoxAI API and SDKs',
      'Co-marketing opportunities',
      'Partner technical support',
      'Integration certification',
      'Partner portal access'
    ],
    cta: 'Become a Technology Partner'
  },
  {
    name: 'Solution Partners',
    description: 'Implement and customize IdeoxAI solutions for your clients as part of your service offering.',
    benefits: [
      'Reseller discounts',
      'Sales and technical training',
      'Implementation resources',
      'Co-selling opportunities',
      'Partner community access'
    ],
    cta: 'Become a Solution Partner'
  },
  {
    name: 'Strategic Alliances',
    description: 'Collaborate on deep integrations and joint go-to-market strategies for enterprise customers.',
    benefits: [
      'Joint product development',
      'Executive sponsorship',
      'Strategic roadmap access',
      'Joint marketing campaigns',
      'Priority support and success management'
    ],
    cta: 'Explore Strategic Alliance'
  }
];

const featuredPartners = [
  {
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/150x80',
    description: "Integration with TechCorp's enterprise platform enables seamless workflow automation across systems.",
    url: '#'
  },
  {
    name: 'DataFlow Systems',
    logo: 'https://via.placeholder.com/150x80',
    description: 'Combined solution offers end-to-end data processing and intelligent automation for financial services.',
    url: '#'
  },
  {
    name: 'CloudWorks',
    logo: 'https://via.placeholder.com/150x80',
    description: 'Joint offering provides AI-powered automation for cloud infrastructure management and optimization.',
    url: '#'
  },
  {
    name: 'n8n',
    logo: 'https://via.placeholder.com/150x80',
    description: 'Integration with n8n workflow automation platform for powerful open-source solutions.',
    url: '#'
  }
];

const Partners = () => {
  return (
    <BasicPage 
      title="Partner Program" 
      description="Join our partner ecosystem to grow your business with cutting-edge AI automation technology."
    >
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{partner.description}</p>
              <h4 className="text-lg font-medium mb-2">Benefits:</h4>
              <ul className="mb-6 space-y-2">
                {partner.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                <Link to="/contact">{partner.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredPartners.map((partner, index) => (
            <Card key={index} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:shadow-md transition-all">
              <div className="w-32 h-16 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center p-2">
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3">{partner.description}</p>
                <a 
                  href={partner.url} 
                  className="inline-flex items-center text-slack-purple hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn more <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Partner with IdeoxAI</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Whether you're looking to integrate IdeoxAI's technology into your product, resell our solutions, or build custom implementations for your clients, we have a partnership model that's right for you.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Our partner program is designed to provide you with the resources, support, and incentives you need to successfully grow your business with IdeoxAI.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated partner manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive technical training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Marketing and sales resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-slack-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Partner community and events</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/contact">Apply to Partner Program</Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Partnership concept" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slack-purple/40 to-slack-blue/40" />
            </div>
          </div>
        </Card>
      </section>
    </BasicPage>
  );
};

export default Partners;
