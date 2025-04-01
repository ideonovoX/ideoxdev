
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

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    if (isOpen) setIsOpen(false);
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
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Zap className="h-8 w-8 text-slack-purple" />
              <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      isActive('/features') ? 'text-slack-purple' : '',
                      'hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 transition-all duration-300'
                    )}
                  >
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                            to="/features"
                            onClick={handleLinkClick}
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
                        <Link to="/features#ai-chatbots" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800" onClick={handleLinkClick}>
                          <div className="text-sm font-medium leading-none">AI Chatbots</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Intelligent chat automation for customer support and engagement
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/features#workflow-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800" onClick={handleLinkClick}>
                          <div className="text-sm font-medium leading-none">Workflow Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Streamline your business processes with intelligent automation
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/features#ecommerce-automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800" onClick={handleLinkClick}>
                          <div className="text-sm font-medium leading-none">eCommerce Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            Automate product listings, pricing, and customer interactions
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/integrations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800" onClick={handleLinkClick}>
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
                  <NavigationMenuTrigger 
                    className={cn(
                      isActive('/solutions') ? 'text-slack-purple' : '',
                      'hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 transition-all duration-300'
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
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
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      isActive('/pricing') && "text-slack-purple"
                    )}
                    onClick={handleLinkClick}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      isActive('/resources') || isActive('/docs') || isActive('/guides') || isActive('/api') || isActive('/blog') ? 'text-slack-purple' : '',
                      'hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 transition-all duration-300'
                    )}
                  >
                    Resources
                  </NavigationMenuTrigger>
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
                  <NavigationMenuTrigger 
                    className={cn(
                      isActive('/contact') || isActive('/about') || isActive('/careers') || isActive('/partners') ? 'text-slack-purple' : '',
                      'hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 transition-all duration-300'
                    )}
                  >
                    Company
                  </NavigationMenuTrigger>
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
              <Button variant="ghost" size="sm" asChild className="hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20">
                <Link to="/login" onClick={handleLinkClick}>Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/get-started-form" onClick={handleLinkClick}>Get Started</Link>
              </Button>
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20">
              <Link to="/login" onClick={handleLinkClick}>Login</Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="text-slack-black dark:text-white p-2 z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div 
          className={cn(
            "md:hidden fixed inset-0 transition-transform duration-300 ease-in-out z-40",
            "bg-gradient-to-br from-purple-50/95 via-blue-50/95 to-green-50/95 dark:from-purple-900/90 dark:via-blue-900/90 dark:to-green-900/90 backdrop-blur-xl",
            "flex flex-col justify-start items-center px-6 overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="space-y-6 w-full max-w-md py-20">
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-white/20 text-slate-700 dark:text-white hover:bg-white/30"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-slate-800 dark:text-white/80 mb-2 px-2 bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">Features</div>
              <Link 
                to="/features"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Features Overview
              </Link>
              <Link 
                to="/integrations"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Integrations
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-slate-800 dark:text-white/80 mb-2 px-2 bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">Solutions</div>
              <Link 
                to="/solutions"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Solutions Overview
              </Link>
              <Link 
                to="/enterprise"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Enterprise
              </Link>
            </div>
            
            <Link 
              to="/pricing"
              className="block py-2 px-4 text-lg font-semibold bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent rounded-md hover:bg-white/30"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-slate-800 dark:text-white/80 mb-2 px-2 bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">Resources</div>
              <Link 
                to="/docs"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Documentation
              </Link>
              <Link 
                to="/guides"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Guides
              </Link>
              <Link 
                to="/api"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                API Reference
              </Link>
              <Link 
                to="/blog"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-slate-800 dark:text-white/80 mb-2 px-2 bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">Company</div>
              <Link 
                to="/about"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link 
                to="/careers"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Careers
              </Link>
              <Link 
                to="/contact"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link 
                to="/partners"
                className="block py-2 px-4 text-slate-700 hover:text-slack-purple dark:text-white/70 dark:hover:text-white rounded-md hover:bg-white/30"
                onClick={handleLinkClick}
              >
                Partners
              </Link>
            </div>
            
            <div className="pt-6 flex flex-col space-y-3">
              <Button className="w-full" asChild onClick={handleLinkClick}>
                <Link to="/get-started-form">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
