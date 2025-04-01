import { Link, useLocation } from 'react-router-dom';
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
import { Home } from 'lucide-react';

interface DesktopNavigationProps {
  handleLinkClick: () => void;
}

const DesktopNavigation = ({ handleLinkClick }: DesktopNavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center space-x-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to="/"
              className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                isActive('/') && "text-slack-purple"
              )}
              onClick={handleLinkClick}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="hidden">
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
          
          <NavigationMenuItem className="hidden">
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
                      Insights, news, and updates
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
        <Button variant="ghost" size="sm" asChild className="hidden hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-green-100 hover:text-slack-purple dark:hover:from-purple-900/20 dark:hover:via-blue-900/20 dark:hover:to-green-900/20">
          <Link to="/login" onClick={handleLinkClick}>Login</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/get-started-form" onClick={handleLinkClick}>Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
