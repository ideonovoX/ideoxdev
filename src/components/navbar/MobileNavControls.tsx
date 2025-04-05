
import { Menu } from 'lucide-react';

interface MobileNavControlsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLinkClick: () => void;
}

const MobileNavControls = ({ isOpen, toggleMenu }: MobileNavControlsProps) => {
  return (
    <div className="flex md:hidden items-center">
      <button
        onClick={toggleMenu}
        className="text-slate-800 dark:text-white p-2 z-50"
        aria-label="Toggle Menu"
      >
        {!isOpen && <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileNavControls;
