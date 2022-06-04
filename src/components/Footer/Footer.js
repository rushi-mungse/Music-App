import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.{" "}
      </p>

      <hr />
      <div className={styles.bottom}>
        <span>Copyright © 2020-2021</span>
        <img src="./images/logo.svg" alt="logo" draggable="false" />
        <span>Muziq All Right Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
