import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";

import Logo from "./../assets/images/mainlogo.png";

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
        <h1 className="py-5 font-bold">Got Questions? Get in touch</h1>
        <div className="flex flex-col md:flex-row">
          <div className="py-12">
            <img src={Logo} alt="codechefLogo" className="w-52 inline pb-5" />
            <p className="text-2xl max-w-xl text-start">
              Cook off 6.0 will test your speed, ability and knowledge. You will
              also get a chance to compete with some of the best coders on a
              global platform.
            </p>
          </div>
          <div className="py-12">
            <h1 className="py-5 font-bold">Contact</h1>
            <p className="text-2xl">Phone: 7014531554</p>
            <p className="text-2xl">Email: codechefvit@gmail.com</p>
          </div>
          <div className="py-12">
            <h1 className="py-5 font-bold">Follow Us</h1>
            <p className="text-2xl"></p>
          </div>
        </div>
      </div>

      <div className="flex py-6 justify-between ">
        <Link to="/how-to-register">
          <Button content={"How to register and FAQs"} />
        </Link>
        <Link to="/">
          <Button content={"Home"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default HowReg;
