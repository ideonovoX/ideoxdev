
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import LogosSection from '@/components/sections/LogosSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import TechStackSection from '@/components/sections/TechStackSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import BusinessAutomationSection from '@/components/sections/BusinessAutomationSection';
import FacebookAutomationSection from '@/components/sections/FacebookAutomationSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import GoToTop from '@/components/GoToTop';
import SEO from '@/components/SEO';
import { generateOrganizationSchema } from '@/utils/schemaMarkup';

const Index = () => {
  const sliderContent = [
    {
      title: 'Intelligent Automation',
      description: 'Transform your business with smart automation that learns, adapts, and optimizes your workflows. Save time, reduce errors, and focus on what matters.'
    },
    {
      title: 'Automate Your Business',
      description: "Streamline operations and increase efficiency with our intelligent platform that handles repetitive tasks. Unlock your team's potential for innovation and growth."
    },
    {
      title: 'AI Powered Chat Bot',
      description: 'Provide instant 24/7 support and engage customers with our conversational AI that understands context and learns from interactions to deliver exceptional experiences.'
    },
    {
      title: 'FB Page Automation',
      description: 'Revolutionize your social selling with AI-powered automation that manages product listings, pricing, and customer interactions across multiple social platforms.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="min-h-screen">
      <SEO 
        title="IdeoXai - AI Automation Solutions for Business" 
        description="Transform your business with IdeoXai's intelligent AI solutions for automation, chatbots, and social media management. Boost productivity and streamline operations."
        canonicalUrl="https://ideox.ai/"
        schemaMarkup={organizationSchema}
      />
      <Navbar />
      <HeroSection sliderContent={sliderContent} />
      <ChatbotSection />
      <BusinessAutomationSection />
      <FacebookAutomationSection />
      <IntegrationsSection />
      <IndustriesSection />
      <LogosSection />
      <StatsSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Index;
