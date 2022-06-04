import styles from "./Apps.module.css";
const Apps = () => {
  return (
    <div className={styles.apps}>
      <span>Download now on iOS and Android</span>
      <div className={styles.stores}>
        <img
          src="/images/google-play.svg"
          alt="google-play"
          draggable="false"
        />
        <img src="/images/app-store.svg" alt="app-store" draggable="false" />
      </div>
    </div>
  );
};

export default Apps;
