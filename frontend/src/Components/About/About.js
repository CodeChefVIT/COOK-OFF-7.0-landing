import styles from "./About.module.css";
import AboutImage from "../../Images/About.svg";

const About = () => {
  return (
    <div className="py-12">
      <div className={styles.container} id="about">
        <div className={styles.title_heading_container}>
          <h2 className="font-mabry text-3xl">What's Cookoff?</h2>
          <p className="font-mabry">
            Cook off is CodeChef VIT’s flagship competitive coding event that
            tests the coding skills of tech enthusiasts across the country. The
            event provides a platform for participants to develop their
            competitive coding skills and test their abilities. Cook Off 7.0
            will be the seventh edition through which we hope to broaden the
            horizons of the participants.
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
