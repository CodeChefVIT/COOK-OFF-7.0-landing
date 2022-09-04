import React from "react";
import { motion } from "framer-motion";

const buttonVarients = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Button = (props) => {
  return (
    <div>
      <motion.button
        className="bg-gray-700 hover:bg-gray-800 text-white font-bold md:py-4 md:px-12 rounded-full md:text-2xl"
        variants={buttonVarients}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {props.content}
      </motion.button>
    </div>
  );
};

export default Button;
