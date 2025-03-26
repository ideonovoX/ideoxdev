
import React from 'react';
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
