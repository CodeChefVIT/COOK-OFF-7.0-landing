import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      className="mb-10 bg-[#B6EC13] hover:bg-[#a4ec13a3] text-black font-bold md:py-4 md:px-12 rounded-full md:text-2xl font-mudclaw "
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {props.content}
    </motion.button>
  );
};

export default Button;
