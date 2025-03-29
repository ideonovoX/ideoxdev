
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import useTypewriter from '@/hooks/useTypewriter';

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
  interval = 5000, // Increased interval to give typing animation more time
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { text, isTyping } = useTypewriter(slides[currentIndex].title, 50, 500);

  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
  
      return () => clearTimeout(timer);
    }
  }, [slides.length, interval, currentIndex, isTyping]);

  const renderTitle = () => {
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        <span className="bg-gradient-to-r from-slack-purple via-slack-blue to-slack-green bg-clip-text text-transparent">
          {text}
          {isTyping && <span className="animate-pulse">|</span>}
        </span>
      </h1>
    );
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center"
        >
          {renderTitle()}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {slides[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
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
