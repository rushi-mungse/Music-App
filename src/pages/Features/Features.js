import Feature from "../../components/Feature/Feature";
import styles from "./Features.module.css";
const Features = () => {
  return (
    <div className={styles.features_wrapper}>
      <div className={styles.bg}>
        <div
          className={`container flex items-center justify-center ${styles.features}`}
        >
          <div className={styles.heading}>
            <img src="/images/wave.svg" alt="wave" />
            <span>An Amazing App Can Change Your Daily Life</span>
            <h1>Music Experience</h1>
          </div>
          <div className={styles.features_container}>
            <Feature
              img={"mic"}
              heading="For Live Music"
              para={
                "Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus. Suspendisse."
              }
              link="/"
            />
            <Feature
              img={"music"}
              heading="For Daily Music"
              para={
                "Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque libero, sit amet laoreet lorem."
              }
              link="/"
            />
            <Feature
              img={"artist"}
              heading="For Artists"
              para={
                "Cras ullamcorper nisi accumsan, porta nulla nec, suscipit nibh. Nullam bibendum, diam eu vestibulum imperdiet"
              }
              link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
