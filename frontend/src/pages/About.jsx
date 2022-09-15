import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpeg";

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

const About = () => {
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
          <h1 className="py-5 font-bold text-[#8CB411] font-mudclaw lg:ml-64">
            About The Event
          </h1>
        </div>
        <p className="py-10 font-normal sm:leading-10 lg:leading-10 lg:text-xl font-ibm">
          Ever wondered what it takes to be a good programmer? Here's a golden
          opportunity for you to find out for yourself and apply them in real
          time. CodeChef-VIT brings to you Cook-Off 7.0: an intense competitive
          coding event that will leave you hooked to the world of problem
          solving and algorithms.
        </p>
        <div className="py-8 flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <img
            src={about1}
            alt="default"
            className="pb-8 md:pr-5 md:w-[80%] lg:pb-0"
          />
          <img
            src={about2}
            alt="default"
            className="pb-8 md:pr-5 md:w-[80%] lg:pb-0"
          />
          <img
            src={about3}
            alt="default"
            className="md:w-[80%] lg:pb-0 lg:block"
          />
        </div>
      </div>

      <div className="flex py-6 justify-between">
        <Link to="/">
          <Button content={"Home"} />
        </Link>
        <Link to="/timeline-prizes">
          <Button content={"Prizes"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
