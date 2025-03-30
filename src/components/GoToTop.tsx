
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isVisible && (
        <Button 
          onClick={scrollToTop} 
          size="icon"
          className="rounded-full bg-slack-purple hover:bg-slack-purple/90 text-white shadow-strong"
          aria-label="Go to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default GoToTop;
