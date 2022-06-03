import { Link } from "react-router-dom";
import styles from "./Feature.module.css";
const Feature = ({ img, heading, para, link }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.img}>
        <img src={`/images/${img}.svg`} alt="mic" draggable="false" />
      </div>
      <h4>{heading}</h4>
      <p>{para}</p>
      <Link to={`${link}`}>Learn More</Link>
    </div>
  );
};

export default Feature;
