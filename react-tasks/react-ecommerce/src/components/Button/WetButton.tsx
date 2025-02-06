// WetButton.jsx
import { motion } from "framer-motion";

type WetButton = {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const WetButton = ({
  children,
  className,
  color = "bg-blue-400",
  onClick,
  disabled = false,
}: WetButton) => {
  // Drip animation variants
  const dripVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  // Drip elements configuration
  const drips = [
    { width: "w-2", left: "left-1/4" },
    { width: "w-1.5", left: "left-1/3" },
    { width: "w-2", left: "left-1/2" },
    { width: "w-1.5", left: "left-2/3" },
    { width: "w-2", left: "left-3/4" },
  ];

  return (
    <div className="relative w-fit ">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative z-10
          px-6 py-2 
          rounded-md 
          ${color} 
          text-white 
          font-medium 
          shadow-lg 
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"} 
          ${className}
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </motion.button>

      {/* Drips Container */}
      <div className="absolute -bottom-4 left-0 right-0 h-4 overflow-hidden">
        {drips.map((drip, index) => (
          <motion.div
            key={index}
            variants={dripVariants}
            initial="initial"
            animate="animate"
            className={`
              absolute 
              ${drip.width} 
              ${drip.left} 
              h-4 
              ${color} 
              rounded-b-full
              transform 
              -translate-x-1/2
            `}
            style={{
              transition: "all 0.3s ease",
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
      
      {/* Paint Dots */}
      <motion.div
        className={`
          absolute 
          -bottom-6 
          left-1/4 
          w-1.5 
          h-1.5 
          rounded-full 
          ${color}
        `}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className={`
          absolute 
          -bottom-8 
          left-2/3 
          w-1.5 
          h-1.5 
          rounded-full 
          ${color}
        `}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
};

export default WetButton;