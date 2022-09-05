import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";
import imgHolder from "../assets/sponsorships/allSponsors.png";

const buttonVarients = {
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

const Sponsors = () => {
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <h1 className=" py-5  md:font-bold lg:font-bold">Our Past Sponsors</h1>
        <div className="items-center">
          <img src={imgHolder} alt="default" className="lg:pl-30" />
        </div>
      </div>

      <div className="flex py-6 justify-between ">
        <Link to="/timeline-prizes">
          <Button content={"Prizes"} />
        </Link>
        <Link to="/how-to-register">
          <Button content={"How to Register"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Sponsors;
