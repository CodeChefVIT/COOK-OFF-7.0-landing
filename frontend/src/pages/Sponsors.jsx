import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";
import Default from "../assets/Default.svg";

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
        <h1 className="py-3 pb-32 font-bold">Our Past Sponsors</h1>
        <div className="grid place-items-center animate-scroll hover:pause">
          <div className="flex w-[calc(19rem*10)]">
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>

            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
            <div className="slide flex px-4 py-4 items-center">
              <img src={Default} alt="default" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-32 py-6 justify-between ">
        <Link to="/timeline-prizes">
          <Button content={"Timeline"} />
        </Link>
        <Link to="/how-to-register">
          <Button content={"How To Register & FAQs"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Sponsors;
