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
      <div>
        <nav className={styles.navbar_container}>
          <img src={CookOff} alt="TechTalksLogo" />
          <div className={styles.navbar_list_container}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#speakers">Speakers</a>
              </li>
              <li className={styles.Watch_now}>
                <a href="/">Register Now!</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-row items-center h-[100vh] -translate-y-16">
        <div className={styles.container}>
          <div className={styles.content_container}>
            <div className={styles.title_heading_container}>
              <h1 className="translate-x-14">COOK OFF</h1>
              <p className="translate-x-14 font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div className="translate-x-14">
              <button className={styles.hero_button}>Register Now!</button>
            </div>

            {/*<button className={styles.hero_button1}>
              <img src={HeroBtn} className="w-8 mr-5" />
              Coding Related Selling Point 1
            </button>
            <button className={styles.hero_button3}>
              <img src={HeroBtn} className="w-8 mr-5" />
              Coding Related Selling Point 1
            </button>
            <button className={styles.hero_button2}>
              <img src={HeroBtn} className="w-8 mr-5" />
              Coding Related Selling Point 1
  </button>*/}
          </div>
          <div className="flex relative">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="h-[90vh] translate-y-7 translate-x-56 z-10"
            />
            <motion.img
              src={Hat1}
              className="hidden md:block lg:block w-64 z-30 -translate-x-96 -translate-y-44"
              animate={{
                x: [-220, -196],
                y: [-140, -160],
                rotate: [0, -30, 30, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              alt=""
            />
            <motion.img
              src={Hat2}
              className="hidden md:block lg:block w-64 z-30 -translate-x-[32rem] translate-y-52"
              animate={{
                x: [-600, -700],
                y: [140, 160],
                rotate: [0, 60, -60, 0],
                transition: {
                  duration: 2,
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
