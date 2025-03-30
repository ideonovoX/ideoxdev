
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, FileText, Clock, RefreshCcw, Zap, Database } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    title: "Automated Workflows",
    description: "Create intelligent workflows that connect various business processes and applications.",
    icon: RefreshCcw
  },
  {
    title: "Document Processing",
    description: "Extract, classify, and route information from documents with AI-powered recognition.",
    icon: FileText
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI to forecast trends, identify opportunities, and make data-driven decisions.",
    icon: BarChart
  },
  {
    title: "Time & Resource Management",
    description: "Optimize schedules, resource allocation, and task management automatically.",
    icon: Clock
  },
  {
    title: "Process Acceleration",
    description: "Speed up core business processes with intelligent automation that learns and improves.",
    icon: Zap
  },
  {
    title: "Data Management",
    description: "Automate data collection, cleaning, and processing for better business intelligence.",
    icon: Database
  }
];

const BusinessAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                    Transform Your Business with AI Automation
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  Streamline operations, reduce costs, and boost productivity with intelligent automation solutions tailored to your business needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-slack-blue hover:bg-slack-blue/90 text-white">
                    <Link to="/get-started">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10">
                    <Link to="/automation-demo">
                      See Demo
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Automation Solutions for Every Need
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
                Our AI-powered automation platform provides comprehensive solutions to streamline your business operations and drive growth.
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
                  <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                    How Business Automation Works
                  </span>
                </h2>
              </FadeIn>
              
              <div className="space-y-12 mt-12">
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Identify Opportunities</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our AI analyzes your business processes to identify areas where automation can have the greatest impact on efficiency and productivity.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <BarChart className="h-24 w-24 text-slack-blue" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Build Smart Workflows</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Create intelligent workflows that connect different systems and processes, automating routine tasks and decisions without human intervention.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <RefreshCcw className="h-24 w-24 text-slack-purple" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">Continuously Improve</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our AI-powered platform learns from each interaction, continuously improving processes and adapting to changing business needs.
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-medium">
                      <div className="h-60 flex items-center justify-center">
                        <Zap className="h-24 w-24 text-slack-green" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
                  Ready to Supercharge Your Business?
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                Join hundreds of businesses that are leveraging IdeoxAI to streamline operations, reduce costs, and drive growth.
              </p>
              <Button asChild className="bg-slack-blue hover:bg-slack-blue/90 text-white px-8 py-6 text-lg">
                <Link to="/get-started">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessAutomation;
