import Apps from "../../components/Apps/Apps";
import MusicModel from "../../components/MusicModel/MusicModel";
import styles from "./AppStore.module.css";
import { Link } from "react-router-dom";

const AppStore = () => {
  return (
    <MusicModel text={"Download The Best Music"} heading="App Now!">
      <div className={styles.content}>
        <p>
          Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat varius.
        </p>
        <Apps />
        <ul className={`flex items-center jusfify-center ${styles.routers}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/preformer">Preformer</Link>
          </li>
          <li>
            <Link to="/event-schedule">Event Schedule</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a href="/">
              <img
                src="./images/facebook.svg"
                alt="facebook"
                draggable="false"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./images/twitter.svg" alt="twitter" draggable="false" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./images/youtube.svg" alt="youtube" draggable="false" />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="./images/linkedin.svg"
                alt="linkedin"
                draggable="false"
              />
            </a>
          </li>
        </ul>
      </div>
    </MusicModel>
  );
};

export default AppStore;
