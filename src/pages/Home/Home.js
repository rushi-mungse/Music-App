import Features from "../Features/Features";
import Music from "../Music/Music";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={`${styles.home_wrapper} `}>
      <div className="container flex justify-between">
        <div className={`${styles.content}`}>
          <h1>
            <span>Experience The</span>
            Best Quality Music
          </h1>
          <p>
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            Suspendisse in leo non risus tincidunt lobortis.
          </p>
          <div className={styles.apps}>
            <span>Download now on iOS and Android</span>
            <div className={styles.stores}>
              <img src="/images/google-play.svg" alt="google-play" />
              <img src="/images/app-store.svg" alt="app-store" />
            </div>
          </div>
        </div>
        <div className={styles.creativity}>
          <img src="/images/phone.svg" alt="phone" />
        </div>
      </div>
      <Features />
      <Music />
    </div>
  );
};

export default Home;
