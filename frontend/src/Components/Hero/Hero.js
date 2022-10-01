import styles from "./Hero.module.css";
import CookOff from "../../Images/CookOff.svg";
import Hat1 from "../../Images/hat1.svg";
import Hat2 from "../../Images/hat2.svg";
import HeroImage from "../../Images/Hero.svg";

import { motion } from "framer-motion";

// import HeroBtn from "../../Images/HeroBtn.svg";

const Landing = () => {
  return (
    <div className={styles.main_container} id="Hero">
      <nav className={styles.navbar_container}>
        <img src={CookOff} alt="CookOffLogo" className="h-[100%]" />
        <div className={styles.navbar_list_container}>
          <ul className="">
            <li className="hover:bg-[#E486A1]">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-[#E486A1] ">
              <a href="#speakers">Prizes</a>
            </li>
            <li className="hover:bg-[#E486A1] cursor-pointer">
              <a href="https://events.vit.ac.in/events/gravitas2022/">
                Register Now!
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-row items-center h-[100vh] z-20">
        <div className={styles.container}>
          <div className={styles.content_container}>
            <div className={styles.title_heading_container}>
              <h1 className="-translate-y-14">COOK OFF</h1>
              <p className="font-mono -translate-y-14">
                Roll your sleeves up and get ready to code! CodeChef VIT brings
                you Cook Off 7.0, our flagship competitive coding event, get
                ready for the competitive coding event of the year!
              </p>
            </div>
            <div className="-translate-y-14">
              <a href="https://events.vit.ac.in/events/gravitas2022/">
                <button className={styles.hero_button}>Register Now!</button>
              </a>
            </div>
          </div>
          <div className="flex relative">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="h-[90vh] -translate-y-9 translate-x-32 z-10 hidden lg:block"
            />
            <motion.img
              src={Hat1}
              className="hidden md:hidden lg:block w-64 z-30 h-96 -translate-x-96 -translate-y-44"
              animate={{
                x: [-260, -280],
                y: [300, -50, 300],
                rotate: [0, -30, 30, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              alt=""
            />
            <motion.img
              src={Hat2}
              className="hidden md:hidden lg:block w-64 h-96 z-30 -translate-x-[32rem] translate-y-52"
              animate={{
                x: [-760, -780],
                y: [-50, 300, -50],
                rotate: [0, 30, 0, -30],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
