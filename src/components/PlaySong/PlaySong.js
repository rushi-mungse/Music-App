import styles from "./PlaySong.module.css";
const PlaySong = () => {
  return (
    <div className={styles.palysong}>
      <div className={styles.upper_content}>
        <div className={styles.img}>
          <img src="./images/song-artist.svg" alt="artist" draggable="false" />
        </div>
        <div className={styles.info}>
          <h5>Tristam_Bone_Dry</h5>
          <span>Unknown Artist</span>
        </div>
      </div>
      <div className={styles.lower_content}>
        <div className={styles.music_string}>
          <span>0.00</span>
          <img src="./images/music-string.svg" alt="string" draggable="false" />
          <span>8.00</span>
        </div>
        <div className={styles.play}>
          <div className={styles.back_button}>
            <img
              src="./images/back-button.svg"
              alt="back-button"
              draggable="false"
            />
          </div>
          <div className={styles.play_button}>
            <img src="./images/play-song.svg" alt="play" draggable="false" />
          </div>
          <div className={styles.forward_button}>
            <img
              src="./images/forward-button.svg"
              alt="forward"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaySong;
