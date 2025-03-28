import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-slack-purple" />
              <span className="text-xl font-bold text-slack-black dark:text-white">IdeoxAI</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {['Features', 'Solutions', 'Pricing', 'Resources', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className={cn(
                  "text-slack-black dark:text-white font-medium transition-colors duration-200 relative",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-slack-purple after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  isActive(`/${item.toLowerCase()}`) && "after:scale-x-100 text-slack-purple dark:text-slack-purple"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-slack-black dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div 
          className={cn(
            "md:hidden fixed inset-0 transition-transform duration-300 ease-in-out z-40",
            "bg-gradient-to-br from-[#1A1F2C] via-[#2A2A3A] to-[#3A3A4A] backdrop-blur-xl",
            "flex flex-col justify-center items-center space-y-6 px-6",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="space-y-6 w-full max-w-md">
            {['Features', 'Solutions', 'Pricing', 'Resources', 'Contact'].map((item, index) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className={cn(
                  "block text-center text-2xl font-medium text-white/80 hover:text-white transition-all duration-300 relative",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive(`/${item.toLowerCase()}`) && "text-white after:scale-x-100"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
