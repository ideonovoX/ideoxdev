
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavControlsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLinkClick: () => void;
}

const MobileNavControls = ({ isOpen, toggleMenu, handleLinkClick }: MobileNavControlsProps) => {
  return (
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
  );
};

export default MobileNavControls;
