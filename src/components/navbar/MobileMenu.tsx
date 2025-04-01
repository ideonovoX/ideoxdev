
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
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
        "flex flex-col justify-start items-center px-6 overflow-y-auto",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
      style={{ transition: "opacity 0.3s ease, visibility 0.3s ease" }}
    >
      <div className="space-y-6 w-full max-w-md py-20">
        {/* Only one close button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
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
  );
};

export default MobileMenu;
