
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Workflow, Lightbulb, Users, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slack-black dark:text-white">
                About IdeoxAI
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                We're on a mission to revolutionize how businesses and individuals work by creating intelligent automation tools powered by cutting-edge AI technology.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slack-black dark:text-white">
                  Our Story
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  IdeoxAI was founded in 2022 by a team of AI enthusiasts and automation experts who recognized the transformative potential of combining sophisticated AI with powerful workflow automation.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  What began as a small project to automate repetitive tasks has evolved into a comprehensive platform that helps thousands of businesses streamline their operations, improve customer interactions, and free up valuable time for innovation and growth.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Today, we're proud to serve clients around the world, from small startups to Fortune 500 companies, all using our platform to transform how they work and deliver value to their customers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-slack-purple/10 p-3 mr-4">
                      <Lightbulb className="h-6 w-6 text-slack-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">2022</h3>
                      <p className="text-slate-600 dark:text-slate-400">IdeoxAI founded in Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-slack-purple/10 p-3 mr-4">
                      <Users className="h-6 w-6 text-slack-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">2023</h3>
                      <p className="text-slate-600 dark:text-slate-400">Reached 1,000+ active users worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-slack-purple/10 p-3 mr-4">
                      <Target className="h-6 w-6 text-slack-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">2024</h3>
                      <p className="text-slate-600 dark:text-slate-400">Launched enterprise solutions & expanded globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slack-black dark:text-white">
                Our Values
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="rounded-full bg-slack-purple/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We continuously push the boundaries of what's possible with AI and automation technology.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="rounded-full bg-slack-purple/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We believe powerful technology should be accessible and easy to use for everyone.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="rounded-full bg-slack-purple/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We're committed to ethical AI practices and transparent relationships with our customers.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slack-black dark:text-white">
                Leadership Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Meet the people behind IdeoxAI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Alex Rahman</h3>
                <p className="text-slack-purple font-medium mb-2">CEO & Co-founder</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Previously led AI research at TechCorp and holds a PhD in Computer Science from MIT.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-slack-purple font-medium mb-2">CTO & Co-founder</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Machine learning expert with 15+ years of experience building AI systems at scale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="COO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Michael Patel</h3>
                <p className="text-slack-purple font-medium mb-2">COO</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Business strategist focused on scaling AI solutions for enterprise clients.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
