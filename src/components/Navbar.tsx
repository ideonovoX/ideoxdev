
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled ? "py-2 glass-effect shadow-soft" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-slack-purple" />
            <span className="text-xl font-bold text-slack-black dark:text-white">AutomateAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="text-slack-black dark:text-white hover:text-slack-blue dark:hover:text-slack-blue font-medium transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-slack-black dark:text-white">
                Log in
              </Button>
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slack-black dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden fixed inset-0 bg-white dark:bg-slack-black top-16 transition-transform duration-300 ease-in-out z-40",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col p-6 space-y-6">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item, index) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className={`text-slack-black dark:text-white text-lg font-medium animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="ghost" className="text-slack-black dark:text-white">
                Log in
              </Button>
              <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
