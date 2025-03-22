
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';

interface EnterpriseFeature {
  name: string;
  included: boolean;
}

const EnterpriseSection = () => {
  const enterpriseFeatures: string[] = [
    'Custom integration development',
    'Dedicated implementation team',
    'Custom AI model training',
    'Advanced security features',
    'On-premise deployment options',
    'Compliance documentation'
  ];

  const comparisonFeatures: EnterpriseFeature[] = [
    { name: 'Dedicated Account Manager', included: true },
    { name: 'Custom Contract Terms', included: true },
    { name: 'SLA Guarantees', included: true },
    { name: 'SAML/SSO Authentication', included: true },
    { name: 'Custom Retention Policies', included: true },
    { name: 'On-premise Deployment', included: true },
    { name: 'Compliance Documentation', included: true },
    { name: 'Custom Reporting', included: true },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Our enterprise plan is designed for organizations with complex automation needs. Get in touch with our sales team for a personalized solution.
              </p>
              <ul className="space-y-3 mb-8">
                {enterpriseFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-slack-green flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                Contact Sales
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20">
              <div className="bg-slack-purple text-white p-6">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Enterprise Features</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {comparisonFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-slack-black dark:text-white">{feature.name}</span>
                      {feature.included ? (
                        <Check className="h-5 w-5 text-slack-green" />
                      ) : (
                        <span className="text-red-500">—</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
