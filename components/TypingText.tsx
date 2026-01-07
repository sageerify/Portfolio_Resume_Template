
import React, { useState, useEffect } from 'react';

interface Props {
  text: string;
  speed?: number;
}

const TypingText: React.FC<Props> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="typing-cursor">
      {displayedText}
    </span>
  );
};

export default TypingText;
