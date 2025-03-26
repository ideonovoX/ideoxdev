
import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import FadeIn from './FadeIn';

interface TextSliderProps {
  titles: string[];
  highlightColor?: string;
  className?: string;
}

const TextSlider = ({ 
  titles, 
  highlightColor = "text-slack-purple",
  className = "" 
}: TextSliderProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup auto-sliding effect
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Auto-advance logic if needed
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 40,
        }}
        className="w-full"
      >
        <CarouselContent>
          {titles.map((title, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <FadeIn>
                <span className={`${highlightColor} font-bold`}>{title}</span>
              </FadeIn>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TextSlider;
