
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'How AI-Powered Chatbots Are Transforming Customer Service',
    slug: 'ai-chatbots-transforming-customer-service',
    excerpt: 'Explore how intelligent chatbots are revolutionizing customer support with 24/7 service, personalized interactions, and seamless issue resolution.',
    cover: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Sarah Chen',
    date: 'May 28, 2024',
    category: 'AI',
    tags: ['chatbots', 'customer service', 'automation'],
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Workflow Automation: A Complete Guide for Businesses in 2024',
    slug: 'workflow-automation-guide-2024',
    excerpt: 'Learn how to identify automation opportunities, implement effective solutions, and measure ROI in this comprehensive guide to workflow automation.',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Michael Patel',
    date: 'May 15, 2024',
    category: 'Automation',
    tags: ['workflow', 'business', 'productivity'],
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Building a No-Code AI Solution with n8n and IdeoxAI',
    slug: 'no-code-ai-solution-n8n-ideoxai',
    excerpt: 'A step-by-step tutorial on creating powerful AI automations without writing a single line of code using n8n and the IdeoxAI platform.',
    cover: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Alex Rahman',
    date: 'May 5, 2024',
    category: 'Tutorials',
    tags: ['no-code', 'n8n', 'integration'],
    readTime: '15 min read'
  },
  {
    id: 4,
    title: 'The Future of eCommerce Automation: AI-Powered Selling on Social Platforms',
    slug: 'future-ecommerce-automation-social-platforms',
    excerpt: 'Discover how businesses are leveraging AI to automate product listings, customer interactions, and sales processes across social media platforms.',
    cover: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Lisa Wang',
    date: 'April 22, 2024',
    category: 'eCommerce',
    tags: ['social selling', 'AI', 'retail'],
    readTime: '10 min read'
  },
  {
    id: 5,
    title: 'Integrating LLMs into Your Business Processes: Best Practices',
    slug: 'integrating-llms-business-processes',
    excerpt: 'Practical advice on how to effectively integrate large language models into your business workflows for maximum impact and efficiency.',
    cover: 'https://images.unsplash.com/photo-1677442135131-4d7c197d3d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'David Kumar',
    date: 'April 10, 2024',
    category: 'AI',
    tags: ['LLM', 'integration', 'enterprise'],
    readTime: '11 min read'
  }
];

// Featured post component
const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
    <div className="md:col-span-3">
      <Link to={`/blog/${post.slug}`}>
        <div className="h-[300px] md:h-full w-full rounded-xl overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
    </div>
    <div className="md:col-span-2 flex flex-col justify-center">
      <div className="flex items-center space-x-4 mb-3">
        <span className="bg-slack-purple/10 text-slack-purple px-3 py-1 text-sm font-medium rounded-full">
          {post.category}
        </span>
        <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> {post.date}
        </span>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-slack-purple transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
        <User className="h-4 w-4 mr-1" /> {post.author} • {post.readTime}
      </div>
      <Link 
        to={`/blog/${post.slug}`}
        className="text-slack-purple font-medium flex items-center hover:underline"
      >
        Read Article <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </div>
);

// Blog post card component
const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow">
    <Link to={`/blog/${post.slug}`}>
      <div className="h-48 w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-3">
        <span className="bg-slack-purple/10 text-slack-purple px-3 py-1 text-xs font-medium rounded-full">
          {post.category}
        </span>
        <span className="text-slate-500 dark:text-slate-400 text-xs flex items-center">
          <Calendar className="h-3 w-3 mr-1" /> {post.date}
        </span>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h3 className="text-xl font-bold mb-2 hover:text-slack-purple transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
          <User className="h-3 w-3 mr-1" /> {post.author} • {post.readTime}
        </div>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-slack-purple text-sm font-medium flex items-center hover:underline"
        >
          Read <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  </Card>
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredPost = blogPosts[0]; // Use the first post as featured
  const regularPosts = blogPosts.slice(1); // Rest of the posts

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-slack-black dark:text-white">
                IdeoxAI Blog
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Insights, tutorials, and news about AI automation and workflow optimization
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-72">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <section className="mb-12">
            <FeaturedPost post={featuredPost} />
          </section>

          <section className="mb-12">
            <Tabs defaultValue="all" className="mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="ai">AI</TabsTrigger>
                  <TabsTrigger value="automation">Automation</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts
                    .filter((post) => post.category === 'AI')
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="automation" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts
                    .filter((post) => post.category === 'Automation')
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts
                    .filter((post) => post.category === 'Tutorials')
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
                <Link 
                  key={tag} 
                  to={`/blog/tag/${tag}`}
                  className="flex items-center bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slack-purple/10 hover:text-slack-purple transition-colors"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
