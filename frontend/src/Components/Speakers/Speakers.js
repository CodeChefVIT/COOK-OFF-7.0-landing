import styles from "./Speakers.module.css";

import SampleImage1 from "../../Images/SampleImage1.png";
import SampleImage2 from "../../Images/SampleImage2.png";
import SampleImage3 from "../../Images/SampleImage3.png";
import SampleImage4 from "../../Images/SampleImage4.png";

import { useState } from "react";

const Speakers = () => {
  // const [images, setImages] = useState(SampleImage1);
  const [desc, setDesc] = useState(
    "dead;f my mom went to get me food but she has been gone for three hours. If she's not home we will be stuck with only frozen pizza and French fries. She's making me really upset."
  );
  const [title, setTitle] = useState("Queen Elizabeth");
  // console.log(images);

  return (
    <div className={styles.main_container} id="speakers">
      <div className={styles.banner_bg}></div>
      <div className={styles.container}>
        <div className={styles.container_row_1}>
          <div className={styles.box_main_container}>
            <div className={styles.box_main_top}>
              <div className={styles.box_main_green_button}></div>
              <div className={styles.box_main_red_button}></div>
              <div className={styles.box_main_yellow_button}></div>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
          <div
            className={styles.box}
            onClick={() => (
              setTitle("Queen Elizabeth"),
              setDesc(
                "dead;f my mom went to get me food but she has been gone for three hours. If she's not home we will be stuck with only frozen pizza and French fries. She's making me really upset."
              )
            )}
          >
            <img src={SampleImage1} alt="" />
          </div>
          <div
            className={styles.box}
            onClick={() => (
              setTitle("Charles King"),
              setDesc("Boht achha padhta hai, editorial give some content :(")
            )}
          >
            <img src={SampleImage2} alt="" />
          </div>
        </div>
        <div className={styles.container_row_2}>
          <div
            className={styles.box}
            onClick={() => (
              setTitle("Abhishek Agarwal"),
              setDesc("Boht achha padhta hai, editorial give some content :(")
            )}
          >
            <img src={SampleImage3} alt="" />
          </div>
          <div
            className={styles.box}
            onClick={() => (
              setTitle("African Prince Dhaval"),
              setDesc("Boht achha padhta hai, editorial give some content :(")
            )}
          >
            <img src={SampleImage4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
