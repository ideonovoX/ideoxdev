
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Megaphone, MessageSquare, BarChart, Image, Repeat } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureCard from '@/components/FeatureCard';
import BasicPage from '@/components/BasicPage';

const features = [
  {
    title: "Content Creation",
    description: "Generate engaging posts, captions, and images tailored to your brand and audience.",
    icon: Image
  },
  {
    title: "Scheduled Publishing",
    description: "Plan and schedule posts at optimal times when your audience is most active.",
    icon: Calendar
  },
  {
    title: "Automated Responses",
    description: "Reply to comments and messages with intelligent, context-aware responses.",
    icon: MessageSquare
  },
  {
    title: "Performance Analytics",
    description: "Track engagement metrics and gain insights to optimize your social media strategy.",
    icon: BarChart
  },
  {
    title: "Audience Targeting",
    description: "Reach the right audience with AI-powered targeting and personalization.",
    icon: Megaphone
  },
  {
    title: "Cross-Platform Sharing",
    description: "Manage multiple social media accounts from a single, unified dashboard.",
    icon: Repeat
  }
];

const FacebookAutomation = () => {
  return (
    <BasicPage
      title="Facebook Business Page Automation"
      highlightedWord="Facebook"
      description="Supercharge your Facebook presence with AI-powered automation that handles content creation, scheduling, engagement, and analytics"
    >
      <div className="py-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10">
                <Link to="/facebook-demo">
                  See Demo
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <section className="py-20 bg-slate-50 dark:bg-slate-900 rounded-xl">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-[#1877F2] via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Complete Facebook Automation Solutions
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive solutions to streamline your Facebook marketing and engagement.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 100}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    index={index}
                    iconClassName={`bg-gradient-to-r from-[#1877F2] to-[#0C63D4] text-white`}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-[#1877F2] via-slack-blue to-slack-green bg-clip-text text-transparent">
                    How Facebook Automation Works
                  </span>
                </h2>
              </FadeIn>
              
              <div className="space-y-12 mt-12">
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">AI Content Generation</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our AI analyzes your brand voice and creates engaging content that resonates with your audience, including posts, captions, and visual elements.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <Image className="h-24 w-24 text-[#1877F2]" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Smart Engagement</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Automatically respond to comments and messages with intelligent, context-aware replies that maintain your brand voice and build relationships.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <MessageSquare className="h-24 w-24 text-[#1877F2]" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Analytics and Optimization</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Track performance metrics and leverage AI insights to continuously optimize your Facebook marketing strategy for maximum impact.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <BarChart className="h-24 w-24 text-[#1877F2]" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900 rounded-xl mt-8">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#1877F2] via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Ready to Transform Your Facebook Presence?
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                Join hundreds of businesses that are using IdeoxAI to revolutionize their Facebook marketing strategy and drive engagement.
              </p>
              <Button asChild className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-8 py-6 text-lg">
                <Link to="/get-started">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </div>
    </BasicPage>
  );
};

export default FacebookAutomation;
