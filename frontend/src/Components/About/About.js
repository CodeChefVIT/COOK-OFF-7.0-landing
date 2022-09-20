import styles from "./About.module.css";
import AboutImage from "../../Images/About.svg";

const About = () => {
  return (
    <div className="py-12">
      <div className={styles.container} id="about">
        <div className={styles.title_heading_container}>
          <h2 className="font-mabry text-3xl">What's Cookoff?</h2>
          <p className="font-mabry">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
