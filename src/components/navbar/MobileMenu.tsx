
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Home, User, Phone, FileText, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  handleLinkClick: () => void;
}

const MobileMenu = ({ isOpen, onClose, handleLinkClick }: MobileMenuProps) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      ref={mobileMenuRef}
      className={cn(
        "md:hidden fixed inset-0 z-40",
        "bg-gradient-to-br from-purple-50/95 via-blue-50/95 to-green-50/95 dark:from-purple-900/90 dark:via-blue-900/90 dark:to-green-900/90 backdrop-blur-xl",
        "flex flex-col justify-start items-center px-6",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      style={{ transition: "opacity 0.3s ease, visibility 0.3s ease" }}
    >
      <div className="w-full max-w-md py-6" style="background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));">
        <div className="flex items-center justify-between w-full mb-6">
          <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Zap className="h-8 w-8 text-slack-purple" />
            <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 text-slate-700 dark:text-white hover:bg-white/30"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-3">
          <Link 
            to="/"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <Home className="mr-3 h-5 w-5" />
            <span className="font-medium">Home</span>
          </Link>
          
          <Link 
            to="/solutions"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.45 16.28L9.59998 15.42" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3945 10.7H13.4035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Solutions</span>
          </Link>
          
          <Link 
            to="/pricing"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">Pricing</span>
          </Link>
          
          <Link 
            to="/about"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <User className="mr-3 h-5 w-5" />
            <span className="font-medium">About IdeoxAI</span>
          </Link>
          
          <Link 
            to="/contact"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <Phone className="mr-3 h-5 w-5" />
            <span className="font-medium">Contact Us</span>
          </Link>
          
          <Link 
            to="/blog"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <FileText className="mr-3 h-5 w-5" />
            <span className="font-medium">Blog</span>
          </Link>
          
          <Link 
            to="/security"
            className="flex items-center py-3 px-4 text-slate-700 hover:text-slack-purple dark:text-white/80 dark:hover:text-white rounded-md hover:bg-white/30"
            onClick={handleLinkClick}
          >
            <ShieldCheck className="mr-3 h-5 w-5" />
            <span className="font-medium">Data Security</span>
          </Link>
        </div>
        
        <div className="pt-6">
          <Button className="w-full" asChild onClick={handleLinkClick}>
            <Link to="/get-started-form">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
