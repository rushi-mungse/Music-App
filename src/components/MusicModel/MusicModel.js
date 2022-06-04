import styles from "./MusicModel.module.css";

const MusicModel = ({ children, text, heading }) => {
  return (
    <div className={styles.features_wrapper}>
      <div className={styles.bg}>
        <div
          className={`container flex items-center justify-center ${styles.features}`}
        >
          <div className={styles.heading}>
            <img src="/images/wave.svg" alt="wave" draggable="false" />
            <span>{text}</span>
            <h1>{heading}</h1>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MusicModel;
