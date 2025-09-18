import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  sentences: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterText = ({ 
  sentences, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = ""
}: TypewriterTextProps) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to next sentence
          setIsDeleting(false);
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      } else {
        // Typing characters
        if (currentText.length < currentSentence.length) {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        } else {
          // Sentence complete, pause before deleting
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentSentenceIndex, sentences, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={`relative ${className}`}>
      <div className="text-left">
        <span ref={textRef} className="font-bold">
          {currentText}
          <motion.span
            className="font-bold inline-block ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            |
          </motion.span>
        </span>
      </div>
    </div>
  );
};

export default TypewriterText;