import styles from "./Hero.module.css";
import CookOff from "../../Images/CookOff.svg";
import HeroImage from "../../Images/Hero.svg";

// import HeroBtn from "../../Images/HeroBtn.svg";

const Landing = () => {
  return (
    <div className={styles.main_container} id="Hero">
      <div>
        <nav className={styles.navbar_container}>
          <img src={CookOff} alt="CookOff" />
          <div className={styles.navbar_list_container}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#speakers">FAQs</a>
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
              <h1>COOK OFF</h1>
              <p className="font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <button className={styles.hero_button}>Register Now!</button>

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
          <img src={HeroImage} alt="HeroImage" className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
