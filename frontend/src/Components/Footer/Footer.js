/* eslint-disable react/jsx-no-target-blank */
import styles from "./Footer.module.css";
import CodechefLogo from "../../Images/CodechefLogo.png";
import Instagram from "../../Images/Instagram.png";
import Facebook from "../../Images/Facebook.png";
import Twitter from "../../Images/Twitter.png";
import Github from "../../Images/Github.png";
import Youtube from "../../Images/Youtube.png";
import Linkedin from "../../Images/Linkedin.png";
import Copyright from "../../Images/Copyright.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={styles.container}>
        <img src={CodechefLogo} alt="" />
        <div className={styles.social_container}>
          <h2>Socials</h2>
          <div className={styles.social_img}>
            <a href="https://facebook.com/codechefvit" target="_blank">
              <img src={Facebook} alt="" />
            </a>

            <a href="https://instagram/codechefvit" target="_blank">
              <img src={Instagram} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>

            <a href="https://twitter.com/codechefvit" target="_blank">
              <img src={Twitter} alt="" />
            </a>

            <a href="https://github.com/codechefvit" target="_blank">
              <img src={Github} alt="" />
            </a>

            <a href="https://youtube.com/codechefvit" target="_blank">
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.social_container}>
          <h2>Navigation</h2>
          <div className={styles.nav_container}>
            <ul>
              <li>
                <a href="#about">About</a>
                <a href="#timer">Timer</a>
                <a href="#speakers">Prizes</a>
                <a href="#faqs">FAQs</a>
                <a href="/">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black items-center w-[100%] text-center">
        <p className="text-white pb-4">
          © Copyright 2022 | CodeChef-VIT | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
