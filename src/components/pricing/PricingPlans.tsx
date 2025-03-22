
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import FadeIn from '@/components/FadeIn';

export interface PlanFeature {
  name: string;
  description: string;
  price: { 
    monthly: number | string; 
    annual: number | string;
  };
  features: string[];
  cta: string;
  highlight: boolean;
}

interface PricingPlansProps {
  plans: PlanFeature[];
  annual: boolean;
}

const PricingPlans = ({ plans, annual }: PricingPlansProps) => {
  return (
    <section className="py-8 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 100}>
              <div className={`relative rounded-xl overflow-hidden border ${
                plan.highlight 
                  ? 'border-slack-purple shadow-lg dark:border-slack-purple/50' 
                  : 'border-gray-200 dark:border-gray-800 shadow-soft'
              } h-full flex flex-col`}>
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-slack-purple" />
                )}
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-semibold text-slack-black dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    {typeof plan.price[annual ? 'annual' : 'monthly'] === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-slack-black dark:text-white">${plan.price[annual ? 'annual' : 'monthly']}</span>
                        <span className="text-slate-600 dark:text-slate-400 ml-1">/month</span>
                        {annual && typeof plan.price.annual === 'number' && plan.price.annual > 0 && (
                          <div className="text-sm text-slate-500 mt-1">Billed annually (${(plan.price.annual as number) * 12}/year)</div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-4xl font-bold text-slack-black dark:text-white">{plan.price[annual ? 'annual' : 'monthly']}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="ml-2 cursor-help">
                                <HelpCircle className="h-4 w-4 text-slate-400" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-56">Custom pricing based on your organization's specific needs. Contact our sales team for a personalized quote.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-slack-green flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 md:p-8 pt-0">
                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? 'bg-slack-purple hover:bg-slack-purple/90 text-white' 
                        : plan.name === 'Free' 
                          ? 'bg-white border border-slack-purple text-slack-purple hover:bg-slack-purple/5' 
                          : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
