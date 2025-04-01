
import { Link, useLocation } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Mock blog posts (these would normally come from a data source)
  const recentBlogPosts = [
    { title: "How AI Is Revolutionizing Customer Service", slug: "ai-customer-service" },
    { title: "5 Ways to Automate Your Business with IdeoXAI", slug: "business-automation" },
    { title: "The Future of eCommerce Automation", slug: "ecommerce-automation" },
    { title: "Implementing AI Solutions for Enterprise", slug: "ai-enterprise-solutions" }
  ];
  
  // Reorganized footer links according to the request
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Security', href: '/security' },
        { name: 'Cookies', href: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-slack-black pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-slack-purple" />
              <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-sm">
              Revolutionizing workflows with intelligent automation powered by cutting-edge AI technology.
            </p>
            <div className="mb-4">
              <p className="text-slate-600 dark:text-slate-400">
                Address: Sonabaria, Satkhira, Dhaka, Bangladesh
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Contact: +8801311344747
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Email: ai@ideox.ai
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slack-darkGray hover:text-slack-purple transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className={cn(
                      "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block",
                      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                      isActive(link.href) && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Blog
            </h3>
            <ul className="space-y-3">
              {recentBlogPosts.map((post, index) => (
                <li key={index}>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className={cn(
                      "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block",
                      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    )}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks[1].links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className={cn(
                      "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block",
                      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                      isActive(link.href) && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal Column */}
            <h3 className="font-semibold text-slack-black dark:text-white mb-4 mt-8">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks[2].links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className={cn(
                      "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block",
                      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                      isActive(link.href) && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {currentYear} IdeoxAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className={cn(
                  "text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple relative inline-block",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  isActive('/privacy') && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                )}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className={cn(
                  "text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple relative inline-block",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  isActive('/terms') && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                )}
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className={cn(
                  "text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple relative inline-block",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  isActive('/cookies') && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                )}
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
