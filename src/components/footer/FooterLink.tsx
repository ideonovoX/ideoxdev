
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterLinkProps {
  href: string;
  name: string;
}

const FooterLink = ({ href, name }: FooterLinkProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <li>
      <Link 
        to={href}
        className={cn(
          "text-slate-600 dark:text-slate-400 hover:text-slack-purple dark:hover:text-slack-purple transition-colors relative inline-block",
          "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
          isActive(href) && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
        )}
      >
        {name}
      </Link>
    </li>
  );
};

export default FooterLink;
