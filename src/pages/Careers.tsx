import BasicPage from '@/components/BasicPage';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, MapPin, Briefcase, Calendar } from 'lucide-react';
import React from 'react';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'Dhaka, Bangladesh (Remote available)',
    department: 'Engineering',
    type: 'Full-time',
    description: 'We\'re looking for an experienced AI engineer to help build and optimize our machine learning models and AI systems.',
    requirements: [
      'Advanced degree in Computer Science, Machine Learning, or related field',
      '5+ years of experience building AI systems at scale',
      'Expertise in NLP, reinforcement learning, and deep learning',
      'Strong Python programming skills',
      'Experience with deep learning frameworks (PyTorch, TensorFlow)',
      'Familiarity with MLOps practices and tools',
    ],
    slug: 'senior-ai-engineer'
  },
  {
    title: 'Product Designer',
    location: 'Dhaka, Bangladesh (Remote available)',
    department: 'Design',
    type: 'Full-time',
    description: 'We\'re seeking a talented product designer to create intuitive, delightful experiences for our AI automation platform.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of product design experience for digital products',
      'Strong portfolio demonstrating user-centered design approach',
      'Experience designing complex workflows and data-heavy interfaces',
      'Proficiency with design tools (Figma, Sketch)',
      'Understanding of design systems and component libraries',
    ],
    slug: 'product-designer'
  },
  {
    title: 'Frontend Engineer',
    location: 'Remote',
    department: 'Engineering',
    type: 'Full-time',
    description: 'We\'re looking for a frontend engineer with strong React skills to build beautiful, responsive interfaces for our platform.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience with React and modern JavaScript',
      'Strong understanding of UI/UX principles',
      'Experience with TypeScript and state management libraries',
      'Familiarity with responsive design and cross-browser compatibility',
      'Knowledge of modern CSS practices and frameworks (Tailwind, styled-components)',
    ],
    slug: 'frontend-engineer'
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    department: 'Engineering',
    type: 'Full-time',
    description: 'Join our infrastructure team to build and maintain the systems that power our AI platform.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in DevOps or infrastructure engineering',
      'Strong knowledge of containerization (Docker, Kubernetes)',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Familiarity with CI/CD pipelines and automation',
      'Understanding of security best practices',
    ],
    slug: 'devops-engineer'
  },
  {
    title: 'Customer Success Manager',
    location: 'Dhaka, Bangladesh',
    department: 'Customer Success',
    type: 'Full-time',
    description: 'Help our customers get the most value from our platform and ensure their success with IdeoxAI.',
    requirements: [
      'Bachelor\'s degree in Business, Communications, or related field',
      '3+ years of experience in customer success or account management',
      'Strong communication and relationship-building skills',
      'Problem-solving mindset and ability to work with technical teams',
      'Experience with CRM systems and customer success tools',
      'Knowledge of SaaS business models and customer lifecycle',
    ],
    slug: 'customer-success-manager'
  }
];

const benefits = [
  {
    title: 'Flexible Work',
    description: 'Work remotely or in our offices with flexible hours to fit your lifestyle.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M5.5 20H8" /><path d="M17 9h.01" /><path d="M12 4.5a3.5 3.5 0 0 1 7 0v2.75a3.5 3.5 0 0 1-7 0V4.5z" /><path d="M12 11.5a3.5 3.5 0 1 1 7 0v1a3.5 3.5 0 0 1-7 0v-1z" /><path d="M17 17.5a3.5 3.5 0 0 1-7 0v-1a3.5 3.5 0 0 1 7 0v1z" /><path d="M12 12.5a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 0 0 7 0v-1z" /><path d="M12 4.5A3.5 3.5 0 0 0 5 4.5v2.75a3.5 3.5 0 0 0 7 0V4.5z" /><path d="M5 17.5a3.5 3.5 0 0 0 7 0v-1a3.5 3.5 0 0 0-7 0v1z" /></svg>
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and mental health support.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
  },
  {
    title: 'Growth & Learning',
    description: 'Learning stipend, conference budget, and dedicated time for professional development.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8v13H3V8" /><path d="M19 6V3H8" /><path d="M9 14h6" /><path d="M12 17v-3" /></svg>
  },
  {
    title: 'Equity',
    description: 'Competitive equity packages that make you a true owner in our success.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M18 7V4H6l6 3Z" /><path d="m18 14 3-2v8H3v-8l3 2" /><path d="m14 8-2.5 2L9 8" /><path d="M12 17v-7" /><path d="M3 4h3" /><path d="M18 4h3" /></svg>
  },
  {
    title: 'Work-Life Balance',
    description: 'Generous PTO, parental leave, and respect for your life outside of work.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
  },
  {
    title: 'Team Events',
    description: 'Regular team retreats, social events, and opportunities to connect with colleagues.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slack-purple"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  }
];

const Careers = () => {
  return (
    <BasicPage
      title="Join Our Team"
      highlightedWord="Join"
      description="Help us build the future of intelligent automation with IdeoXai"
    >
      <section className="mb-16">
        <Button size="lg" className="mx-auto block">
          <a href="#openings">View Open Positions</a>
        </Button>
      </section>

      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Team working together" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slack-purple/80 to-slack-blue/80 flex items-center justify-center">
              <div className="text-white text-center max-w-xl p-6">
                <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
                <p className="text-lg">
                  We believe in collaboration, innovation, and personal growth. At IdeoxAI, you'll work with some of the brightest minds in AI, solving challenging problems that impact the way people work around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slack-black dark:text-white">
            Why Join IdeoxAI?
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            We offer more than just a job. Here's what you can expect when you join our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section id="openings" className="mb-16">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slack-black dark:text-white">
            Open Positions
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Find your next role at IdeoxAI
          </p>
        </div>
        
        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="customer">Customer Success</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0 md:ml-4 md:self-start">
                      <a href={`/careers/${job.slug}`} className="flex items-center">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="engineering">
            <div className="space-y-4">
              {jobOpenings
                .filter(job => job.department === 'Engineering')
                .map((job, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                      </div>
                      <Button variant="outline" className="mt-4 md:mt-0 md:ml-4 md:self-start">
                        <a href={`/careers/${job.slug}`} className="flex items-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="space-y-4">
              {jobOpenings
                .filter(job => job.department === 'Design')
                .map((job, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                      </div>
                      <Button variant="outline" className="mt-4 md:mt-0 md:ml-4 md:self-start">
                        <a href={`/careers/${job.slug}`} className="flex items-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="customer">
            <div className="space-y-4">
              {jobOpenings
                .filter(job => job.department === 'Customer Success')
                .map((job, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                      </div>
                      <Button variant="outline" className="mt-4 md:mt-0 md:ml-4 md:self-start">
                        <a href={`/careers/${job.slug}`} className="flex items-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </BasicPage>
  );
};

export default Careers;
