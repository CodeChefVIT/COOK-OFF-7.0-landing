import styles from "./Prizes.module.css";

const Speakers = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container} id="speakers">
        <h1 className="font-mudclaw text-center text-6xl">Prizes</h1>
        <p className="text-2xl lg:text-5xl font-mono">Chance to win 1 lakh +</p>
      </div>
    </div>
  );
};

export default Speakers;
