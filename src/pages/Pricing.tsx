
import BasicPage from '@/components/BasicPage';
import PricingPlans from '@/components/pricing/PricingPlans';
import EnterpriseSection from '@/components/pricing/EnterpriseSection';
import FAQSection from '@/components/pricing/FAQSection';
import { pricingPlans, faqs } from '@/components/pricing/PricingData';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <BasicPage 
      title="Flexible Pricing for Every Business"
      highlightedWord="Pricing"
      description="Choose the plan that works best for your business needs"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mt-8">
          <Label htmlFor="billing-toggle" className={!annual ? "font-medium text-slack-black dark:text-white" : "text-slate-500"}>
            Monthly
          </Label>
          <Switch 
            id="billing-toggle" 
            checked={annual} 
            onCheckedChange={setAnnual} 
            className="data-[state=checked]:bg-slack-purple"
          />
          <Label htmlFor="billing-toggle" className={annual ? "font-medium text-slack-black dark:text-white" : "text-slate-500"}>
            Annually <span className="text-xs text-green-600 font-medium ml-1">Save 20%</span>
          </Label>
        </div>
      </div>
      
      <PricingPlans plans={pricingPlans} annual={annual} />
      <EnterpriseSection />
      <FAQSection faqs={faqs} />
    </BasicPage>
  );
};

export default Pricing;
