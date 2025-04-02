
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
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
        <p className="text-slate-600 dark:text-slate-400 text-sm order-2 md:order-1">
          &copy; {currentYear} IdeoXai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
