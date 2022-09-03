import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <div>
      <motion.button
        className="bg-gray-700 hover:bg-gray-800 text-white font-bold md:py-4 md:px-12 rounded-full md:text-2xl"
        animate={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            yoyo: Infinity,
            duration: 0.3,
          },
        }}
      >
        Read More
      </motion.button>
    </div>
  );
};

export default Button;
