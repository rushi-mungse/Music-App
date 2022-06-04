import Apps from "../../components/Apps/Apps";
import Footer from "../../components/Footer/Footer";
import AppStore from "../AppStore/AppStore";
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
          <Apps />
        </div>
        <div className={styles.creativity}>
          <img src="/images/phone.svg" alt="phone" draggable="false" />
        </div>
      </div>
      <Features />
      <Music />
      <AppStore />
      <Footer />
    </div>
  );
};

export default Home;
