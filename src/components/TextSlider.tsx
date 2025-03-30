
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideContent {
  title: string;
  description: string;
}

interface TextSliderProps {
  slides: SlideContent[];
  interval?: number;
  className?: string;
}

const TextSlider: React.FC<TextSliderProps> = ({
  slides,
  interval = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const renderTitle = (title: string) => {
    // Apply multi-color gradient to all titles
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
        <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
    );
  };

  return (
    <div className={cn("relative overflow-hidden py-6", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center px-4"
        >
          {renderTitle(slides[currentIndex].title)}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            {slides[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-slack-purple w-6"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
