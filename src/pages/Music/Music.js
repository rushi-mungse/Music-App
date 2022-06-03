import PlaySong from "../../components/PlaySong/PlaySong";
import styles from "./Music.module.css";
const Music = () => {
  return (
    <div className={styles.music_wrapper}>
      <div className={`${styles.music}`}>
        <div className={`container ${styles.music_container}`}>
          <div className={styles.creativity}>
            <img
              src="/images/phone-with-song.svg"
              alt="phone"
              draggable="false"
            />
          </div>
          <div className={styles.songs}>
            <div className={styles.search_bar}>
              <input type="text" placeholder="Enter keyword or URL" />
              <div className={styles.search}>
                <img src="./images/search.svg" alt="search" draggable="false" />
              </div>
            </div>
            <img
              src="./images/wave.svg"
              alt="wave"
              draggable="false"
              className={styles.wave}
            />
            <div className={styles.heading}>
              <span> Search Music by</span>
              <h1>Name or Direct URL</h1>
            </div>
            <p>
              Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
              Vestibulum ullamcorper volutpat varius.{" "}
            </p>
            <div className={styles.palysong}>
              <PlaySong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
