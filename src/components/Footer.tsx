
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Guides', href: '/guides' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Partners', href: '/partners' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-slack-black dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Added login and get started buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 mb-8">
          <Button variant="outline" className="border-slack-purple text-slack-purple hover:bg-slack-purple/10" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {currentYear} IdeoxAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slack-purple">
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
