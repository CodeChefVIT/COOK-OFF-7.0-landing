import styles from "./Speakers.module.css";

const Speakers = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.banner_bg}></div>
      <div className={styles.container} id="speakers">
        <h1 className="font-mudclaw text-center text-6xl">Prizes</h1>
        <p>To be announced soon....</p>
      </div>
    </div>
  );
};

export default Speakers;
