
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingPlans from '@/components/pricing/PricingPlans';
import EnterpriseSection from '@/components/pricing/EnterpriseSection';
import FAQSection from '@/components/pricing/FAQSection';
import { pricingPlans, faqs } from '@/components/pricing/PricingData';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingHeader annual={annual} setAnnual={setAnnual} />
      <PricingPlans plans={pricingPlans} annual={annual} />
      <EnterpriseSection />
      <FAQSection faqs={faqs} />
      <Footer />
    </div>
  );
};

export default Pricing;
