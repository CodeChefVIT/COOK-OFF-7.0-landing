import styles from "./Prizes.module.css";

import Gold from "./goldcup.svg";
import Silver from "./silvercup.svg";
import Bronze from "./bronzecup.svg";

const Speakers = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container} id="speakers">
        <h1 className="font-mudclaw text-center text-6xl">Prizes</h1>

        <div className="flex flex-col items-center">
          <img src={Gold} alt="gold" />
          <p className="pt-10 font-mudclaw text-3xl">Prize 40,000</p>

          <div className="flex flex-col w-[40vw] pt-12 justify-between md:flex-row lg:flex-row">
            <div className="flex flex-col items-center">
              <img src={Silver} alt="gold" />
              <p className="pt-10 font-mudclaw text-2xl">Prize 25,000</p>
            </div>
            <div className="flex flex-col items-center pt-10 lg:pt-0 md:pt-0">
              <img src={Bronze} alt="gold" />
              <p className="pt-10 font-mudclaw text-2xl ">Prize 15,000</p>
            </div>
          </div>
          <div className="flex flex-col justify-between text-center w-[50vw] pt-20 md:flex-row lg:flex-row">
            <div>
              <p className="pt-10 font-mudclaw text-4xl text-blue-800">
                Best Freshers
              </p>
              <p className="pt-5 font-mudclaw text-2xl">Prize 10,000</p>
            </div>
            <div>
              <p className="pt-10 font-mudclaw text-4xl text-blue-800">
                Best Girl Coder
              </p>
              <p className="pt-5 font-mudclaw text-2xl">Prize 10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
