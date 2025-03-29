
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Search, BookOpen, Code, FileText, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DocumentationCard = ({ title, description, icon: Icon, link }: { title: string; description: string; icon: React.ElementType; link: string }) => (
  <Card className="p-6 hover:shadow-md transition-all cursor-pointer">
    <Link to={link} className="flex flex-col h-full">
      <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-slack-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
      <div className="flex items-center text-slack-purple font-medium">
        <span>Explore</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  </Card>
);

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slack-black dark:text-white">
              Documentation
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Everything you need to build, integrate, and automate with IdeoxAI.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full py-4 pl-12 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slack-purple"
              />
            </div>
          </div>

          <Tabs defaultValue="getting-started" className="mb-12">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 md:grid-cols-5">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <DocumentationCard 
                  title="Quick Start Guide" 
                  description="Get up and running with IdeoxAI in less than 10 minutes."
                  icon={Coffee}
                  link="/docs/quick-start"
                />
                <DocumentationCard 
                  title="Core Concepts" 
                  description="Learn the fundamental concepts behind IdeoxAI automation."
                  icon={BookOpen}
                  link="/docs/concepts"
                />
                <DocumentationCard 
                  title="Installation" 
                  description="Detailed instructions for installing and configuring IdeoxAI."
                  icon={FileText}
                  link="/docs/installation"
                />
              </div>
            </TabsContent>
            <TabsContent value="guides" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <DocumentationCard 
                  title="Building Your First Bot" 
                  description="A step-by-step guide to creating your first automation bot."
                  icon={Code}
                  link="/guides/first-bot"
                />
                <DocumentationCard 
                  title="Integrating with Slack" 
                  description="Learn how to connect IdeoxAI with your Slack workspace."
                  icon={FileText}
                  link="/guides/slack-integration"
                />
                <DocumentationCard 
                  title="Advanced Workflows" 
                  description="Create complex multi-step automation workflows."
                  icon={BookOpen}
                  link="/guides/advanced-workflows"
                />
              </div>
            </TabsContent>
            <TabsContent value="api" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <DocumentationCard 
                  title="API Overview" 
                  description="Introduction to the IdeoxAI REST API."
                  icon={FileText}
                  link="/api/overview"
                />
                <DocumentationCard 
                  title="Authentication" 
                  description="Learn how to authenticate with the IdeoxAI API."
                  icon={Code}
                  link="/api/authentication"
                />
                <DocumentationCard 
                  title="Endpoints Reference" 
                  description="Complete reference for all API endpoints."
                  icon={BookOpen}
                  link="/api/endpoints"
                />
              </div>
            </TabsContent>
            <TabsContent value="examples" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <DocumentationCard 
                  title="Code Examples" 
                  description="Sample code for common automation scenarios."
                  icon={Code}
                  link="/examples/code"
                />
                <DocumentationCard 
                  title="Use Cases" 
                  description="Real-world examples of IdeoxAI in action."
                  icon={FileText}
                  link="/examples/use-cases"
                />
                <DocumentationCard 
                  title="Templates" 
                  description="Ready-to-use templates for quick deployment."
                  icon={BookOpen}
                  link="/examples/templates"
                />
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <DocumentationCard 
                  title="FAQ" 
                  description="Answers to frequently asked questions."
                  icon={FileText}
                  link="/resources/faq"
                />
                <DocumentationCard 
                  title="Troubleshooting" 
                  description="Solutions to common issues and problems."
                  icon={Code}
                  link="/resources/troubleshooting"
                />
                <DocumentationCard 
                  title="Community" 
                  description="Join the IdeoxAI community for support and discussions."
                  icon={BookOpen}
                  link="/resources/community"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
