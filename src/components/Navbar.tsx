import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled ? "py-2 glass-effect shadow-soft" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-slack-purple" />
              <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20 ${isActive('/features') ? 'text-slack-purple' : ''}`}>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                            to="/features"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-slack-purple">
                              Features Overview
                            </div>
                            <p className="text-sm leading-tight text-slate-700 dark:text-slate-400">
                              Explore all the powerful features that IdeoxAI has to offer for your business automation needs.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/features#ai-chatbots" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">AI Chatbots</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Intelligent chat automation for customer support and engagement
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/features#workflow-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Workflow Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Streamline your business processes with intelligent automation
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/features#ecommerce-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">eCommerce Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Automate product listings, pricing, and customer interactions
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/integrations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Integrations</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Connect with your favorite tools and platforms
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20 ${isActive('/solutions') ? 'text-slack-purple' : ''}`}>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                            to="/solutions"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-slack-purple">
                              Solutions Overview
                            </div>
                            <p className="text-sm leading-tight text-slate-700 dark:text-slate-400">
                              Discover how IdeoxAI solves real business challenges across different industries.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/solutions#customer-service" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Customer Service</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Improve response times and satisfaction with AI support
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions#ecommerce" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">eCommerce</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Optimize online sales operations and customer engagement
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions#finance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Finance & Banking</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Streamline financial processes and enhance security
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/enterprise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Enterprise</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Advanced solutions for large-scale operations
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      isActive('/pricing') && "text-slack-purple"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20 ${isActive('/resources') || isActive('/docs') || isActive('/guides') || isActive('/api') || isActive('/blog') ? 'text-slack-purple' : ''}`}>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link to="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Documentation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Comprehensive guides to using IdeoxAI effectively
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/guides" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Guides</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Step-by-step tutorials for common use cases
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/api" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">API Reference</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Technical documentation for developers
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Insights, news, and updates from IdeoxAI
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Resource Center</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Ebooks, webinars, and case studies
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20 ${isActive('/contact') || isActive('/about') || isActive('/careers') || isActive('/partners') ? 'text-slack-purple' : ''}`}>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] md:w-[400px] md:grid-cols-2">
                      <li>
                        <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Our story and mission
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Join our growing team
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Get in touch with us
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/partners" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800">
                          <div className="text-sm font-medium leading-none">Partners</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Partner with IdeoxAI
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center space-x-4 ml-4">
              <Button variant="ghost" size="sm" asChild className="hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="hover:bg-gradient-to-r hover:from-slack-purple/20 hover:via-slack-blue/20 hover:to-slack-green/20">
              <Link to="/login">Login</Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="text-slack-black dark:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div 
          className={cn(
            "md:hidden fixed inset-0 transition-transform duration-300 ease-in-out z-40",
            "bg-gradient-to-br from-[#1A1F2C] via-[#2A2A3A] to-[#3A3A4A] backdrop-blur-xl",
            "flex flex-col justify-center items-center space-y-6 px-6",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="space-y-6 w-full max-w-md">
            <div className="mb-8">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-white p-2"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-white/80 mb-2 px-2">Features</div>
              <Link 
                to="/features"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Features Overview
              </Link>
              <Link 
                to="/integrations"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Integrations
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-white/80 mb-2 px-2">Solutions</div>
              <Link 
                to="/solutions"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Solutions Overview
              </Link>
              <Link 
                to="/enterprise"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
            </div>
            
            <Link 
              to="/pricing"
              className="block py-2 px-4 text-lg font-semibold text-white/80 rounded-md hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-white/80 mb-2 px-2">Resources</div>
              <Link 
                to="/docs"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                to="/guides"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Guides
              </Link>
              <Link 
                to="/api"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                API Reference
              </Link>
              <Link 
                to="/blog"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-white/80 mb-2 px-2">Company</div>
              <Link 
                to="/about"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/careers"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/contact"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/partners"
                className="block py-2 px-4 text-white/70 hover:text-white rounded-md hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
            </div>
            
            <div className="pt-6 flex flex-col space-y-3">
              <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
