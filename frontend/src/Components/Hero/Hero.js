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
        <img src={CookOff} alt="CookOffLogo" />
        <div className={styles.navbar_list_container}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#speakers">Prizes</a>
            </li>
            <li className={styles.Watch_now}>
              <a href="/">Register Now!</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-row items-center h-[100vh] z-20">
        <div className={styles.container}>
          <div className={styles.content_container}>
            <div className={styles.title_heading_container}>
              <h1 className="translate-x-14 -translate-y-14">COOK OFF</h1>
              <p className="translate-x-14 font-mono -translate-y-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="translate-x-14 -translate-y-14">
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
              className="h-[90vh] -translate-y-9 translate-x-56 z-10"
            />
            <motion.img
              src={Hat1}
              className="hidden md:block lg:block w-64 z-30 h-96 -translate-x-96 -translate-y-44"
              animate={{
                x: [-220, -196],
                y: [300, -50, 300],
                rotate: [0, -30, 30, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              alt=""
            />
            <motion.img
              src={Hat2}
              className="hidden md:block lg:block w-64 h-96 z-30 -translate-x-[32rem] translate-y-52"
              animate={{
                x: [-700, -700],
                y: [-50, 300, -50],
                rotate: [0, 30, -30, 0],
                transition: {
                  duration: 3,
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
