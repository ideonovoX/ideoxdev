
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
    { title: "The Future of eCommerce Automation", slug: "ecommerce-automation" }
  ];
  
  // Reorganized footer links in the specified order
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Company
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

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Product
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
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
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

          {/* Blog Column */}
          <div>
            <h3 className="font-semibold text-slack-black dark:text-white mb-4">
              Blog
            </h3>
            <ul className="space-y-3">
              {recentBlogPosts.slice(0, 3).map((post, index) => (
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
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-1">
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
            <p className="text-slate-600 dark:text-slate-400 text-sm order-2 md:order-2">
              &copy; {currentYear} IdeoxAI. All rights reserved.
            </p>
          </div>
          
          {/* Mobile-only footer links order */}
          <div className="flex flex-col-reverse md:hidden mt-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm text-center mt-4">
              &copy; {currentYear} IdeoxAI. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mb-2">
              <Link 
                to="/privacy" 
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple"
              >
                Terms
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple"
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
