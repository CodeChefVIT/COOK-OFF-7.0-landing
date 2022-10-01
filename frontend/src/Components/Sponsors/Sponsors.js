import styles from "./Sponsors.module.css";
import Image from "./../../Images/Image.jpeg";
import Image2 from "./../../AmantyaLogo.jpg";

const Sponsors = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container} id="speakers">
        <h1 className="font-mudclaw text-center text-6xl text-white">
          Sponsors
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <img
            src={Image}
            alt=""
            className="h-[10rem] md:mr-32 lg:mr-44 rounded-2xl mb-16 md:mb-0 lg:mb-0"
          />
          <img src={Image2} alt="" className="h-[20rem] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
