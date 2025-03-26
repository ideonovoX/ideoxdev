
import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import FadeIn from './FadeIn';

interface TextSliderProps {
  texts: string[];
  highlightColor?: string;
  className?: string;
  interval?: number;
}

const TextSlider = ({ 
  texts, 
  highlightColor = "text-slack-purple",
  className = "",
  interval = 3000
}: TextSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Setup auto-sliding effect
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="w-full">
        <FadeIn key={activeIndex} duration={300}>
          <span className={`${highlightColor} font-bold`}>{texts[activeIndex]}</span>
        </FadeIn>
      </div>
    </div>
  );
};

export default TextSlider;
