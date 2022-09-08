import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Timeline = () => {
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <h1 className="py-5 font-bold">Prizes</h1>
        <p className="py-20 pb-72 font-normal sm:leading-10 lg:leading-8 text-5xl lg:mx-52">
          To be announced soon....
        </p>
      </div>

      <div className="flex py-6 justify-between ">
        <Link to="/about-event">
          <Button content={"About Event"} />
        </Link>
        <Link to="/past-sponsors">
          <Button content={"Past Sponsors"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Timeline;
