import styles from "./Speakers.module.css";
import Banner from "../../Images/SpeakersBanner.png";
import SampleImage1 from "../../Images/Speaker1.png";
import SampleImage2 from "../../Images/Speaker2.png";
import SampleImage3 from "../../Images/Speaker3.png";
import SampleImage4 from "../../Images/Speaker4.png";
import Linkedin from "../../Images/Linkedin.png";
import Link from "../../Images/Link.svg";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Speakers = () => {
  // const [images, setImages] = useState(SampleImage1);

  // const navigate = useNavigate();

  const [desc, setDesc] = useState(
    "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products."
  );
  const [title, setTitle] = useState("Akhil Sharma");
  const [url, setUrl] = useState("https://www.linkedin.com/in/akhilsails/");
  // console.log(images);

  return (
    <div className={styles.main_container} id="speakers">
      <div className={styles.banner_bg}></div>
      <div className={styles.container}>
        <h1>Speaker</h1>
        <div className={styles.container_row_1}>
          <div className={styles.box_main_container}>
            <div className={styles.box_main_top}>
              <div className={styles.box_main_green_button}></div>
              <div className={styles.box_main_red_button}></div>
              <div className={styles.box_main_yellow_button}></div>
            </div>
            <div className={styles.title_link_image}>
              <h1>{title}</h1>
              <a href={url} target="_blank">
                <img src={Link} />
              </a>
            </div>

            <p>{desc}</p>
          </div>
          <div
            className={styles.box}
            style={{ boxShadow: "8px 8px 0px #675943" }}
            onClick={() => (
              setTitle("Akhil Sharma"),
              setDesc(
                "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products."
              ),
              setUrl("https://www.linkedin.com/in/akhilsails/")
            )}
          >
            <img src={SampleImage1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
