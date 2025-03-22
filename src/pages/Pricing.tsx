
import { useState } from 'react';
import { Check, HelpCircle, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Free',
      description: 'For individuals and small projects',
      price: { monthly: 0, annual: 0 },
      features: [
        '5 automated workflows',
        '1,000 monthly automations',
        '10 integrations',
        'Basic AI task automation',
        'Community support',
        'Standard security'
      ],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Pro',
      description: 'For professionals and growing teams',
      price: { monthly: 29, annual: 24 },
      features: [
        'Unlimited workflows',
        '50,000 monthly automations',
        '100+ integrations',
        'Advanced AI task automation',
        'API access',
        'Priority support',
        'Enhanced security',
        'Team collaboration tools',
        'Workflow templates'
      ],
      cta: 'Start Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'For organizations with complex needs',
      price: { monthly: 'Custom', annual: 'Custom' },
      features: [
        'Unlimited everything',
        'Custom AI solutions',
        '1000+ integrations',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'Enterprise-grade security',
        'SAML/SSO authentication',
        'On-premise deployment options',
        'Advanced analytics'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Our free trial gives you full access to the Pro plan for 14 days. No credit card required. At the end of the trial, you can choose to subscribe or downgrade to the Free plan.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, you\'ll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply to your next billing cycle.'
    },
    {
      question: 'What are automation credits?',
      answer: 'Automation credits determine how many tasks can be processed by our platform each month. One automation credit equals one task execution. Different types of automations may use different amounts of credits.'
    },
    {
      question: 'Do you offer discounts for nonprofits or educational institutions?',
      answer: 'Yes, we offer special pricing for qualified nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and for Enterprise customers, we can also accommodate wire transfers and purchase orders.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. We use industry-standard encryption, regular security audits, and are SOC 2 compliant. Enterprise plans include additional security features like SAML/SSO and custom data retention policies.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white leading-tight mb-6">
                Simple, Transparent <span className="text-slack-purple">Pricing</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Choose the plan that's right for your business with our straightforward pricing options.
              </p>
              
              <div className="flex items-center justify-center mb-12">
                <span className={`mr-3 ${annual ? 'text-slate-500' : 'text-slack-black dark:text-white font-medium'}`}>Monthly</span>
                <Switch checked={annual} onCheckedChange={setAnnual} />
                <span className={`ml-3 ${annual ? 'text-slack-black dark:text-white font-medium' : 'text-slate-500'}`}>Annual</span>
                {annual && (
                  <span className="ml-2 bg-slack-green/10 text-slack-green text-xs font-medium px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards */}
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
                          {annual && plan.price.annual > 0 && (
                            <div className="text-sm text-slate-500 mt-1">Billed annually (${plan.price.annual * 12}/year)</div>
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
      
      {/* Enterprise Section */}
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
                  {[
                    'Custom integration development',
                    'Dedicated implementation team',
                    'Custom AI model training',
                    'Advanced security features',
                    'On-premise deployment options',
                    'Compliance documentation'
                  ].map((feature, i) => (
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
                    {[
                      { name: 'Dedicated Account Manager', included: true },
                      { name: 'Custom Contract Terms', included: true },
                      { name: 'SLA Guarantees', included: true },
                      { name: 'SAML/SSO Authentication', included: true },
                      { name: 'Custom Retention Policies', included: true },
                      { name: 'On-premise Deployment', included: true },
                      { name: 'Compliance Documentation', included: true },
                      { name: 'Custom Reporting', included: true },
                    ].map((feature, i) => (
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
      
      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-slack-black">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Find answers to common questions about our pricing and plans
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-slack-black dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={300}>
            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Still have questions? We're here to help.
              </p>
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                Contact Support
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
