
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

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingPlans: PlanFeature[] = [
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

export const faqs: FAQ[] = [
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
