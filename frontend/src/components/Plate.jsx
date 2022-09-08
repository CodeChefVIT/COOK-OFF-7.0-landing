import React from "react";
import { motion } from "framer-motion";

import thali from "../assets/plate.svg";
import logo from "../assets/logo.svg";
import cookoff from "../assets/cookOff.svg";
import knife from "../assets/knife.svg";
import fork from "../assets/fork.svg";

const Plate = () => {
  return (
    <div className="overflow-x-hidden md:overflow-x-visible	lg:overflow-x-visible">
      <div className="md:py-[-5rem] ">
        <motion.img
          src="https://www.codechefvit.com/Images/codechef_logo_1.svg"
          alt="codechef"
          className="object-contain mx-auto sm:block md:hidden lg:hidden"
          animate={{
            rotate: [50, 0],
            opacity: [0, 0, 1],
            transition: {
              duration: 1,
            },
          }}
        />
        <div className="flex justify-between items-center">
          <div className="flex relative">
            <motion.img
              src={knife}
              alt="knife"
              className="w-4 translate-y-40  z-30 absolute left-[6.9rem] -top-[1.35rem] md:w-7 md:left-[11.5rem] md:-top-[5.5rem] lg:w-[3rem] lg:left-[15.55rem] lg:-top-[7.1rem]"
              animate={{
                rotate: [-45, 0],
                x: ["0", "-21rem"],
                y: ["10rem", "10rem"],
                transition: {
                  duration: 3,
                  repeatType: "reverse",
                },
              }}
            ></motion.img>
            <div className="flex justify-items-center relative px-3">
              <img
                src={thali}
                alt="thali"
                className="pt-40 -translate-y-10 w-52 z-10 md:w-96 lg:w-[32rem] md:pt-20 lg:pt-20 "
              />
              <motion.img
                src={logo}
                alt="thali"
                className="w-28 absolute z-20 bottom-20 left-[4.1rem] md:w-44 md:left-[7.5rem] md:top-[6.8rem] lg:w-[15rem] lg:left-[9.5rem] lg:top-[7.5rem]"
                animate={{
                  rotate: [50, 0],
                  opacity: [1, 0],
                  transition: {
                    duration: 5,
                  },
                }}
              />
              <motion.img
                src="https://www.codechefvit.com/Images/codechef_logo_1.svg"
                alt="codechef"
                className="hidden md:inline-block lg:inline-block w-12 absolute z-20 bottom-[10.2rem] left-[5.5rem] md:w-36 md:left-[8.2rem] md:top-[4.5rem] lg:w-[15rem] lg:left-[9rem] lg:top-[5.25rem]"
                animate={{
                  rotate: [-50, 0],
                  opacity: [0, 0, 1],
                  transition: {
                    duration: 5,
                  },
                }}
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
              />
              <motion.img
                src={cookoff}
                alt="cookoff"
                className="w-56 absolute z-20 bottom-[6.6rem] left-[0.4rem] md:w-96 md:left-[0.95rem] md:top-[13.5rem] lg:w-[30rem] lg:left-[1.7rem] lg:top-[18.8rem]"
                animate={{
                  rotate: [50, 0],
                  opacity: [0, 0, 1],
                  transition: {
                    duration: 5,
                  },
                }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -20,
                  right: 20,
                  bottom: 50,
                }}
              />
            </div>
            <motion.img
              src={fork}
              alt="fork"
              className="w-[1.7rem] translate-y-44 -rotate-[50deg] z-30 absolute right-[6.2rem] -top-10 md:w-[3rem] md:right-[10.8rem] md:-top-[6.4rem] lg:w-[5.05rem] lg:right-[14.5rem] lg:-top-[8rem]"
              animate={{
                rotate: [50, 0],
                x: ["0", "21rem"],
                y: ["11rem", "11rem"],
                transition: {
                  duration: 3,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plate;
