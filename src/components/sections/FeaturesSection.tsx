
import { Bot, Workflow, Zap, Lightbulb, Server, Network } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI Task Automation',
      description: 'Automate repetitive tasks with intelligent AI that learns from your workflow patterns.',
      icon: Bot
    },
    {
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intuitive workflow design tools.',
      icon: Workflow
    },
    {
      title: 'Instant Integrations',
      description: 'Connect with 1000+ apps and services with our no-code integration platform.',
      icon: Zap
    },
    {
      title: 'Intelligent Insights',
      description: 'Gain valuable insights from your automation data with advanced analytics.',
      icon: Lightbulb
    },
    {
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
      icon: Server
    },
    {
      title: 'Seamless Connectivity',
      description: 'Connect your entire tech stack with our robust API and webhook capabilities.',
      icon: Network
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slack-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 100}>
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
