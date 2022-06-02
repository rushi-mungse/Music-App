import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.nav_wrapper}>
      <nav className={`container flex items-center justify-between`}>
        <div className={styles.branding}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
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
        <div className={styles.btns}>
          <button className={`btn ${styles.btn_frist}`}>Sing Up</button>
          <button className={`btn ${styles.btn_second}`}>Log In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
