
import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50, delayAfterComplete: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setIndex(0);
    setIsTyping(true);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      
      // Optional: add delay before calling the completion callback
      if (delayAfterComplete > 0) {
        const completionTimeout = setTimeout(() => {
          // Ready for next action
        }, delayAfterComplete);
        
        return () => clearTimeout(completionTimeout);
      }
    }
  }, [index, text, speed, delayAfterComplete]);

  return { text: displayText, isTyping, completed: index >= text.length };
};

export default useTypewriter;
