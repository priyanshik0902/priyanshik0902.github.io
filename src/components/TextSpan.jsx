import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TextSpan = ({ children }) => {
  useEffect(() => {
    const spans = document.querySelectorAll('.rubber-band');
    spans.forEach((span, index) => {
      span.style.animation = `rubberBand 2.5s ${index * 0.1}s infinite alternate`;
    });
  }, []);

  return (
    <motion.span className="rubber-band">
      {children.split('').map((letter, index) => (
        <div key={index} className="inline-block border border-white p-1">
          {letter}
        </div>
      ))}
    </motion.span>
  );
};

export default TextSpan;
