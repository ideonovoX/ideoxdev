
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavControlsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLinkClick: () => void;
}

const MobileNavControls = ({ isOpen, toggleMenu }: MobileNavControlsProps) => {
  return (
    <div className="flex md:hidden items-center space-x-4">
      <Button size="sm" asChild className="mr-1">
        <a href="/get-started-form">Get Started</a>
      </Button>
      <button
        onClick={toggleMenu}
        className="text-slack-black dark:text-white p-2 z-50"
        aria-label="Toggle Menu"
      >
        {!isOpen && <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileNavControls;
