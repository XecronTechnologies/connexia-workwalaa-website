import { motion } from "framer-motion";

interface GradientButtonProps {
  text: string;
  href?: string;
  type?: "submit";
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, href, type }) => {
  if (!href && !type) return null
  return (
    <motion.a
      href={href}
       
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
     <button type={type} className="w-full h-full">
      {text}
        </button>
    </motion.a>
  );
};

export default GradientButton;
