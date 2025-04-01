
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Import extracted components
import NavLogo from './navbar/NavLogo';
import DesktopNavigation from './navbar/DesktopNavigation';
import MobileNavControls from './navbar/MobileNavControls';
import MobileMenu from './navbar/MobileMenu';
import useScrollEffect from './navbar/useScrollEffect';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <NavLogo handleLinkClick={handleLinkClick} />
          <DesktopNavigation handleLinkClick={handleLinkClick} />
          <MobileNavControls 
            isOpen={isOpen} 
            toggleMenu={toggleMenu} 
            handleLinkClick={handleLinkClick} 
          />
        </div>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          handleLinkClick={handleLinkClick} 
        />
      </div>
    </header>
  );
};

export default Navbar;
