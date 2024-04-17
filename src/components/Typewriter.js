import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];

    if (currentIndex < word.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + word[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Reset currentIndex and currentText when typing is complete for the current word
      setCurrentIndex(0);
      setCurrentText('');

      // Switch to the next word after typing is complete for the current word
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }
  }, [currentIndex, delay, words, currentWordIndex]);

  return <span>{currentText}</span>;
};

export default Typewriter;
