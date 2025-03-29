
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Tag, ChevronLeft, ChevronRight, Share2, Bookmark, Twitter, Linkedin, Facebook } from 'lucide-react';

// Sample blog post data - would typically come from an API
const blogPosts = [
  {
    id: 1,
    title: 'How AI-Powered Chatbots Are Transforming Customer Service',
    slug: 'ai-chatbots-transforming-customer-service',
    excerpt: 'Explore how intelligent chatbots are revolutionizing customer support with 24/7 service, personalized interactions, and seamless issue resolution.',
    content: `
      <p class="lead">Customer service is undergoing a revolution thanks to AI-powered chatbots that can handle inquiries 24/7, personalize interactions, and resolve issues without human intervention.</p>
      
      <h2>The Evolution of Customer Service Chatbots</h2>
      <p>Customer service has come a long way from the days of phone-only support. With the advent of digital channels, businesses have expanded their support options to include email, live chat, and social media. However, these channels still relied heavily on human agents, leading to limitations in availability, consistency, and scalability.</p>
      
      <p>Enter AI-powered chatbots – intelligent virtual assistants that can communicate with customers in natural language, understand their needs, and provide accurate, helpful responses. Unlike their rule-based predecessors, modern AI chatbots leverage machine learning and natural language processing to continuously improve their understanding and effectiveness.</p>
      
      <h2>Key Benefits of AI Chatbots in Customer Service</h2>
      
      <h3>1. 24/7 Availability</h3>
      <p>One of the most significant advantages of AI chatbots is their ability to provide round-the-clock support. They don't need breaks, don't sleep, and never call in sick. This constant availability means customers can get assistance whenever they need it, regardless of time zones or business hours.</p>
      
      <h3>2. Instant Response Times</h3>
      <p>In today's fast-paced world, customers expect immediate responses. AI chatbots can provide instant answers to queries, eliminating the frustration of waiting on hold or for an email response. This speed of service significantly improves customer satisfaction and loyalty.</p>
      
      <h3>3. Consistent Quality</h3>
      <p>Human agents may have varying levels of knowledge, experience, and even mood, which can lead to inconsistent service quality. AI chatbots deliver the same level of service to every customer, every time, ensuring a consistent brand experience.</p>
      
      <h3>4. Personalization at Scale</h3>
      <p>Modern AI chatbots can access customer data and history to personalize interactions. They can recall previous conversations, understand preferences, and tailor responses accordingly – all while handling thousands of conversations simultaneously.</p>
      
      <h3>5. Cost Efficiency</h3>
      <p>While the initial implementation of AI chatbots requires investment, they can significantly reduce operational costs in the long run. By handling routine inquiries, chatbots free up human agents to focus on more complex issues that truly require human empathy and problem-solving skills.</p>
      
      <h2>Real-World Applications</h2>
      
      <h3>Proactive Customer Support</h3>
      <p>AI chatbots are moving beyond reactive support to proactive assistance. They can analyze user behavior to anticipate needs and offer solutions before customers even ask. For example, an e-commerce chatbot might notice a customer repeatedly viewing a product and proactively offer sizing guidance or answer common questions about that item.</p>
      
      <h3>Omnichannel Support</h3>
      <p>Today's customers expect seamless support across multiple channels. AI chatbots can provide consistent experiences whether customers reach out via website chat, Facebook Messenger, WhatsApp, or other platforms. They maintain context across channels, eliminating the need for customers to repeat information.</p>
      
      <h3>Self-Service Enablement</h3>
      <p>Many customers prefer to solve problems on their own when possible. AI chatbots facilitate this by guiding customers through self-service processes, from password resets to troubleshooting common issues. This empowers customers while reducing support volume.</p>
      
      <h2>Overcoming Implementation Challenges</h2>
      
      <p>While the benefits are compelling, implementing AI chatbots comes with challenges. These include:</p>
      
      <ul>
        <li><strong>Training data requirements:</strong> Effective AI chatbots need substantial training data to learn and improve. Organizations must have strategies for collecting, managing, and leveraging this data.</li>
        <li><strong>Integration complexity:</strong> Chatbots need to integrate with existing systems like CRM, knowledge bases, and order management systems to access relevant information.</li>
        <li><strong>Balancing automation with human touch:</strong> Organizations must determine when to escalate from bot to human, ensuring customers don't feel frustrated by limitations in the AI's capabilities.</li>
      </ul>
      
      <h2>The Future of AI in Customer Service</h2>
      
      <p>As AI technology continues to advance, we can expect even more sophisticated customer service capabilities:</p>
      
      <h3>Emotional Intelligence</h3>
      <p>Future AI chatbots will better recognize and respond to customer emotions, adapting their tone and approach accordingly. This emotional intelligence will help them provide more empathetic and effective support.</p>
      
      <h3>Visual Understanding</h3>
      <p>AI will increasingly be able to process and understand images and videos, allowing customers to show rather than tell when describing issues. For example, a customer could send a photo of a damaged product, and the AI would recognize the problem and initiate the appropriate solution.</p>
      
      <h3>Predictive Support</h3>
      <p>AI will move beyond reacting to current issues to predicting and preventing future problems. By analyzing patterns and trends, chatbots will alert customers to potential issues before they occur and provide preemptive solutions.</p>
      
      <h2>Conclusion</h2>
      
      <p>AI-powered chatbots are transforming customer service from a cost center to a value driver for businesses. By providing always-on, consistent, personalized support at scale, they're raising the bar for customer experience while reducing operational costs. Organizations that embrace and effectively implement this technology will gain a significant competitive advantage in customer satisfaction and loyalty.</p>
      
      <p>The key to success lies in thoughtful implementation – using AI to handle routine interactions while ensuring seamless escalation to human agents for complex issues. This hybrid approach leverages the strengths of both AI and human support, creating a customer service ecosystem that's greater than the sum of its parts.</p>
    `,
    cover: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Sarah Chen',
    authorRole: 'CTO & AI Specialist',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
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
    content: `
      <p class="lead">Workflow automation is revolutionizing how businesses operate, enabling teams to work more efficiently by eliminating manual tasks and streamlining processes. This guide covers everything you need to know to successfully implement workflow automation in your organization.</p>
      
      <h2>What is Workflow Automation?</h2>
      <p>Workflow automation refers to the use of technology to execute recurring tasks or processes in a business where manual effort can be replaced. It helps organizations improve efficiency, reduce costs, minimize errors, and free up employees to focus on higher-value work.</p>
      
      <p>Modern workflow automation platforms use a combination of technologies including business process management (BPM) tools, robotic process automation (RPA), artificial intelligence, and machine learning to create end-to-end automated workflows.</p>
      
      <h2>Identifying Automation Opportunities</h2>
      
      <p>The first step in implementing workflow automation is identifying processes that would benefit from automation. Look for:</p>
      
      <ul>
        <li><strong>Repetitive tasks:</strong> Any process that follows the same steps consistently and is performed frequently</li>
        <li><strong>Rule-based decisions:</strong> Processes where decisions are made based on clear, objective criteria</li>
        <li><strong>High-volume activities:</strong> Tasks that are performed often and consume significant staff time</li>
        <li><strong>Error-prone processes:</strong> Activities where manual handling leads to frequent mistakes</li>
        <li><strong>Cross-departmental workflows:</strong> Processes that involve multiple teams and hand-offs</li>
      </ul>
      
      <p>Common business processes suitable for automation include:</p>
      
      <ul>
        <li>Employee onboarding and offboarding</li>
        <li>Purchase order processing</li>
        <li>Invoice processing and approval</li>
        <li>Customer support ticket routing</li>
        <li>Social media management</li>
        <li>Email marketing campaigns</li>
        <li>Data entry and migration</li>
        <li>Report generation and distribution</li>
      </ul>
      
      <h2>Planning Your Automation Implementation</h2>
      
      <h3>1. Document Current Processes</h3>
      <p>Before automating, thoroughly document your existing processes. Create flowcharts that map out every step, decision point, and outcome. Identify bottlenecks, redundancies, and inefficiencies that could be eliminated.</p>
      
      <h3>2. Define Clear Objectives</h3>
      <p>Establish specific, measurable goals for your automation initiative. These might include:</p>
      <ul>
        <li>Reducing process completion time by X%</li>
        <li>Decreasing error rates by X%</li>
        <li>Saving X hours of staff time per week</li>
        <li>Improving customer response times by X%</li>
      </ul>
      
      <h3>3. Choose the Right Tools</h3>
      <p>Select automation tools that align with your specific needs. Options include:</p>
      <ul>
        <li><strong>Low-code/no-code platforms:</strong> Accessible tools that allow non-technical users to create automated workflows</li>
        <li><strong>RPA tools:</strong> Software robots that mimic human interactions with digital systems</li>
        <li><strong>BPM suites:</strong> Comprehensive platforms for modeling, executing, and monitoring business processes</li>
        <li><strong>Industry-specific automation solutions:</strong> Tools designed for particular industries or functions</li>
        <li><strong>AI-powered automation:</strong> Advanced solutions that can handle complex, cognitive tasks</li>
      </ul>
      
      <h2>Implementation Best Practices</h2>
      
      <h3>Start Small</h3>
      <p>Begin with a pilot project that has high visibility but relatively low risk. This allows you to demonstrate value quickly while learning from the implementation before tackling more complex processes.</p>
      
      <h3>Redesign Before Automating</h3>
      <p>Don't simply automate broken processes. Take the opportunity to optimize workflows by eliminating unnecessary steps, consolidating activities, and simplifying complexity before automating.</p>
      
      <h3>Involve Stakeholders</h3>
      <p>Include the employees who currently perform the tasks in the automation design process. They understand the nuances of the work and can identify edge cases. Their involvement also helps reduce resistance to change.</p>
      
      <h3>Plan for Exceptions</h3>
      <p>Even well-designed automated workflows will encounter exceptions. Build in mechanisms for handling unusual cases, including clear escalation paths to human workers when needed.</p>
      
      <h3>Integrate Systems</h3>
      <p>Ensure your automation solution can integrate with your existing technology stack. APIs, webhooks, and pre-built connectors can link your automation platform with CRM, ERP, HRIS, and other critical systems.</p>
      
      <h2>Measuring ROI and Success</h2>
      
      <p>Track these key metrics to evaluate the success of your automation initiatives:</p>
      
      <ul>
        <li><strong>Time savings:</strong> Compare process completion times before and after automation</li>
        <li><strong>Error reduction:</strong> Measure decreases in error rates and rework</li>
        <li><strong>Cost savings:</strong> Calculate reduced labor costs and other operational savings</li>
        <li><strong>Volume handling:</strong> Track increased capacity to handle higher transaction volumes</li>
        <li><strong>Employee satisfaction:</strong> Survey staff regarding improved job satisfaction when freed from repetitive tasks</li>
        <li><strong>Customer satisfaction:</strong> Monitor improvements in customer experience metrics</li>
      </ul>
      
      <h2>Change Management Considerations</h2>
      
      <p>Successful automation requires effective change management. Consider these strategies:</p>
      
      <h3>Communication</h3>
      <p>Clearly communicate the purpose of automation, focusing on how it will benefit employees rather than replace them. Emphasize the opportunity to eliminate tedious work and focus on more rewarding tasks.</p>
      
      <h3>Training</h3>
      <p>Provide comprehensive training on new systems and processes. Include both technical training on tools and context for how automated workflows fit into broader business operations.</p>
      
      <h3>Ongoing Support</h3>
      <p>Establish a support system for employees as they adapt to new ways of working. This might include super-users, help documentation, and regular check-ins.</p>
      
      <h2>Future Trends in Workflow Automation</h2>
      
      <h3>Hyperautomation</h3>
      <p>The combination of multiple automation technologies (RPA, AI, process mining, etc.) to automate increasingly complex end-to-end processes.</p>
      
      <h3>Intelligent Document Processing</h3>
      <p>Advanced systems that can extract, interpret, and process information from unstructured documents using AI and machine learning.</p>
      
      <h3>Conversational Automation</h3>
      <p>Integration of natural language processing to enable workflows triggered by voice or text conversations.</p>
      
      <h3>Decision Intelligence</h3>
      <p>AI systems that can make or recommend complex decisions within automated workflows based on multiple data points and contextual understanding.</p>
      
      <h2>Conclusion</h2>
      
      <p>Workflow automation represents a transformative opportunity for businesses to improve efficiency, reduce costs, and enhance both employee and customer experiences. By carefully identifying appropriate processes, selecting the right tools, and implementing with a focus on change management, organizations can achieve significant returns on their automation investments.</p>
      
      <p>The key to success lies in viewing automation not as a one-time project but as an ongoing journey of continuous improvement. Start with simple use cases, demonstrate value, learn from each implementation, and gradually expand to more complex workflows. With this approach, your organization can build a sustainable automation program that delivers compounding benefits over time.</p>
    `,
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Michael Patel',
    authorRole: 'COO',
    authorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
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
    content: `
      <p class="lead">The democratization of AI has made it possible for non-technical users to build sophisticated automation solutions without writing code. This tutorial will show you how to create a powerful AI automation using n8n and IdeoxAI.</p>
      
      <h2>Introduction to No-Code AI Automation</h2>
      <p>No-code platforms are revolutionizing how businesses implement technology solutions by eliminating the need for specialized programming skills. When combined with AI capabilities, these platforms enable anyone to create intelligent automations that can transform business operations.</p>
      
      <p>In this tutorial, we'll build an automated system that monitors customer support emails, analyzes sentiment, categorizes issues, and routes them to the appropriate department – all without writing a single line of code.</p>
      
      <h2>What You'll Need</h2>
      <ul>
        <li>An n8n account (free tier available at n8n.io)</li>
        <li>An IdeoxAI account (sign up at ideox.ai)</li>
        <li>Access to a Gmail account for testing</li>
      </ul>
      
      <h2>Step 1: Setting Up n8n</h2>
      
      <p>n8n is an open-source workflow automation tool that allows you to connect different services and build automated workflows through a visual interface.</p>
      
      <h3>Installation Options</h3>
      <p>You have several options for using n8n:</p>
      <ul>
        <li><strong>n8n Cloud:</strong> The simplest option with no setup required</li>
        <li><strong>Self-hosted:</strong> Install on your own server using Docker, npm, or other methods</li>
        <li><strong>Desktop App:</strong> Run locally on your computer</li>
      </ul>
      
      <p>For this tutorial, we'll use n8n Cloud for simplicity.</p>
      
      <h3>Create a New Workflow</h3>
      <p>After signing in to your n8n account:</p>
      <ol>
        <li>Click on "Workflows" in the main navigation</li>
        <li>Click the "+ Create Workflow" button</li>
        <li>Name your workflow "Customer Support AI Router"</li>
      </ol>
      
      <h2>Step 2: Setting Up Email Trigger</h2>
      
      <p>We'll start by creating a trigger that activates when new emails arrive in a support inbox.</p>
      
      <ol>
        <li>Click the "+ Add Trigger" button in your workflow</li>
        <li>Search for and select "Gmail"</li>
        <li>Select the "Email Received" trigger</li>
        <li>Click "Create New Credentials" and follow the OAuth flow to connect your Gmail account</li>
        <li>Configure the trigger to monitor a specific label (e.g., "Support")</li>
        <li>Save the configuration</li>
      </ol>
      
      <p>Now, whenever an email with the "Support" label arrives, your workflow will be triggered.</p>
      
      <h2>Step 3: Connecting to IdeoxAI</h2>
      
      <p>Next, we'll connect to IdeoxAI's API to access its AI capabilities.</p>
      
      <ol>
        <li>Click the "+ Add Node" button after your Gmail trigger</li>
        <li>Search for and select "HTTP Request"</li>
        <li>Configure the HTTP Request with the following settings:
          <ul>
            <li>Method: POST</li>
            <li>URL: https://api.ideoxai.com/v1/analyze</li>
            <li>Authentication: API Key</li>
            <li>Add your IdeoxAI API key (found in your IdeoxAI dashboard)</li>
            <li>Content Type: JSON</li>
            <li>Request Body: 
              <pre>{
  "text": "{{$node[\"Gmail\"].json[\"body\"]}}",
  "analysis_type": "sentiment_and_category"
}</pre>
            </li>
          </ul>
        </li>
        <li>Save the configuration</li>
      </ol>
      
      <p>This node will send the email body to IdeoxAI for analysis, which will return sentiment scores and category classification.</p>
      
      <h2>Step 4: Adding Conditional Routing Logic</h2>
      
      <p>Now we'll add logic to route the email based on the AI analysis results.</p>
      
      <h3>Add a Switch Node</h3>
      <ol>
        <li>Click "+ Add Node" after the HTTP Request node</li>
        <li>Search for and select "Switch"</li>
        <li>Configure the following routing rules:
          <ul>
            <li>Rule 1: If category equals "technical", route to Technical Support</li>
            <li>Rule 2: If category equals "billing", route to Billing Department</li>
            <li>Rule 3: If category equals "feature_request", route to Product Team</li>
            <li>Rule 4: If sentiment is less than 0.3 (negative), route to Urgent Queue</li>
            <li>Default outcome: route to General Support</li>
          </ul>
        </li>
        <li>Save the configuration</li>
      </ol>
      
      <h2>Step 5: Setting Up Department-Specific Actions</h2>
      
      <p>For each output from the Switch node, we'll add appropriate actions. Let's set up the Technical Support route as an example:</p>
      
      <ol>
        <li>Connect the "technical" output from the Switch node to a new node</li>
        <li>Add a "Slack" node (or your team's preferred communication tool)</li>
        <li>Configure it to send a message to the #technical-support channel with details from the email</li>
        <li>Include relevant information such as:
          <ul>
            <li>Email subject</li>
            <li>Sender information</li>
            <li>Email body (summarized by AI)</li>
            <li>Sentiment score</li>
            <li>Priority level</li>
          </ul>
        </li>
        <li>Save the configuration</li>
      </ol>
      
      <p>Repeat similar steps for the other routing outcomes, customizing the actions for each department.</p>
      
      <h2>Step 6: Adding a CRM Update</h2>
      
      <p>To maintain customer records, let's add a CRM update to each branch:</p>
      
      <ol>
        <li>After each department-specific action, add a "CRM" node (HubSpot, Salesforce, etc.)</li>
        <li>Configure it to:
          <ul>
            <li>Find or create a contact record for the email sender</li>
            <li>Log the support interaction</li>
            <li>Update contact status based on the issue type and sentiment</li>
          </ul>
        </li>
        <li>Save the configuration</li>
      </ol>
      
      <h2>Step 7: Setting Up Auto-Responses</h2>
      
      <p>Finally, let's add automated responses based on the analysis:</p>
      
      <ol>
        <li>Add a "Gmail" node after each CRM update</li>
        <li>Configure it to send an email reply with:
          <ul>
            <li>An acknowledgment of their specific issue type</li>
            <li>Expected response times</li>
            <li>Relevant knowledge base articles (based on the AI categorization)</li>
          </ul>
        </li>
        <li>Save the configuration</li>
      </ol>
      
      <h2>Step 8: Testing the Workflow</h2>
      
      <p>Now it's time to test your automated AI solution:</p>
      
      <ol>
        <li>Activate your workflow by clicking the "Active" toggle in n8n</li>
        <li>Send a test email to your support address with different types of inquiries:
          <ul>
            <li>A technical question</li>
            <li>A billing inquiry</li>
            <li>A feature request</li>
            <li>A complaint (negative sentiment)</li>
          </ul>
        </li>
        <li>Monitor the execution of your workflow in n8n's execution log</li>
        <li>Verify that emails are correctly analyzed, routed, and responded to</li>
      </ol>
      
      <h2>Step 9: Refining and Optimizing</h2>
      
      <p>After initial testing, look for opportunities to improve your workflow:</p>
      
      <ul>
        <li>Adjust sensitivity thresholds for sentiment analysis</li>
        <li>Fine-tune category classifications</li>
        <li>Improve auto-response templates based on customer feedback</li>
        <li>Add additional data enrichment steps (e.g., looking up customer purchase history)</li>
      </ul>
      
      <h2>Advanced Enhancements</h2>
      
      <p>Once your basic workflow is functioning well, consider these advanced enhancements:</p>
      
      <h3>Multi-language Support</h3>
      <p>Add a language detection node before the AI analysis and route to language-specific analysis paths.</p>
      
      <h3>Priority Scoring</h3>
      <p>Create a more sophisticated priority scoring system that considers:
        <ul>
          <li>Customer tier/value</li>
          <li>Issue urgency</li>
          <li>Sentiment intensity</li>
          <li>Response time elapsed</li>
        </ul>
      </p>
      
      <h3>Feedback Loop</h3>
      <p>Add a process to track resolution outcomes and feed this data back into your AI model for continuous improvement.</p>
      
      <h2>Conclusion</h2>
      
      <p>You've now created a sophisticated AI-powered customer support automation system without writing a single line of code. This solution demonstrates the power of combining no-code platforms like n8n with AI services like IdeoxAI.</p>
      
      <p>By implementing this workflow, you can expect:
        <ul>
          <li>Faster response times to customer inquiries</li>
          <li>More consistent handling of support issues</li>
          <li>Improved prioritization of urgent or sensitive cases</li>
          <li>Better customer experience through relevant auto-responses</li>
          <li>Reduced workload on your support team for routine inquiries</li>
        </ul>
      </p>
      
      <p>As you become more familiar with these tools, you can create increasingly sophisticated automations to streamline operations across your business – all without requiring specialized programming skills.</p>
    `,
    cover: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Alex Rahman',
    authorRole: 'CEO & Co-founder',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
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
    content: 'Full content for post 4 would go here...',
    cover: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'Lisa Wang',
    authorRole: 'Social Commerce Lead',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
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
    content: 'Full content for post 5 would go here...',
    cover: 'https://images.unsplash.com/photo-1677442135131-4d7c197d3d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60',
    author: 'David Kumar',
    authorRole: 'Enterprise AI Consultant',
    authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80',
    date: 'April 10, 2024',
    category: 'AI',
    tags: ['LLM', 'integration', 'enterprise'],
    readTime: '11 min read'
  }
];

// Find related posts (same category or tags)
const getRelatedPosts = (currentPost: any, allPosts: any[]) => {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some((tag: string) => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post that matches the slug
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <p className="mb-6">The post you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedPosts = getRelatedPosts(post, blogPosts);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link 
                to="/blog"
                className="text-slack-purple hover:underline flex items-center text-sm font-medium"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Blog
              </Link>
              <span className="bg-slack-purple/10 text-slack-purple px-3 py-1 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slack-black dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="mr-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{post.authorRole}</div>
              </div>
              <div className="ml-auto flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" /> {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                </div>
              </div>
            </div>
            
            <div className="mb-8 rounded-xl overflow-hidden h-[400px]">
              <img 
                src={post.cover} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags.map((tag: string) => (
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
            
            <div className="flex justify-between items-center py-6 border-t border-b border-slate-200 dark:border-slate-800">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={relatedPost.cover}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs bg-slack-purple/10 text-slack-purple px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-lg font-bold mb-2 hover:text-slack-purple transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 border-t border-slate-200 dark:border-slate-800 pt-12">
            <div className="flex justify-between mb-12">
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center">
                  Browse More Articles
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
