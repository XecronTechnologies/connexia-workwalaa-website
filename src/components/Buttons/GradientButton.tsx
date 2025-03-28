import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface GradientButtonProps {
  text: string;
  href?: string;
  type?: "submit";
  onClick?: () => void; // Add an optional onClick prop
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, href, type, onClick, disabled }) => {
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (href) {
      e.preventDefault(); // Prevent default <a> behavior if href is present.
      navigate(href);
    } else if (type === "submit") {

      
    } else if (onClick) {
      onClick(); // Call the passed onClick function
    }
  };

  if (href || type || onClick) {
    return (
      <motion.button
        disabled={disabled}
        onClick={handleButtonClick}
        type={type}
        className={`bg-gradient-to-r py-3 px-6 rounded-md font-semibold text-white shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 inline-block`}
        style={{ background: `linear-gradient(135deg, #ff6400, #f99e00)`, pointerEvents: 'auto' }}
        whileHover={{
          scale: 1,
          boxShadow: "0 8px 20px rgba(255, 100, 0, 0.2)",
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0 4px 10px rgba(255, 100, 0, 0.4)",
        }}
      >
        {text}
      </motion.button>
    );
  } else {
    return null;
  }
};

export default GradientButton;