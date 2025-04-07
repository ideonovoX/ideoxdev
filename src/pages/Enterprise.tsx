
import BasicPage from '@/components/BasicPage';
import { Shield, Server, Users, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EnterprisePage = () => {
  return (
    <BasicPage
      title="Enterprise Solutions"
      highlightedWord="Enterprise"
      description="Powerful AI automation built for scale, security, and compliance"
    >
      <div className="space-y-12 mt-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Built for Enterprise Scale</h2>
          <p className="mb-6">
            IdeoxAI Enterprise provides the security, control, and support that large organizations need,
            while maintaining the simplicity and power that makes our platform so effective for teams of all sizes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col">
              <div className="flex items-start mb-3">
                <Shield className="h-6 w-6 text-slack-purple mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Enterprise-grade Security</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                SOC 2 Type II certified with end-to-end encryption and custom data retention policies.
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start mb-3">
                <Server className="h-6 w-6 text-slack-purple mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Dedicated Infrastructure</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Optional private cloud deployment with dedicated resources for maximum performance.
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start mb-3">
                <Users className="h-6 w-6 text-slack-purple mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Advanced Admin Controls</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Granular permissions, SCIM provisioning, and detailed usage analytics.
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start mb-3">
                <Clock className="h-6 w-6 text-slack-purple mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">24/7 Premium Support</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Dedicated account management and priority support with guaranteed SLAs.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Enterprise Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Layers className="h-10 w-10 text-slack-purple mr-4" />
                <h3 className="text-xl font-semibold">Enterprise Workflow Automation</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Automate complex business processes across departments, systems, and data sources. Reduce manual work and increase accuracy with intelligent automation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>Automated document processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>Cross-system data synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>Approval workflow automation</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-slack-purple mr-4" />
                <h3 className="text-xl font-semibold">Intelligent Customer Service</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Deploy AI-powered customer service solutions that scale with your business. Handle routine inquiries automatically while seamlessly escalating complex issues.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>24/7 AI customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>Intelligent ticket routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slack-purple mr-2">•</span>
                  <span>Proactive issue resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="flex flex-col items-center mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Ready to scale your automation?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-2xl">
            Contact our enterprise team to learn more about how IdeoxAI can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default EnterprisePage;
