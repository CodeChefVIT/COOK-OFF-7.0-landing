import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Example from "./../components/Accordian";

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

const HowReg = () => {
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <div className="flex-col flex md:flex-row lg:flex-row items-center">
          <a href="/">
            <img
              src="https://www.codechefvit.com/Images/codechef_logo_1.svg"
              alt="codechef"
              className="block"
            />
          </a>
          <h1 className="py-5 font-bold text-[#8CB411] font-mudclaw lg:ml-32">
            How to register and FAQs
          </h1>
        </div>
        <Example />
      </div>

      <div className="flex py-6 justify-between ">
        <Link to="/past-sponsors">
          <Button content={"Past Sponsors"} />
        </Link>
        <Link to="/contact-us">
          <Button content={"Contact Us"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default HowReg;
