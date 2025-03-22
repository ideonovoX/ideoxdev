
import { Bot, Workflow, Zap, Network, Server, Lightbulb, HelpCircle, Lock, BarChart3, Code, Clock, CalendarDays } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import FadeIn from '@/components/FadeIn';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Button } from '@/components/ui/button';

const Features = () => {
  const primaryFeatures = [
    {
      title: 'AI Task Automation',
      description: 'Our intelligent AI system learns from your workflow patterns to automate repetitive tasks with increasing accuracy over time.',
      icon: Bot,
      color: 'bg-slack-purple/10 text-slack-purple'
    },
    {
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intuitive visual workflow builders that anyone on your team can use.',
      icon: Workflow,
      color: 'bg-slack-blue/10 text-slack-blue'
    },
    {
      title: 'Instant Integrations',
      description: 'Connect with over 1000+ apps and services with pre-built connectors and our no-code integration platform.',
      icon: Zap,
      color: 'bg-slack-green/10 text-slack-green'
    }
  ];

  const secondaryFeatures = [
    {
      title: 'Intelligent Insights',
      description: 'Gain valuable insights from your automation data with advanced analytics and customizable dashboards.',
      icon: Lightbulb
    },
    {
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits.',
      icon: Lock
    },
    {
      title: 'API & Webhooks',
      description: 'Powerful API and webhook support for custom integrations and extending platform capabilities.',
      icon: Code
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with customizable charts and reports.',
      icon: BarChart3
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor your automations in real-time with alerts and notifications for critical events.',
      icon: Clock
    },
    {
      title: 'Scheduled Tasks',
      description: 'Schedule automated tasks to run at specific times with advanced scheduling options.',
      icon: CalendarDays
    },
    {
      title: 'Robust Connectivity',
      description: 'Connect your entire tech stack reliably with built-in error handling and retry mechanisms.',
      icon: Network
    },
    {
      title: 'Dedicated Support',
      description: '24/7 support from our team of automation experts to help you get the most out of the platform.',
      icon: HelpCircle
    },
    {
      title: 'Scalable Architecture',
      description: 'Our cloud infrastructure scales automatically to handle your growing automation needs.',
      icon: Server
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-slack-black dark:text-white leading-tight mb-6">
                Features Built for <span className="text-slack-purple">Productivity</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Explore our comprehensive suite of automation tools designed to transform how your business operates.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Primary Features */}
      <section className="py-20 bg-white dark:bg-slack-black">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Core Capabilities
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Our flagship features that form the foundation of our platform
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {primaryFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <div className="relative p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slack-black/50 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-5 ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-slack-black dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{feature.description}</p>
                  <Button variant="ghost" className="text-slack-purple mt-auto self-start px-0 hover:bg-transparent hover:text-slack-purple/80">
                    Learn more →
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Secondary Features */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Advanced Features
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Powerful tools that enhance your automation experience
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {secondaryFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 50}>
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
      
      {/* Feature Comparison */}
      <section className="py-20 bg-white dark:bg-slack-black">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slack-black dark:text-white mb-4">
                Choose the Right Plan
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Compare features across our different plans
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <FadeIn>
              <div className="min-w-max">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left text-slate-600 dark:text-slate-400 font-normal">Features</th>
                      <th className="py-4 px-6 text-center bg-slate-100 dark:bg-slate-800 rounded-t-lg font-semibold text-slack-black dark:text-white">Free</th>
                      <th className="py-4 px-6 text-center bg-slack-purple/10 dark:bg-slack-purple/20 rounded-t-lg font-semibold text-slack-purple">Pro</th>
                      <th className="py-4 px-6 text-center bg-slate-100 dark:bg-slate-800 rounded-t-lg font-semibold text-slack-black dark:text-white">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Automated Workflows', free: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
                      { feature: 'Monthly Automations', free: '1,000', pro: '50,000', enterprise: 'Unlimited' },
                      { feature: 'Integrations', free: '10', pro: '100+', enterprise: '1000+' },
                      { feature: 'Team Members', free: '1', pro: '10', enterprise: 'Unlimited' },
                      { feature: 'AI Task Automation', free: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                      { feature: 'API Access', free: '❌', pro: '✅', enterprise: '✅' },
                      { feature: 'Custom Integrations', free: '❌', pro: '❌', enterprise: '✅' },
                      { feature: 'Priority Support', free: '❌', pro: '✅', enterprise: '✅' },
                      { feature: 'SLA Guarantees', free: '❌', pro: '❌', enterprise: '✅' },
                      { feature: 'Dedicated Account Manager', free: '❌', pro: '❌', enterprise: '✅' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-200 dark:border-gray-800">
                        <td className="py-4 px-6 text-left font-medium text-slack-black dark:text-white">{row.feature}</td>
                        <td className="py-4 px-6 text-center bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400">{row.free}</td>
                        <td className="py-4 px-6 text-center bg-slack-purple/5 dark:bg-slack-purple/10 text-slate-600 dark:text-slate-400">{row.pro}</td>
                        <td className="py-4 px-6 text-center bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slack-purple dark:bg-slack-purple/90 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how AutomateAI can transform your workflow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-slack-purple hover:bg-white/90 h-12 px-8">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                  Schedule Demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
