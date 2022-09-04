import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Plate from "../components/Plate";
import Button from "../components/Button";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Plate />
      <Link to="/about-event">
        <Button content={"Read More"} />
      </Link>
    </motion.div>
  );
};

export default Home;
